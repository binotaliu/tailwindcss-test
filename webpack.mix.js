const mix = require('laravel-mix')

mix.postCss('test.css', 'dist.css', [require('postcss-nested'), require('@tailwindcss/jit')])
mix.postCss('test-without-nested.css', 'dist-without-nested.css', [require('@tailwindcss/jit')])

