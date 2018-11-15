// @flow

import merge from 'lodash.merge'
import TimeStampType from './base/graphql-timestamp-type'
import lovebirdResolver from '../modules/burung/resolver'

const resolvers = {
  TimeStamp: TimeStampType
}

export default merge(resolvers, lovebirdResolver)
