# Replit.md

## Overview

This is a modern full-stack web application built with React, TypeScript, Express, and PostgreSQL. The application is a business website for "Nouspai" - a construction and renovation intermediary company specializing in comprehensive home services including solar panel installation, drywall work, carpentry, custom wood furniture, and integral renovations. The site features multi-language support (Spanish/English), modern UI components, and serves as a contact point for clients seeking various construction and woodworking services. The architecture follows a clean separation between client and server code with shared TypeScript schemas.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Styling**: CSS-in-JS approach with Tailwind utility classes
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Storage**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: Hot reload with tsx for server-side TypeScript execution

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared TypeScript schemas and types
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Definition**: Centralized in `shared/schema.ts` using Drizzle's schema builder
- **Migrations**: Automated migration system with `drizzle-kit`
- **Type Safety**: Full TypeScript integration with inferred types from schema

### Authentication & Storage
- **Current Implementation**: In-memory storage with interface-based design
- **Storage Interface**: Abstracted storage layer (`IStorage`) for easy database integration
- **User Management**: Basic user CRUD operations with username/password structure
- **Extensibility**: Ready for PostgreSQL integration via Drizzle ORM

### UI Components
- **Component Library**: shadcn/ui providing accessible, customizable components
- **Theming**: CSS custom properties with light/dark mode support
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Form Components**: Integrated form controls with validation feedback

### Frontend Features
- **Multi-language Support**: Spanish/English language switching
- **Comprehensive Services**: Solar panels, drywall, custom wood furniture, carpentry, integral renovations
- **Contact Forms**: Service inquiry and contact forms for various construction services
- **Social Media Integration**: Facebook, Instagram, WhatsApp integration
- **Responsive Navigation**: Mobile-optimized navigation with collapsible menu
- **Error Handling**: 404 page with proper error logging
- **Partnership Integration**: Services sourced from partner companies while maintaining client contact through Nouspai

## Data Flow

### Client-Server Communication
1. **API Requests**: RESTful endpoints prefixed with `/api`
2. **Form Submissions**: Contact forms send data to backend for processing
3. **Language State**: Client-side language state management
4. **Query Caching**: React Query handles server state caching and synchronization

### Development Workflow
1. **Development Server**: Vite dev server with HMR for frontend
2. **Backend Development**: tsx with file watching for server reload
3. **Database Operations**: Drizzle Studio available for database management
4. **Type Checking**: Shared TypeScript configuration across client/server

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Headless UI primitives for accessibility
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **zod**: Schema validation for forms and API data

### Development Tools
- **Vite**: Build tool with React plugin and runtime error overlay
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Static type checking across the entire stack
- **drizzle-kit**: Database migration and introspection tool

### Replit-Specific
- **@replit/vite-plugin-cartographer**: Development mode navigation
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Asset Optimization**: Vite handles asset optimization and code splitting
4. **Environment Variables**: `DATABASE_URL` required for PostgreSQL connection

### Production Configuration
- **Server**: Express serves static files and API routes
- **Database**: PostgreSQL connection via environment variable
- **Session Storage**: PostgreSQL-backed sessions for scalability
- **Error Handling**: Centralized error middleware with proper status codes

### Environment Requirements
- **Node.js**: ES modules support required
- **PostgreSQL**: Database connection for production data persistence
- **Environment Variables**: `DATABASE_URL`, `NODE_ENV` for proper configuration

The application is designed to be easily deployable on platforms like Replit, with clear separation of concerns and minimal external dependencies beyond the database connection.