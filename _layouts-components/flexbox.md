---
title: flexbox
order: 4
intro: Component using CSS flexbox.
import: flexbox
items:
    - title: 
      demo: |-
        <div class="flexbox" data-gap="l" data-direction="column-reverse" data-align="flex-end" data-justify="center">
            <p class="demo-grid-item">Item</p>
            <p class="demo-grid-item">Longer item</p>
            <p class="demo-grid-item">Item</p>
            <p class="demo-grid-item">Even longer item</p>
        </div>
      code: |-
        <div class="flexbox" data-gap="l" data-direction="column-reverse" data-align="flex-end" data-justify="center">
        </div>
attributes:
    - name: data-direction
      example: column
      possible: '"row" | "row-reverse" | "column" | "column-reverse"'
      default: row
      required: "No"
    - name: data-wrap
      example: wrap
      possible: '"nowrap" | "wrap" | "wrap-reverse"'
      default: nowrap
      required: "No"
    - name: data-align
      example: baseline
      possible: flex_align
      default: stretch
      required: "No"
    - name: data-justify
      example: flex-end
      possible: flex_justify
      default: flex-start
      required: "No"
    - name: data-inline
      example: "-"
      possible: "-"
      default: None
      required: "No"
---
