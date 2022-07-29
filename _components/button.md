---
title: button
order: 5
intro: Buttons exist in different styles and colors. You can also use an <code>&lt;a&gt;</code> tag instead of <code>&lt;button&gt;</code>.
import: button
script: button
items:
    - title: Plain
      demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <button class="btn" data-button-style="plain" data-color="primary">Button</button>
            <button class="btn" data-button-style="plain" data-color="secondary">Button</button>
            <button class="btn" data-button-style="plain" data-color="success">Button</button>
            <button class="btn" data-button-style="plain" data-color="danger">Button</button>
            <button class="btn" data-button-style="plain" data-color="warning">Button</button>
            <button class="btn" data-button-style="plain" data-color="white">Button</button>
            <button class="btn" data-button-style="plain" data-color="primary" disabled>Button</button>
        </div>
      code: |-
        <button class="btn" data-button-style="plain" data-color="primary">Button</button>
        <button class="btn" data-button-style="plain" data-color="secondary">Button</button>
        <button class="btn" data-button-style="plain" data-color="success">Button</button>
        <button class="btn" data-button-style="plain" data-color="danger">Button</button>
        <button class="btn" data-button-style="plain" data-color="warning">Button</button>
        <button class="btn" data-button-style="plain" data-color="white">Button</button>
        <button class="btn" data-button-style="plain" data-color="primary" disabled>Button</button>
    - title: Text
      demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <button class="btn" data-button-style="text" data-color="primary">Button</button>
            <button class="btn" data-button-style="text" data-color="secondary">Button</button>
            <button class="btn" data-button-style="text" data-color="success">Button</button>
            <button class="btn" data-button-style="text" data-color="danger">Button</button>
            <button class="btn" data-button-style="text" data-color="warning">Button</button>
            <button class="btn" data-button-style="text" data-color="white">Button</button>
            <button class="btn" data-button-style="text" data-color="primary" disabled>Button</button>
        </div>
      code: |-
        <button class="btn" data-button-style="text" data-color="primary">Button</button>
        <button class="btn" data-button-style="text" data-color="secondary">Button</button>
        <button class="btn" data-button-style="text" data-color="success">Button</button>
        <button class="btn" data-button-style="text" data-color="danger">Button</button>
        <button class="btn" data-button-style="text" data-color="warning">Button</button>
        <button class="btn" data-button-style="text" data-color="white">Button</button>
        <button class="btn" data-button-style="text" data-color="primary" disabled>Button</button>
    - title: Outline
      demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <button class="btn" data-button-style="outline" data-color="primary">Button</button>
            <button class="btn" data-button-style="outline" data-color="secondary">Button</button>
            <button class="btn" data-button-style="outline" data-color="success">Button</button>
            <button class="btn" data-button-style="outline" data-color="danger">Button</button>
            <button class="btn" data-button-style="outline" data-color="warning">Button</button>
            <button class="btn" data-button-style="outline" data-color="white">Button</button>
            <button class="btn" data-button-style="outline" data-color="primary" disabled>Button</button>
        </div>
      code: |-
        <button class="btn" data-button-style="outline" data-color="primary">Button</button>
        <button class="btn" data-button-style="outline" data-color="secondary">Button</button>
        <button class="btn" data-button-style="outline" data-color="success">Button</button>
        <button class="btn" data-button-style="outline" data-color="danger">Button</button>
        <button class="btn" data-button-style="outline" data-color="warning">Button</button>
        <button class="btn" data-button-style="outline" data-color="white">Button</button>
        <button class="btn" data-button-style="outline" data-color="primary" disabled>Button</button>
    - title: With an icon
      demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <button class="btn" data-button-style="plain" data-color="primary" data-icon-left="send-solid">Button</button>
            <button class="btn" data-button-style="text" data-color="secondary" data-icon-right="chevron-down-solid">Button</button>
        </div>
      code: |-
        <button class="btn" data-button-style="plain" data-color="primary" data-icon-left="send-solid">Button</button>
        <button class="btn" data-button-style="text" data-color="secondary" data-icon-right="chevron-down-solid">Button</button>
    - title: Loading
      demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <button class="btn" data-button-style="outline" data-color="success" data-loading>Button</button>
        </div>
      code: |-
        <button class="btn" data-button-style="outline" data-color="success" data-loading>Button</button>
attributes:
    - name: data-button-style
      example: outline
      possible: '"plain" | "text" | "outline"'
      default: plain
      required: "No"
    - name: data-color
      example: success
      possible: colors_hover
      default: primary
      required: "No"
    - name: data-icon-left
      example: mail-solid
      possible: "-"
      default: None
      required: "No"
    - name: data-icon-right
      example: chevron-right-solid
      possible: "-"
      default: None
      required: "No"
    - name: data-loading
      example: "-"
      possible: "-"
      default: None
      required: "No"
    - name: data-no-padding
      example: "-"
      possible: "-"
      default: None
      required: "No"
---
<!-- , , , , ,  -->