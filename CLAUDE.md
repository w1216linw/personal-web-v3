# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15.4.6, React 19, and TypeScript. The project uses the App Router architecture with server and client components, Tailwind CSS v4 for styling, and Motion (formerly Framer Motion) for animations.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build**: `npm run build` 
- **Production server**: `npm start`
- **Linting**: `npm run lint` (uses Next.js ESLint configuration)

## Architecture

The project follows Next.js App Router conventions:

- **`src/app/`**: Main application directory containing pages and layouts
  - `layout.tsx`: Root layout with Geist fonts and global Header component
  - `page.tsx`: Homepage with animated hero section
  - Route-based pages: `/bio`, `/contact`, `/projects`
- **`src/components/`**: Shared React components
  - `Header.tsx`: Navigation component with active route highlighting
- **Path aliases**: `@/*` maps to `./src/*` for cleaner imports

## Tech Stack Details

- **Styling**: Tailwind CSS v4 with PostCSS configuration
- **Animations**: Motion library (v12.23.12) for component animations and page transitions
- **TypeScript**: Strict mode enabled with Next.js plugin
- **Fonts**: Geist Sans and Geist Mono via next/font/google
- **ESLint**: Uses Next.js core-web-vitals and TypeScript configurations

## Key Patterns

- Client components use `'use client'` directive for interactivity
- Motion components handle page transitions and hover animations  
- Responsive design with Tailwind's mobile-first approach
- Navigation state managed via Next.js `usePathname` hook