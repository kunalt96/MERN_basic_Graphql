import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          Users
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/view-users'>View All Users</Link>
          </li>
          <li>
            <Link to='/register-users'>Register Users</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
