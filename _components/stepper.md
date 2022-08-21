---
title: stepper
order: 22
intro: Use the <code>stepper</code> component to navigate inside a multi pages form for example.
import: stepper
items:
    - title: Row
      demo: |-
        <div class="stepper" data-direction="row">
            <div class="step step-active">
                <span class="step-number">
                    <fajny-icon icon-name="check-solid"></fajny-icon>
                </span>

                <a href="#" class="step-text">
                    Step
                </a>
            </div>

            <div class="step step-active">
                <span class="step-number">2</span>

                <a href="#" class="step-text">
                    Step
                </a>
            </div>

            <div class="step">
                <span class="step-number">3</span>

                <small class="step-text">
                    Step
                </small>
            </div>

            <div class="step">
                <span class="step-number">4</span>

                <small class="step-text">
                    Step
                </small>
            </div>

            <div class="step">
                <span class="step-number">5</span>

                <small class="step-text">
                    Step
                </small>
            </div>
        </div>
    - title: Column
      demo: |-
        <div class="stepper" data-direction="column">
            <div class="step step-active">
                <span class="step-number">
                    <fajny-icon icon-name="check-solid"></fajny-icon>
                </span>

                <a href="#" class="step-text">
                    Step
                </a>
            </div>

            <div class="step step-active">
                <span class="step-number">2</span>

                <a href="#" class="step-text">
                    Step
                </a>
            </div>

            <div class="step">
                <span class="step-number">3</span>

                <small class="step-text">
                    Step
                </small>
            </div>

            <div class="step">
                <span class="step-number">4</span>

                <small class="step-text">
                    Step
                </small>
            </div>

            <div class="step">
                <span class="step-number">5</span>

                <small class="step-text">
                    Step
                </small>
            </div>
        </div>
attributes:
    - name: data-direction
      example: column
      possible: '"row" | "column"'
      default: row
      required: "No"
---
