import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>This page is under maintenance</h1>
    <p class="message">
      sorry for the inconvenience
    </p>
    <div class="card">
      <div id="fancy"></div>
      <button id="counter" type="button">Change color</button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
