const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! - Mi primera aplicación en Kubernetes');
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Application is healthy'
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

//https://www.youtube.com/watch?v=lYlBLp2ShOE
