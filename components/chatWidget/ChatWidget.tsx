import Image from 'next/image';
import { useEffect } from 'react';
import androidChrome512Icon from '../../public/android-chrome-512x512.png';
import { useTheme } from 'nextra-theme-docs';
import '@buildshipapp/chat-widget';

export default function Footer() {
  const theme = useTheme();

  useEffect(() => {
    if (window !== undefined) {
      window.buildShipChatWidget.config.url = 'https://api.buildship.run/chatbot3';
      window.buildShipChatWidget.config.responseIsAStream = true;
      window.buildShipChatWidget.config.greetingMessage = 'Hello! Got a question about BuildShip? Ask away!';
      window.buildShipChatWidget.config.openOnLoad = false;
      window.buildShipChatWidget.config.widgetTitle = 'BuildShip Chatbot';
      window.buildShipChatWidget.init();
    }
  }, [window]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme.resolvedTheme);
  }, [theme.resolvedTheme]);

  return (
    <button
      data-buildship-chat-widget-button
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '64px',
        width: '64px',
        padding: '16px',
        backgroundColor: theme.resolvedTheme === 'dark' ? 'white' : '#2d2d30',
        borderRadius: '100%',
      }}
    >
      <Image
        src={androidChrome512Icon}
        alt='BuildShip Logo'
        style={{
          height: '100%',
          width: 'auto',
        }}
      />
    </button>
  );
}
