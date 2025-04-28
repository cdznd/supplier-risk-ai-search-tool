# Supplier Risk AI Search Tool

An AI-powered supplier risk assessment and search tool built with Next.js, [Vercel AI SDK](https://sdk.vercel.ai) with Google's Gemini model.

## Overview

This application provides a conversational interface to query a database of suppliers, allowing users to search and filter suppliers based on various risk factors, industries, locations, and more. The tool leverages Google's Gemini 2.0 Flash model.

## Features

- **Conversational AI Interface**: Chat with the AI to query supplier information
- **Risk Assessment**: Identify suppliers based on risk scores and categories
- **Filtering Capabilities**: Search by:
  - Risk score thresholds
  - Top/lowest risk suppliers
  - Industry
  - Location
  - Risk categories (Financial, Compliance, Operational, etc.)
- **Responsive Design**: Works on desktop and mobile devices
- **Markdown Support**: Well-formatted responses with markdown rendering

## Technologies

- **Framework**: Next.js 15.3.1 with App Router
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
- `getSuppliersByRiskScore`: Filter suppliers by risk score threshold
- `getTopRiskiestSuppliers`: Get suppliers with highest risk scores
- `getLowestRiskSuppliers`: Get suppliers with lowest risk scores
- `getSuppliersByIndustry`: Filter suppliers by industry
- `getSuppliersByRiskCategory`: Filter suppliers by risk category
- `getSuppliersByLocation`: Filter suppliers by location
- `getSuppliersByMultipleRiskCategories`: Filter by multiple risk categories

## Screenshots

![Main Chat Interface](/path/to/screenshot1.png)
*Caption: The main chat interface showing a conversation with the AI assistant*

![Supplier Risk Analysis](/path/to/screenshot2.png)
*Caption: Example of a supplier risk analysis response from the AI*

![Mobile Interface](/path/to/screenshot3.png)
*Caption: Mobile responsive view of the application*
