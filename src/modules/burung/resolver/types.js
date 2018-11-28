// @flow
import {models} from '../loaders'
import {monthDiff} from '../../../core/date-utils'

export default {
  Lovebird: {
    jenis: (lovebird: ?models.Lovebird, args: Object, context: Object, info: Object) =>
      lovebird && lovebird.getJenis().then(jenisLovebird => jenisLovebird),
    jenisId: (lovebird: ?models.Lovebird) => lovebird && lovebird.jenisLovebirdId,
    umur: (lovebird: models.Lovebird) => {
      const lahir = lovebird.get().lahir
      const tglLahir = new Date(lahir)
      const umur = monthDiff(tglLahir, new Date())
      return umur
    }
  }
}
