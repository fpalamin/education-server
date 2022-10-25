const express = require('express');
const app = express();
const port = process.env.PORT || 5000;




app.get('/', (req, res) => {
    res.send('Education server Running');
});

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})