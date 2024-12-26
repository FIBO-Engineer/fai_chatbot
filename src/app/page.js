'use client';

import { useState } from 'react';
import HomePage from './home/Page';
import ChatbotPage from './chatbot/Page';

export default function Home() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <main className="flex items-center justify-center h-full">
      {!showChatbot ? (
        <HomePage startChatbot={() => setShowChatbot(true)} />
      ) : (
        <ChatbotPage goHome={() => setShowChatbot(false)} />
      )}
    </main>
  );
}
