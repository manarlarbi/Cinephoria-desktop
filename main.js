const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },

        title: "Cinephoria",
            icon: path.join(__dirname, "public/logo.ico"),
        
    });

    // Wait for React server to start
    const startURL = "http://localhost:3000"; // React dev server
    mainWindow.loadURL(startURL);
    mainWindow.removeMenu();
    mainWindow.webContents.on('did-fail-load', () => {
        setTimeout(() => {
            mainWindow.loadURL(startURL);
        }, 1000); // Retry after 1 sec if it fails
    });
});
