module.exports = async function ($) {
  return /* html */ `
    <!doctype html>
    <html lang="en">
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="${$.t('layouts.description')}">
        <title>${$.page.title || '♥'} - ${$.t('layouts.title')}</title>
        <link rel="icon" type="image/png" href="/img/favicon.png">
        ${$.script('bundle.js')}
        ${$.style('bundle.css')}
        ${$.req.headers['x-waveorb-build'] ? '' : $.script('js/dev.js')}
      </head>
      <body id="menu-layout">
        <main>${$.page.content}</main>
      </body>
    </html>
  `
}
