import React from 'react';

import '../styles/css/messageBar.css';

const MessageBar = ({ lang, messages }) => {
  return (
    <div className="messageBar">
      {!messages[lang] 
        ? null
        : messages[lang].map((message, index) => (
        <div 
          key={index}
          className={index % 2 
            ? "messageBar__message messageBar__message--left"
            : "messageBar__message messageBar__message--right"
          }
          style={{animationDelay: `${index*2300}ms`}}
        >
          {message}
        </div>
      ))}
    </div>
  )
}

export default MessageBar;

