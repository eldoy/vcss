# VCSS

Semantic and minimal CSS library, only about 3Kb gzipped and minified.

Based on [Marx](https://mblode.github.io/marx/) and [sanitize](https://csstools.github.io/sanitize.css/) but with extras:

* Support for CSS variables in addition to sass variables
* Some extra tweaks and bug fixes

### Usage

If you're using plain CSS you can just include the `dist/vcss-min.css` file.

If you're using SCSS:
```bash
npm i vcss.css
```

and then include in app with:
```sass
@import '../node_modules/vcss.css/scss/vcss.scss`
```

### Variables

Here's the list of available variables at the moment (as found in `scss/_variables.scss`):

```sass
//Basic stylings
$br: 4px !default;
$xs-pad: 4px !default;
$sm-pad: 8px !default;
$md-pad: 16px !default;
$lg-pad: 20px !default;
$xlg-pad: 40px !default;
$trans: 0.3s !default;

//Breakpoints
$small-breakpoint: 400px !default;
$large-breakpoint: 768px !default;

//Colors
$primary: #007bff !default;
$accent: #64ffda !default;
$red: #f44336 !default;
$yellow: #ffeb3b !default;
$grey: #f7f7f9 !default;
$white: #fff !default;
$black: #000 !default;

//Text
$text: rgba(0, 0, 0, 0.8) !default;
$secondary: rgba(0, 0, 0, 0.54) !default;
$disabled: rgba(0, 0, 0, 0.38) !default;
$dividers: rgba(0, 0, 0, 0.12) !default;

//Links
$link-color: $primary !default;
$link-hover-color: darken($link-color, 15%) !default;

//Buttons
$button-hover-background-color: darken($primary, 7.5%) !default;
$button-hover-border-color: darken($primary, 10%) !default;
$button-active-background-color: darken($primary, 10%) !default;
$button-active-border-color: darken($primary, 12.5%) !default;
$button-focus-shadow-color: fade_out($primary, 0.5) !default;

//Form
$select-focus-border-color: darken($red, 10) !default;
$input-focus-shadow-color: fade_out($primary, 0.75) !default;
$input-focus-border-color: mix($primary, #fff) !default;

//Font
$sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !default;
$serif: Georgia, Times, 'Times New Roman', serif !default;
$monospace: Menlo, Monaco, Consolas, 'Courier New', monospace !default;
$font-family: $sans-serif !default;

//Typography
$font-size-base: 16px !default;
$font-size-small: ceil(($font-size-base * 0.85)) !default;
$font-size-h1: 40px !default;
$font-size-h2: 32px !default;
$font-size-h3: 28px !default;
$font-size-h4: 24px !default;
$font-size-h5: 20px !default;
$font-size-h6: 16px !default;
$line-height-base: 1.5 !default;

//Other
$border: 1px solid $dividers !default;
```

MIT licensed. Enjoy!
