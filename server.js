import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/app';

const app = express();
const PORT = process.env.PORT || 3000;

// ejs as our template engine
app.set('view engine', 'ejs');

app.use(express.json());
// build folder is the location of clien side react build files

app.use(express.static('build'));

app.get('/', (req, res) => {
  const content = ReactDOMServer.renderToString(<App />);
  res.render('index', { content: content });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
