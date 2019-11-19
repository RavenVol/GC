import React from 'react';

import { lang_mainMenu } from '../data/lang';
import '../styles/css/header.css';

const Header = ({lang}) => {
  const menu = lang_mainMenu[lang];

  return (
    <div className="mainMenu">
      <div className="mainMenu__home hexagon">
        <svg />
        <p>{menu.home}</p>
      </div>

      <div className="mainMenu__products hexagon">
        <svg />
        <p>{menu.products}</p>
      </div>

      <div className="mainMenu__gift hexagon">
        <svg />
        <p>{menu.gifts}</p>
      </div>

      <div className="mainMenu__faqs hexagon">
        <svg />
        <p>{menu.faqs}</p>
      </div>

      <div className="mainMenu__prices hexagon">
        <svg />
        <p>{menu.prices}</p>
      </div>

      <div className="mainMenu__contacts hexagon">
        <svg />
        <p>{menu.contacts}</p>
      </div>
    </div>
  )
}

export default Header;


