# Express Backend

A TypeScript-based Express.js backend application with custom port configuration.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
- Copy `.env.example` to `.env` (if not already present)
- Modify the PORT in `.env` if you want to use a different port (default is 3000)

## Running the Application

Development mode (with auto-reload):
```bash
npm run dev
```

Build the TypeScript code:
```bash
npm run build
```

Production mode:
```bash
npm start
```

The server will start on the configured port (default: 3000).

## Project Structure

- `src/` - TypeScript source files
- `dist/` - Compiled JavaScript files (created after build)
- `server.ts` - Main application file

## API Endpoints

- GET `/`: Welcome message 