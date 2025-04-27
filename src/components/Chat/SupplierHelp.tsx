import React from 'react';

const SupplierHelp: React.FC = () => {
  return (
    <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold mb-2">Supplier Search Examples</h2>
      <p className="text-sm text-gray-600 mb-3">
        Try asking questions about the supplier database:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <ExampleQuery query="What are the top 3 suppliers with the highest risk scores?" />
        <ExampleQuery query="Show me all suppliers in the healthcare industry" />
        <ExampleQuery query="Which suppliers have financial compliance risks?" />
        <ExampleQuery query="List suppliers with risk scores above 7" />
        <ExampleQuery query="Show suppliers located in Germany" />
        <ExampleQuery query="What suppliers have cybersecurity risks?" />
      </div>
    </div>
  );
};

const ExampleQuery: React.FC<{ query: string }> = ({ query }) => {
  return (
    <button 
      className="text-sm text-left p-2 bg-white rounded border border-gray-200 hover:bg-gray-100 transition-colors"
      onClick={() => {
        // Find the chat input and set its value
        const inputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (inputElement) {
          inputElement.value = query;
          inputElement.focus();
          
          // Dispatch an input event to trigger React's onChange
          const event = new Event('input', { bubbles: true });
          inputElement.dispatchEvent(event);
        }
      }}
    >
      {query}
    </button>
  );
};

export default SupplierHelp; 