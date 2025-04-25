import { Message as MessageType } from '@ai-sdk/react';
import { MutableRefObject } from 'react';
import Message from './Message';

import { Atom, ThreeDot } from 'react-loading-indicators';

type MessageListProps = {
  messages: MessageType[];
  isLoading: boolean;
  isSubmitted: boolean;
  messagesEndRef: MutableRefObject<HTMLDivElement | null>;
};

const MessageList = ({ messages, isLoading, isSubmitted, messagesEndRef }: MessageListProps) => {
  return (
    <div className="absolute inset-0 overflow-y-scroll w-full p-4
                    scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 
                    scrollbar-track-transparent hover:scrollbar-thumb-gray-400 
                    dark:hover:scrollbar-thumb-gray-500">
      {messages.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400 mt-4">
          <p className="text-lg">Start a conversation with the AI assistant</p>
        </div>
      ) : (
        <div className="space-y-4 min-h-full pb-40">
          {messages.map((message, index) => (
            <Message key={message.id} message={message} index={index} />
          ))}
          <div className='flex align-center justify-center'>
            {isSubmitted && <Atom color={["#F2853B", "#2D9954", "#5e23b3"]} />}
            {isLoading && <ThreeDot color={["#F2853B", "#2D9954", "#5e23b3"]} />}
          </div>
          <div ref={messagesEndRef} className="h-4" />
        </div>
      )}
    </div>
  );
};

export default MessageList; 