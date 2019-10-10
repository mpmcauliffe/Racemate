const express               = require('express')
const path                  = require('path')
const graphqlHttp           = require('express-graphql')
const expressPlayground     = require('graphql-playground-middleware-express').default


const connectDB             = require('./config/db')
const typeDefs              = require('./graphql/schema/index')
const resolvers             = require('./graphql/resolvers/index')

const app                   = express()
const PORT                  = process.env.PORT || 8080 


connectDB()

app.use(express.json({ extended: false }))

app.use(
    '/graphql',
    graphqlHttp({
        schema: typeDefs,
        rootValue: resolvers,
        graphiql: true,
    })
)
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))


// app.get('/', (req, res) => {
//     res.json({ msg: 'welcome to the contacts app'})
// })


// serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//     // set static folder
//     app.use(express.static('client/build'))

//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
// }


app.listen(PORT, () => console.log(`Server up on ${PORT}`))
