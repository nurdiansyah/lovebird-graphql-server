// @flow

import 'babel-polyfill'
import Koa from 'koa'
import Router from 'koa-router'
import BodyParser from 'koa-bodyparser'
import model from './model'
import config from './config'
import {loggerMiddleware, getLogger} from './core/logger'
import graphqlServer from './graphql'

const app = new Koa()
const router = new Router()
const bodyParser = new BodyParser()
const logger = getLogger()

// middleware
app.use(bodyParser)
app.use((context, next) => {
  context.db = model
  return next()
})

// loggerMiddleware(app)
graphqlServer.applyMiddleware({app, path: '/server'})

// router
router.get('/', async (ctx, next) => {
  await next()
})

// router
app.use(router.routes())

const port = config.app.port || process.env.PORT || 3000
const url = config.app.url || process.env.url || 'localhost'
logger.info('current environment: %s', process.env.NODE_ENV)
logger.info('server started at port: %d', port)
app.listen({port}, () => {
  logger.info(`🚀 Graphql Server ready at http://${url}:${port}${graphqlServer.graphqlPath}`)
})
