---
title: Container
order: 0
intro: |-
    Containers are required for the main part of your website. Three sizes are available: 600px (default), 400px for forms and 800px for large pages. It is also possible to add an <code>&lt;aside&gt;</code>.
import: container
items:
    - title: Default main
      demo: <p><a href="/layouts/container/demo-main-default" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <div class="wrapper">
            <main class="main">
                Content
            </main>
        </div>
    - title: Main large
      demo: <p><a href="/layouts/container/demo-main-large" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <div class="wrapper">
            <main class="main" data-size="large">
                Content
            </main>
        </div>
    - title: Main form
      demo: <p><a href="/layouts/container/demo-main-form" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <div class="wrapper">
            <main class="main" data-size="form">
                Content
            </main>
        </div>
    - title: Wrapper with aside on the left
      demo: <p><a href="/layouts/container/demo-aside-left" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <div class="wrapper" data-template="2cols">
            <aside class="aside" data-position="1">
                Content
            </aside>
        
            <main class="main" data-position="2">
                Content
            </main>
        </div>
    - title: Wrapper with aside on the right
      demo: <p><a href="/layouts/container/demo-aside-right" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <div class="wrapper" data-template="2cols">
            <main class="main" data-position="1">
                Content
            </main>

            <aside class="aside" data-position="2">
                Content
            </aside>
        </div>
    - title: Wrapper with aside on both sides
      demo: <p><a href="/layouts/container/demo-aside-both-sides" target="_blank" rel="noreferrer noopener">Demo here</a></p>
      code: |-
        <div class="wrapper" data-template="3cols">
            <aside class="aside" data-position="1" data-size="small">
                <h3>Aside</h3>
            </aside>
        
            <main class="main" data-position="2">
                <h1>Main</h1>
            </main>
        
            <aside class="aside" data-position="3" data-size="small">
                <h3>Aside</h3>
            </aside>
        </div>
attributes:
    - name: data-template (wrapper)
      example: 2cols
      possible: '"1col" | "2cols" | "3cols"'
      default: 1col
      required: "No"
    - name: data-size (main)
      example: form
      possible: '"default" | "large" | "form" '
      default: default
      required: "No"
    - name: data-size (aside)
      example: small
      possible: '"default" | "small"'
      default: default
      required: "No"
    - name: data-position (main)
      example: 2
      possible: '1 | 2'
      default: 1
      required: "No"
    - name: data-position (aside)
      example: 3
      possible: '1 | 2 | 3'
      default: 1
      required: "No"
---
