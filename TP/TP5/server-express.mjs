import express from 'express';

const app = express();
const port = 8000;

// Définition d'une route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('<html><h1>Hello from Express!</h1></html>');
});

// Lancement du serveur
const server = app.listen(port, host);

server.on("listening", () =>
  console.info(
    `HTTP listening on http://${server.address().address}:${server.address().port} with mode '${process.env.NODE_ENV}'`,
  ),
);

console.info(`File ${import.meta.url} executed.`);