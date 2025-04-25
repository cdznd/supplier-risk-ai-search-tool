'use client';

import { useChat } from '@ai-sdk/react';
import { useEffect, useRef, useState } from 'react';

import Background from '../components/Background';
import Header from '../components/Header';
import MessageList from '../components/MessageList';
import ChatForm from '../components/ChatForm';

export default function Chat() {

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  // Custom submit handler to control when to scroll
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    setShouldScroll(true);
  };

  // Only scroll when a new user message is sent, not when AI responds
  useEffect(() => {
    if (shouldScroll) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      setShouldScroll(false);
    }
  }, [messages, shouldScroll]);

  return (
    <div className="flex flex-col h-screen relative">
      <Background />

      <Header />

      {/* Main content area with fixed height */}
      <div className="flex-1 w-full max-w-2xl mx-auto px-4 flex flex-col relative">
        <MessageList 
          messages={messages} 
          isLoading={isLoading} 
          messagesEndRef={messagesEndRef} 
        />

        <ChatForm 
          input={input} 
          handleInputChange={handleInputChange} 
          onSubmit={onSubmit} 
          isLoading={isLoading} 
        />
      </div>
    </div>
  );
}
