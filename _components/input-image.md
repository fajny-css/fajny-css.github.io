---
title: input-image
order: 11 
intro: Input showing an uploaded picture automatically.
import: input-image
script: input-image
items:
    - title: 
      demo: |-
        <div class="input-content input-image">
            <input type="file" id="image-1">
        </div>
attributes:
    - name: data-icon-empty
      example: user-regular
      possible: "-"
      default: image-solid
      required: "No"
    - name: data-icon-hover
      example: edit-regular
      possible: "-"
      default: edit-solid
      required: "No"
    - name: data-validate
      example: passed
      possible: '"not-passed" | "passed"'
      default: None
      required: "No"
---
