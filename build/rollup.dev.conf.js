const Base = require('./rollup.base.conf')

const path = require('path')
const { getModuleNames } = require('./utils')

const moduleNames = getModuleNames()

const rollupConf = []

/**
 * 合并配置返回对应的配置
 */
for (let key in moduleNames) {
  const rollupConfItem = {
    input: moduleNames[key],
    output: {
      file: `./examples/build/${key}.js`,
      format: 'umd',
      name: key
    },
    plugins: [
      ...Base.plugins
    ]
  }
  rollupConf.push(rollupConfItem)
}

module.exports = rollupConf
