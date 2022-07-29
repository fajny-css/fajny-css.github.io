---
title: grid
order: 3
intro: Here we're using CSS grid. By default, there is only one column and no gap between elements.
import: grid
items:
    - demo: |-
        <div class="grid" data-col="4" data-gap="m">
            <p class="demo-grid-item">Item</p>
            <p class="demo-grid-item">Item</p>
            <p class="demo-grid-item">Item</p>
            <p class="demo-grid-item">Item</p>
            <p class="demo-grid-item">Item</p>
            <p class="demo-grid-item">Item</p>
        </div>
      code: |-
        <div class="grid" data-col="4" data-gap="m">
        </div>
attributes:
    - name: data-col
      example: 6
      possible: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12'
      default: 1
      required: "No"
    - name: data-gap
      example: xxl
      possible: spacers
      default: None
      required: "No"
    - name: data-justify-items
      example: end
      possible: grid_justify_items
      default: stretch
      required: "No"
    - name: data-align-items
      example: center
      possible: grid_align_items
      default: stretch
      required: "No"
    - name: data-justify-content
      example: space-between
      possible: grid_justify_content
      default: None
      required: "No"
    - name: data-align-content
      example: space-around
      possible: grid_align_content
      default: None
      required: "No"
    - name: data-inline
      example: "-"
      possible: "-"
      default: None
      required: "No"
---
