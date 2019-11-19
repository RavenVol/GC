import React from 'react';
import { lang_header } from '../data/lang';
import '../styles/css/header.css';


const Header = ({lang}) => {
  const headerInfo = lang_header[lang];

  return (
    <div className="header">

      <div className="header__logo logo">
        <a className="logo_link" href="/">
          <img 
            className="logo__link--image"
            src="https://github.com/RavenVol/GC/blob/develop/src/data/gemokod_logo.jpg?raw=true"
            alt={headerInfo.alt} 
            longdesc="/" /*full address of a home page will be here*/
          />
        </a>
      </div>

      <div className="header__info info">
        <div className="info__companyName">
          {headerInfo.cName}
        </div>

        <div className="info__companyAddress">
          {headerInfo.cAddress}
        </div>

        <div className="info__companyPhones">
          <div className="info__companyPhones--UT">
            {headerInfo.cPhoneUT}
          </div>
          <div className="info__companyPhones--KS">
            {headerInfo.cPhoneKS}
          </div>
        </div>

        <div className="info__companyMail">
          {headerInfo.cMail}
        </div>
      </div>

      <div className="header__menu menu">
        <button 
          className="menu__button"
          type="button"
        >
          {headerInfo.menuName}
        </button>
      </div>
    </div>
  )
}

export default Header;
