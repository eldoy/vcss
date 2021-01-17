# VCSS

Semantic and minimal CSS library, only about 3Kb gzipped and minified.

Based on [marx](https://mblode.github.io/marx/) and [sanitize](https://csstools.github.io/sanitize.css/) but with extras:

* Different defaults, a bit lighter
* More SCSS variables and colors
* Extra tag styles and utilities
* Lots of tweaks and some bug fixes

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
// Colors
$text: #111 !default;
$white: #fff !default;
$black: #000 !default;
$light: #dfdfdf !default;
$dark: #5a5a5a !default;
$link: #33f !default;
$highlight: #ff5 !default;
$danger: #f55 !default;
$line: #eaeaea !default;
$disabled: #fafafa !default;
$medium: #ccc !default;
$preserve: #fafafa !default;
$input: #333 !default;
$button: #efefef !default;
$small: #999;

// Basic stylings
$border: 1px solid $line !default;
$border-radius: 4px !default;
$xs-pad: 4px !default;
$sm-pad: 8px !default;
$md-pad: 16px !default;
$lg-pad: 20px !default;
$xlg-pad: 40px !default;

// Breakpoints
$small-breakpoint: 400px !default;
$large-breakpoint: 960px !default;

// Links
$link-color: $link !default;
$link-hover-color: darken($link-color, 15%) !default;

// Buttons
$button-background-color: $button !default;
$button-border-radius: $border-radius !default;
$button-color: $text !default;
$button-padding: $sm-pad $md-pad !default;
$button-border: 1px solid $medium !default;
$button-font-size: 1rem !default;
$button-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;
$button-hover-background-color: darken($button, 7.5%) !default;
$button-active-background-color: darken($button, 10%) !default;
$button-focus-outline: 0 !default;
$button-focus-shadow: 0 0 0 0.2rem fade_out($button, 0.5) !default;
$button-disabled-background-color: $button !default;

// Forms
$label-color: $dark !default;
$label-font-size: 90% !default;
$label-line-height: 2 !default;
$input-border: 1px solid $input;
$input-focus-background-color: #fff !default;
$input-focus-border-color: mix($dark, #fff) !default;
$input-focus-outline: 0 !default;
$input-focus-shadow: 0 0 0 0.2rem fade_out($dark, 0.75) !default;
$input-outline: 1px thin $line !default;
$input-disabled-background-color: $disabled !default;
$input-readonly-background-color: $disabled !default;
$input-invalid-border-color: darken($danger, 10) !default;
$input-invalid-color: $danger !default;
$input-focus-invalid-outline-color: $danger !default;

// Font
$sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !default;
$serif: Georgia, Times, 'Times New Roman', serif !default;
$monospace: Menlo, Monaco, Consolas, 'Courier New', monospace !default;
$font-family: $sans-serif !default;

// Typography
$font-size: 16px !default;
$font-size-small: ceil(($font-size * 0.85)) !default;
$font-size-h1: 40px !default;
$font-size-h2: 32px !default;
$font-size-h3: 25px !default;
$font-size-h4: 18px !default;
$font-size-h5: 16px !default;
$font-size-h6: 100% !default;
$line-height: 1.6 !default;
```

MIT licensed. Enjoy!
