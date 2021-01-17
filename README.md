# VCSS

Semantic and minimal CSS library, only about 3Kb gzipped and minified.

Based on [Marx](https://mblode.github.io/marx/) and [sanitize](https://csstools.github.io/sanitize.css/) but with extras:

* Different defaults
* Many more SCSS variables
* Extra components and utilities
* Tweaks and bug fixes

[Check out the demo](https://eldoy.github.io/vcss/)

### Usage

If you're using plain CSS you can just include the `dist/vcss-min.css` file.

If you're using SCSS:
```bash
npm i vcss.css
```

and then include in app with:
```scss
@import '../node_modules/vcss.css/scss/vcss.scss`
```

### Variables

Here's the list of available variables at the moment (as found in `scss/_variables.scss`):

```scss
//Basic stylings
$border-radius: 4px !default;
$xs-pad: 4px !default;
$sm-pad: 8px !default;
$md-pad: 16px !default;
$lg-pad: 20px !default;
$xlg-pad: 40px !default;
$transition-time: 0.3s !default;

//Breakpoints
$small-breakpoint: 400px !default;
$large-breakpoint: 960px !default;

//Colors
$light: #1b8080 !default;
$accent: #64ffda !default;
$danger: #f44336 !default;
$yellow: #ffeb3b !default;
$light: #f7f7f9 !default;
$dark: #565656 !default;
$white: #fff !default;
$black: #000 !default;
$blue: #007bff !default;

//Text
$text: #302e2b !default;
$secondary: #706d64 !default;
$disabled: #9d988d !default;
$line: #ded8c7 !default;

//Links
$link-color: $blue !default;
$link-hover-color: darken($link-color, 15%) !default;

//Buttons
$button-background-color: $light !default;
$button-border-radius: $border-radius !default;
$button-color: $white !default;
$button-padding: $sm-pad $md-pad !default;
$button-border: 1px solid transparent !default;
$button-font-size: 1rem !default;
$button-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;
$button-hover-color: darken($light, 7.5%) !default;
$button-hover-border-color: darken($light, 10%) !default;
$button-hover-color: $white !default;
$button-active-color: darken($light, 10%) !default;
$button-active-border-color: darken($light, 12.5%) !default;
$button-active-color: $white !default;
$button-focus-outline: 0 !default;
$button-focus-shadow: 0 0 0 0.2rem fade_out($light, 0.5) !default;
$button-disabled-color: $light !default;
$button-disabled-border-color: $light !default;
$button-disabled-color: $white !default;

//Forms
$label-color: $dark !default;
$input-focus-background-color: #fff !default;
$input-focus-border-color: mix($light, #fff) !default;
$input-focus-outline: 0 !default;
$input-focus-shadow: 0 0 0 0.2rem fade_out($light, 0.75) !default;
$input-outline: 1px thin $line !default;
$input-disabled-background-color: $line !default;
$input-disabled-color: $secondary !default;
$input-readonly-border-color: $line !default;
$input-readonly-color: $secondary !default;
$input-invalid-border-color: darken($danger, 10) !default;
$input-invalid-color: $danger !default;
$input-focus-invalid-outline-color: $danger !default;

//Font
$sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !default;
$serif: Georgia, Times, 'Times New Roman', serif !default;
$monospace: Menlo, Monaco, Consolas, 'Courier New', monospace !default;
$font-family: $sans-serif !default;

//Typography
$font-size: 16px !default;
$font-size-small: ceil(($font-size * 0.85)) !default;
$font-size-h1: 40px !default;
$font-size-h2: 32px !default;
$font-size-h3: 28px !default;
$font-size-h4: 24px !default;
$font-size-h5: 20px !default;
$font-size-h6: 16px !default;
$line-height-base: 1.5 !default;

//Other
$border: 1px solid $line !default;
```

MIT licensed. Enjoy!
