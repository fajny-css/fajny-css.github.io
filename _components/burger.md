---
title: burger
order: 26
intro: Button mainly used for navigation on mobile. Try to always add an <code>aria-label</code> for better accessibility.
import: burger
script: burger
items:
    - demo: |-
        <div class="flexbox" data-gap="xs">
            <button class="burger" data-color="primary" aria-label="Open / Close burger"></button>
            <button class="burger" data-color="secondary" aria-label="Open / Close burger"></button>
            <button class="burger" data-color="success" aria-label="Open / Close burger"></button>
            <button class="burger" data-color="danger" aria-label="Open / Close burger"></button>
            <button class="burger" data-color="warning" aria-label="Open / Close burger"></button>
            <button class="burger" data-color="black" aria-label="Open / Close burger"></button>
            <button class="burger" data-color="white" aria-label="Open / Close burger"></button>
        </div>
      code: |-
        <button class="burger" data-color="primary" aria-label="Open / Close burger"></button>
        <button class="burger" data-color="secondary" aria-label="Open / Close burger"></button>
        <button class="burger" data-color="success" aria-label="Open / Close burger"></button>
        <button class="burger" data-color="danger" aria-label="Open / Close burger"></button>
        <button class="burger" data-color="warning" aria-label="Open / Close burger"></button>
        <button class="burger" data-color="black" aria-label="Open / Close burger"></button>
        <button class="burger" data-color="white" aria-label="Open / Close burger"></button>
attributes:
    - name: data-color
      example: warning
      possible: colors_short
      default: primary
      required: "No"
---
