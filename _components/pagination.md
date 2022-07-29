---
title: pagination
order: 20
intro: Responsive pagination for your list pages. It can be useful not to load all your articles on the same page when using it in a blog.
import: pagination
items:
    - title: Left
      demo: |-
        <div class="pagination" data-justify="left">
            <button disabled>
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#chevron-left-solid"></use>
                </svg>
            </button>
            
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <span class="more">...</span>
            
            <button>
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#chevron-right-solid"></use>
                </svg>
            </button>
        </div>
    - title: Center
      demo: |-
        <div class="pagination" data-justify="center">
            <button disabled>
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#chevron-left-solid"></use>
                </svg>
            </button>
            
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <span class="more">...</span>
            
            <button>
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#chevron-right-solid"></use>
                </svg>
            </button>
        </div>
    - title: Right
      demo: |-
        <div class="pagination" data-justify="right">
            <button disabled>
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#chevron-left-solid"></use>
                </svg>
            </button>
            
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <span class="more">...</span>
            
            <button>
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#chevron-right-solid"></use>
                </svg>
            </button>
        </div>
attributes:
    - name: data-justify
      example: center
      possible: '"left" | "center" | "right"'
      default: left
      required: "No"
---
