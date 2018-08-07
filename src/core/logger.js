
import {createLogger as _createLogger, format, transports} from 'winston'
import compose from 'koa-compose'
import {logger as koaLogger} from 'debox-logger'

export let logger

export const createLogger = (options = {}) => {
  options.format = options.format || format.combine(format.splat(), format.simple())
  options.transports = [new transports.Console()]
  return _createLogger(options)
}

export const loggerMiddleware = (app, payload = {}) => {
  logger = createLogger()
  payload.logger = logger
  app.use(koaLogger(payload))
}

export default logger
