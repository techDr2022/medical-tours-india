# Medical Tours India - Homepage

A trust-focused medical tourism lead generation website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Cost Estimator**: Step-by-step treatment cost estimation form
- **Lead Form**: Comprehensive patient information collection with file upload
- **WhatsApp Integration**: Sticky WhatsApp button and WhatsApp-first conversion flow
- **Mobile-First Design**: Responsive layout optimized for all devices
- **Trust-Focused UI**: Calm, reassuring design with minimal colors and white space

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Page sections
│   ├── CostEstimator.tsx   # Cost estimation form
│   ├── LeadForm.tsx        # Lead capture form
│   ├── WhatsAppButton.tsx  # Sticky WhatsApp button
│   ├── MobileCTA.tsx       # Mobile sticky CTA
│   └── Footer.tsx          # Footer component
└── lib/
    └── utils.ts            # Utility functions
```

## Key Components

### Hero Section
- Two-column layout (content + cost estimator)
- Cost estimator opens lead form modal on submit

### Lead Form
- Comprehensive patient information collection
- File upload for medical reports
- Auto-opens WhatsApp after submission

### Global Elements
- Sticky WhatsApp button (bottom-right)
- Mobile sticky CTA bar
- Smooth scrolling navigation

## Customization

- WhatsApp number: Update `WHATSAPP_NUMBER` constant in components
- Colors: Modify Tailwind config in `tailwind.config.ts`
- Content: Edit section components in `components/sections/`

## Build for Production

```bash
npm run build
npm start
```
