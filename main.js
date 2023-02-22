import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>This page is under maintenance</h1>
    <p class="read-the-docs">
      sorry for the inconvenience
    </p>
    <div class="card">
      <button id="counter" type="button">Try click me</button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
