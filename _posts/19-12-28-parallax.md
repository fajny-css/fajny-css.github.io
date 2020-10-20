---
title: Parallax
category: components
intro: A parallax cover can be a nice way to start a page. For the sections, only one parallax is working on mobile.
files:
    - components/parallax
items:
    -
        title: Cover parallax center
        demo: |-
            <p><a href="/assets/demo/cover-parallax-center.html" target="_blank">See the demo</a></p>
        code: |-
            &lt;div class=&quot;cover cover-center&quot;&gt;
                &lt;picture&gt;
                    &lt;source media=&quot;(max-width: 600px)&quot; srcset=&quot;/assets/images/s-cover-parallax.jpg&quot; /&gt;
                    &lt;source media=&quot;(max-width: 1024px)&quot; srcset=&quot;/assets/images/m-cover-parallax.jpg&quot; /&gt;
                    &lt;img src=&quot;/assets/images/l-cover-parallax.jpg&quot; alt=&quot;Cover&quot; /&gt;
                &lt;/picture&gt;

                &lt;h1 class=&quot;display&quot;&gt;Title&lt;/h1&gt;
            &lt;/div&gt;

            &lt;div class=&quot;wrapper&quot;&gt;
                &lt;main class=&quot;container&quot;&gt;
                Content
                &lt;/main&gt;
            &lt;/div&gt;
    -
        title: Cover parallax bottom right
        demo: |-
            <p><a href="/assets/demo/cover-parallax-bottom.html" target="_blank">See the demo</a></p>
        code: |-
            &lt;div class=&quot;cover cover-bottom&quot;&gt;
                &lt;picture&gt;
                    &lt;source media=&quot;(max-width: 600px)&quot; srcset=&quot;/assets/images/s-cover-parallax.jpg&quot; /&gt;
                    &lt;source media=&quot;(max-width: 1024px)&quot; srcset=&quot;/assets/images/m-cover-parallax.jpg&quot; /&gt;
                    &lt;img src=&quot;/assets/images/l-cover-parallax.jpg&quot; alt=&quot;Cover&quot; /&gt;
                &lt;/picture&gt;

                &lt;h1 class=&quot;display&quot;&gt;Title&lt;/h1&gt;
            &lt;/div&gt;

            &lt;div class=&quot;wrapper&quot;&gt;
                &lt;main class=&quot;container&quot;&gt;Content&lt;/main&gt;
            &lt;/div&gt;
    -
        title: Section parallax
        demo: |-
            <p><a href="/assets/demo/section-parallax.html" target="_blank">See the demo</a></p>
        code: |-
            &lt;div class=&quot;wrapper&quot;&gt;
                &lt;main class=&quot;container&quot;&gt;
                    Content
                &lt;/main&gt;
            &lt;/div&gt;

            &lt;div class=&quot;section-parallax parallax-one&quot;&gt;
                &lt;picture&gt;
                    &lt;source media=&quot;(max-width: 600px)&quot; srcset=&quot;/assets/images/s-cover-parallax.jpg&quot; /&gt;
                    &lt;source media=&quot;(max-width: 1024px)&quot; srcset=&quot;/assets/images/m-cover-parallax.jpg&quot; /&gt;
                    &lt;img src=&quot;/assets/images/l-cover-parallax.jpg&quot; alt=&quot;Alt&quot; /&gt;
                &lt;/picture&gt;
                &lt;h2 class=&quot;display&quot;&gt;Title&lt;/h2&gt;
            &lt;/div&gt;

            &lt;div class=&quot;wrapper&quot;&gt;
                &lt;main class=&quot;container&quot;&gt;
                    Content
                &lt;/main&gt;
            &lt;/div&gt;
    -
        title: Section parallax multi
        demo: |-
            <p><a href="/assets/demo/section-parallax-multi.html" target="_blank">See the demo</a></p>
        code: |-
            &lt;div class=&quot;wrapper&quot;&gt;
                &lt;main class=&quot;container&quot;&gt;Content&lt;/main&gt;

                &lt;div class=&quot;section-parallax parallax-multi&quot; style=&quot;background: url(/assets/images/l-cover-parallax.jpg)&quot;&gt;
                    &lt;h2 class=&quot;display&quot;&gt;Title&lt;/h2&gt;
                &lt;/div&gt;

                &lt;main class=&quot;container&quot;&gt;Content&lt;/main&gt;

                &lt;div class=&quot;section-parallax parallax-multi&quot; style=&quot;background: url(/assets/images/l-pic-card.jpg)&quot;&gt;
                    &lt;h2 class=&quot;display&quot;&gt;Title&lt;/h2&gt;
                &lt;/div&gt;

                &lt;main class=&quot;container&quot;&gt;Content&lt;/main&gt;
            &lt;/div&gt;
---