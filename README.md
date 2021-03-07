# TailwindCSS plugin for removing scrollbars
This plugin exposes a class that hides the browser's default scrollbar using various tricks 

## Installation
```bash
npm install --save-dev @redwebcreation/tailwindcss-no-scrollbar
```
or
```bash
yarn add -D @redwebcreation/tailwindcss-no-scrollbar
```

## Usage
````js
// tailwind.config.js
module.exports = {
    plugins: [
        require('@redwebcreation/tailwindcss-no-scrollbar')
    ]
}
````

Then, add `.scrollbar-none` on the overflowing element.

```html
<div class="overflow-x-auto whitespace-nowrap w-24 scrollbar-none">
    Some long text which will overflow for sure. Please is it enough? Surely.
</div>
```
