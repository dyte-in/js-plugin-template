// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'build'
    },
    server: {
        port: 5000,
        host: 'localhost',
    },
});
