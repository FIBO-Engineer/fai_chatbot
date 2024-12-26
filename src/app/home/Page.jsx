'use client';

import React from 'react';

export default function HomePage({ startChatbot }) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-12">
      {/* Logo */}
      <img src="/assets/images/smile.png" alt="Robot" className="w-48 h-auto" />
      {/* Descrition */}
      <div className="text-center space-y-6 text-grayDark">
        <div className="text-2xl font-bold">
          Welcome, I&#39;m <span className="text-3xl font-heading text-primary">FAI</span> Chatbot!
        </div>
        <div className="text-lg font-normal text-grayDark">
          How can I help you today?
        </div>
      </div>
      {/* Go to chatbot page */}
      <button
        onClick={startChatbot}
        className="bg-secondary hover:bg-primary text-white text-base py-3 px-6 rounded-full transition w-[400px] h-[48px] shadow-custom"
      >
        Let's start chatting
      </button>
    </div>
  );
}
