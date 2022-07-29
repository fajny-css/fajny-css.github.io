---
title: cover
order: 28
intro: A parallax cover can be a nice way to start a page.
import: cover
items:
    - title: Cover center
      demo: <p><a href="/components/cover/demo-cover-center" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <div class="cover" data-align="center">
            <picture>
                <source media="(max-width: 600px)" srcset="/assets/images/s-cover-parallax.jpg">
                <source media="(max-width: 1024px)" srcset="/assets/images/m-cover-parallax.jpg">
                <img src="/assets/images/l-cover-parallax.jpg" alt="Cover">
            </picture>

            <div class="content">
                <h1 class="display">Title</h1>
                <h2 class="display">Subtitle</h2>
            </div>
        </div>
    - title: Cover center with overlay
      demo: <p><a href="/components/cover/demo-cover-center-overlay" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <div class="cover" data-align="center" data-overlay>
            <img src="/assets/images/l-cover-parallax.jpg" alt="Cover">

            <div class="content">
                <h1 class="display">Title</h1>
                <h2 class="display">Subtitle</h2>
            </div>
        </div>
    - title: Cover bottom
      demo: <p><a href="/components/cover/demo-cover-bottom" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <div class="cover" data-align="bottom">
            <img src="/assets/images/l-cover-parallax.jpg" alt="Cover">

            <div class="content">
                <h1 class="display">Title</h1>
                <h2 class="display">Subtitle</h2>
            </div>
        </div>
    - title: Cover bottom with overlay
      demo: <p><a href="/components/cover/demo-cover-bottom-overlay" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <div class="cover" data-align="bottom" data-overlay>
            <img src="/assets/images/l-cover-parallax.jpg" alt="Cover">

            <div class="content">
                <h1 class="display">Title</h1>
                <h2 class="display">Subtitle</h2>
            </div>
        </div>
attributes:
    - name: data-align
      example: bottom
      possible: '"center" | "bottom"'
      default: center
      required: "No"
    - name: data-overlay
      example: "-"
      possible: "-"
      default: None
      required: "No"
---
