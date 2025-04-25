import { Message as MessageType } from '@ai-sdk/react';
import { MutableRefObject } from 'react';
import Message from './Message';
import LoadingIndicator from './LoadingIndicator';

type MessageListProps = {
  messages: MessageType[];
  isLoading: boolean;
  messagesEndRef: MutableRefObject<HTMLDivElement | null>;
};

const MessageList = ({ messages, isLoading, messagesEndRef }: MessageListProps) => {
  return (
    <div className="absolute inset-0 overflow-y-scroll w-full p-4
                    scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 
                    scrollbar-track-transparent hover:scrollbar-thumb-gray-400 
                    dark:hover:scrollbar-thumb-gray-500">
      <div className="space-y-4 min-h-full pb-40">
        {messages.map((message, index) => (
          <Message key={message.id} message={message} index={index} />
        ))}
        
        {isLoading && <LoadingIndicator />}
        <div ref={messagesEndRef} className="h-4" />
      </div>
    </div>
  );
};

export default MessageList; 