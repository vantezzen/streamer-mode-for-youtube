import styleText from "data-text:./injectedStyles.scss"
import type { PlasmoContentScript, PlasmoGetStyle } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://*.youtube.com/*", "https://www.youtube-nocookie.com/*"],
  all_frames: true
}

const style = document.createElement("style")
style.textContent = styleText
document.head.appendChild(style)

const updateStreamerMode = () => {
  if (localStorage.getItem("streamer-mode") === "true") {
    document.body.classList.add("streamer-mode")
  } else {
    document.body.classList.remove("streamer-mode")
  }
}
updateStreamerMode()

window.addEventListener("storage", () => {
  updateStreamerMode()
})
