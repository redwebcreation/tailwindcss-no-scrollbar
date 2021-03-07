const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({addUtilities}) {
    addUtilities({
        '.scrollbar-none': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': {
                'display': 'none'
            }
        }
    });
});
