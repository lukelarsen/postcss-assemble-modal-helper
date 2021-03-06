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
body[data-current-modal*="_large"] .modal-inner{
    width: 500px;
}

body[data-current-modal*="_medium"] .modal-inner{
    width: 300px;
}

body[data-current-modal*="_half"] .modal-inner{
    width: 50%;
}
```

## Usage

This plugin doesn't do much on it's own. It is part of a [PostCSS] framework called [Assemble]. This plugin is included in [Assemble Modals]. For usage see [Assemble Modals].