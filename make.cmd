@echo off
setlocal

:: Check if Docker is running
docker info >nul 2>&1
if %errorLevel% neq 0 (
    echo Error: Docker is not running.
    echo Please start Docker Desktop and try again.
    pause
    exit /b 1
)

if "%1"=="" goto help
if "%1"=="help" goto help
if "%1"=="dev" goto dev
if "%1"=="up" goto up
if "%1"=="start" goto start
if "%1"=="stop" goto stop
if "%1"=="bash" goto bash
if "%1"=="build" goto build
if "%1"=="prod" goto prod
if "%1"=="down" goto down
if "%1"=="clean" goto clean
if "%1"=="install" goto install

:dev
echo Starting development server...
docker compose up dev
goto end

:up
echo Building and starting development server...
docker compose up --build dev
goto end

:start
echo Starting development server...
docker compose start dev
goto end

:stop
echo Stopping development server...
docker compose stop dev
goto end

:bash
echo Opening shell in development container...
docker compose exec dev sh
goto end

:build
echo Building Docker images...
docker compose build
goto end

:prod
echo Starting production server...
docker compose up prod
goto end

:down
echo Stopping all containers...
docker compose down
goto end

:clean
echo Cleaning up Docker resources...
docker compose down -v
docker system prune -f
goto end

:install
echo Installing dependencies...
docker compose run --rm dev npm install
goto end

:help
echo Usage in PowerShell:
echo   .\make.cmd up       - Build and start development server
echo   .\make.cmd start    - Start development server
echo   .\make.cmd stop     - Stop development server
echo   .\make.cmd bash     - Shell into development container
echo   .\make.cmd dev      - Start development server (with logs)
echo   .\make.cmd build    - Build Docker images
echo   .\make.cmd prod     - Start production server
echo   .\make.cmd down     - Stop all containers
echo   .\make.cmd clean    - Clean up Docker resources
echo   .\make.cmd install  - Install dependencies
echo   .\make.cmd help     - Show this help message
echo.
echo Note: Make sure Docker Desktop is running before using these commands.
goto end

:end
endlocal 