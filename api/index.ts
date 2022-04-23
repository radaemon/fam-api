// Web server
import express from 'express'
// GraphQL
import { graphqlHTTP } from 'express-graphql'
import { schema } from './schema'
import { context } from './context'
import { ToadScheduler } from 'toad-scheduler'
import { job1 } from './cron/insertLatestLooksExchangeLog'

const scheduler = new ToadScheduler()

// GraphQL Endpoint MW
const app = express()
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: context,
  })
)

app.get('/', (_, res) => {
  res.send('Hello World!')
})

// Start the server
app.listen(3000, () => {
  scheduler.addSimpleIntervalJob(job1)
  console.log('Listening on http://localhost:3000/graphql')
})
