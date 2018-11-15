// @flow

import LovebirdManager from '../LovebirdManager'
import JenisLovebirdManager from '../JenisLovebirdManager'
import IndukManager from '../IndukManager'

const _createLovebirdManager = (context: Object) => {
  context.lovebirdManager = new LovebirdManager(context)
  return context.lovebirdManager
}

const _createJenisLovebirdManager = (context: Object) => {
  context.jenisLovebirdManager = new JenisLovebirdManager(context)
  return context.jenisLovebirdManager
}

const _createIndukManager = (context: Object) => {
  context.indukManager = new IndukManager(context)
  return context.indukManager
}

const getLovebird = (obj: Object, args: {ring: string}, context: Object) => {
  const manager = _createLovebirdManager(context)
  return manager.getLovebird(args.ring).then(lovebird => lovebird)
}

const getJenisLovebird = (obj: Object, args: {id: string}, context: Object) => {
  const manager = _createJenisLovebirdManager(context)
  return manager.getJenisLovebird(Number(args.id)).then(jenisLovebird => jenisLovebird)
}

const listJenisLovebird = (root: Object, args: Object, context: Object) => {
  const manager = _createJenisLovebirdManager(context)
  return manager.listJenisLovebird().then(result => result)
}

const listInduk = (root: Object, args: Object, context: Object) => {
  const manager = _createIndukManager(context)
  return manager.listInduk()
}

const getInduk = (root: Object, args: Object, context: Object) => {
  const manager = _createIndukManager(context)
  return manager.getInduk(args.id)
}

const logLovebird = (root: Object, args: Object, context: Object) => {
  const manager = _createLovebirdManager(context)
  return manager.getLogsLovebird(args.ring)
}

const logInduk = (root: Object, args: Object, context: Object) => {
  const manager = _createIndukManager(context)
  return manager.getLogsInduk(args.idInduk)
}

export default {
  getLovebird,
  getJenisLovebird,
  listJenisLovebird,
  getInduk,
  listInduk,
  logLovebird,
  logInduk
}
