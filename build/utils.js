const glob = require('glob')

/**
 * Get module names
 */
const getModuleNames = () => {
  const names = {}
  glob.sync('./src/*').forEach(path => {
    const [, , name] = path.split('/')
    const [readName] = name.split('.')
    if (!names[readName] && name) {
      names[readName] = path
    }
  })
  return names
}

module.exports = {
  getModuleNames
}