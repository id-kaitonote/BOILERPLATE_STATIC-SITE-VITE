import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import { resolve } from 'path'
import autoprefixer from 'autoprefixer'
import viteImagemin from 'vite-plugin-imagemin'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
  base: './',
  root: 'app/src',
  server: {
    open: true,
    port: 8080,
  },
  publicDir: resolve(__dirname, 'app/public'),
  build: {
    outDir: resolve(__dirname, 'app/dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        top: resolve(__dirname, 'app/src/index.html'),
        about: resolve(__dirname, 'app/src/about/index.html'),
      },
      output: {
        entryFileNames: 'assets/js/[name].js',
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/style.css'
          }
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name][extname]'
          }
          return 'assets/[name].[ext]'
        },
        chunkFileNames: 'assets/js/bundle.js',
      },
    },
  },
  plugins: [
    checker({
      typescript: true,
      eslint: {
        lintCommand: `eslint ${resolve(__dirname, 'app/src/**/*.{ts,tsx}')}`,
      },
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    glsl({
      include: [
        '**/*.glsl',
        '**/*.wgsl',
        '**/*.vert',
        '**/*.frag',
        '**/*.vs',
        '**/*.fs',
      ],
      exclude: undefined,
      warnDuplicatedImports: true,
      defaultExtension: 'glsl',
      compress: false,
      watch: true,
      root: '/',
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
})
