const { app, BrowserWindow, Notification } = require('electron/main');
const path = require('path');
const { ipcMain } = require('electron');

app.setName('Cheer Up');
app.setAppUserModelId('Cheer Up'); 
const cheeringQuotes = [
    { text: "GO GO GO! You can do it! 🎉", emoji: "🎉" },
    { text: "YAAAAS! You're crushing it! 🔥", emoji: "🔥" },
    { text: "Woohoo! Look at you go! 🥳", emoji: "🥳" },
    { text: "You're on FIRE today! 🔥🔥🔥", emoji: "🔥" },
    { text: "BOOM! Another win for you! 💥", emoji: "💥" },
    { text: "High five! ✋ You're killing it!", emoji: "✋" },
    { text: "Let's GOOOO! 🚀🚀🚀", emoji: "🚀" },
    { text: "Champion vibes only! 👑", emoji: "👑" },
    { text: "You're absolutely UNSTOPPABLE! 💨", emoji: "💨" },
    { text: "Woot woot! Keep it up! 🎊", emoji: "🎊" },
];

function getRandomQuote() {
  return cheeringQuotes[Math.floor(Math.random() * cheeringQuotes.length)];
}

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 350,
        height: 400,
        resizable: false,
        maximizable: false,
        fullscreenable: false,
        frame: false, 
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: false,
            nodeIntegration: true
        }
    });
    win.setMenuBarVisibility(false);
    win.loadFile('index.html');
    ipcMain.on('closeApp', () => {
        win.close();
    });
    ipcMain.on('minimizeApp', () => {
      win.minimize();
    });
    ipcMain.on('maximizeApp', () => {
      win.maximize();
    });
    // Send initial quote to renderer when window loads
    win.webContents.on('did-finish-load', () => {
        const initialQuote = getRandomQuote();
        win.webContents.executeJavaScript(`
        document.getElementById('quote').textContent = "${initialQuote.text.replace(/"/g, '\\"')}";
        `);
    });
}

function showNotification() {
    const quote = getRandomQuote();
    new Notification({ 
        title: "Cheer Up! 🌟", 
        body: quote.text,
        silent: false
    }).show();
}

app.whenReady().then(() => {
    createWindow();
    
    // Show initial notification
    setTimeout(() => {
        showNotification();
    }, 1000);
    
  // Optional: Show notifications every hour
  setInterval(showNotification, 60 * 60 * 1000);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});