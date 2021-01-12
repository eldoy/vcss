const fs = require('fs')

async function run() {
  const files = fs.readdirSync('scss')
  for (const name of files) {
    if (name.startsWith('_')) {
      const file = fs.readFileSync(name, 'utf8')
      console.log(file)
    }
  }
}

run()