import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import pkg from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'SalesforceConnector',
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
      globals: {
        stream: 'Stream',
        http: 'http',
        url: 'Url',
        https: 'https',
        zlib: 'zlib',
        punycode: 'punycode'
      }
    },
    plugins: [
      nodePolyfills({
        include: ['stream', 'http', 'url', 'https', 'zlib', 'punycode'],
        globals: {
          Buffer: true,
          global: true
        }
      }),
      resolve({
        preferBuiltins: true,
        browser: true
      }),
      commonjs(),
      json(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    },
    plugins: [
      nodePolyfills({
        include: ['stream', 'http', 'url', 'https', 'zlib', 'punycode'],
        globals: {
          Buffer: true,
          global: true
        }
      }),
      resolve({
        preferBuiltins: true,
        browser: true
      }),
      commonjs(),
      json(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      })
    ]
  }
];