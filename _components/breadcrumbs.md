---
title: breadcrumbs
order: 14
intro: Breadcrumbs help users locate the page they are in.
import: breadcrumbs
items:
    - title: With slash
      demo: |-
        <p class="breadcrumbs" data-separator="slash">
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <span>Active</span>
        </p>
    - title: With icon
      demo: |-
        <p class="breadcrumbs" data-separator="icon">
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <span>Active</span>
        </p>
attributes:
    - name: data-separator
      example: icon
      possible: '"slash" | "icon"'
      default: slash
      required: "No"
---
