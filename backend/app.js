const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.json({
        message: 'hello',
        number: 3
    })
})

app.listen(3000, () => console.log('server in running '))