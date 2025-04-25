// Function to replace ** with proper markdown for bold
export const formatMarkdownText = (text: string) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '**$1**')  // Keep bold syntax
    .replace(/__(.*?)__/g, '**$1**');     // Convert underscore to bold
}; 