# University Website Content Management System

## Overview

This is a full-stack University Website Content Management System (WCMS) built with React, Express, and PostgreSQL. The application provides a comprehensive admin dashboard for managing university website content, including pages, media, users, and navigation menus. It features role-based access control, content approval workflows, and multilingual support designed specifically for educational institutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript and Vite for fast development and building
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming and custom university branding
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage**: Dual storage implementation with in-memory storage for development and database storage for production
- **Session Management**: Express sessions with PostgreSQL store using connect-pg-simple
- **Development**: Hot module replacement with Vite middleware integration

### Database Schema Design
The system uses a comprehensive schema with four main entities:
- **Users**: Role-based user management (admin, editor, author, contributor)
- **Content**: Page content with slug-based routing and approval workflows
- **Media**: File management with categorization and metadata tracking
- **Menu Items**: Hierarchical navigation structure with parent-child relationships

### Authentication & Authorization
- **Role-based Access Control**: Multi-tier user roles with different permission levels
- **Session-based Authentication**: Secure session management with PostgreSQL persistence
- **User Management**: Complete CRUD operations for user accounts with status tracking

### Content Management Features
- **Approval Workflow**: Content requires approval before publication
- **Media Management**: File upload and organization with category-based filtering
- **Menu Management**: Drag-and-drop hierarchical menu builder
- **Multilingual Support**: English/Marathi language toggle functionality

### Accessibility & Usability
- **Responsive Design**: Mobile-first approach with collapsible sidebar navigation
- **Accessibility Options**: High contrast mode and large font size toggles
- **User Experience**: Toast notifications, loading states, and intuitive navigation

## External Dependencies

### Database
- **Neon PostgreSQL**: Cloud PostgreSQL database service for production
- **Drizzle ORM**: Type-safe database toolkit with migration support
- **Drizzle Kit**: Database migration and introspection tooling

### UI & Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom university theming
- **Lucide React**: Modern icon library for consistent iconography
- **Google Fonts**: Inter font family for professional typography

### Development Tools
- **Vite**: Fast build tool with HMR and development server
- **TypeScript**: Type safety across the entire application stack
- **Replit Integration**: Development environment optimization with cartographer plugin

### Third-party Services
- **Form Validation**: Zod schema validation with React Hook Form resolvers
- **Date Handling**: date-fns for consistent date formatting and manipulation
- **Image Services**: Unsplash integration for placeholder images in media management