module.exports = async function ($) {
  return /* html */ `
    <!doctype html>
    <html lang="${$.lang}">
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
      <body id="dialog-layout">
        <div class="dialog">
          <div class="dialog-header">
            <h1>${$.page.title}</h1>
            <a class="hq-close" title="Back" href="#" onclick="history.go(-1);return false">
              <img src="/img/icons/close.svg" alt="icon" class="reset-icon hq-icon">
            </a>
          </div>
          <div id="flash"></div>
          <div id="dialog-content">${$.page.content}</div>
        </div>
      </body>
    </html>
  `
}
