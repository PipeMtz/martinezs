import express from "express";

const app = express();
app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
    }
    .listen(3000, () => console.log('Server ready on port 3000'));

export default app;