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
  // 일반적으로 일렉트론 앱은 기본 세션을 지니고 있다.
  const session = mainWindow.webContents.session;
  // 세션은 일렉트론의 모든 브라우저에서 공유한다.
  console.log(ses);
  // 기본 세션은 다음과 같이 접근 할 수도 있다.
  const defaultSession = session.defaultSession;
  console.log(Object.is(session, defaultSession));
  // 새로운 세션을 만들어보자. persist 는 영속한다는 뜻인데 창을 닫아도 데이터가 유지되도록 한다. (기본 세션은 persist 속성 이다.)
  const customSession = session.fromPartition("persist:custom");
  childWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
    // 새로운 세션을 설정한다. 이 윈도우는 새로운 세션으로 동작한다.
    session: customSession,
    // 또는 간단하게 partition 인자에 즉시 설정 할 수도 있다.
    // partition: 'persist:custom'
  });

  mainWindow.loadFile("index.html");
  mainWindow.on("closed", () => {
    mainWindow = null;
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
