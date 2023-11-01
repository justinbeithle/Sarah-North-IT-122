import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/api/facts', (req, res) => {
    console.log(req.query); // Display parsed querystring object
    console.log(req.query.number);

    res.type('json');
    res.status(200);
    res.json({
        facts: [],
        success: true
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
