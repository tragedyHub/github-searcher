import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@slices': path.resolve(__dirname, './src/store/slices'),
            '@components': path.resolve(__dirname, './src/components'),
            '@store': path.resolve(__dirname, './src/store'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@assets': path.resolve(__dirname, './src/assets'),
        },
    },
    base: '/',
})
