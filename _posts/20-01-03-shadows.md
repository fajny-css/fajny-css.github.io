---
title: Shadows
layout: components-alt
category: styles
intro: |-
    Fajny CSS uses different shadows for some components. You can change them by editing the file <code>scss/_variables.scss</code>. The file <code>_shadows.scss</code> is only for the classes.
files:
    - variables
    - shadows
shadows:
    - title: cards
      code: |-
        &lt;div class=&quot;shadow-cards&quot;&gt;&lt;/div&gt;
    - title: cards-hover
      code: |-
        &lt;div class=&quot;shadow-cards-hover&quot;&gt;&lt;/div&gt;
    - title: buttons
      code: |-
        &lt;div class=&quot;shadow-buttons&quot;&gt;&lt;/div&gt;
    - title: buttons-hover
      code: |-
        &lt;div class=&quot;shadow-buttons-hover&quot;&gt;&lt;/div&gt;
    - title: alerts
      code: |-
        &lt;div class=&quot;shadow-alerts&quot;&gt;&lt;/div&gt;
---

<div class="transparent col-12"></div>

{% for shadow in page.shadows %}
<div class="col-12">
    <h2>{{ shadow.title | capitalize | replace: "-", " " }}</h2>
</div>

<div class="col-12">
    <div class="demo-components">
        <div class="content-demo fonts-demo">
            <div class="shadow-demo shadow-{{ shadow.title }}"></div>
        </div>
        <pre><code class="html">{{ shadow.code }}</code></pre>
    </div>
</div>
{% endfor %}