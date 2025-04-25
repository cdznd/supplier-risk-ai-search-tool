import { streamText } from 'ai';

import { geminiModel } from '@/lib/ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: geminiModel,
    messages,
		onError({ error }) {
      console.error('Error from the streamText: ' + error);
    },
  });

  return result.toDataStreamResponse();
}