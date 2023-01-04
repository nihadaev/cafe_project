const connectToDatabase = require('./database/connection')
const UsersService = require('./services/users.services')
const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

app.get('/products' , async (req,res) => {
    res.send(await UsersService.getAll());
})

const main = async () => {
    const connection = await connectToDatabase();

    UsersService.init(connection);

    app.listen(8000, () => {
        console.log('listen on port 8000');
    })
}
main();
