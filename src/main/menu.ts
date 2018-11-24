import { app, BrowserWindow } from 'electron'

let mainWindow: BrowserWindow|undefined = undefined

class AppMenu {

  setMainWindow(w) {
    mainWindow = w
  }

  menuTemplate: Array<Object> = [
  {
    label: app.getName(),
    submenu: [
      {label: 'About '+app.getName(), role: 'about'},
      {type: 'separator'},
      {label: 'Preferences', accelerator: 'Command+,'},
      {type: 'separator'},
      {label: 'Quit', accelerator: 'Command+Q', click: app.quit}
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {label: 'Undo', accelerator: 'CmdOrCtrl+Z', role: 'undo'},
      {label: 'Redo', accelerator: 'CmdOrCtrl+Y', role: 'redo'},
      {type: 'separator'},
      {label: 'Cut', accelerator: 'CmdOrCtrl+X', role: 'cut'},
      {label: 'Copy', accelerator: 'CmdOrCtrl+C', role: 'copy'},
      {label: 'Paste', accelerator: 'CmdOrCtrl+V', role: 'paste'},
      {label: 'Select All', accelerator: 'CmdOrCtrl+A', role: 'selectall'},
      {type: 'separator'},
      {label: 'Reload', accelerator: 'CmdOrCtrl+R', role: 'reload'}
    ]
  }, 
  {
    label: 'Debug',
    submenu: [
      {
        label: 'View Debug Console',
        click () {mainWindow && mainWindow.webContents.openDevTools()}
      }
    ]
  },
  {
    label: 'Help',
    submenu: [
      {label: 'Not Available'}
    ]
  }
]
}
export default new AppMenu()