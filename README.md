# Vite Express Starter

A full-stack starter template featuring:
- **Frontend**: Vite + React + JavaScript
- **Backend**: Express.js + Node.js
- **Development**: Hot reload, concurrent development, modern tooling

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
- Frontend dev server on `http://localhost:3000`
- Backend API server on `http://localhost:5000`

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
│   │   ├── App.jsx        # Main React component
│   │   ├── App.css        # Component styles
│   │   ├── main.jsx       # React entry point
│   │   └── index.css      # Global styles
│   ├── index.html         # HTML template
│   ├── vite.config.js     # Vite configuration
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
- 📱 Responsive design
- 🎨 Modern CSS with gradients and glassmorphism
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

## 🎯 Next Steps

1. **Database Integration**: Add MongoDB, PostgreSQL, or your preferred database
2. **Authentication**: Implement JWT authentication
3. **State Management**: Add Redux, Zustand, or React Context for complex state
4. **Styling**: Add Tailwind CSS, styled-components, or your preferred styling solution
5. **Testing**: Add Jest, Vitest, and testing libraries
6. **Deployment**: Configure for Vercel, Netlify, Heroku, or your preferred platform

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this starter template!

## 📄 License

MIT License - feel free to use this template for any project! 