// @flow

import compose from 'koa-compose'

const handlerError = async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    if (e.isBoom) {
      ctx.body = e.output.payload
      ctx.status = e.output.statusCode
    }
  }
}

export default () => compose([handlerError])
