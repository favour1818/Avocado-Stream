const displayArea = document.getElementById("streamArea");
const button = document.getElementById("start");
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
button.addEventListener("click", startCapture);

// document stylings

popup.setAttribute(
  "style",
  "top: 10px;right: 10px;width: 600px;height: 100%;border: none;display:grid;justify-items:center;"
);
popup.setAttribute("allow", "");