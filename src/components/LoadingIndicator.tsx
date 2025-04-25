const LoadingIndicator = () => {
  return (
    <div className="p-4 rounded-lg bg-[#2D9954]/70 backdrop-blur-sm border-l-4 border-[#2D9954] mr-auto max-w-[85%] shadow-md animate-fade-in text-white">
      <div className="font-semibold mb-1">AI:</div>
      <div className="flex items-center">
        <div className="h-2 w-2 bg-white rounded-full animate-bounce mr-1" style={{ animationDelay: '0s' }}></div>
        <div className="h-2 w-2 bg-white rounded-full animate-bounce mr-1" style={{ animationDelay: '0.2s' }}></div>
        <div className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};

export default LoadingIndicator; 