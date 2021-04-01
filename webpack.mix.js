const mix = require('laravel-mix')

mix.postCss('test.css', 'dist.css', [require('postcss-nested'), require('@tailwindcss/jit')])

