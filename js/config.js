import "../lib/mi-footer.js"
import { registraServiceWorker, setTitle } from "../lib/utilHtml.js"

document.addEventListener("DOMContentLoaded", () => setTitle("gilpgijs"))

registraServiceWorker("/sw.js")