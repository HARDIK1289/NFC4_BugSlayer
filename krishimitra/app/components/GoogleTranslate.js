"use client";
import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'hi,ta,te,kn,bn,ml,mr,gu,pa',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          },
          'google_translate_element'
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '30px',
      left: '20px',
     zIndex: 1000,
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      padding: '8px',
      border: '1px solid #e0e0e0'
    }}>
      <div 
        id="google_translate_element"
        style={{
          width: 'auto',
          height: '30px',
          display: 'flex',
          alignItems: 'center'
        }}
      ></div>
    </div>
  );
};

export default GoogleTranslate;