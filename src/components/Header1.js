import React from 'react';

import { lang_mainMenu } from '../data/lang';
import '../styles/css/header1.css';

const Header = ({ lang, мenuShow, menuVisible, mainMenuText, changeMainMenuText }) => {
  const menu = lang_mainMenu[lang];

  return (
    <div 
      className={menuVisible ? "mainMenu mainMenu--scaled" : "mainMenu mainMenu--unscaled"}
      onMouseOver={() => мenuShow(true)}
      onMouseLeave={() => мenuShow(false)}
    >
      <div 
        className={menuVisible ? "menuWrapper menuWrapper--full" : "menuWrapper menuWrapper--small"}
      >
        <div className="hexagonWrapper__p1">
          <div 
            className="hexagon hexagon__show"
            onMouseOver={() => changeMainMenuText(menu.menu)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <svg className="hexagon__picture" />
          </div>
        </div>

        <div className="hexagonWrapper__p2">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show" 
              : "hexagon hexagon__hide delay7"
            }
            onMouseOver={() => changeMainMenuText(menu.catchword1)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <div className="hexagon--add">
              <img 
                className="hexagon__picture" 
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8%0D%0Ac3ZnDQp4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQp4bWxuczp4bGluaz0iaHR0%0D%0AcDovL3d3dy53My5vcmcvMTk5OS94bGluayINCnZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMTUiIHdp%0D%0AZHRoPSIzNDIiID4NCiA8ZGVmcz4NCiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsN%0D%0ACiAgICAub3V0bGluZSB7IHN0cm9rZTpub25lOyBzdHJva2Utd2lkdGg6MCB9DQogIF1dPjwvc3R5%0D%0AbGU+DQogICA8ZyBpZD0iaGVhcnQiPg0KICAgPHBhdGggDQogICAgZD0iTTAgMjAwIHYtMjAwIGgy%0D%0AMDAgDQogICAgYTEwMCwxMDAgOTAgMCwxIDAsMjAwDQogICAgYTEwMCwxMDAgOTAgMCwxIC0yMDAs%0D%0AMA0KICAgIHoiIC8+DQogIDwvZz4NCiA8L2RlZnM+DQogPGRlc2M+DQogICBhIG5lYXJseSBwZXJm%0D%0AZWN0IGhlYXJ0DQoJIG1hZGUgb2YgdHdvIGFyY3MgYW5kIGEgcmlnaHQgYW5nbGUNCiA8L2Rlc2M+%0D%0ADQogIDx1c2UgeGxpbms6aHJlZj0iI2hlYXJ0IiBjbGFzcz0ib3V0bGluZSAiIGZpbGw9IiMwOTU3%0D%0AODRkZCIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1LDE1MCwxMjEpIiAvPg0KPC9zdmc+DQo="
              />
            </div>
          </div>
        </div>

        <div className="hexagonWrapper__p3">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay4" 
              : "hexagon hexagon__hide delay6"
            }
            onMouseOver={() => changeMainMenuText(menu.faqs)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <svg className="hexagon__picture"/>
          </div>
        </div>

        <div className="hexagonWrapper__p4"> 
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay5" 
              : "hexagon hexagon__hide delay5"
            }
            onMouseOver={() => changeMainMenuText(menu.home)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <svg className="hexagon__picture"/>
          </div>
        </div>

        <div className="hexagonWrapper__p5">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay6" 
              : "hexagon hexagon__hide delay4"
            }
            onMouseOver={() => changeMainMenuText(menu.catchword2)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <div className="hexagon--add">
              <svg className="hexagon__picture"/>
            </div>
          </div>
        </div>

        <div className="hexagonWrapper__p6">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay7" 
              : "hexagon hexagon__hide delay3"
            }
            onMouseOver={() => changeMainMenuText(menu.products)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <svg className="hexagon__picture"/>
          </div>
        </div>

        <div className="hexagonWrapper__p7">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay8" 
              : "hexagon hexagon__hide delay2"
            }
            onMouseOver={() => changeMainMenuText(menu.prices)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <svg className="hexagon__picture"/>
          </div>
        </div>  

        <div className="hexagonWrapper__p8">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay9" 
              : "hexagon hexagon__hide delay1"
            }
            onMouseOver={() => changeMainMenuText(menu.contacts)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <svg className="hexagon__picture"/>
          </div>
        </div>  

        <div className="hexagonWrapper__p10">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay10" 
              : "hexagon hexagon__hide"
            }
            onMouseOver={() => changeMainMenuText(menu.gifts)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <svg className="hexagon__picture"/>
          </div>
        </div>  
      
        <p 
          className={mainMenuText 
            ? "mainMenu__text mainMenu__text--visible" 
            : "mainMenu__text mainMenu__text--invisible"
          }
        >
          {mainMenuText ? mainMenuText : null}
        </p>
      </div>
      
    </div>
  )
}

export default Header;


