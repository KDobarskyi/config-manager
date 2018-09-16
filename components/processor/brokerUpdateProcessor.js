const ConfigUpdateProcessor = require('./configUpdateProcessor')

class BrokerUpdateProcessor extends ConfigUpdateProcessor {
  getTargetSource () {
    return 'broker'
  }
}

module.exports = BrokerUpdateProcessor
