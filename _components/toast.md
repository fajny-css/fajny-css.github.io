---
title: toast
order: 17
intro: Toast are used to notify the user.
import: toast
script: toast
items:
    - title: Without close button
      demo: |-
        <div class="toast" data-title="Title" data-icon="check-circle-solid" data-icon-color="success">
            <p>Content</p>
        </div>
    - title: With close button
      demo: |-
        <div class="toast" data-title="Title" data-icon="check-solid" data-icon-color="success" data-close>
            <p>Content</p>
        </div>
attributes:
    - name: data-title
      example: You have a new message!
      possible: "-"
      default: Title
      required: "Yes"
    - name: data-icon
      example: check-solid
      possible: "-"
      default: None
      required: "No"
    - name: data-icon-color
      example: success
      possible: '"primary" | "secondary" | "success" | "danger" | "warning" | "gray" | "black"'
      default: primary
      required: "No"
    - name: data-close
      example: "-"
      possible: "-"
      default: None
      required: No, but you can avoid adding it if you add <code>data-icon-close</code>
    - name: data-icon-close
      example: close-circle-solid
      possible: "-"
      default: close-solid
      required: "No"
---
