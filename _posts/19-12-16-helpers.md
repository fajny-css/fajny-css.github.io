---
title: Helpers
layout: components-alt
category: helpers
intro: Helpers are classes created to override some CSS properties in your HTML. Just add them in the HTML class of your element.
files:
    - helpers
items:
    -
        name: .text-left
        effect: Align text on the left.
    -
        name: .text-center
        effect: Align text in the center
    -
        name: .text-right
        effect: Align text on the right
    -
        name: .clear-float
        effect: Add a float none.
    -
        name: .hidden
        effect: Add a display none.
    -
        name: .no-marg
        effect: Set all the margins to 0.
    -
        name: .no-marg-top
        effect: Set the margin-top to 0.
    -
        name: .no-marg-bottom
        effect: Set the margin-bottom to 0.
    -
        name: .no-marg-left
        effect: Set the margin-left to 0.
    -
        name: .no-marg-right
        effect: Set the margin-right to 0.
    -
        name: .no-padd
        effect: Set all the paddings to 0.
    -
        name: .no-padd-top
        effect: Set the padding-top to 0.
    -
        name: .no-padd-bottom
        effect: Set the padding-bottom to 0.
    -
        name: .no-padd-left
        effect: Set the padding-left to 0.
    -
        name: .no-padd-right
        effect: Set the padding-right to 0.
    -
        name: .no-select
        effect: Prevent the user to select the element.
    -
        name: .center
        effect: Add a flexbox with all elements centered horizontally and vertically.
---

<div class="col-12">
    <h2>CSS Classes</h2>
</div>

<div class="col-12">
    <div class="demo-components demo-show-table">
        <div class="grid">
            <div class="col-3">
                <h6>Class</h6>
            </div>

            <div class="col-3">
                <h6>Effect</h6>
            </div>

            <div class="col-3">
                <h6>Class</h6>
            </div>

            <div class="col-3">
                <h6>Effect</h6>
            </div>

            {% for item in page.items %}
            <div class="col-3">
                <p>{{ item.name }}</p>
            </div>

            <div class="col-3">
                <p>{{ item.effect }}</p>
            </div>
            {% endfor %}
        </div>
    </div>
</div>

<div class="col-12">
    <h2>Color helpers</h2>
    <p>For color, border and text color helpers include this file:</p>
</div>

<div class="col-12">
    <pre><code class="scss">@import "colors";</code></pre>
</div>

<div class="col-12">
    <div class="demo-components demo-show-table">
        <div class="grid">
            <div class="col-3">
                <h6>Color</h6>
            </div>

            <div class="col-3">
                <h6>Class</h6>
            </div>

            <div class="col-3">
                <h6>Color</h6>
            </div>

            <div class="col-3">
                <h6>Class</h6>
            </div>

            {% for color in site.data.color-show %}
            <div class="col-3">
                <div class="color-square bg-{{ color }}"></div>
            </div>

            <div class="col-3">
                <p>.bg-{{ color }}</p>
            </div>
            {% endfor %}
        </div>
    </div>
</div>

<div class="col-12">
    <h2>Border color helpers</h2>
</div>

<div class="col-12">
    <div class="demo-components demo-show-table grid">
        <div class="grid">
            <div class="col-3">
                <h6>Color</h6>
            </div>

            <div class="col-3">
                <h6>Class</h6>
            </div>

            <div class="col-3">
                <h6>Color</h6>
            </div>

            <div class="col-3">
                <h6>Class</h6>
            </div>

            {% for color in site.data.color-show %}
            <div class="col-3">
                <div class="color-square border-square border-{{ color }}"></div>
            </div>

            <div class="col-3">
                <p>.border-{{ color }}</p>
            </div>
            {% endfor %}
        </div>
    </div>
</div>

<div class="col-12">
    <h2>Text color helpers</h2>
</div>

<div class="col-12">
    <div class="demo-components demo-show-table grid">
        <div class="grid">
            <div class="col-3">
                <h6>Color</h6>
            </div>

            <div class="col-3">
                <h6>Class</h6>
            </div>

            <div class="col-3">
                <h6>Color</h6>
            </div>

            <div class="col-3">
                <h6>Class</h6>
            </div>

            {% for color in site.data.color-show %}
            <div class="col-3">
                <p class="font-{{ color }} demo-font-color">Text</p>
            </div>

            <div class="col-3">
                <p>.font-{{ color }}</p>
            </div>
            {% endfor %}
        </div>
    </div>
</div>