---
title: progress-bar
order: 23
intro: |-
    Progress bars are a nice way to display informations. They exist in different colors, with or without animation. Values go from 0 to 100. To add an animation on load of the page, add the class <code>progress-animated</code>.
import: progress-bar
items:
    - title: 
      demo: |-
        <span class="progress-bar progress-animated" data-color="primary" data-value="42"></span>
        <span class="progress-bar progress-animated" data-color="secondary" data-value="23"></span>
        <span class="progress-bar progress-animated" data-color="success" data-value="70"></span>
        <span class="progress-bar progress-animated" data-color="danger" data-value="55"></span>
        <span class="progress-bar progress-animated" data-color="warning" data-value="30"></span>
        <span class="progress-bar progress-animated" data-color="gray" data-value="82"></span>
        <span class="progress-bar progress-animated" data-color="black" data-value="12"></span>
        <span class="progress-bar progress-animated" data-color="white" data-value="64"></span>
attributes:
    - name: data-value
      example: 42
      possible: From 0 to 100
      default: None
      required: "Yes"
    - name: data-color
      example: success
      possible: colors_short
      default: primary
      required: "No"
---
