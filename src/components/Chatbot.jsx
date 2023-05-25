import React from 'react';
import { Chatbot } from 'react-chatbot-kit';

const config = {
  botName: 'My Chatbot',
  initialMessages: [
    {
      type: 'text',
      content: 'Hello! How can I help you today?',
    },
  ],
};

function ChatbotComponent() {
  return <Chatbot config={config} />;
}

export default ChatbotComponent;
