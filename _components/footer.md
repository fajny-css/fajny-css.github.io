---
title: footer
order: 33
intro: The footer can be useful to show external links, sending to partners' websites for example, or legal links.
import: footer
items:
    - title: Without separator
      demo: |-
        <p><a href="/components/footer/demo" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <footer class="footer">
            <a href="#" class="logo">
                <img src="/assets/images/logo-fajny-css.svg" alt="Logo">
            </a>

            <div class="links">
                <a href="#">Link</a>
            </div>
        </footer>
    - title: With separator
      demo: |-
        <p><a href="/components/footer/demo-separator" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <footer class="footer" data-separator>
            <a href="#" class="logo">
                <img src="/assets/images/logo-fajny-css.svg" alt="Logo">
            </a>

            <div class="links">
                <a href="#">Link</a>
            </div>
        </footer>
attributes:
    - name: data-separator
      example: "-"
      possible: "-"
      default: None
      required: "No"
---
