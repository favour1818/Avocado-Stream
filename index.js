const displayArea = document.getElementById("streamArea");
const startButton = document.getElementById("start");
const cameraButton = document.getElementById("main-camera");
const popup = document.getElementById("popup");
const videoDisplayArea = document.getElementsById("displayArea");
const displayMediaOptions = {
  video: {
    displaySurface: "camera",
  },
  audio: true,
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
    const cameraArea = await document.createElement("video", "autoplay");
    await cameraArea.setAttribute(
      "style",
      "width: 300px;height: 350px;border: 1px solid blue;"
    );
    await videoDisplayArea.appendChild(cameraArea);
    cameraArea.srcObject = await navigator.mediaDevices.getUserMedia(
      displayMediaOptions
    );
    await cameraArea.play();
    console.log("camera has just been clicked");
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
