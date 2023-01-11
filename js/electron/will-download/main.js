// Modules
const { app, BrowserWindow, session } = require("electron");
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
  mainWindow.loadFile("index.html");
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  const ses = session.defaultSession;
  // 다운로드 시작 이벤트
  ses.on("will-download", (e, downloadItem, webContents) => {
    const fileName = downloadItem.getFilename();
    const fileSize = downloadItem.getTotalBytes();
    // 바탕화면으로 다운로드 경로 설정
    downloadItem.setSavePath(app.getPath("desktop") + `/${fileName}`);
    // 다운로드가 시작되고 얼마나 받았는지 분기점을 확인할 수 있다.
    downloadItem.on("updated", (e, state) => {
      // 현재 받은 바이트
      let received = downloadItem.getReceivedBytes();
      // 진행중이고 바이트가 있다면
      if (state == "progressing" && received) {
        let progress = Math.round((received / fileSize) * 100);
        // 진행율을 업데이트
        webContents.executeJavaScript(`window.progress.value = ${progress}`);
      }
    });
  });
}
app.on("ready", () => {
  createWindow();
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
