import React from 'react';
import { lang_contacts } from '../data/lang';
import MyGoogleMap from './MyGoogleMap';
import socialPictureSelect from '../functions/socialPictureSelect';

import '../styles/css/representatives.css';

const Representatives = ({lang}) => {
  const contacts = lang_contacts;

  return (
    <div className="representativesPage">
      {contacts.map(contact => (
        <div 
          key={contact.id}
          className="representative"
        >
          <div className="representative__imageWrapper">
            <img 
              className="representative__image" 
              src={contact.city_pic} 
              alt={contact[lang].name} 
            />
            
            <div className="representative__preInfo preInfo">
              <h3 className="preInfo__name">{contact[lang].name}</h3>
              <p className="preInfo__address">{contact[lang].address}</p>
              <p className="preInfo__phone">{contact.phones[0][1]}</p>
              <h4 className="preInfo__city">{contact[lang].city}</h4>
            </div>
          </div>
          
          <div className="representative__additional additional">
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
                      src={socialPictureSelect(social[0])}
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
  );
}

export default Representatives;

