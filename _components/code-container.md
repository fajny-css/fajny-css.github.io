---
title: code-container
order: 31
intro: Display some code to the user. For better experience, add <a href="https://highlightjs.org/" target="_blank" rel="noreferrer noopener">highlight.js</a>.
import: code-container
items:
    - title: 
      demo: |-
        <div class="code-container show-code">
        <pre><code>const unslugify = str => {
            return capitalize(str.replaceAll("-", " "))
        }</code></pre>
        </div>
      code: |-
        <div class="code-container">
            <pre><code>const unslugify = str => {
                return capitalize(str.replaceAll("-", " "))
            }</code></pre>
        </div>
---
