const { app, BrowserWindow } = require('electron');


app.on('ready', () => {

  let window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  window.loadFile(`./dist/little-crm/index.html`);

  window.on('closed', () => {
    window = null;
  });
});
