---
title: tooltip
order: 9
intro: Use tooltip to display more information to a user.
import: tooltip
items:
    - title: Dotted
      demo: |-
        <div data-padding-top="xl">
            <p>
                Text with <span class="tooltip" data-tooltip="Tooltip" data-style="dotted" data-color="primary">tooltip</span> text
            </p>
        </div>
      code: |-
        <p>
            Text with <span class="tooltip" data-tooltip="Tooltip" data-style="dotted" data-color="primary">tooltip</span> text
        </p>
    - title: Underline
      demo: |-
        <div data-padding-top="xl">
            <p>
                Text with <span class="tooltip" data-tooltip="Tooltip" data-style="underline" data-color="secondary">tooltip</span> text
            </p>
        </div>
      code: |-
        <p>
            Text with <span class="tooltip" data-tooltip="Tooltip" data-style="underline" data-color="secondary">tooltip</span> text
        </p>
    - title: Bold
      demo: |-
        <div data-padding-top="xl">
            <p>
                Text with <span class="tooltip" data-tooltip="Tooltip" data-style="bold" data-color="primary">tooltip</span> text
            </p>
        </div>
      code: |-
        <p>
            Text with <span class="tooltip" data-tooltip="Tooltip" data-style="bold" data-color="primary">tooltip</span> text
        </p>
attributes:
    - name: data-tooltip
      example: Tooltip
      possible: "-"
      default: None
      required: "Yes"
    - name: data-style
      example: underline
      possible: '"dotted" | "underline" | "bold"'
      default: dotted
      required: "No"
    - name: data-color
      example: secondary-400
      possible: all_colors
      default: currentColor
      required: "No"
---
