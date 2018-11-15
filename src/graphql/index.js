// @flow

import {ApolloServer} from 'apollo-server-koa'
import resolvers from './resolvers'
import typeDefs from './typedefs'

const apolloServer: any = new ApolloServer({
  resolvers,
  typeDefs,
  playground:
    process.env.NODE_ENV === 'production'
      ? false
      : {
          settings: {
            'editor.theme': 'light',
            'editor.cursorShape': 'line'
          }
        }
})

export default apolloServer
