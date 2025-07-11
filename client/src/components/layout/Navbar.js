import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
const Navbar = ({ auth: {isAuthenticated, loading}, logout}) => {

  const authLinks = (
  <ul>
    <li>
      <Link to="/posts">
      <i className="fas fa-sticky-note"></i>{' '}
      <span className='hide-sm'>Posts</span>
      </Link>
    </li>
    <li>
      <Link to="/userprofiles">
      <i className="fas fa-users"></i>{' '}
      <span className='hide-sm'>Users</span>
      </Link>
    </li>
    <li>
      <Link to="/organizationprofiles">
      <i className="fas fa-globe"></i>{' '}
      <span className='hide-sm'>Organizations</span>
      </Link>
    </li>
    <li><Link to="/leaderboard">
    <i className="fas fa-sort-amount-up"></i>{' '}
    <span className='hide-sm'>Leaderboard</span></Link>
    </li>
    <li><Link to="/dashboard">
      <i className='fas fa-user'></i>{' '}
      <span className='hide-sm'>Dashboard</span></Link>
    </li>
    <li>
      <Link to="/" onClick={logout}>
        <i className='fas fa-sign-out-alt'></i>{' '}
        <span className="hide-sm">Logout</span>
      </Link>
    </li>
   
  </ul>

  )

  const guestLinks = (
  <ul>
    <li><Link to="/register">Register</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>

  )
  return (
 
       <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fas fa-dove"></i> Impact Chain</Link>
      </h1>

      { !loading && (<Fragment>{ isAuthenticated? authLinks: guestLinks }</Fragment>)}
     
    </nav>
  );
};

Navbar.propTypes={
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)