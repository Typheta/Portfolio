const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));



app.get('/data', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    const data = {
        message: 'This is the loaded data from the server.'
    };
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
