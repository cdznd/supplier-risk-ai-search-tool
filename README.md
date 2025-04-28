# Supplier Risk AI Search Tool
An AI-powered supplier risk assessment and search tool built with Next.js, and the [Vercel AI SDK](https://sdk.vercel.ai), leveraging Google's Gemini model and custom tool/function calling.

## Overview
This application provides a conversational interface to query a database of suppliers, allowing users to search and filter suppliers based on risk score, industries, locations, and more. The tool leverages Google's Gemini 2.0 Flash model with the [Google Generative AI Provider](https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai.)

## Features
- **Conversational AI Interface**: Chat with the AI to query supplier information
- **Risk Assessment**: Identify suppliers based on risk scores and categories
- **Filtering Capabilities**: Search by:
  - Risk score thresholds
  - Top/lowest risk suppliers
  - Industry
  - Location
  - Risk categories (Financial, Compliance, Operational, etc.)
  - And more
- **Responsive Design**: Works on desktop and mobile devices
- **Markdown Support**: Well-formatted responses with a beautiful markdown rendering

## Technologies
- **Framework**: Next.js 15 with App Router
- **AI**: Google Gemini 2.0 Flash via [Vercel AI SDK](https://sdk.vercel.ai)
- **Frontend**: React 19, TailwindCSS 4
- **TypeScript**: Type safety
- **Libraries**:
  - `ai`: v4.3.9 - Core AI functionality 
  - `@ai-sdk/google`: v1.2.13 - Google AI models integration
  - `@ai-sdk/react`: v1.2.9 - React hooks for AI
  - `react-markdown`: v10.1.0 - Markdown rendering
  - `rehype-highlight`: v7.0.2 - Syntax highlighting
  - `remark-gfm`: v4.0.1 - GitHub Flavored Markdown support
  - `zod`: v3.24.3 - Schema validation
  - `react-loading-indicators`: v1.0.0 - Loading state indicators

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cdznd/supplier-risk-ai-search-tool.git
cd supplier-risk-ai-search-tool

# Install dependencies
npm install

# Start development server with TurboRepo
npm run dev
```

The application will be available at http://localhost:3000

### Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                # Next.js app router
│   ├── api/            # API routes
│   │   └── chat/       # Chat API endpoint
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main chat interface
├── components/         # React components
│   ├── chat/           # Chat-related components
│   └── layout/         # Layout components  
├── lib/                # Shared libraries
│   ├── db/             # Mock database
│   │   ├── data.json   # Supplier data
│   │   └── models/     # Data models functions
│   ├── ai.ts           # AI model configuration
│   └── tools.ts        # AI tool definitions
└── styles/             # Global styles
```

## API Tools

The application provides several AI tools for supplier queries:

- `listSuppliers`: Get a list of suppliers with optional limit
  - example: "List me 5 organizations" or "List me 7 organizations in the format of a table"
- `getSuppliersByRiskScore`: Filter suppliers by risk score threshold
  - example: "List suppliers with risk scores **above** 7"
- `getTopRiskiestSuppliers`: Get suppliers with highest risk scores
  - example: "What are the top 3 suppliers with the **highest risk scores**?"
- `getLowestRiskSuppliers`: Get suppliers with lowest risk scores
  - example: "Show the 3 suppliers with the lowest risk scores"
- `getSuppliersByIndustry`: Filter suppliers by industry
  - example: "Show me all suppliers in the **healthcare industry**"
- `getSuppliersByRiskCategory`: Filter suppliers by risk category
  - example: "Which suppliers have financial compliance risks?"
- `getSuppliersByLocation`: Filter suppliers by location
  - example: "Show suppliers located in Germany"
- `getSuppliersByMultipleRiskCategories`: Filter by multiple risk categories
  - example: "Which suppliers have financial compliance risks?"

## Screenshots

## Screenshots

<p align="center">
  <table>
    <tr>
      <td><img src="public/project_screenshots/ss3.png" alt="" width="500"></td>
      <td><img src="public/project_screenshots/ss2.png" alt="" width="500"></td>
    </tr>
    <tr>
      <td><img src="public/project_screenshots/ss1.jpeg" alt="" width="500"></td>
      <td><img src="public/project_screenshots/ss4.png" alt="" width="500"></td>
    </tr>
  </table>
</p>