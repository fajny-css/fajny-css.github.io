---
title: loader
order: 4
intro: Notify your user that something is loading.
import: loader
items:
    - demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <span class="loader" data-size="xxl" data-color="primary"></span>
            <span class="loader" data-size="xl" data-color="secondary"></span>
            <span class="loader" data-size="l" data-color="success"></span>
            <span class="loader" data-size="m" data-color="danger"></span>
            <span class="loader" data-size="s" data-color="warning"></span>
            <span class="loader" data-size="xs" data-color="gray"></span>
            <span class="loader" data-size="xxs" data-color="black"></span>
        </div>
      code: |-
        <span class="loader" data-size="xxl" data-color="primary"></span>
        <span class="loader" data-size="xl" data-color="secondary"></span>
        <span class="loader" data-size="l" data-color="success"></span>
        <span class="loader" data-size="m" data-color="danger"></span>
        <span class="loader" data-size="s" data-color="warning"></span>
        <span class="loader" data-size="xs" data-color="gray"></span>
        <span class="loader" data-size="xxs" data-color="black"></span>
attributes:
    - name: data-size
      example: xl
      possible: spacers
      default: xxl
      required: "No"
    - name: data-color
      example: danger
      possible: colors_short
      default: primary
      required: "No"
---
