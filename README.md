# Vite Express Starter

A full-stack starter template featuring:
- **Frontend**: Vite + React + JavaScript + Tailwind CSS + shadcn/ui
- **Backend**: Express.js + Node.js
- **Development**: Hot reload, concurrent development, modern tooling
- **UI Components**: Beautiful, accessible components with shadcn/ui

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download this starter template
2. Install all dependencies:
```bash
npm run install:all
```

### Development

Start both frontend and backend concurrently:
```bash
npm run dev
```

This will start:
- Frontend dev server on `http://localhost:3001`
- Backend API server on `http://localhost:3000`

The frontend is configured to proxy API requests to the backend, so you can make requests to `/api/*` from your React components.

### Building for Production

Build both frontend and backend:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📁 Project Structure

```
├── frontend/               # React frontend (Vite)
│   ├── src/
│   │   ├── components/ui/ # shadcn/ui components
│   │   │   ├── button.jsx # Button component
│   │   │   ├── card.jsx   # Card components
│   │   │   ├── input.jsx  # Input component
│   │   │   └── badge.jsx  # Badge component
│   │   ├── lib/
│   │   │   └── utils.js   # Utility functions (cn)
│   │   ├── App.jsx        # Main React component
│   │   ├── main.jsx       # React entry point
│   │   └── index.css      # Global styles + Tailwind
│   ├── index.html         # HTML template
│   ├── vite.config.js     # Vite configuration
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── postcss.config.js  # PostCSS configuration
│   └── package.json       # Frontend dependencies
├── backend/               # Express backend
│   ├── src/
│   │   └── server.js      # Express server
│   ├── .babelrc           # Babel configuration
│   └── package.json       # Backend dependencies
├── package.json           # Root package.json with scripts
└── README.md              # This file
```

## 🛠 Available Scripts

### Root Level Scripts
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both applications for production
- `npm start` - Start production server
- `npm run install:all` - Install dependencies for all workspaces
- `npm run clean` - Remove all node_modules folders

### Frontend Scripts (run from `/frontend`)
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Scripts (run from `/backend`)
- `npm run dev` - Start with nodemon (auto-restart)
- `npm run start` - Start production server
- `npm run build` - Build with Babel

## 🔧 Features

### Frontend
- ⚡️ Vite for ultra-fast development
- ⚛️ React 18 with hooks
- 🎨 Tailwind CSS for utility-first styling
- 🧩 shadcn/ui components (Button, Card, Input, Badge)
- 🎯 Lucide React icons
- 📱 Responsive design with modern layout
- 📡 Axios for API requests
- 🔍 ESLint for code quality

### Backend
- 🚀 Express.js server
- 🔄 Hot reload with nodemon
- 🛡️ Security with Helmet
- 🌐 CORS enabled
- 📝 Request logging with Morgan
- 🗂️ Basic CRUD API example (todos)
- ⚙️ Environment variables support

### Development
- 🔄 Concurrent development (frontend + backend)
- 📦 Workspace-based project structure
- 🔧 Modern ES modules
- 🏗️ Build tools configured

## 📡 API Endpoints

- `GET /api/hello` - Welcome endpoint
- `GET /api/health` - Health check
- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo

## 🛠 Technologies & Dependencies

### Frontend Dependencies
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Ultra-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui Components**:
  - `@radix-ui/react-slot` - Composition primitive
  - `class-variance-authority` - For component variants
  - `clsx` & `tailwind-merge` - Class name utilities
  - `lucide-react` - Beautiful icon library
- **Axios** - HTTP client for API requests
- **ESLint** - Code quality and consistency

### Backend Dependencies
- **Express.js** - Fast, unopinionated web framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **Dotenv** - Environment variable management
- **Nodemon** - Auto-restart during development
- **Babel** - JavaScript transpilation

## 🧩 shadcn/ui Components Included

The starter comes with pre-configured shadcn/ui components:

- **Button** - Multiple variants (default, outline, secondary, ghost, link) and sizes
- **Card** - Card system with Header, Title, Description, Content, Footer
- **Input** - Styled form inputs with focus states and accessibility
- **Badge** - Status indicators with different variants
- **Icons** - Lucide React icons throughout the app

### Adding More Components

To add more shadcn/ui components, follow the pattern in `src/components/ui/`. Each component should:
1. Use the `cn()` utility from `src/lib/utils.js`
2. Follow the established styling patterns
3. Include proper TypeScript-style prop definitions
4. Use `class-variance-authority` for variants when needed

## 🎨 What You'll See

The starter includes a beautiful demo application featuring:

- **Modern Design** - Clean, professional interface with Tailwind CSS
- **Responsive Layout** - Works perfectly on desktop and mobile
- **Component Showcase** - Live examples of all shadcn/ui components
- **Interactive Todo Demo** - Full CRUD operations with the backend
- **Connection Status** - Visual feedback showing frontend-backend communication
- **Icon Integration** - Beautiful Lucide React icons throughout
- **Accessibility** - Proper focus states and keyboard navigation

The demo showcases a gradient background with glassmorphism effects, card-based layout, and interactive elements that demonstrate the full stack working together.

## 🎯 Next Steps

1. **Database Integration**: Add MongoDB, PostgreSQL, or your preferred database
2. **Authentication**: Implement JWT authentication with protected routes
3. **State Management**: Add Redux, Zustand, or React Context for complex state
4. **More UI Components**: Add Dialog, Select, Table, or other shadcn/ui components
5. **Dark Mode**: Implement theme switching with the included CSS variables
6. **Testing**: Add Jest, Vitest, and testing libraries
7. **Deployment**: Configure for Vercel, Netlify, Heroku, or your preferred platform

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this starter template!

## 📄 License

MIT License - feel free to use this template for any project! 