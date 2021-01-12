const fs = require('fs')
const path = require('path')

const root = process.cwd()

async function run() {
  const files = fs.readdirSync('scss')
  for (const name of files) {
    if (name.startsWith('_') && !name.startsWith('_variables')) {
      const abs = path.join(root, 'scss', name)
      let file = fs.readFileSync(abs, 'utf8')
      file = file.replace(/\$([a-z0-9-]+)/g, function(match, p1) {
        return `var(--${p1}, ${match})`
      })
      fs.writeFileSync(abs, file)
    }
  }
}

run()
