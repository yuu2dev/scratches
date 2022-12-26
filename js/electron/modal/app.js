const { app, BrowserWindow } = require("electron");
let parentWindow, childWindow;
/**
 * @author yuu2dev
 * @memo 모달 띄우기
 */
function createWindow() {
  // 부모 객체 생성
  parentWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });
  // 자식 객체 생성
  childWindow = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
    // 부모를 지정하되 modal: true 로 지정하면 자식 윈도우가 일반적인 창이 아닌 모달 처럼 동작하게 됨
    parent: parentWindow,
    modal: true,
    show: false,
  });
  parentWindow.loadFile("index.html");
  childWindow.loadFile("index.html");
  // 2초 뒤에 모달이 띄워진다.
  setTimeout(() => {
    childWindow.show();
    // 모달이 띄워진 뒤 3초 뒤에 닫힌다.
    setTimeout(() => {
      childWindow.close();
      childWindow = null;
    }, 3000);
  }, 2000);
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
