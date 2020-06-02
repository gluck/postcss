import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import builtins from 'rollup-plugin-node-builtins';

export default {
  input: 'lib/postcss.js',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'postcss',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),

    resolve({
      mainFields: ['module', 'jsnext:main', 'browser'],
      preferBuiltins: true,
    }),
    commonjs(),
    builtins(),
  ],
};
