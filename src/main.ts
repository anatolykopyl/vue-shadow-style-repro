import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const host = document.querySelector("#shadow-host")
const shadowRoot = host!.attachShadow({ mode: "open" })

const style = document.createElement("style")
style.innerHTML = SHADOW_STYLE

const mountPoint = document.createElement("div")

shadowRoot.appendChild(mountPoint)
shadowRoot.appendChild(style)

createApp(App).mount(mountPoint)
