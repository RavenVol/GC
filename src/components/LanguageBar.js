import React from 'react';

import '../styles/css/languageBar.css';

const LanguageBar = ({ changeLanguage, lang }) => (
  <ul className="languageBar">
    <li className="languageBar__item">
      <button 
        className={lang === "ru" 
          ? "languageBar__button languageBar__button--selected"
          : "languageBar__button"
        }
        onClick={() => changeLanguage("ru")}
      >
        RU
      </button>
    </li>

    <li className="languageBar__item">
    <button
        className={lang === "ua" 
          ? "languageBar__button languageBar__button--selected"
          : "languageBar__button"
        }
        onClick={() => changeLanguage("ua")}
      >
        UA
      </button>
    </li>

    <li className="languageBar__item">
    <button 
        className={lang === "en" 
          ? "languageBar__button languageBar__button--selected"
          : "languageBar__button"
        }
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </li>
  </ul>
)

export default LanguageBar;

