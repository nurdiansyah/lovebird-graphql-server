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
  context.lovebirdManager = _createLovebirdManager(context)
  return context.lovebirdManager
    .register({
      ring: args.ring,
      ...args.input
    })
    .then(lovebird => lovebird)
}

const updateLovebird = (root: Object, args: Object, context: Object) => {
  context.lovebirdManager = _createLovebirdManager(context)
  return context.lovebirdManager.updateLovebird(args).then(lovebird => lovebird)
}

const removeLovebird = (root: Object, args: Object, context: Object) => {
  context.lovebirdManager = _createLovebirdManager(context)
  return context.lovebirdManager.removeLovebird(args.ring).then(affectedRaw => affectedRaw)
}

const writeLogLovebird = (root: Object, args: Object, context: Object) => {
  context.lovebirdManager = _createLovebirdManager(context)
  return context.lovebirdManager.writeLogLovebird(args.ring, args.log)
}

const registerInduk = (root: Object, args: Object, context: Object) => {
  context.indukManager = _createIndukManager(context)
  return context.indukManager.registerInduk(args.jantanRing, args.betinaRing)
}

const changeInduk = (root: Object, args: Object, context: Object) => {
  context.indukManager = _createIndukManager(context)
  return context.indukManager.changeInduk(args.induk, args.jantanRing, args.betinaRing)
}

const removeInduk = (root: Object, args: Object, context: Object) => {
  context.indukManager = _createIndukManager(context)
  return context.indukManager.removeInduk(args.id)
}

const writeLogInduk = (root: Object, args: Object, context: Object) => {
  context.indukManager = _createIndukManager(context)
  return context.indukManager.writeLogInduk(args.id, args.log)
}

const createJenisLovebird = (root: Object, args: Object, context: Object) => {
  context.jenisLovebirdManager = _createJenisLovebirdManager(context)
  return context.jenisLovebirdManager.createJenisLovebird(args.input)
}

const updateJenisLovebird = (root: Object, args: Object, context: Object) => {
  context.jenisLovebirdManager = _createJenisLovebirdManager(context)
  return context.jenisLovebirdManager.updateJenisLovebird(args.id, args.inputData)
}

const removeJenisLovebird = (root: Object, args: Object, context: Object) => {
  context.jenisLovebirdManager = _createJenisLovebirdManager(context)
  return context.jenisLovebirdManager.removeJenisLovebird(args.id)
}

export default {
  registerLovebird,
  updateLovebird,
  removeLovebird,
  registerInduk,
  changeInduk,
  removeInduk,
  createJenisLovebird,
  updateJenisLovebird,
  removeJenisLovebird,
  writeLogLovebird,
  writeLogInduk
}
