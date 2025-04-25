import { Message } from '@ai-sdk/react';
import ReactMarkdown from 'react-markdown';
import CustomLink from './CustomLink';
import { formatMarkdownText } from './utils';

type MessageProps = {
  message: Message;
  index: number;
};

const MessageComponent = ({ message, index }: MessageProps) => {
  return (
    <div 
      className={`p-4 rounded-lg transition-all duration-300 ease-in-out animate-fade-in backdrop-blur-sm ${
        message.role === 'user' 
          ? 'bg-[#5e23b3]/70 border-l-4 border-[#5e23b3] ml-auto text-white' 
          : 'bg-[#2D9954]/70 border-l-4 border-[#2D9954] mr-auto text-white'
      } max-w-[85%] shadow-md`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        transform: 'translateY(0)',
        opacity: 1
      }}
    >
      <div className="font-semibold mb-1">
        {message.role === 'user' ? 'You:' : 'AI:'}
      </div>
      <div className="whitespace-pre-wrap prose prose-invert max-w-none prose-a:text-blue-300 prose-a:no-underline prose-p:my-1 prose-headings:mb-2 prose-headings:mt-3 prose-headings:text-white/90">
        {message.parts?.map((part, i) => {
          switch (part.type) {
            case 'text':
              return message.role === 'user' ? (
                <div key={`${message.id}-${i}`}>{part.text}</div>
              ) : (
                <ReactMarkdown 
                  key={`${message.id}-${i}`}
                  components={{
                    a: ({ node, ...props }) => <CustomLink {...props} />
                  }}
                >
                  {formatMarkdownText(part.text)}
                </ReactMarkdown>
              );
          }
        })}
      </div>
    </div>
  );
};

export default MessageComponent; 