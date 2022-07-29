---
title: input
order: 10
intro: All the HTML inputs but checkboxes or radio. For a better user experience, try to always have a label.
import: input
script: input
items:
    - title: Text input
      demo: |-
        <div class="grid" data-col="2" data-gap="xs">
            <input type="text" placeholder="Text" />
            
            <input type="text" value="Text disabled" disabled />
            
            <div class="input-content input-validate" data-validate="not-passed">
                <input type="text" placeholder="Validate not passed" />
            </div>
            
            <div class="input-content" data-icon="mail-solid">
                <input type="text" placeholder="Input with icon">
            </div>
        </div>
      code: |-
        <input type="text" placeholder="Text" />
            
        <input type="text" value="Text disabled" disabled />
        
        <div class="input-content input-validate" data-validate="not-passed">
            <input type="text" placeholder="Validate not passed" />
        </div>
        
        <div class="input-content" data-icon="mail-solid">
            <input type="text" placeholder="Input with icon">
        </div>
    - title: Text input with label and helpers
      demo: |-
        <div class="grid" data-col="2" data-gap="xs">
            <div class="input-container">
                <label for="input-demo">Label</label>
                <p>Helper</p>
                <input type="text" placeholder="Input with label and helpers">
                <small>Helper bottom</small>
            </div>
        </div>
      code: |-
        <div class="input-container">
            <label for="input-demo">Label</label>
            <p>Helper</p>
            <input type="text" placeholder="Input with label and helpers">
            <small>Helper bottom</small>
        </div>
    - title: Password input
      demo: |-
        <div class="grid" data-col="2" data-gap="xs">
            <div class="input-content input-password">
                <input type="password" value="Password">
            </div>

            <div class="input-content input-password" data-icon-show="eye-slash-solid" data-icon-hide="eye-solid">
                <input type="password" value="Password">
            </div>
        </div>
      code: |-
        <div class="input-content input-password">
            <input type="password" value="Password">
        </div>

        <div class="input-content input-password" data-icon-show="eye-slash-solid" data-icon-hide="eye-solid">
            <input type="password" value="Password">
        </div>
    - title: File input
      demo: |-
        <div class="grid" data-col="2" data-gap="xs">
            <input type="file">

            <input type="file" disabled>
        </div>
      code: |-
        <input type="file">

        <input type="file" disabled>
    - title: Url input
      demo: |-
        <div class="grid" data-col="2" data-gap="xs">
            <div class="input-content input-url">
                <input type="url" placeholder="url">
            </div>
        </div>
      code: |-
        <div class="input-content input-url">
            <input type="url" placeholder="url">
        </div>
    - title: Calendar input
      demo: |-
        <div class="grid" data-col="2" data-gap="xs">
            <div class="input-content input-date">
                <input type="date">
            </div>

            <div class="input-content input-date" data-icon-calendar="calendar-regular">
                <input type="datetime-local">
            </div>
        </div>
      code: |-
        <div class="input-content input-date">
            <input type="date">
        </div>

        <div class="input-content input-date" data-icon-calendar="calendar-regular">
            <input type="datetime-local">
        </div>
    - title: Time input
      demo: |-
        <div class="grid" data-col="2" data-gap="xs">
            <div class="input-content input-time">
                <input type="time">
            </div>
        </div>
      code: |-
        <div class="input-content input-time">
            <input type="time">
        </div>
    - title: Search input
      demo: |-
        <div class="grid" data-col="2" data-gap="xs">
            <div class="input-content input-search">
                <input type="search" placeholder="Search input">
            </div>

            <div class="input-content input-search">
                <input type="search" placeholder="Search input" value="search">
            </div>
        </div>
      code: |-
        <div class="input-content input-search">
            <input type="search" placeholder="Search input">
        </div>

        <div class="input-content input-search">
            <input type="search" placeholder="Search input" value="search">
        </div>
    - title: Select
      demo: |-
        <div class="grid" data-col="2" data-gap="xs">
            <div class="input-content input-select">
                <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
        </div>
      code: |-
        <div class="input-content input-select">
            <select>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        </div>
    - title: Textarea
      demo: |-
        <div class="grid" data-col="2" data-gap="xs">
            <textarea placeholder="Textarea"></textarea>

            <textarea placeholder="Textarea" disabled></textarea>
        </div>
      code: |-
        <textarea placeholder="Textarea"></textarea>

        <textarea placeholder="Textarea" disabled></textarea>
attributes:
    - name: data-icon (input-content)
      example: user-solid
      possible: "-"
      default: None
      required: "No"
    - name: data-text-hide (input-content)
      example: Cacher
      possible: "-"
      default: Hide
      required: "No"
    - name: data-text-show (input-content)
      example: Montrer
      possible: "-"
      default: Show
      required: "No"
    - name: data-icon-hide (input-content)
      example: eye-solid
      possible: "-"
      default: None
      required: "No"
    - name: data-icon-show (input-content)
      example: eye-slash-solid
      possible: "-"
      default: None
      required: "No"
    - name: data-icon-clear (input-content)
      example: close-regular
      possible: "-"
      default: close-solid
      required: "No"
    - name: data-icon-calendar (input-content)
      example: calendar-regular
      possible: "-"
      default: calendar-solid
      required: "No"
    - name: data-icon-clock (input-content)
      example: clock-regular
      possible: "-"
      default: clock-solid
      required: "No"
    - name: data-validate (input-content)
      example: not-passed
      possible: '"not-passed" | "passed"'
      default: None
      required: "No"
    - name: data-icon-passed (input-content)
      example: check-circle-regular
      possible: "-"
      default: check-circle-solid
      required: "No"
    - name: data-icon-not-passed (input-content)
      example: close-circle-regular
      possible: "-"
      default: close-circle-solid
      required: "No"
    - name: maxlength (input)
      example: 300
      possible: "-"
      default: None
      required: "No"
---
