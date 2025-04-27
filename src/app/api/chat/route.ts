import { streamText } from 'ai';

import { geminiModel } from '@/lib/ai';
import { getSuppliersByRiskScoreTool } from '@/lib/tools';

export const maxDuration = 30; // This function can run for a maximum of 5 seconds

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: geminiModel,
    system: 'You are a helpful assistant.',
    messages,
    toolCallStreaming: true,
    tools: {
      getSuppliersByRiskScore: getSuppliersByRiskScoreTool,
    },
    maxSteps: 3,
    toolChoice: 'auto',
  	onError({ error }) {
      console.error('Error from the streamText: ' + error);
    },
  });

  return result.toDataStreamResponse();
}