---
title: Getting started
category: getting-started
---

## Install Fajny CSS

<section class="section" data-gap="small" markdown=1>

### Via CDN
    
Just copy this in the `<head>` of your HTML:

{% include demo-code.html language="html" id="css_cdn" content=site.css_cdn %}

And this at the end of the `<body>`:

{% include demo-code.html language="html" id="js_cdn" content=site.js_cdn %}

</section>

<section class="section" data-gap="small" markdown=1>

### Via npm

Open your site's folder in a terminal and run this command:

{% include demo-code.html language="shell" id="npm" content=site.npm %}

</section>

<section class="section" data-gap="small" markdown=1>

### Locally

<a href="{{ site.download }}" download>Download the folder</a> and add it to your site. Then, copy this in the `<head>` of your HTML, and change `/path/to/css` by the real path to the file:

{% include demo-code.html language="html" id="css_local" content=site.css_local %}

And this at the end of the `<body>`: 

{% include demo-code.html language="html" id="js_local" content=site.js_local %}

</section>

To compile automatically SCSS files to CSS, we're using [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass){:target="_blank" rel="noreferrer noopener"} VSCode extension.

All set, you can start to code!

<section class="section" data-gap="large" markdown=1>

## Customise Fajny CSS

<div class="section" data-gap="small" markdown=1>

### Set your variables

You can change your fonts and colors directly in the variables in the file `/scss/_variables.scss`.

</div>

<div class="section" data-gap="small" markdown=1>

#### Fonts

By default Fajny CSS uses Lato. You can change this by changing the [Google Fonts](https://fonts.google.com/){:target="_blank" rel="noreferrer noopener"} link at the beginning of `scss/fajny.scss` file, and in the `scss/_variables.scss` file.

</div>

<div class="section" data-gap="small" markdown=1>

#### Colors

You can edit the file `/scss/_variables.scss` and change the corresponding values. Find a nice color palette generator here: [https://coolors.co/](https://coolors.co/){:target="_blank" rel="noreferrer noopener"}.

</div>
</section>

<section class="section" data-gap="small" markdown=1>

### Choose your components

If you do not want to use some components and save some space you can just comment them in the file `/scss/fajny.scss`:

{% include demo-code.html language="scss" id="components" content='// @import "components/icon";
// @import "components/hr";
// @import "components/image";
// @import "components/video";
@import "components/avatar";
@import "components/loader";
@import "components/button";
@import "components/button-icon";
@import "components/tag";
@import "components/badge";' %}

</section>

<section class="section" data-gap="small" markdown=1>

### JavaScript

Since we are using the most updated JavaScript, we need to compile JS files to have them as compatible as possible. Here, we're using [Babel](https://babeljs.io/){:target="_blank" rel="noreferrer noopener"}. When making changes to JS files, run `npm run build` to compile your JS, and import the compiled JS from the `/lib` folder.

</section>