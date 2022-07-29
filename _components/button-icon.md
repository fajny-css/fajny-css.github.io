---
title: button-icon
order: 6
intro: Buttons with icon exist in different styles and colors. You can also use an <code>&lt;a&gt;</code> tag instead of <code>&lt;button&gt;</code>.
import: button-icon
script: button-icon
items:
    - title: Plain
      demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <button class="btn-icon" data-color="primary" data-button-style="plain" data-icon="mail-solid"></button>
            <button class="btn-icon" data-color="secondary" data-button-style="plain" data-icon="mail-solid"></button>
            <button class="btn-icon" data-color="success" data-button-style="plain" data-icon="mail-solid"></button>
            <button class="btn-icon" data-color="danger" data-button-style="plain" data-icon="mail-solid"></button>
            <button class="btn-icon" data-color="warning" data-button-style="plain" data-icon="mail-solid"></button>
            <button class="btn-icon" data-color="white" data-button-style="plain" data-icon="mail-solid"></button>
            <button class="btn-icon" data-color="primary" data-button-style="plain" data-icon="mail-solid" disabled></button>
        </div>
      code: |-
        <button class="btn-icon" data-color="primary" data-button-style="plain" data-icon="mail-solid"></button>
        <button class="btn-icon" data-color="secondary" data-button-style="plain" data-icon="mail-solid"></button>
        <button class="btn-icon" data-color="success" data-button-style="plain" data-icon="mail-solid"></button>
        <button class="btn-icon" data-color="danger" data-button-style="plain" data-icon="mail-solid"></button>
        <button class="btn-icon" data-color="warning" data-button-style="plain" data-icon="mail-solid"></button>
        <button class="btn-icon" data-color="white" data-button-style="plain" data-icon="mail-solid"></button>
        <button class="btn-icon" data-color="primary" data-button-style="plain" data-icon="mail-solid" disabled></button>
    - title: Transparent
      demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <button class="btn-icon" data-color="primary" data-button-style="transparent" data-icon="mail-solid"></button>
            <button class="btn-icon" data-color="secondary" data-button-style="transparent" data-icon="mail-solid"></button>
            <button class="btn-icon" data-color="success" data-button-style="transparent" data-icon="mail-solid"></button>
            <button class="btn-icon" data-color="danger" data-button-style="transparent" data-icon="mail-solid"></button>
            <button class="btn-icon" data-color="warning" data-button-style="transparent" data-icon="mail-solid"></button>
            <button class="btn-icon" data-color="white" data-button-style="transparent" data-icon="mail-solid"></button>
            <button class="btn-icon" data-color="primary" data-button-style="transparent" data-icon="mail-solid" disabled></button>
        </div>
      code: |-
        <button class="btn-icon" data-color="primary" data-button-style="transparent" data-icon="mail-solid"></button>
        <button class="btn-icon" data-color="secondary" data-button-style="transparent" data-icon="mail-solid"></button>
        <button class="btn-icon" data-color="success" data-button-style="transparent" data-icon="mail-solid"></button>
        <button class="btn-icon" data-color="danger" data-button-style="transparent" data-icon="mail-solid"></button>
        <button class="btn-icon" data-color="warning" data-button-style="transparent" data-icon="mail-solid"></button>
        <button class="btn-icon" data-color="white" data-button-style="transparent" data-icon="mail-solid"></button>
        <button class="btn-icon" data-color="primary" data-button-style="transparent" data-icon="mail-solid" disabled></button>
    - title: Loading
      demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <button class="btn-icon" data-color="primary" data-button-style="plain" data-icon="mail-solid" data-loading></button>
        </div>
      code: |-
        <button class="btn-icon" data-color="primary" data-button-style="plain" data-icon="mail-solid" data-loading></button>
attributes:
    - name: data-icon
      example: bubble-message-solid
      possible: "-"
      default: None
      required: "Yes"
    - name: data-button-style
      example: transparent
      possible: '"plain" | "transparent"'
      default: plain
      required: "No"
    - name: data-color
      example: danger
      possible: colors_hover
      default: primary
      required: "No"
    - name: data-loading
      example: "-"
      possible: "-"
      default: None
      required: "No"
---
