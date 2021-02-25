const fs = require('fs')
const file = fs.readFileSync('scss/vcss.scss', 'utf8')
const lines = file.split('\n').map(line => {
  const matches = line.match(/@import '([a-z]+)'/)
  if (matches) {
    return fs.readFileSync(`scss/_${matches[1]}.scss`, 'utf8')
  }
  return line
})

fs.writeFileSync(`dist/vcss.scss`, lines.join('\n'))
