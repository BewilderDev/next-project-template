# Next.js Template with Docker

A modern Next.js template with Docker support, Sass/SCSS styling, and a convenient development workflow.

## Features

- 🐳 Docker and Docker Compose support
- 🎨 Sass/SCSS for styling
- 📱 Responsive design
- 🔄 Hot reloading in development
- 📦 TypeScript support
- 🛠️ Convenient development commands
- 🚀 Production-ready Docker configuration

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-template
```

2. Start the development server:
```bash
# Using Docker Compose directly
docker-compose up dev

# Or using the make commands
# Using PowerShell
.\make.cmd up

# Using Unix-like systems
make up
```

The development server will be available at `http://localhost:3001`

## Available Commands

### Development
```bash
# Start development server (with hot reload)
docker-compose up dev

# Or using make commands
.\make.cmd dev

# Build and start development server
.\make.cmd up

# Start development server (without logs)
.\make.cmd start

# Stop development server
.\make.cmd stop

# Shell into development container
.\make.cmd bash
```

### Production
```bash
# Start production server
docker-compose up prod

# Or using make commands
.\make.cmd prod

# Build Docker images
.\make.cmd build
```

### Maintenance
```bash
# Install dependencies
.\make.cmd install

# Stop all containers
.\make.cmd down

# Clean up Docker resources
.\make.cmd clean
```

## Development

The project uses:
- Next.js 14 with App Router
- Sass/SCSS for styling
- Docker for containerization
- TypeScript for type safety

## Deployment

This template is ready for deployment to various platforms:

### Vercel (Recommended)
- Push your code to GitHub
- Connect to Vercel
- Automatic deployments with zero configuration

### Docker-based Deployment
- Build the production image: `docker build -t your-app-name .`
- Deploy to any platform supporting Docker containers:
  - AWS ECS
  - Google Cloud Run
  - Azure Container Instances
  - DigitalOcean App Platform
  - Heroku

### Manual VPS Deployment
- Set up a VPS with Node.js
- Clone the repository
- Install dependencies
- Build and run:
  ```bash
  npm install
  npm run build
  npm start
  ```

## Port Configuration
- Development: Port 3001 (http://localhost:3001)
- Production: Port 3000 (http://localhost:3000) 