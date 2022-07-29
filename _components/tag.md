---
title: tag
order: 7
intro: Tags can be used to display information.
import: tag
items:
    - title: Rounded
      demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <span class="tag" data-color="primary" data-tag-style="rounded">Tag</span>
            <span class="tag" data-color="secondary" data-tag-style="rounded">Tag</span>
            <span class="tag" data-color="success" data-tag-style="rounded">Tag</span>
            <span class="tag" data-color="danger" data-tag-style="rounded">Tag</span>
            <span class="tag" data-color="warning" data-tag-style="rounded">Tag</span>
            <span class="tag" data-color="gray" data-tag-style="rounded">Tag</span>
            <span class="tag" data-color="black" data-tag-style="rounded">Tag</span>
            <span class="tag" data-color="white" data-tag-style="rounded">Tag</span>
        </div>
      code: |-
        <span class="tag" data-color="primary" data-tag-style="rounded">Tag</span>
        <span class="tag" data-color="secondary" data-tag-style="rounded">Tag</span>
        <span class="tag" data-color="success" data-tag-style="rounded">Tag</span>
        <span class="tag" data-color="danger" data-tag-style="rounded">Tag</span>
        <span class="tag" data-color="warning" data-tag-style="rounded">Tag</span>
        <span class="tag" data-color="gray" data-tag-style="rounded">Tag</span>
        <span class="tag" data-color="black" data-tag-style="rounded">Tag</span>
        <span class="tag" data-color="white" data-tag-style="rounded">Tag</span>
    - title: Pill
      demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <span class="tag" data-color="primary" data-tag-style="pill">Tag</span>
            <span class="tag" data-color="secondary" data-tag-style="pill">Tag</span>
            <span class="tag" data-color="success" data-tag-style="pill">Tag</span>
            <span class="tag" data-color="danger" data-tag-style="pill">Tag</span>
            <span class="tag" data-color="warning" data-tag-style="pill">Tag</span>
            <span class="tag" data-color="gray" data-tag-style="pill">Tag</span>
            <span class="tag" data-color="black" data-tag-style="pill">Tag</span>
            <span class="tag" data-color="white" data-tag-style="pill">Tag</span>
        </div>
      code: |-
        <span class="tag" data-color="primary" data-tag-style="pill">Tag</span>
        <span class="tag" data-color="secondary" data-tag-style="pill">Tag</span>
        <span class="tag" data-color="success" data-tag-style="pill">Tag</span>
        <span class="tag" data-color="danger" data-tag-style="pill">Tag</span>
        <span class="tag" data-color="warning" data-tag-style="pill">Tag</span>
        <span class="tag" data-color="gray" data-tag-style="pill">Tag</span>
        <span class="tag" data-color="black" data-tag-style="pill">Tag</span>
        <span class="tag" data-color="white" data-tag-style="pill">Tag</span>
attributes:
    - name: data-tag-style
      example: pill
      possible: '"rounded" | "pill"'
      default: rounded
      required: "No"
    - name: data-color
      example: warning
      possible: colors_short
      default: primary
      required: "No"
---
