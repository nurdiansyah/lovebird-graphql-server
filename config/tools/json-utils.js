const fs = require('fs')

exports.default = {
  readJson: (path, cb) => {
    const data = fs.readFileSync(require.resolve(path))
    return JSON.parse(data)
  }
}
