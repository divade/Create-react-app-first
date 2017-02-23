import React, { Component } from 'react';
import './Header.css';
import logo from './Img/logoWWF.png';
import videoFond from './Img/baleine.mp4';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="MainHeader">
          <span className="RetourFrise">Retour à la frise</span>
          <span className="Monney">Faire un Don</span>
        </div>
        <video src={videoFond} autoPlay="true" className='FondVideo'></video>
        <div className="logo">
          <img src={logo} alt="WWFLogo"/>
        </div>
      </div>
    );
  }
}

export default Header;
