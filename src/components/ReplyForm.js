import React from 'react';
import { lang_replyForm } from '../data/lang';

import '../styles/css/replyForm.css';

const ReplyForm = ({ lang }) => {
  const reply = lang_replyForm[lang];

  return (
    <form 
      className="replyForm"
      action="mailto:gemokod@ukr.net"
      enctype="text/plain"
    >
      <label 
        className="replyForm__label" 
        for="name"
      >
        {reply.name_label}
      
        <input 
          id="name"
          className="replyForm__input"
          type="text" 
          placeholder={reply.name_placeholder}
          autofocus
          required
        />
      </label>

      <label 
        className="replyForm__label" 
        for="email"
      >
        {reply.email_label}
      
        <input 
          id='email'
          className="replyForm__input"
          type="email" 
          placeholder={reply.email_placeholder}
          required
        />
      </label>

      <label 
        className="replyForm__label" 
        for="tel"
      >
        {reply.tel_label}
      
        <input 
          id='tel'
          className="replyForm__input"
          type="tel" 
          placeholder={reply.tel_placeholder}
          required
        />
      </label>

      <label 
        className="replyForm__label" 
        for="message"
      >
        {reply.message_label}
      
        <textarea
          id='message'
          className='replyForm__message'
          placeholder={reply.message_placeholder}
          required
        />
      </label>

      <input 
        className="replyForm__button"
        type="submit" 
        value={reply.submit} 
      />
    </form>
  );
}

export default ReplyForm;

