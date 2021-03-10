# TailwindCSS plugin for removing scrollbars
This plugin exposes a class that hides the browser's default scrollbar using various tricks 

## Installation
```bash
npm install --save-dev tailwindcss-no-scrollbar
```
or
```bash
yarn add -D tailwindcss-no-scrollbar
```

## Usage
````js
// tailwind.config.js
module.exports = {
    plugins: [
        require('tailwindcss-no-scrollbar')
    ]
}
````

Then, add `.scrollbar-none` on the overflowing element.

```html
<div class="overflow-x-auto whitespace-nowrap w-24 scrollbar-none">
    Some long text which will overflow for sure. Please is it enough? Surely.
</div>
```
