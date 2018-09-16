const ConfigUpdateProcessor = require('./configUpdateProcessor')

class AgentDriverUpdateProcessor extends ConfigUpdateProcessor {
  getTargetSource () {
    return 'agentDriver'
  }
}

module.exports = AgentDriverUpdateProcessor
