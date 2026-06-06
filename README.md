# Lenovo LOQ 15 Scrollytelling Experience

A high-end, premium scrollytelling landing page crafted for the Lenovo LOQ 15 gaming laptop. This project delivers an Apple-level cinematic presentation utilizing smooth scroll-linked animations and a dynamic HTML5 Canvas image sequence to showcase the laptop's disassembly and reassembly process, highlighting its internal engineering and performance capabilities.

## Features

- **Cinematic Scrollytelling**: Engaging, scroll-linked storytelling that synchronizes editorial content with the visual breakdown of the laptop.
- **Hardware-Accelerated Canvas Animation**: Highly performant, frame-by-frame HTML5 Canvas rendering of the Lenovo LOQ 15 exploding and reassembling.
- **Premium Aesthetics**: Minimalist design with sophisticated typography, precise color matching, dark mode styling, and glassmorphic UI elements.
- **Smooth Animations**: Powered by Framer Motion for fluid transitions, micro-animations, and dynamic text reveal effects.
- **Fully Responsive**: Carefully adapted experiences across mobile, tablet, and desktop viewports.

## Tech Stack

- **Framework**: [Next.js 16+ (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Graphics**: HTML5 `<canvas>` for image sequence rendering
- **Utilities**: `clsx`, `tailwind-merge`

## Getting Started

First, ensure you have the required dependencies installed:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the experience.

## Project Structure

- `/src/app`: Contains the Next.js App Router pages and layouts.
- `/src/components`: Reusable React components including the Canvas sequence renderer, typography elements, and layout containers.
- `/public`: Static assets including fonts.
- `/Exploded loq laptop`: Directory containing the high-resolution image sequence frames used for the Canvas animation.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
