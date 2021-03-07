# TailwindCSS for removing scrollbars
This Tailwind plugin uses different tricks to hide the navigator's scrollbar.

## Installation
```bash
npm install --save-dev @rwc/tailwindcss-no-scrollbar
```
or
```bash
yarn add -D @rwc/tailwindcss-no-scrollbar
```

## Usage
````js
// tailwind.config.js
module.exports = {
    ...
    plugins;: [
        require('@rwc/tailwindcss-no-scrollbar')
        ...
    ];
}
````

Then, add `.scrollbar-none` on the overflowing element.

```html
<div class="overflow-x-auto whitespace-nowrap w-24 scrollbar-none">
    Some long text which will overflow for sure please is it enough? Surely. As you can see, it's scrollable but the scrollbar is hidden.
</div>
```
