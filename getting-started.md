---
layout: getting-started
title: Getting Started
desc: Getting started with Fajny CSS
---


## Via CDN
Just copy this in the `<head>` of your HTML:
{% include links/link_cdn_all.html %}

## Via NPM
Open the folder in your terminal and run this command:
{% include code_shell.html content="$ npm i fajny-css" %}

## Locally
This installation is for macOS only.

### Download the project
Download or clone the project on your computer.

### Open your terminal
Open your terminal to run the following commands.

### Install Ruby
It's already installed on macOS, but you can check with this command
{% include code_shell.html content="$ ruby -v" %}
If it's not installed, just follow the [official documentation](https://www.ruby-lang.org/en/documentation/installation/#homebrew){:target="_blank"}.

### Install Sass
To check if already installed on your computer run this command.
{% include code_shell.html content="$ sass -v" %}

If it's not installed yet on your machine, run
{% include code_shell.html content="$ sudo gem install sass" %}
or
{% include code_shell.html content="$ sudo npm install -g sass" %}

If you need help to code in SCSS go here: [Sass website](https://sass-lang.com/){:target="_blank"}.

### Install XCode 
You can find it directly in the Mac App Store.

### Install Node.js

Go to [Node.js website](https://nodejs.org/){:target="_blank"} to get the installer, open the .pkg downloaded and run the installer.

### Install Grunt CLI
{% include code_shell.html content="$ npm install -g grunt-cli" %}
or
{% include code_shell.html content="$ sudo npm install -g grunt-cli" %}



## Use SCSS in your project

Open the Fajny CSS folder in your terminal and run the command
{% include code_shell.html content="$ npm install" %}

This will install all the node modules needed to compile automatically the SCSS into CSS, and minify the JS.

Now run
{% include code_shell.html content="$ grunt" %}
All set, you can start to code!


### How to use Fajny CSS
#### Include the CSS
By default all the components are included in the minified CSS. You just have to add this in the `<head>` of your HTML file:

{% include links/link_local_all.html %}

### Customise Fajny CSS
#### Set your variables
You can change your fonts and colors directly in the variables.

##### Fonts
For the fonts import the CSS from [Google Fonts](https://fonts.google.com/){:target="_blank"} in the file `scss/_fonts.scss`.


##### Colors
You can edit the file `scss/_colors.scss` and change the corresponding Hex values. You can find a nice color palette generator here: [https://coolors.co/](https://coolors.co/){:target="_blank"}.

##### Choose your components

If you do not want to use some components and save some space you can just comment them in the file `scss/fajny.scss`:
{% include code_scss.html content="//@import &quot;components/buttons&quot;;
//@import &quot;components/avatar&quot;;
@import &quot;components/breadcrumbs&quot;;
@import &quot;components/badges&quot;;
@import &quot;components/cards&quot;;
@import &quot;components/image-container&quot;;
@import &quot;components/video&quot;
@import &quot;components/parallax&quot;;
@import &quot;components/forms&quot;;
@import &quot;components/alerts&quot;;" %}