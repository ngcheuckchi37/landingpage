import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    createChatBotMessage('Hi! I am your friendly chatbot. How can I help you today?'),
  ],
  botName: 'My Chatbot',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#376B7E',
    },
  },
  widgets: [],
};

export default config;
