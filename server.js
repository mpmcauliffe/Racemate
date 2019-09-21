const express               = require('express')
const bodyParser            = require('body-parser')
const graphqlHttp           = require('express-graphql')

const connectDB             = require('./config/db')

const app                   = express()
const PORT                  = process.env.PORT || 5000


connectDB()

app.use(bodyParser.json())

app.use(
    '/graphql',
    graphqlHttp({
        schema: null,
        rootValue: null,
        graphiql: true,
    })
)


app.listen(PORT, () => console.log(`Server up on port ${PORT}`))
