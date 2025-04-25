import { Message } from '@ai-sdk/react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import CustomLink from './CustomLink';

type MessageProps = {
  message: Message;
  index: number;
};

const MessageComponent = ({ message, index }: MessageProps) => {
  return (
    <div 
      className={`p-4 rounded-lg transition-all duration-300 ease-in-out animate-fade-in backdrop-blur-sm ${
        message.role === 'user' // User and AI response should have different styles
          ? 'bg-[#5e23b3]/70 border-l-4 border-[#5e23b3] ml-auto text-white' 
          : 'bg-[#2D9954]/70 border-l-4 border-[#2D9954] mr-auto text-white'
      } max-w-[85%] shadow-md hover:shadow-lg transition-shadow`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        transform: 'translateY(0)',
        opacity: 1
      }}
    >
      <div className="font-semibold mb-1 flex items-center">
        {message.role === 'user' ? (
          <>
            <span className="mr-2">You:</span>
            <div className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse"></div>
          </>
        ) : (
          <>
            <span className="mr-2">AI:</span>
            <div className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse"></div>
          </>
        )}
      </div>
      <div className="markdown-content">
        {message.parts?.map((part, i) => {
          switch (part.type) {
            case 'text':
              return message.role === 'user' ? (
                <div key={`${message.id}-${i}`} className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                  {part.text}
                </div>
              ) : (
                <div key={`${message.id}-${i}`} className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                      a: ({ node, ...props }) => <CustomLink {...props} />,
                      blockquote: ({ node, ...props }) => (
                        <blockquote 
                          className="pl-4 border-l-4 border-blue-300/50 italic text-white/80 my-2 transition-all hover:border-blue-300/70" 
                          {...props} 
                        />
                      ),
                      table: ({ node, ...props }) => (
                        <div className="overflow-x-auto my-4">
                          <table className="min-w-full" {...props} />
                        </div>
                      ),
                      li: ({ node, children, ...props }) => (
                        <li {...props}>
                          <span className="li-content text-white/90">{children}</span>
                        </li>
                      ),
                      p: ({ node, children, ...props }) => {
                        const onlyChild = node?.children?.[0];
                        const isStrong = onlyChild?.type === 'element' && onlyChild?.tagName === 'strong';
                      
                        if (isStrong) {
                          return <h6 className="text-lg font-semibold my-4">{children}</h6>;
                        }
                      
                        return <p className="my-2 text-white/90" {...props}>{children}</p>;
                      },
                    }}
                  >
                    {part.text}
                  </ReactMarkdown>
                </div>
              );
          }
        })}
      </div>
    </div>
  );
};

export default MessageComponent; 