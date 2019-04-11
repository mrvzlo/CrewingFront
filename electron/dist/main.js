"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win;
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
function createWindow() {
    var nativeImage = require('electron').nativeImage;
    var image = nativeImage.createFromPath(path.join(__dirname, '/../../dist/CrewingAngular/assets/favicon.ico'));
    win = new electron_1.BrowserWindow({ width: 800, height: 600, icon: image });
    win.setMenu(null);
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/CrewingAngular/index.html"),
        protocol: 'file:',
        slashes: true,
    }));
    win.on('closed', function () {
        win = null;
    });
}
//# sourceMappingURL=main.js.map