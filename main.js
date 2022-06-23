const {app, BrowserWindow} = require('electron')
const path = require('path')
function createWindow(){
    const win = BrowserWindow({
        width: 800,
        height: 600
    })
    window.load('index.html')
}
app.whenReady().then(()=> {
    createWindow()
    app.on('activate', () =>{
        if (BrowserWindow.getAllWindowns().lenght ===0) {
            createWindow()
        }
    })
    app.on('window-all-closed',()=>{
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
})