import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT: number = parseInt(process.env.PORT || '3000', 10);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const gracefulShutdown = (): void => {
  console.log('Received shutdown signal. Starting graceful shutdown...');
  
  server.close(() => {
    console.log('Server closed. No longer accepting new connections.');
    
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown); 