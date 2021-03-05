const alias = require('@rollup/plugin-alias')
const babel = require('rollup-plugin-babel')
const resolve = require('@rollup/plugin-node-resolve').default
const replace = require('@rollup/plugin-replace')
const typscript = require('rollup-plugin-typescript2')
const path = require('path')
const { eslint } = require('rollup-plugin-eslint')

module.exports = {
  plugins: [
    alias({
      resolve: ['.js', '.ts']
    }),
    replace({
      'process.evn.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      preventAssignment: true
    }),
    resolve(),
    eslint({
      include: ['src/**/*.js', 'src/**/*.ts', 'src/*.ts']
    }),
    typscript({
      tsconfig: path.join(process.cwd(), './tsconfig.json'),
      extensions: ['.js', '.ts', '.tsx']
    }),
    babel({
      extensions: ['.js', '.ts'],
      runtimeHelpers: true,
      exclude: ['node_modules/**']
    })
  ]
}
