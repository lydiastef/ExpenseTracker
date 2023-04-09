const express = require('express');
const app = express();
const cors = require('cors');

const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Using routes
app.use(require('./Routes/Route'));

app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
})