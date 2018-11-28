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
  context.lovebirdManager = _createLovebirdManager(context)
  return context.lovebirdManager.getLovebird(args.ring).then(lovebird => lovebird)
}

const listLovebird = (obj: Object, args: {ring: string}, context: Object) => {
  context.lovebirdManager = _createLovebirdManager(context)
  return context.lovebirdManager.findAllLovebird()
}

const getJenisLovebird = (obj: Object, args: {id: string}, context: Object) => {
  context.jenisLovebirdManager = _createJenisLovebirdManager(context)
  return context.jenisLovebirdManager.getJenisLovebird(Number(args.id)).then(jenisLovebird => jenisLovebird)
}

const listJenisLovebird = (root: Object, args: Object, context: Object) => {
  context.jenisLovebirdManager = _createJenisLovebirdManager(context)
  return context.jenisLovebirdManager.listJenisLovebird().then(result => result)
}

const listInduk = (root: Object, args: Object, context: Object) => {
  context.indukManager = _createIndukManager(context)
  return context.indukManager.listInduk()
}

const getInduk = (root: Object, args: Object, context: Object) => {
  context.indukManager = _createIndukManager(context)
  return context.indukManager.getInduk(args.id)
}

const logLovebird = (root: Object, args: Object, context: Object) => {
  context.lovebirdManager = _createLovebirdManager(context)
  return context.lovebirdManager.getLogsLovebird(args.ring)
}

const logInduk = (root: Object, args: Object, context: Object) => {
  context.indukManager = _createIndukManager(context)
  return context.indukManager.getLogsInduk(args.idInduk)
}

export default {
  getLovebird,
  listLovebird,
  getJenisLovebird,
  listJenisLovebird,
  getInduk,
  listInduk,
  logLovebird,
  logInduk
}
