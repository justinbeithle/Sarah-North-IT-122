// API response can contain duplicate facts
// Modify this code so that response does not return duplicate facts

import express from 'express';
import { data } from './facts.js';

const app = express();
app.set('port', process.env.PORT || 3000);

const numFacts = data.length;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get('/api/facts', (req, res) => {
  console.log(req.query); // display parsed querystring object
  console.log(req.query.number);
  const number = parseInt(req.query.number, 10);

  const factsArray = [];
  const selectedFactsIndexes = new Set();

  for (let i = 0; i < number; i++) {
    let facts_index;
    do {
      facts_index = getRandomInt(numFacts);
    } while (selectedFactsIndexes.has(facts_index));

    selectedFactsIndexes.add(facts_index);  // < === this is what keeps it from doing the same fact twice 
    factsArray.push(data[facts_index]);
  }

  res.type('json');
  res.status(200);
  res.json({
    facts: factsArray,
    success: true,
  });
});

app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
  console.log('Express started');
});