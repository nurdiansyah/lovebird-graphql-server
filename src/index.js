import 'babel-polyfill'
import Koa from 'koa'
import Router from 'koa-router'
import BodyParser from 'koa-bodyparser'
import {loggerMiddleware, logger} from './core/logger'
import {graphqlKoa, graphiqlKoa} from 'graphql-server-koa'
import schema from './schema'

const app = new Koa()
const router = new Router()
const bodyParser = new BodyParser()

// middleware
app.use(bodyParser)
loggerMiddleware(app)
router.get('/', (ctx, next) => {
  logger.info(ctx)
  ctx.body = 'test'
})

router.post('/graphql', graphqlKoa({schema}))

if (process.env.NODE_ENV !== 'production') {
  router.get('/graqphiql', graphiqlKoa({endpointURL: '/graphql'}))
}

// router
app.use(router.routes())
app.listen()

const port = process.env.PORT || 3000
logger.info('current environment: %s', process.env.NODE_ENV)
logger.info('server started at port: %d', port)
app.listen(port)
