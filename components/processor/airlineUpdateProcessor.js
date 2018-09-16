const ConfigUpdateProcessor = require('./configUpdateProcessor')

class AirlineUpdateProcessor extends ConfigUpdateProcessor {
  getTargetSource () {
    return 'airline'
  }
}

module.exports = AirlineUpdateProcessor
