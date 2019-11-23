import React from 'react';
import MessageBar from './MessageBar';
import { lang_footer } from '../data/lang';

import '../styles/css/footer.css';

const Footer = ({ lang, messages }) => {
  return (
    <div className="footer">
      <div className="footer__logo logo">
        <a 
          className="logo__link"
          href="/"
          title={lang_footer[lang].logo_alt}
        >
          <img 
            className="logo__image"
            src="https://github.com/RavenVol/GC/blob/develop/src/data/gemokod_logo.jpg?raw=true" 
            alt={lang_footer[lang].logo_alt} 
          />
        </a>
      </div>

      <div className="footer__address address" title={lang_footer[lang].address_alt}>
        <h3 className="address__title">{lang_footer[lang].address_title}</h3>
        <p className="address__location">{lang_footer[lang].address}</p>
        <p className="address__notation">{lang_footer[lang].address_notation}</p>
      </div>

      <ul className="footer__menu menu">
        {lang_footer[lang].menu.map(menuItem => (
          <li className="menu__item" key={menuItem[0]}> 
            <a
              className="menu__link"
              href={menuItem[1]}
              alt={menuItem[0]}
            >
              {menuItem[0]}
            </a>
          </li>
        ))}
      </ul>

      <div className="footer__phones phones">
        <div className="phones__title">
          {lang_footer[lang].phones_title}
        </div>
        <div className="phones__ut1">
          {lang_footer[lang].phone_ut1}
        </div>
        <div className="phones__ut2">
          {lang_footer[lang].phone_ut2}
        </div>
        <div className="phones__ks">
          {lang_footer[lang].phone_ks}
        </div>
      </div>

      <div className="footer__mails mails">
        <div className="mails__title">
          {lang_footer[lang].mails_title}
        </div>

        {lang_footer[lang].mails.map(mail => (
          <a className="mails__link" href={`mailto:${mail[0]}`}>
            {mail[1]}
          </a>
        ))}
      </div>
      
      <div className="footer__socials socials">
        <div className="socials__title">
          {lang_footer[lang].socials_title}
        </div>
        <a 
          className="socials__link"
          href={lang_footer[lang].socials_viber[1]}
          title={lang_footer[lang].socials_viber[2]}
        >
          <img />
        </a>
      </div>

      <MessageBar 
        lang={lang}
        messages={messages}
      />
    </div>
  )
}

export default Footer;

