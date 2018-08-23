const express = require('express');

const app = express();
app.use(express.static('.'))
app.get('/', (res, req) => {
    res.sendFile('index.html')
})

app.listen(3000, () => {
    console.log('running on port 3000')
})