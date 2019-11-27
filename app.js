const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let appWindow;

function initWindow() {
  appWindow = new BrowserWindow({
    // fullscreen: true,
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    }
  });
  appWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: 'file:',
      slashes: true
    })
  );
}

app.on('ready', initWindow);

// Close when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (win === null) {
    initWindow();
  }
});
