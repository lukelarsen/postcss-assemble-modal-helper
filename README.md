[PostCSS]:                 https://github.com/postcss/postcss
[Assemble]:                http://assemblecss.com
[Assemble Modals]:         https://github.com/lukelarsen/assemble-modals

# PostCSS Assemble Modal Header

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.png">

[PostCSS] plugin that helps with the use of Assemble Modals.

This plugin will help set the widths of your modal windows when using the [Assemble] framework.

## Example
```css
.modal-widths{
    large: 500px;
    medium: 300px;
    half: 50%;
}
```

Will output:

```css
.modal__block-large {
    max-width: 500px
}

.modal__block-medium {
    max-width: 300px
}

.modal__block-half {
    max-width: 50%
}
```

## Usage

This plugin doesn't do much on it's own. It is part of a [PostCSS] framework called [Assemble]. This plugin is included in [Assemble Modals]. For usage see [Assemble Modals].