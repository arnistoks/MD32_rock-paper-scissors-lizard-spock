import React from 'react';
import Logo from '../../images/logo.png';
import './header.scss';

const Header = () => (
  <section className="section">
    <div className="header">
      <div className="rotate">
        <img src={Logo} alt="Logo" width="150" />
      </div>
      <h1 className="title">Rock Paper Scissors Lizard Spock</h1>
    </div>
  </section>
);

export default Header;
