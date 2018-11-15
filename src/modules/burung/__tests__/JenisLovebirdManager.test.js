import JenisLovebirdManager from '../JenisLovebirdManager'

describe('Test JenisLovebirdManager', () => {
  let jenisLovebirdManager
  beforeAll(() => {
    jenisLovebirdManager = new JenisLovebirdManager({})
  })

  it('cek methode listJenisLovebird', () => {
    const listJenisLovebird = jenisLovebirdManager.listJenisLovebird()
    console.log(listJenisLovebird)
  })
})
