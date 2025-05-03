import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    federation({
      name: 'fiap_mf_root',
      remotes: {
        home: 'http://localhost:3001/assets/remoteEntry.js',
        main: 'http://localhost:3002/assets/remoteEntry.js',
      },
      shared: [
        'react', 
        'react-dom', 
        '@mui/material',
        '@mui/icons-material',
        '@emotion/styled',
        '@emotion/react',
        'lodash',
      ]
    })
  ],
  build: {
    target: 'esnext',
  }
})
