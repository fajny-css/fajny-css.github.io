---
title: input-check
order: 12
intro: Radio, checkboxes and different styles for them.
import: input-check
items:
    - title: Radio
      demo: |-
        <div class="flexbox" data-gap="m" data-wrap="wrap">
            <div class="radio">
                <input type="radio" id="radio-1" name="demo-radio">
                <label for="radio-1">Radio</label>
            </div>

            <div class="radio">
                <input type="radio" id="radio-2" name="demo-radio" checked>
                <label for="radio-2">Radio</label>
            </div>

            <div class="radio" data-validate="not-passed">
                <input type="radio" id="radio-3" name="demo-radio-validation">
                <label for="radio-3">Radio</label>
            </div>

            <div class="radio" data-validate="not-passed">
                <input type="radio" id="radio-4" name="demo-radio-validation" checked>
                <label for="radio-4">Radio</label>
            </div>

            <div class="radio">
                <input type="radio" id="radio-5" name="demo-radio-disabled" disabled>
                <label for="radio-5">Radio</label>
            </div>

            <div class="radio">
                <input type="radio" id="radio-6" name="demo-radio-disabled" checked disabled>
                <label for="radio-6">Radio</label>
            </div>
        </div>
      code: |-
        <div class="radio">
            <input type="radio" id="radio-1" name="demo-radio">
            <label for="radio-1">Radio</label>
        </div>

        <div class="radio">
            <input type="radio" id="radio-2" name="demo-radio" checked>
            <label for="radio-2">Radio</label>
        </div>

        <div class="radio" data-validate="not-passed">
            <input type="radio" id="radio-3" name="demo-radio-validation">
            <label for="radio-3">Radio</label>
        </div>

        <div class="radio" data-validate="not-passed">
            <input type="radio" id="radio-4" name="demo-radio-validation" checked>
            <label for="radio-4">Radio</label>
        </div>

        <div class="radio">
            <input type="radio" id="radio-5" name="demo-radio-disabled" disabled>
            <label for="radio-5">Radio</label>
        </div>

        <div class="radio">
            <input type="radio" id="radio-6" name="demo-radio-disabled" checked disabled>
            <label for="radio-6">Radio</label>
        </div>
    - title: Checkbox
      demo: |-
        <div class="flexbox" data-gap="m" data-wrap="wrap">
            <div class="checkbox">
                <input type="checkbox" id="checkbox-1" name="demo-checkbox">
                <label for="checkbox-1">Checkbox</label>
            </div>

            <div class="checkbox">
                <input type="checkbox" id="checkbox-2" name="demo-checkbox" checked>
                <label for="checkbox-2">Checkbox</label>
            </div>

            <div class="checkbox" data-validate="not-passed">
                <input type="checkbox" id="checkbox-3" name="demo-checkbox-validation">
                <label for="checkbox-3">Checkbox</label>
            </div>

            <div class="checkbox" data-validate="not-passed">
                <input type="checkbox" id="checkbox-4" name="demo-checkbox-validation" checked>
                <label for="checkbox-4">Checkbox</label>
            </div>

            <div class="checkbox">
                <input type="checkbox" id="checkbox-5" name="demo-checkbox-disabled" disabled>
                <label for="checkbox-5">Checkbox</label>
            </div>

            <div class="checkbox">
                <input type="checkbox" id="checkbox-6" name="demo-checkbox-disabled" checked disabled>
                <label for="checkbox-6">Checkbox</label>
            </div>
        </div>
      code: |-
        <div class="checkbox">
            <input type="checkbox" id="checkbox-1" name="demo-checkbox">
            <label for="checkbox-1">Checkbox</label>
        </div>

        <div class="checkbox">
            <input type="checkbox" id="checkbox-2" name="demo-checkbox" checked>
            <label for="checkbox-2">Checkbox</label>
        </div>

        <div class="checkbox" data-validate="not-passed">
            <input type="checkbox" id="checkbox-3" name="demo-checkbox-validation">
            <label for="checkbox-3">Checkbox</label>
        </div>

        <div class="checkbox" data-validate="not-passed">
            <input type="checkbox" id="checkbox-4" name="demo-checkbox-validation" checked>
            <label for="checkbox-4">Checkbox</label>
        </div>

        <div class="checkbox">
            <input type="checkbox" id="checkbox-5" name="demo-checkbox-disabled" disabled>
            <label for="checkbox-5">Checkbox</label>
        </div>

        <div class="checkbox">
            <input type="checkbox" id="checkbox-6" name="demo-checkbox-disabled" checked disabled>
            <label for="checkbox-6">Checkbox</label>
        </div>
    - title: Radio tile
      demo: |-
        <div class="flexbox" data-gap="m" data-direction="column">
            <div class="radio tile">
                <input type="radio" id="radio-tile-1" name="demo-radio-tile">
                <label for="radio-tile-1">Radio</label>
            </div>

            <div class="radio tile">
                <input type="radio" id="radio-tile-2" name="demo-radio-tile" checked>
                <label for="radio-tile-2">Radio</label>
            </div>

            <div class="radio tile" data-validate="not-passed">
                <input type="radio" id="radio-tile-3" name="demo-radio-tile-validation">
                <label for="radio-tile-3">Radio</label>
            </div>

            <div class="radio tile" data-validate="not-passed">
                <input type="radio" id="radio-tile-4" name="demo-radio-tile-validation" checked>
                <label for="radio-tile-4">Radio</label>
            </div>

            <div class="radio tile">
                <input type="radio" id="radio-tile-5" name="demo-radio-tile-disabled" disabled>
                <label for="radio-tile-5">Radio</label>
            </div>

            <div class="radio tile">
                <input type="radio" id="radio-tile-6" name="demo-radio-tile-disabled" checked disabled>
                <label for="radio-tile-6">Radio</label>
            </div>
        </div>
      code: |-
        <div class="radio tile">
            <input type="radio" id="radio-tile-1" name="demo-radio-tile">
            <label for="radio-tile-1">Radio</label>
        </div>

        <div class="radio tile">
            <input type="radio" id="radio-tile-2" name="demo-radio-tile" checked>
            <label for="radio-tile-2">Radio</label>
        </div>

        <div class="radio tile" data-validate="not-passed">
            <input type="radio" id="radio-tile-3" name="demo-radio-tile-validation">
            <label for="radio-tile-3">Radio</label>
        </div>

        <div class="radio tile" data-validate="not-passed">
            <input type="radio" id="radio-tile-4" name="demo-radio-tile-validation" checked>
            <label for="radio-tile-4">Radio</label>
        </div>

        <div class="radio tile">
            <input type="radio" id="radio-tile-5" name="demo-radio-tile-disabled" disabled>
            <label for="radio-tile-5">Radio</label>
        </div>

        <div class="radio tile">
            <input type="radio" id="radio-tile-6" name="demo-radio-tile-disabled" checked disabled>
            <label for="radio-tile-6">Radio</label>
        </div>
    - title: Checkbox tile
      demo: |-
        <div class="flexbox" data-gap="m" data-direction="column">
            <div class="checkbox tile">
                <input type="checkbox" id="checkbox-tile-1" name="demo-checkbox-tile">
                <label for="checkbox-tile-1">Checkbox</label>
            </div>

            <div class="checkbox tile">
                <input type="checkbox" id="checkbox-tile-2" name="demo-checkbox-tile" checked>
                <label for="checkbox-tile-2">Checkbox</label>
            </div>

            <div class="checkbox tile" data-validate="not-passed">
                <input type="checkbox" id="checkbox-tile-3" name="demo-checkbox-tile-validation">
                <label for="checkbox-tile-3">Checkbox</label>
            </div>

            <div class="checkbox tile" data-validate="not-passed">
                <input type="checkbox" id="checkbox-tile-4" name="demo-checkbox-tile-validation" checked>
                <label for="checkbox-tile-4">Checkbox</label>
            </div>

            <div class="checkbox tile">
                <input type="checkbox" id="checkbox-tile-5" name="demo-checkbox-tile-disabled" disabled>
                <label for="checkbox-tile-5">Checkbox</label>
            </div>

            <div class="checkbox tile">
                <input type="checkbox" id="checkbox-tile-6" name="demo-checkbox-tile-disabled" checked disabled>
                <label for="checkbox-tile-6">Checkbox</label>
            </div>
        </div>
      code: |-
        <div class="checkbox tile">
            <input type="checkbox" id="checkbox-tile-1" name="demo-checkbox-tile">
            <label for="checkbox-tile-1">Checkbox</label>
        </div>

        <div class="checkbox tile">
            <input type="checkbox" id="checkbox-tile-2" name="demo-checkbox-tile" checked>
            <label for="checkbox-tile-2">Checkbox</label>
        </div>

        <div class="checkbox tile" data-validate="not-passed">
            <input type="checkbox" id="checkbox-tile-3" name="demo-checkbox-tile-validation">
            <label for="checkbox-tile-3">Checkbox</label>
        </div>

        <div class="checkbox tile" data-validate="not-passed">
            <input type="checkbox" id="checkbox-tile-4" name="demo-checkbox-tile-validation" checked>
            <label for="checkbox-tile-4">Checkbox</label>
        </div>

        <div class="checkbox tile">
            <input type="checkbox" id="checkbox-tile-5" name="demo-checkbox-tile-disabled" disabled>
            <label for="checkbox-tile-5">Checkbox</label>
        </div>

        <div class="checkbox tile">
            <input type="checkbox" id="checkbox-tile-6" name="demo-checkbox-tile-disabled" checked disabled>
            <label for="checkbox-tile-6">Checkbox</label>
        </div>
    - title: Toggle
      demo: |-
        <div class="flexbox" data-gap="m" data-wrap="wrap">
            <div class="toggle">
                <input type="checkbox" id="toggle-1" name="demo-toggle">
                <label for="toggle-1">Toggle</label>
            </div>

            <div class="toggle">
                <input type="checkbox" id="toggle-2" name="demo-toggle" checked>
                <label for="toggle-2">Toggle</label>
            </div>

            <div class="toggle" data-validate="not-passed">
                <input type="checkbox" id="toggle-3" name="demo-toggle-validation">
                <label for="toggle-3">Toggle</label>
            </div>

            <div class="toggle" data-validate="not-passed">
                <input type="checkbox" id="toggle-4" name="demo-toggle-validation" checked>
                <label for="toggle-4">Toggle</label>
            </div>

            <div class="toggle">
                <input type="checkbox" id="toggle-5" name="demo-toggle-disabled" disabled>
                <label for="toggle-5">Toggle</label>
            </div>

            <div class="toggle">
                <input type="checkbox" id="toggle-6" name="demo-toggle-disabled" checked disabled>
                <label for="toggle-6">Toggle</label>
            </div>
        </div>
      code: |-
        <div class="toggle">
            <input type="checkbox" id="toggle-1" name="demo-toggle">
            <label for="toggle-1">Toggle</label>
        </div>

        <div class="toggle">
            <input type="checkbox" id="toggle-2" name="demo-toggle" checked>
            <label for="toggle-2">Toggle</label>
        </div>

        <div class="toggle" data-validate="not-passed">
            <input type="checkbox" id="toggle-3" name="demo-toggle-validation">
            <label for="toggle-3">Toggle</label>
        </div>

        <div class="toggle" data-validate="not-passed">
            <input type="checkbox" id="toggle-4" name="demo-toggle-validation" checked>
            <label for="toggle-4">Toggle</label>
        </div>

        <div class="toggle">
            <input type="checkbox" id="toggle-5" name="demo-toggle-disabled" disabled>
            <label for="toggle-5">Toggle</label>
        </div>

        <div class="toggle">
            <input type="checkbox" id="toggle-6" name="demo-toggle-disabled" checked disabled>
            <label for="toggle-6">Toggle</label>
        </div>
    - title: Selector
      demo: |-
        <div class="flexbox" data-gap="m" data-wrap="wrap">
            <div class="selector">
                <input type="checkbox" id="selector-1" name="demo-selector">
                <label for="selector-1">Selector</label>
            </div>

            <div class="selector">
                <input type="checkbox" id="selector-2" name="demo-selector" checked>
                <label for="selector-2">Selector</label>
            </div>

            <div class="selector">
                <input type="checkbox" id="selector-5" name="demo-selector-disabled" disabled>
                <label for="selector-5">Selector</label>
            </div>

            <div class="selector">
                <input type="checkbox" id="selector-6" name="demo-selector-disabled" checked disabled>
                <label for="selector-6">Selector</label>
            </div>
        </div>
      code: |-
        <div class="selector">
            <input type="checkbox" id="selector-1" name="demo-selector">
            <label for="selector-1">Selector</label>
        </div>

        <div class="selector">
            <input type="checkbox" id="selector-2" name="demo-selector" checked>
            <label for="selector-2">Selector</label>
        </div>

        <div class="selector">
            <input type="checkbox" id="selector-5" name="demo-selector-disabled" disabled>
            <label for="selector-5">Selector</label>
        </div>

        <div class="selector">
            <input type="checkbox" id="selector-6" name="demo-selector-disabled" checked disabled>
            <label for="selector-6">Selector</label>
        </div>
attributes:
    - name: data-validate
      example: passed
      possible: '"not-passed" | "passed"'
      default: None
      required: "No"
---
