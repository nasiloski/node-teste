const express = require('express')
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send({ message: 'Fala ae irmão' })
})


app.listen(3333);