---
title: header
order: 32
intro: The header has to be placed outside the container.
import: header
script: header
items:
    - title: Plain primary
      demo: <p><a href="/components/header/demo-plain-primary" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <header class="header" data-header-style="plain-primary" data-position="fixed">
            <a href="#" class="logo">
                <img src="/assets/images/logo-fajny-css-white.svg" alt="logo">
            </a>

            <button class="burger" data-color="white"></button>

            <nav>
                <a href="#" class="active">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </nav>
        </header>
    - title: Plain white
      demo: <p><a href="/components/header/demo-plain-white" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <header class="header" data-header-style="plain-white">
            <a href="#" class="logo">
                <img src="/assets/images/logo-fajny-css.svg" alt="logo">
            </a>

            <button class="burger" data-color="primary"></button>

            <nav>
                <a href="#" class="active">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </nav>
        </header>
    - title: Transparent primary
      demo: <p><a href="/components/header/demo-transparent-primary" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <header class="header" data-header-style="transparent-primary" data-position="absolute">
            <a href="#" class="logo">
                <img src="/assets/images/logo-fajny-css.svg" alt="logo">
            </a>

            <button class="burger" data-color="primary"></button>

            <nav>
                <a href="#" class="active">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </nav>
        </header>
    - title: Transparent white
      demo: <p><a href="/components/header/demo-transparent-white" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <header class="header" data-header-style="transparent-white" data-position="absolute">
            <a href="#" class="logo">
                <img src="/assets/images/logo-fajny-css-white.svg" alt="logo">
            </a>

            <button class="burger" data-color="white"></button>

            <nav>
                <a href="#" class="active">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </nav>
        </header>
attributes:
    - name: data-header-style
      example: transparent-primary
      possible: '"plain-primary" | "plain-white" | "transparent-primary" | "transparent-white"'
      default: plain-primary
      required: "No"
    - name: data-position
      example: fixed
      possible: '"absolute" | "fixed"'
      default: "None"
      required: "No"
---
