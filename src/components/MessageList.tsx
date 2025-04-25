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
    <div className="absolute inset-0 pt-4 pb-24 overflow-y-scroll w-full">
      <div className="space-y-4 min-h-full">
        {messages.map((message, index) => (
          <Message key={message.id} message={message} index={index} />
        ))}
        
        {isLoading && <LoadingIndicator />}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList; 