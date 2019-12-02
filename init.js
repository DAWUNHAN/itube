import app from './app';

const PORT = 4001;

const handleListening = () =>
  console.log (`✅ Listening on https://localhose:${PORT}`);

app.listen (PORT, handleListening);
