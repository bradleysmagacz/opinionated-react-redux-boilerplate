import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>Outreach Connoisseurs</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/login' activeClassName='route--active'>
      Login
    </Link>
    {' · '}
    <Link to='/dashboard' activeClassName='route--active'>
      Dashboard
    </Link>
  </div>
)

export default Header
