import React from 'react';
import { lang_contacts } from '../data/lang';
import MyGoogleMap from './MyGoogleMap';

import '../styles/css/contacts.css';

const Contacts = ({lang}) => {
  const contacts = lang_contacts;

  const socialPictureSelect = (social) => {
    switch (social[0]) {
      case "vb" : return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gU3ZnIFZlY3RvciBJ%0D%0AY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+DQo8IURPQ1RZUEUg%0D%0Ac3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9H%0D%0AcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5z%0D%0APSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMu%0D%0Ab3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBl%0D%0AbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUi%0D%0AIGZpbGw9IiMwOTU3ODRkZCI+DQo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8v%0D%0Ad3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+DQo8Zz48ZyB0cmFuc2Zvcm09%0D%0AInRyYW5zbGF0ZSgwLjAwMDAwMCw1MTEuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDAp%0D%0AIj48cGF0aCBkPSJNMTU1OC4xLDQ5ODIuNGMtNjQ4LjgtNjQuOS0xMjMyLjctNTgwLjUtMTQxMC4y%0D%0ALTEyNDIuOWMtMzcuNi0xNDAtNDcuOC04MTkuNS00Ny44LTM2NDMuNGMwLTM3ODYuOC0xMC4yLTM2%0D%0AMDIuNCwxOTQuNi00MDA4LjdjMTEyLjctMjE4LjYsNDU3LjYtNTYzLjQsNjc2LjEtNjc2LjFjNDA2%0D%0ALjMtMjA0LjksMjE4LjUtMTk0LjYsNDA0Mi45LTE5NC42aDM1MDMuNGwyMzIuMiw4MS45YzU0Ni4z%0D%0ALDE5NC42LDg5NC42LDU1My4yLDEwNzIuMiwxMTA2LjNsNzguNSwyNDkuM1Y0MS40YzAsMjAzNS4x%0D%0ALTEzLjcsMzQ2OS4yLTM0LjIsMzU5Mi4yYy01MS4yLDMyNC40LTIzNS42LDY1OS00OTUuMSw5MDEu%0D%0ANWMtMjM5LDIyMi0zMjQuNCwyNzYuNi02MjguMywzODkuM2MtMTkxLjIsNzUuMS0yMTUuMSw3NS4x%0D%0ALTM1NTQuNiw3OC41QzMzMzcuMSw1MDA2LjMsMTcwNSw0OTk2LDE1NTguMSw0OTgyLjR6IE01NTQ2%0D%0ALjQsMzIxMC4yYzU2My40LTExNi4xLDEwMzEuMy0zNTUuMSwxNDQ0LjQtNzM3LjZjNTQyLjktNTAy%0D%0ALDg0Ni44LTExNjEsOTMyLjEtMjAxNC42YzM3LjYtMzQ4LjMsMzQuMS0zOTkuNS0xNy4xLTQ3OGMt%0D%0ANjQuOC05NS42LTIyNS40LTExOS41LTI5MC4yLTM3LjZjLTIwLjUsMjcuMy01NC42LDIxNS4xLTcx%0D%0ALjcsNDE2LjZjLTc4LjUsODk4LTM4OS4zLDE1MTYuMS05OTAuMiwxOTczLjZjLTQyMCwzMjQuNC03%0D%0AOTUuNiw0NzEuMi0xMzY1LjgsNTMyLjdjLTM3NS42LDQ0LjQtNDc4LjEsODguOC00NzguMSwyMTUu%0D%0AMWMwLDM3LjYsMjMuOSw5OSw1OC4xLDEzMy4yQzQ4NDMsMzI5NS41LDUxMzYuNiwzMjk1LjUsNTU0%0D%0ANi40LDMyMTAuMnogTTI5NDQuNCwzMTI0LjhjMjI1LjQtOTUuNiw4MjYuMy04MjYuMywxMDM0LjYt%0D%0AMTI2Ni44YzE4Ny44LTM4Mi40LDE1My43LTUwNS40LTIwOC4zLTc5OWMtMTI2LjMtMTAyLjQtMjQy%0D%0ALjQtMjIyLTI1OS41LTI2Ni4zYy0xMTkuNS0zMTQuMSwxMzYuNi04OTEuMiw2MTQuNi0xMzg2LjNj%0D%0ANDIwLTQzNy4xLDk5MC4yLTc3NS4xLDEzMTQuNi03NzUuMWMxNTMuNywwLDE3Ny42LDEwLjIsMjkw%0D%0ALjIsMTQzLjRjMzY4LjgsNDIzLjQsMzUxLjcsNDEzLjIsNTgwLjUsNDMwLjJjMjA0LjksMTMuNywy%0D%0AMTUuMSwxMC4yLDUyNS45LTE3NC4xYzQ3NC42LTI4My40LDEwNTEuNy03NjQuOSwxMTEzLjItOTI1%0D%0ALjRjODguOC0yMzUuNi0yNy4zLTUwNS40LTQwMi45LTkxNS4xYy0yMDEuNC0yMTguNS00NTAuNy0z%0D%0ANjUuNC02NzkuNS0zOTIuN2MtMTk4LjEtMjMuOS00MTYuNiw1OC4xLTEwOTkuNiw0MDIuOUM0Mjg5%0D%0ALjgtMjA1MS43LDMwNzcuNi04ODMuOSwyMjQ0LjUsNTk0LjZDMTk1MC44LDExMTcsMTY4MSwxNzgy%0D%0ALjksMTY0Ni45LDIwNzkuOWMtMTMuNywxMTkuNSwwLDE5MS4yLDUxLjIsMjk3LjFjMTQzLjQsMjgw%0D%0ALDgxOS41LDc5NS42LDEwNDEuNSw3OTUuNkMyNzkwLjgsMzE3Mi42LDI4ODMsMzE1Mi4xLDI5NDQu%0D%0ANCwzMTI0Ljh6IE01NjMxLjcsMjQ0OC43Yzg1LjQtMjAuNSwyODMuNC05NS42LDQ0My45LTE3NC4x%0D%0AYzY1OS4xLTMxMC43LDEwOTIuNy0xMDAwLjUsMTA5Mi43LTE3MzhjMC0yNzMuMi0zMC43LTMzNC42%0D%0ALTE2Ny4zLTMzNC42cy0yMDguMyw5Mi4yLTIwOC4zLDI3My4yYzAsODY3LjMtNTg3LjMsMTUwOS4z%0D%0ALTE0OTIuMiwxNjM5Yy0yNTkuNSwzNC4yLTM3Mi4yLDEyMi45LTMzMS4yLDI1Mi43QzUwMTcuMSwy%0D%0ANTM0LjEsNTE4MSwyNTU0LjYsNTYzMS43LDI0NDguN3ogTTU2MDQuNSwxNzAwLjljNDg0LjgtMTAy%0D%0ALjQsNzcxLjctNDQwLjUsODA1LjgtOTQyLjRjMTMuNy0yMzksMTMuNy0yNDkuMy03NS4xLTI4Ni44%0D%0AYy0xMzYuNi02NC45LTI0OS4zLDMuNC0yNzYuNiwxNjMuOWMtODUuNCw0OTguNS0yMTguNSw2NDEu%0D%0AOS02NTksNzEwLjJjLTIxMS43LDM0LjEtMjkwLjIsMjMyLjItMTM2LjYsMzM4QzUzNTUuMiwxNzQ4%0D%0ALjcsNTM3Mi4yLDE3NDguNyw1NjA0LjUsMTcwMC45eiIvPjwvZz48L2c+DQo8L3N2Zz4=";
      case "fb" : return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gU3ZnIFZlY3RvciBJ%0D%0AY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+DQo8IURPQ1RZUEUg%0D%0Ac3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9H%0D%0AcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5z%0D%0APSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMu%0D%0Ab3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBl%0D%0AbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUi%0D%0AIGZpbGw9IiMwOTU3ODRkZCI+DQo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8v%0D%0Ad3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+DQo8Zz48Zz48cGF0aCBkPSJN%0D%0AODgxLjEsMTBIMTE4LjlDNTksMTAsMTAsNTksMTAsMTE4Ljl2NzYyLjJDMTAsOTQxLjEsNTksOTkw%0D%0ALDExOC45LDk5MEg1MDBWNjA4LjlIMzkxLjFWNDc0LjFINTAwVjM2Mi41QzUwMCwyNDQuNyw1NjYs%0D%0AMTYyLDcwNSwxNjJsOTguMiwwLjF2MTQxLjhINzM4Yy01NC4xLDAtNzQuNyw0MC42LTc0LjcsNzgu%0D%0AM3Y5MmgxMzkuOGwtMzAuOSwxMzQuN0g2NjMuM1Y5OTBoMjE3LjhDOTQxLDk5MCw5OTAsOTQxLjEs%0D%0AOTkwLDg4MS4xVjExOC45Qzk5MCw1OSw5NDEsMTAsODgxLjEsMTBMODgxLjEsMTB6Ii8+PC9nPjwv%0D%0AZz4NCjwvc3ZnPg==";
      case "ig" : return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gU3ZnIFZlY3RvciBJ%0D%0AY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+DQo8IURPQ1RZUEUg%0D%0Ac3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9H%0D%0AcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5z%0D%0APSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMu%0D%0Ab3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBl%0D%0AbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUi%0D%0AIGZpbGw9IiMwOTU3ODRkZCI+DQo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8v%0D%0Ad3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+DQo8Zz48cGF0aCBkPSJNNzk2%0D%0ALjMsNTAwYzAsMTYzLjYtMTMyLjcsMjk2LjMtMjk2LjMsMjk2LjNjLTE2My42LDAtMjk2LjMtMTMy%0D%0ALjYtMjk2LjMtMjk2LjNjMC0xOS41LDEuOS0zOC41LDUuNi01N0gxMHYzOTMuOEMxMCw5MjEuNCw3%0D%0AOC41LDk5MCwxNjMuMiw5OTBoNjczLjdjODQuNiwwLDE1My4yLTY4LjUsMTUzLjItMTUzLjJWNDQz%0D%0ASDc5MC44Qzc5NC4zLDQ2MS41LDc5Ni4zLDQ4MC41LDc5Ni4zLDUwMEw3OTYuMyw1MDB6IE04MzYu%0D%0AOCwxMEgxNjMuMkM3OC41LDEwLDEwLDc4LjYsMTAsMTYzLjJ2MTY1LjloMjQ4LjFjNTMuNi03NS44%0D%0ALDE0Mi0xMjUuMywyNDEuOS0xMjUuM2M5OS45LDAsMTg4LjMsNDkuNiwyNDEuOSwxMjUuM0g5OTBW%0D%0AMTYzLjJDOTkwLDc4LjYsOTIxLjQsMTAsODM2LjgsMTB6IE05MTEuOCwxOTkuMmMwLDE1LjEtMTIu%0D%0AMywyNy40LTI3LjMsMjcuNGgtODJjLTE1LDAtMjcuNC0xMi4zLTI3LjQtMjcuNHYtODJjMC0xNS4x%0D%0ALDEyLjQtMjcuNCwyNy40LTI3LjRoODJjMTUuMSwwLDI3LjMsMTIuMywyNy4zLDI3LjRWMTk5LjJ6%0D%0AIE02ODIuMyw1MDBjMC0xMDAuNy04MS43LTE4Mi4zLTE4Mi4zLTE4Mi4zYy0xMDAuNywwLTE4Mi4z%0D%0ALDgxLjYtMTgyLjMsMTgyLjNjMCwxMDAuNyw4MS42LDE4Mi4zLDE4Mi4zLDE4Mi4zQzYwMC43LDY4%0D%0AMi4zLDY4Mi4zLDYwMC43LDY4Mi4zLDUwMHoiLz48L2c+DQo8L3N2Zz4=";
      default: console.warn('Social not defined');
    }
  }

  return (
    <>
    <h1 style={{fontSize: '30px', margin: '20px'}}>{lang === 'ru' ? "Контакты:" : 'ua' ? "Контакти" : "Contacts:"}</h1>
    <div className="contactsPage">
      {contacts.map(contact => (
        <div 
          key={contact.id}
          className="contact"
        >
          <div className="contact__imageWrapper">
            <img 
              className="contact__image" 
              src={contact.city_pic} 
              alt={contact[lang].name} 
            />
            
            <div className="contact__preInfo preInfo">
              <h3 className="preInfo__name">{contact[lang].name}</h3>
              <p className="preInfo__address">{contact[lang].address}</p>
              <p className="preInfo__phone">{contact.phones[0][1]}</p>
              <h4 className="preInfo__city">{contact[lang].city}</h4>
            </div>
          </div>
          
          <div className="contact__additional additional">
            <div className="additional__map">
              <MyGoogleMap isMarkerShown={true} geo={contact.geoPosition} />
            </div>
            <div className="additional__info info">
              <h3 className="info__name">{contact[lang].name}</h3>
              <p className="info__address">{contact[lang].address}</p>
              <p className="info__addressNotation">{contact[lang].address_notation && contact[lang].address_notation}</p>
              <a className="info__site" href={contact.site}>{contact.site}</a>
              
              <div className="info__phones">
                {contact.phones.map(phone => (
                  <p 
                    key={phone[1]}
                    className="info__phone"
                  >
                    {phone[1]}
                  </p>
                ))}
              </div>

              <div className="info__mails">
                {contact.mails.map(mail => (
                  <a 
                    key={mail[1]}
                    className="info__mail"
                    href={`mailto:${mail[0]}`}
                  >
                    {mail[1]}
                  </a>
                ))}
              </div>

              <div className="info__socials">
                {contact.socials.map(social => (
                  <a 
                    key={social[1]}
                    className="info__social"
                    href={social[1]}
                  >
                    <img className="info__socialImage"
                      src={socialPictureSelect(social)}
                      alt={social[1]}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  );
}

export default Contacts;

