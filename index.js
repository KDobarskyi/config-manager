const LocalConfigManager = require('./components/manager/localConfigManager')
const AgentDriverUpdateProcessor = require('./components/processor/agentDriverUpdateProcessor')
const AirlineUpdateProcessor = require('./components/processor/airlineUpdateProcessor')
const BrokerUpdateProcessor = require('./components/processor/brokerUpdateProcessor')

let localConfigManager = new LocalConfigManager()
let agentDriverUpdateProcessor = new AgentDriverUpdateProcessor()
let airlineUpdateProcessor = new AirlineUpdateProcessor()
let brokerUpdateProcessor = new BrokerUpdateProcessor()

module.exports.localConfigManager = localConfigManager
module.exports.agentDriverUpdateProcessor = agentDriverUpdateProcessor
module.exports.airlineUpdateProcessor = airlineUpdateProcessor
module.exports.brokerUpdateProcessor = brokerUpdateProcessor
