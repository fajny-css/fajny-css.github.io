---
title: modal
order: 19
intro: Use modals to show something full screen to the user.
import: modal
script: modal
items:
    - title: Without close button
      demo: |-
        <div class="modal-container">
            <button class="btn open-modal hide-header" onclick="toggleHeader()">Open modal</button>

            <div class="modal" onclick="toggleHeader()">
                <img src="/assets/images/modal-landscape.jpg" alt="Modal">
            </div>
        </div>
      code: |-
        <div class="modal-container">
            <button class="btn open-modal">Open modal</button>

            <div class="modal">
                <img src="/assets/images/modal-landscape.jpg" alt="Modal">
            </div>
        </div>
    - title: With close button
      demo: |-
        <div class="modal-container" data-close>
            <button class="btn open-modal hide-header" onclick="toggleHeader()">Open modal</button>

            <div class="modal">
                <img src="/assets/images/modal-landscape.jpg" alt="Modal">
            </div>
        </div>
      code: |-
        <div class="modal-container" data-close>
            <button class="btn open-modal">Open modal</button>

            <div class="modal">
                <img src="/assets/images/modal-landscape.jpg" alt="Modal">
            </div>
        </div>
    - title: With an alert
      demo: |-
        <div class="modal-container">
            <button class="btn open-modal hide-header" onclick="toggleHeader()">Open modal</button>

            <div class="modal">
                <div class="alert" data-color="danger">
                    <p>Alert</p>

                    <div class="flexbox">
                        <button class="btn" data-button-style="plain" data-color="danger">Button</button>
                        <button class="btn btn-close" data-button-style="text" onclick="toggleHeader()">Close</button>
                    </div>
                </div>
            </div>
        </div>
      code: |-
        <div class="modal-container">
            <button class="btn open-modal">Open modal</button>

            <div class="modal">
                <div class="alert" data-color="danger">
                    <p>Alert</p>

                    <div class="flexbox">
                        <button class="btn" data-button-style="plain" data-color="danger">Button</button>
                        <button class="btn btn-close" data-button-style="text">Close</button>
                    </div>
                </div>
            </div>
        </div>
attributes:
    - name: data-close
      example: "-"
      possible: "-"
      default: None
      required: "No, but you do not have to add it if you add a custom icon"
    - name: data-close-icon
      example: close-regular
      possible: "-"
      default: close-solid
      required: "No"
---
