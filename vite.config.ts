import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({include: ['lib']})
    ],
    server: {
        port: 5174
    },
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            formats: ['es'],
            fileName: "main.js"
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                // '@emotion/react',
                // '@emotion/styled',
                // '@mui/material'
            ],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    },
})
