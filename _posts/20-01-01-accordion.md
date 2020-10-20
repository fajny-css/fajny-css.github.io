---
title: Accordion
category: components
intro: "Accordions have two versions: one with JavaScript and one without. The trigger of the non JS version can be changed to a checkbox in the case you want user to be able to open more than one item"
files:
    - components/accordion
items: 
    -
        title: Without background CSS only
        demo: |-
            <div class="accordion">
                <div class="accordion-content">
                    <input type="radio" name="accordion" id="accordion-1" checked />
                    <label for="accordion-1" class="title-accordion">Title</label>
                    <p class="accordion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula ligula et ante bibendum, et hendrerit eros laoreet. Nam sit amet tortor vitae libero finibus placerat. Etiam ultricies volutpat dapibus. Nunc non placerat libero, a aliquam lorem. Nulla et erat egestas, aliquet lectus sit amet, gravida dui. Nunc suscipit libero eu risus viverra scelerisque. Donec in sem quis odio semper auctor. Suspendisse efficitur velit orci, in varius urna porta ut. Morbi tincidunt justo id augue malesuada rhoncus. Aliquam nec eros et velit rhoncus luctus. Nunc condimentum mollis risus, in posuere lacus pharetra et.</p>
                </div>

                <div class="accordion-content">
                    <input type="radio" name="accordion" id="accordion-2" />
                    <label for="accordion-2" class="title-accordion">Title</label>
                    <p class="accordion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula ligula et ante bibendum, et hendrerit eros laoreet. Nam sit amet tortor vitae libero finibus placerat. Etiam ultricies volutpat dapibus. Nunc non placerat libero, a aliquam lorem. Nulla et erat egestas, aliquet lectus sit amet, gravida dui. Nunc suscipit libero eu risus viverra scelerisque. Donec in sem quis odio semper auctor. Suspendisse efficitur velit orci, in varius urna porta ut. Morbi tincidunt justo id augue malesuada rhoncus. Aliquam nec eros et velit rhoncus luctus. Nunc condimentum mollis risus, in posuere lacus pharetra et.</p>
                </div>
            </div>
        code: |-
            &lt;div class=&quot;accordion&quot;&gt;
                &lt;div class=&quot;accordion-content&quot;&gt;
                    &lt;input type=&quot;radio&quot; name=&quot;accordion&quot; id=&quot;accordion-1&quot; checked /&gt;
                    &lt;label for=&quot;accordion-1&quot; class=&quot;title-accordion&quot;&gt;Title&lt;/label&gt;
                    &lt;p class=&quot;accordion-text&quot;&gt;Content&lt;/p&gt;
                &lt;/div&gt;

                &lt;div class=&quot;accordion-content&quot;&gt;
                    &lt;input type=&quot;radio&quot; name=&quot;accordion&quot; id=&quot;accordion-2&quot; /&gt;
                    &lt;label for=&quot;accordion-2&quot; class=&quot;title-accordion&quot;&gt;Title&lt;/label&gt;
                    &lt;p class=&quot;accordion-text&quot;&gt;Content&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
    -
        title: Without background with JS
        demo: |-
            <div class="accordion">
                <div class="accordion-content accordion-open">
                    <p class="title-accordion" onclick="openAccordion(this)">Title</p>
                    <p class="accordion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula ligula et ante bibendum, et hendrerit eros laoreet. Nam sit amet tortor vitae libero finibus placerat. Etiam ultricies volutpat dapibus. Nunc non placerat libero, a aliquam lorem. Nulla et erat egestas, aliquet lectus sit amet, gravida dui. Nunc suscipit libero eu risus viverra scelerisque. Donec in sem quis odio semper auctor. Suspendisse efficitur velit orci, in varius urna porta ut. Morbi tincidunt justo id augue malesuada rhoncus. Aliquam nec eros et velit rhoncus luctus. Nunc condimentum mollis risus, in posuere lacus pharetra et.</p>
                </div>

                <div class="accordion-content">
                    <p class="title-accordion" onclick="openAccordion(this)">Title</p>
                    <p class="accordion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula ligula et ante bibendum, et hendrerit eros laoreet. Nam sit amet tortor vitae libero finibus placerat. Etiam ultricies volutpat dapibus. Nunc non placerat libero, a aliquam lorem. Nulla et erat egestas, aliquet lectus sit amet, gravida dui. Nunc suscipit libero eu risus viverra scelerisque. Donec in sem quis odio semper auctor. Suspendisse efficitur velit orci, in varius urna porta ut. Morbi tincidunt justo id augue malesuada rhoncus. Aliquam nec eros et velit rhoncus luctus. Nunc condimentum mollis risus, in posuere lacus pharetra et.</p>
                </div>
            </div>
        code: |-
            &lt;div class=&quot;accordion&quot;&gt;
                &lt;div class=&quot;accordion-content accordion-open&quot;&gt;
                    &lt;p class=&quot;title-accordion&quot; onclick=&quot;openAccordion(this)&quot;&gt;Title&lt;/p&gt;
                    &lt;p class=&quot;accordion-text&quot;&gt;Content&lt;/p&gt;
                &lt;/div&gt;

                &lt;div class=&quot;accordion-content&quot;&gt;
                    &lt;p class=&quot;title-accordion&quot; onclick=&quot;openAccordion(this)&quot;&gt;Title&lt;/p&gt;
                    &lt;p class=&quot;accordion-text&quot;&gt;Content&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
---
