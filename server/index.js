const express = require('express');
const app = express();
const { static } = express;
const path = require('path');


app.use('/public', static(path.join(__dirname, '../public')));
app.use(express.json())

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const init = async() => {
    try {
        const port = process.env.PORT || 3000
        app.listen(port, () => console.log(`
            Listening on port ${port}

            http://localhost:${port}/
        `))
    }
    catch(error) {
        console.log('SERVER INIT ERROR: ', error)
    }
}
init()