import React from 'react';
import Representatives from './Representatives';
import MyGoogleMap from './MyGoogleMap';
import socialPictureSelect from '../functions/socialPictureSelect';
import ReplyForm from './ReplyForm';
import { lang_contactPage, lang_contacts } from '../data/lang';

import '../styles/css/contactsPage.css';

const ContactsPage = ({lang}) => {
  const lang_page = lang_contactPage[lang];
  const mainContact = lang_contacts[0];

  return (
    <div className="contactsPage">
      <h1 className="contactsPage__mainHeader">{lang_page.mainHeader}</h1>
      
      <div className="contactsPage__mainContact mainContact">
        <div className="mainContact__info mainContactInfo">
          <h3 className="mainContactInfo__name">{mainContact[lang].name}</h3>

          <div className="mainContactInfo__wrapper">
            <img className="mainContactInfo__addressImage" src="" alt="" />
            <div>
              <p className="mainContactInfo__address">{mainContact[lang].address}</p>
              <p className="mainContactInfo__addressNotation">{mainContact[lang].address_notation}</p>
            </div>
          </div>

          <div className="mainContactInfo__wrapper">
            <img className="mainContactInfo__phonesImage" src="" alt="" />
            <div>
              {mainContact.phones.map(phone => (
                <div
                  key={phone[1]}
                  className="mainContactInfo__phone"
                >
                  {phone[1]}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mainContactInfo__wrapper">
            <img className="mainContactInfo__siteImage" src="" alt="" />
            <a 
              className="mainContactInfo__site"
              href={mainContact.site}
            >
              {mainContact.site}
            </a>
          </div>

          <div className="mainContactInfo__wrapper">
            <img className="mainContactInfo__mailImage" src="" alt="" />
            <div>
              {mainContact.mails.map(mail => (
                <a 
                  key={mail[1]}
                  className="mainContactInfo__mail"
                  href={`mailto:${mail[0]}`}
                >
                  {mail[1]}
                </a>
              ))}
            </div>
          </div>

          <div className="mainContactInfo__socials">
            {mainContact.socials.map(social => (
              <a 
                key={social[1]}
                className="mainContactInfo__social"
                href={social[1]}
              >
                <img className="mainContactInfo__socialImage"
                  src={socialPictureSelect(social[0])}
                  alt={social[1]}
                />
              </a>
            ))}
          </div>
        </div>
      
        <div className="mainContact__map">
          <MyGoogleMap isMarkerShown={true} geo={mainContact.geoPosition} />
        </div>
      </div>

      <div className="contactsPage__inTouch">
        <h2 className="contactsPage__secondatyHeader">{lang_page.inTouchHeader}</h2>
        <ReplyForm lang={lang} />
      </div>

      
      <h2 className="contactsPage__secondatyHeader">{lang_page.secondaryHeader}</h2>
      <Representatives lang={lang} />
    </div>
  );
};

export default ContactsPage;
