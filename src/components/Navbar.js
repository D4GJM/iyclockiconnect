import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/iyconnect">IYConnect</Link></li>
        <li><Link to="/iypay">IYPay</Link></li>
        <li><Link to="/iyclock">IYClock</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
