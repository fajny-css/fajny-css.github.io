---
title: tabs
order: 24
intro: Add tabs to display only certain informations.
import: tabs
script: tabs
items:
    - demo: |-
        <div class="tabs">
            <p class="tab" data-title="Tab 1">
                Content tab 1
            </p>

            <p class="tab" data-title="Tab 2">
                Content tab 2
            </p>

            <p class="tab" data-title="Tab 3">
                Content tab 3
            </p>
        </div>
attributes:
    - name: data-title (tab-item)
      example: Tab
      possible: "-"
      default: Title
      required: "Yes"
---
