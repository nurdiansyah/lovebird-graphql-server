// @flow

import redis, {RedisClient} from 'redis'
import config from '../config'

let redisManager: RedisManager

export class RedisManager {
  enable: boolean
  options: Object
  client: RedisClient
  constructor(options: Object) {
    this.options = options || config.redis || {}
    this.enable = this.options.enable
  }

  createClient(args: Object): RedisClient {
    if (this.enable) {
      this.client = redis.createClient(args)
    }
    return this.client
  }

  getClient(): RedisClient {
    return this.client || this.createClient(this.options)
  }
}

const redisManagerFactory = (_options: Object) => {
  redisManager = redisManager || new RedisManager(_options)
  return redisManager
}

export default (_options: Object) => redisManagerFactory(_options)

export const client = redisManager && redisManager.getClient()
