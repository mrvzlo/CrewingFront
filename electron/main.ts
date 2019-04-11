import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'

let win: BrowserWindow

app.on('ready', createWindow)

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

function createWindow() {
    const nativeImage = require('electron').nativeImage;
    var image = nativeImage.createFromPath(path.join(__dirname, '/../../dist/CrewingAngular/assets/favicon.ico')); 
    win = new BrowserWindow({ width: 800, height: 600, icon: image})
    win.setMenu(null)
    win.loadURL(
        url.format({
          pathname: path.join(__dirname, `/../../dist/CrewingAngular/index.html`),
          protocol: 'file:',
          slashes: true,
        })
      )
    
      win.on('closed', () => {
        win = null
      })
  }