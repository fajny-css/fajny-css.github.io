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
                <fajny-icon icon-name="chevron-left-solid"></fajny-icon>
            </button>
            
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <span class="more">...</span>
            <a href="#">20</a>
            
            <button>
                <fajny-icon icon-name="chevron-right-solid"></fajny-icon>
            </button>
        </div>
    - title: Center
      demo: |-
        <div class="pagination" data-justify="center">
            <button disabled>
                <fajny-icon icon-name="chevron-left-solid"></fajny-icon>
            </button>
            
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <span class="more">...</span>
            <a href="#">20</a>
            
            <button>
                <fajny-icon icon-name="chevron-right-solid"></fajny-icon>
            </button>
        </div>
    - title: Right
      demo: |-
        <div class="pagination" data-justify="right">
            <button disabled>
                <fajny-icon icon-name="chevron-left-solid"></fajny-icon>
            </button>
            
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <span class="more">...</span>
            <a href="#">20</a>
            
            <button>
                <fajny-icon icon-name="chevron-right-solid"></fajny-icon>
            </button>
        </div>
attributes:
    - name: data-justify
      example: center
      possible: '"left" | "center" | "right"'
      default: left
      required: "No"
---
