---
title: paginator
order: 21
intro: Use it instead of <code>pagination</code> when you have at least 50 pages.
import: paginator
items:
    - title: Left
      demo: |-
        <div class="paginator" data-justify="left">
            Page <input type="number" min="1" max="30" value="1"> of 30

            <button disabled>
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#chevron-left-solid"></use>
                </svg>
            </button>
            
            <button>
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#chevron-right-solid"></use>
                </svg>
            </button>
        </div>
    - title: Right
      demo: |-
        <div class="paginator" data-justify="right">
            Page <input type="number" min="1" max="30" value="1"> of 30

            <button disabled>
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#chevron-left-solid"></use>
                </svg>
            </button>
            
            <button>
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#chevron-right-solid"></use>
                </svg>
            </button>
        </div>
attributes:
    - name: data-justify
      example: right
      possible: '"left" | "right"'
      default: left
      required: "No"
---
