const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const ConfigManager = require('./configManager')

class LocalConfigManager extends ConfigManager {
  constructor () {
    super()
    this.yaml = yaml
    this.fs = fs
    this.path = path
  }

  loadUnderlying (source) {
    let yamlAttempt = this.loadYAML(source)
    if (yamlAttempt instanceof Error) {
      let jsonAttempt = this.loadJSON(source)
      if (jsonAttempt instanceof Error) {
        throw new Error(
          'Cannot find neither yaml nor json file for ' +
            source +
            ' ' +
            yamlAttempt +
            ' ' +
            jsonAttempt
        )
      }
      return jsonAttempt
    }
    return yamlAttempt
  }

  loadFile (fliename, ext) {
    return this.fs.readFileSync(
      this.path.join(__dirname, '../../files', fliename + ext),
      'utf8'
    )
  }

  loadJSON (source) {
    try {
      return JSON.parse(this.loadFile(source, '.json'))
    } catch (e) {
      return e
    }
  }

  loadYAML (source) {
    try {
      return this.yaml.safeLoad(this.loadFile(source, '.yaml'))
    } catch (e) {
      return e
    }
  }
}

module.exports = LocalConfigManager
