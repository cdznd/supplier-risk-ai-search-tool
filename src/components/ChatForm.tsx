import React from 'react';

type ChatFormProps = {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

const ChatForm = ({ input, handleInputChange, onSubmit, isLoading }: ChatFormProps) => {
  return (
    <form onSubmit={onSubmit} className="absolute bottom-0 left-0 right-0 p-4 z-10 flex">
      <input
        className="w-full max-w-2xl mx-auto p-4 pr-14 border border-gray-300 bg-white dark:bg-gray-800 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5e23b3] transition-all duration-200"
        value={input}
        placeholder="Type your message..."
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <button 
        type="submit" 
        className="absolute right-6 top-1/2 -translate-y-1/2 p-2.5 bg-[#5e23b3] text-white rounded-full hover:bg-[#4c1c91] disabled:opacity-50 disabled:hover:bg-[#5e23b3] transform hover:scale-105 transition-all duration-200"
        disabled={isLoading || !input.trim()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11h4a1 1 0 00.947-.684l2-5a1 1 0 000-.632l-2-5a1 1 0 00-.947-.684h-4.38a1 1 0 00-.884.5l-4.382 6.884a.5.5 0 00.442.744H8V15.5a.5.5 0 00.724.447l7-4a.5.5 0 000-.894l-7-4A.5.5 0 008 7.5V11H1.118a.5.5 0 00-.447.724l4 6a.5.5 0 00.894 0l2-3z" />
        </svg>
      </button>
    </form>
  );
};

export default ChatForm; 