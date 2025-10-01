const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(require('cors')());

app.get('/', (req, res) => {
    res.send('Welcome to Remote Work!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});