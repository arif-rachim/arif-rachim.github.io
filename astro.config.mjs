import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.rach.im',
    build: {
        // Other build options...
        assets: 'assets'
    },
});
