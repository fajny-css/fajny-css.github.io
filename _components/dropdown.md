---
title: dropdown
order: 16
intro: |-
    Dropdowns can either be aligned on the left, or the right, depending on your needs. Any <code>button</code> can be used to open the dropdown, but always remember to add the <code>btn</code> class.
import: dropdown
script: dropdown
items:
    - title: Left
      demo: |-
        <div class="dropdown-container" data-justify="left">
            <button class="btn">Open dropdown</button>

            <div class="dropdown">
                <a href="#">Link</a>
                <a href="#">Link</a>
                <button>Button</button>
                <button>Button</button>
            </div>
        </div>
    - title: Right
      demo: |-
        <div class="dropdown-container" data-justify="right">
            <button class="btn">Open dropdown</button>

            <div class="dropdown">
                <a href="#">Link</a>
                <a href="#">Link</a>
                <button>Button</button>
                <button>Button</button>
            </div>
        </div>
attributes:
    - name: data-justify
      example: right
      possible: '"left" | "right"'
      default: left
      required: "No"
---
