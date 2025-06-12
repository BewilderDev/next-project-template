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

### Using Docker Compose (Works on both Windows and Unix)
```bash
docker-compose up dev
```

### Using Make Commands

#### Windows (PowerShell)
```powershell
# Start development server (with hot reload)
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

#### Unix-based Systems (Linux/macOS)
```bash
# Start development server (with hot reload)
make dev

# Build and start development server
make up

# Start development server (without logs)
make start

# Stop development server
make stop

# Shell into development container
make bash
```

The development server will be available at `http://localhost:3001`

## Available Commands

### Development

#### Windows (PowerShell)
```powershell
# Start development server (with hot reload)
docker-compose up dev
# OR
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

#### Unix-based Systems (Linux/macOS)
```bash
# Start development server (with hot reload)
docker-compose up dev
# OR
make dev

# Build and start development server
make up

# Start development server (without logs)
make start

# Stop development server
make stop

# Shell into development container
make bash
```

### Production

#### Windows (PowerShell)
```powershell
# Start production server
docker-compose up prod
# OR
.\make.cmd prod

# Build Docker images
.\make.cmd build
```

#### Unix-based Systems (Linux/macOS)
```bash
# Start production server
docker-compose up prod
# OR
make prod

# Build Docker images
make build
```

### Maintenance

#### Windows (PowerShell)
```powershell
# Install dependencies
.\make.cmd install

# Stop all containers
.\make.cmd down

# Clean up Docker resources
.\make.cmd clean
```

#### Unix-based Systems (Linux/macOS)
```bash
# Install dependencies
make install

# Stop all containers
make down

# Clean up Docker resources
make clean
```

## Development

The project uses:
- Next.js 14 with App Router
- Sass/SCSS for styling
- Docker for containerization
- TypeScript for type safety

## Port Configuration
- Development: Port 3001 (http://localhost:3001)
- Production: Port 3000 (http://localhost:3000)
