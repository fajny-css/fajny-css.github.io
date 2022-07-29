---
title: accordion
order: 15
intro: Use accordion to display hidden information to users.
import: accordion
script: accordion
items:
    - title: Basic
      demo: |-
        <div class="accordion" data-accordion-style="basic" data-icon="plus">
            <div class="accordion-item accordion-item-open" data-title="Item">
                <p class="accordion-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div class="accordion-item" data-title="Item">
                <p class="accordion-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                    standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type
                    specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages,
                    and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div class="accordion-item" data-title="Item">
                <p class="accordion-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                    standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type
                    specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages,
                    and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
      code: |-
        <div class="accordion" data-accordion-style="basic" data-icon="plus">
            <div class="accordion-item" data-title="Item">
                <p class="accordion-content">
                    Content
                </p>
            </div>
        </div>
    - title: Rounded
      demo: |-
        <div class="accordion" data-accordion-style="rounded" data-icon="chevron">
            <div class="accordion-item accordion-item-open" data-title="Item">
                <p class="accordion-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div class="accordion-item" data-title="Item">
                <p class="accordion-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                    standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type
                    specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages,
                    and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div class="accordion-item" data-title="Item">
                <p class="accordion-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                    standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type
                    specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages,
                    and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
      code: |-
        <div class="accordion" data-accordion-style="rounded" data-icon="chevron">
            <div class="accordion-item accordion-item-open" data-title="Item">
                <p class="accordion-content">
                    Content
                </p>
            </div>
        </div>
attributes:
    - name: data-title (accordion-item)
      example: Title
      possible: "-"
      default: None
      required: "Yes"
    - name: data-accordion-style (accordion)
      example: rounded
      possible: '"basic" | "rounded"'
      default: basic
      required: "No"
    - name: data-icon (accordion)
      example: chevron
      possible: '"plus" | "chevron"'
      default: plus
      required: "No"
---
