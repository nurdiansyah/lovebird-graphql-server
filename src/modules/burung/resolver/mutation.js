// @flow

import LovebirdManager from '../LovebirdManager'
import IndukManager from '../IndukManager'
import JenisLovebirdManager from '../JenisLovebirdManager'

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

const registerLovebird = (root: Object, args: Object, context: Object) => {
  context.lovebirdManager = new LovebirdManager(context)
  return context.lovebirdManager
    .register({
      ring: args.ring,
      ...args.input
    })
    .then(lovebird => lovebird)
}

const updateLovebird = (root: Object, args: Object, context: Object) => {
  context.lovebirdManager = new LovebirdManager(context)
  return context.lovebirdManager.updateLovebird(args).then(lovebird => lovebird)
}

const removeLovebird = (root: Object, args: Object, context: Object) => {
  context.lovebirdManager = new LovebirdManager(context)
  return context.lovebirdManager.removeLovebird(args.ring).then(affectedRaw => affectedRaw)
}

const registerInduk = (root: Object, args: Object, context: Object) => {
  context.indukManager = new IndukManager(context)
  return context.indukManager.registerInduk(args.jantanRing, args.betinaRing)
}

const createJenisLovebird = (root: Object, args: Object, context: Object) => {
  const jenisLovebirdManager = _createJenisLovebirdManager(context)
  return jenisLovebirdManager.createJenisLovebird(args.input)
}

export default {
  registerLovebird,
  registerInduk,
  createJenisLovebird
}
