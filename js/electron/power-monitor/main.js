// Modules
const { app, BrowserWindow, powerMonitor } = require("electron");
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}
app.on("ready", () => {
  createWindow();
  // https://www.electronjs.org/docs/latest/api/power-monitor
  // 잠자기 모드 해제시
  powerMonitor.on("resume", () => {
    console.log("잠자기 끝");
  });
  // 잠자기 모드 시작시
  powerMonitor.on("suspend", () => {
    console.log("잠자기 시작");
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
