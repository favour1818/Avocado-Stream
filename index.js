const displayArea = document.getElementById("streamArea");
const startButton = document.getElementById("start");
const cameraButton = document.getElementById("start-camera");
const popup = document.getElementById("popup");

const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  audio: false,
};

async function startCapture() {
  try {
    displayArea.srcObject = await navigator.mediaDevices.getDisplayMedia(
      displayMediaOptions
    );
  } catch (err) {
    console.error(err);
  }
}

async function startCamera() {
  try {
    displayArea.srcObject = await navigator.mediaDevices.getDisplayMedia(
      displayMediaOptions
    );
  } catch (err) {
    console.error(err);
  }
}
startButton.addEventListener("click", startCapture);
cameraButton.addEventListener("click", startCamera);
// document stylings

popup.setAttribute(
  "style",
  "top: 10px;right: 10px;width: 600px;height: 100%;border: none;display:grid;justify-items:center;"
);
popup.setAttribute("allow", "");
