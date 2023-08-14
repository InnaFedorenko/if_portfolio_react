import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import {viteStaticCopy} from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, './public/img') + '/[!.]*', // 1️⃣
          dest: './', // 2️⃣
        },
        {
          src: path.resolve(__dirname, './public/img/logos') + '/[!.]*', // 1️⃣
          dest: './', // 2️⃣
        },
      ],
    }),
  ]
})

