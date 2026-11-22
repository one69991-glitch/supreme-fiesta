const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 800, title: 'ASAP PHARMACY',
    icon: path.join(__dirname, 'icon-512.png'),
    webPreferences: { contextIsolation: true }
  });
  Menu.setApplicationMenu(null);
  win.maximize();
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
