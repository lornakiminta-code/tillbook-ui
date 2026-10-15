// main.js: the entry point. It starts the app and opens the first window.
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'TillBook',
    autoHideMenuBar: true
  });
  // The home page now lives in the pages folder.
  win.loadFile(path.join(__dirname, 'pages', 'index.html'));
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
