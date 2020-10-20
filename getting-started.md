---
title: Getting started
desc: Getting started with Fajny CSS
layout: all
category: getting-started
keywords: 
    - grunt
    - getting started
---

{:.col-12}
## Via CDN

{:.col-12}
Just copy this in the `<head>` of your HTML:

<pre class="col-12">
<code class="html">{{ site.css_cdn }}
{{ site.icons_cdn }}</code>
</pre>

{:.col-12}
And this at the end of the `<body>`:

<pre class="col-12">
<code class="html">{{ site.js_cdn }}</code>
</pre>

{:.col-12}
## Via NPM

{:.col-12}
Open the folder in your terminal and run this command:

{:.col-12}
{% include code.html language="shell" content="$ npm i fajny-css" %}

{:.col-12}
## Locally

{:.col-12}
Just copy this in the `<head>` of your HTML, and change `/path/to/css` by the real path to the file:

{:.col-12}
{%
    include code.html
    language="html"
    content="&lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/css/fajny.min.css&quot; type=&quot;text/css&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/css/fajny-icons.min.css&quot; type=&quot;text/css&quot; /&gt;"
%}

{:.col-12}
And this at the end of the `<body>`:

<pre class="col-12">
<code class="html">{{ site.js_local }}</code>
</pre>

{:.col-12}
You can find a nice tutorial to compile your code automatically with Grunt [here](https://www.taniarascia.com/getting-started-with-grunt-and-sass/){:target="_blank"}.

{:.col-12}
All set, you can start to code!

{:.col-12}
## How to use Fajny CSS

{:.col-12}
### Customise Fajny CSS

{:.col-12}
#### Set your variables

{:.col-12}
You can change your fonts and colors directly in the variables in the file `/scss/_variables.scss`.

{:.col-12}
#### Fonts

{:.col-12}
By default Fajny CSS uses Nunito Sans Black for the titles and Mulish for the body. You can change this by changing the [Google Fonts](https://fonts.google.com/){:target="_blank"} link in the `head` of your HTML file, and in the variables file.

{:.col-12}
#### Colors

{:.col-12}
You can edit the file `/scss/_variables.scss` and change the corresponding Hex values. You can find a nice color palette generator here: [https://coolors.co/](https://coolors.co/){:target="_blank"}.

{:.col-12}
### Choose your components

{:.col-12}
If you do not want to use some components and save some space you can just comment them in the file `/scss/fajny.scss`:

{:.col-12}
{% include code.html language="scss" content="//@import &quot;components/buttons&quot;;
//@import &quot;components/avatar&quot;;
@import &quot;components/breadcrumbs&quot;;
@import &quot;components/badges&quot;;
@import &quot;components/cards&quot;;
@import &quot;components/image-container&quot;;
@import &quot;components/video&quot;
@import &quot;components/parallax&quot;;
@import &quot;components/forms&quot;;
@import &quot;components/alerts&quot;;" %}