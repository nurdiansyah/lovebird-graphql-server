import _redisManager from '../RedisManager'

describe('Test RedisManager', () => {
  it('ketika menjalan redis secara normal dan aktif', done => {
    const redisManager = _redisManager({enable: true})
    const client = redisManager.getClient()
    client.on('error', err => {
      console.log(`Error ${err}`)
    })
    console.log(client.ready)
    client.set('redis test', 'ok')
    client.get('redis test', (err, response) => {
      expect(response).toBe('ok')
      done()
    })
  })
})
