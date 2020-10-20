---
title: Animations
layout: components-alt
category: helpers
intro: These are SCSS mixins made to speed up your development process to animate elements.
files:
    - animation
items:
    -
        name: progress-n
        effect: Goes from 0 to a given number (n) in the parent width. Exists from 5 to 100, with an increment of 5.
        demo: |-
            <div class="progress progress-success progress-60 progress-animation"></div>
        code: |-
            @include animation(progress-60 2.4s 1);
    -
        name: spin
        effect: Make an object spin.
        demo: |-
            <div class="spinner spinner-primary"></div>
        code: |-
            @include animation(spin 2s linear infinite);
---

<div class="col-12">
    <h2>How to use them</h2>
</div>

<div class="col-12">
    <div class="demo-components demo-show-table">
        <div class="grid">
            <div class="col-3">
                <h6>Name</h6>
            </div>

            <div class="col-3">
                <h6>Effect</h6>
            </div>

            <div class="col-3">
                <h6>Example</h6>
            </div>

            <div class="col-3">
                <h6>Code</h6>
            </div>

            {% for item in page.items %}
            <div class="col-3">
                <p>{{ item.name }}</p>
            </div>

            <div class="col-3">
                <p>{{ item.effect }}</p>
            </div>

            <div class="col-3">
                {{ item.demo }}
            </div>

            <div class="col-3">
                <pre><code class="scss">{{ item.code }}</code></pre>
            </div>
            {% endfor %}
        </div>
    </div>
</div>