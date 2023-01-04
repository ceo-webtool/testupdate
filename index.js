const { app, BrowserWindow } = require('electron')
const { session } = require('electron');
const fs=require('fs');
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
         contextIsolation: false,
         enableRemoteModule: true
      }
    })


    win.loadFile('index.html');

  }

  // Save the user's session data when the app is closed

  // Restore the user's session data when the app is opened
  app.on('ready', () => {
    createWindow();
  });
