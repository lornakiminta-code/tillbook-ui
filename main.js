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
  // Load the home page from the same folder as this file.
  win.loadFile(path.join(__dirname, 'index.html'));
}

// Create the window once Electron has finished starting.
app.whenReady().then(() => {
  createWindow();
  // On macOS, re-open a window when the dock icon is clicked.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit the app when all windows are closed (except on macOS).
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
