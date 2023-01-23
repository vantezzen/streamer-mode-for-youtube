import styleText from "data-text:./style.scss"
import type {
  PlasmoContentScript,
  PlasmoGetInlineAnchor,
  PlasmoGetStyle
} from "plasmo"
import { useEffect, useState } from "react"
import { Shield, ShieldOff } from "react-feather"

export const config: PlasmoContentScript = {
  matches: ["https://*.youtube.com/*"],
  all_frames: true
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () =>
  document.querySelector(
    "#masthead #end #buttons ytd-notification-topbar-button-renderer"
  )

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

const body = document.body

export default function IndexContent() {
  const isStreamerModeOn = body.classList.contains("streamer-mode")
  const isDarkModeOn = document.querySelector("html").hasAttribute("dark")
  const Icon = isStreamerModeOn ? Shield : ShieldOff
  const [, forceRender] = useState({})

  const toggleStreamerMode = () => {
    body.classList.toggle("streamer-mode")
    localStorage.setItem(
      "streamer-mode",
      body.classList.contains("streamer-mode") ? "true" : "false"
    )
    forceRender({})
  }

  useEffect(() => {
    const onUpdate = () => {
      setTimeout(() => forceRender({}), 100)
    }

    window.addEventListener("storage", onUpdate)
    return () => window.removeEventListener("storage", onUpdate)
  }, [])

  return (
    <div
      className={`button-container ${
        isDarkModeOn ? "dark-button" : "light-button"
      }`}>
      <button
        className="button"
        onClick={toggleStreamerMode}
        title="Toggle Streamer Mode">
        <Icon
          size={20}
          strokeWidth={1}
          width={20}
          height={20}
          style={{
            color: isDarkModeOn ? "#FFFFFF" : "#030303"
          }}
        />
      </button>
    </div>
  )
}
