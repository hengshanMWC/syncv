const fs = require('fs-extra')
const { join } = require('path')
const { execSync } = require('child_process')
const { getPackagesDir } = require('@mwc/forb')
const { release } = require('./release')
const { gitSave } = require('./gitSave')
async function getPackagesJSON (dirs) {
  const result = []
  for (let i = 0; i < dirs.length; i++) {
    result.push(await fs.readJSON(dirs[i]))
  }
  return result
}
async function updatePackageVersion (version, packagesPath) {
  const { filesPath } = await getPackagesDir(packagesPath)
  const packagesJSON = await getPackagesJSON(filesPath)
  for (let i = 0; i < packagesJSON.length; i++) {
    const packageJSON = packagesJSON[i]
    packageJSON.version = version
    await fs.writeJSON(filesPath[i], packageJSON, { spaces: 2 })
  }
}
async function publish (packagesPath) {
  const { dirs, filesPath } = await getPackagesDir(packagesPath)
  const packagesJSON = await getPackagesJSON(filesPath)
  for (let i = 0; i < packagesJSON.length; i++) {
    const packageJSON = packagesJSON[i]
    if (!packageJSON.private) {
      console.log(dirs[i])
      execSync(`cd ${dirs[i]} && npm publish`, { stdio: 'inherit' })
    }
  }
}
module.exports = {
  getPackagesJSON,
  updatePackageVersion,
  release,
  gitSave,
  publish
}
