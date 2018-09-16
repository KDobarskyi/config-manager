const test = require('ava')
const config = require('..')
const ConfigManager = require('../components/manager/configManager')
const ConfigUpdateProcessor = require('../components/processor/configUpdateProcessor')

test.afterEach(() => {
  config.agentDriverUpdateProcessor.config = undefined
  config.airlineUpdateProcessor.config = undefined
  config.brokerUpdateProcessor.config = undefined
})

test('ConfigManager is abstract', t => {
  t.throws(() => {
    let c = new ConfigManager()
    t.is(c, undefined) // work around no-new-sideffects/never used
  }, TypeError)
})

class ConfigManagerTest extends ConfigManager {}

test('ConfigManager loadUnderlying is abstract', t => {
  t.throws(
    () => {
      let c = new ConfigManagerTest()
      c.loadUnderlying('test')
    },
    TypeError,
    'Method loadUnderlying is abstract in ConfigManager'
  )
})

test('ConfigUpdateProcessor is abstract', t => {
  t.throws(() => {
    let c = new ConfigUpdateProcessor()
    t.is(c, undefined) // work around no-new-sideffects/never used
  }, TypeError)
})

class ConfigUpdateProcessorTest extends ConfigUpdateProcessor {}

test('ConfigManager loadUnderlying is abstract', t => {
  t.throws(
    () => {
      let c = new ConfigUpdateProcessorTest()
      c.getTargetSource()
    },
    TypeError,
    'Method getTargetSource is abstract in ConfigUpdateProcessor'
  )
})

test('loads agent driver config without side effects', t => {
  t.is(config.agentDriverUpdateProcessor.config, undefined)
  config.localConfigManager.load('agentDriver')
  t.is(
    config.agentDriverUpdateProcessor.config.agent['driver.name'],
    'agent_driver'
  )
  t.is(config.airlineUpdateProcessor.config, undefined)
  t.is(config.brokerUpdateProcessor.config, undefined)
})

test('loads airline config without side effects', t => {
  t.is(config.airlineUpdateProcessor.config, undefined)
  config.localConfigManager.load('airline')
  t.is(config.airlineUpdateProcessor.config.airline.name, 'example')
  t.is(config.agentDriverUpdateProcessor.config, undefined)
  t.is(config.brokerUpdateProcessor.config, undefined)
})

test('loads broker config without side effects', t => {
  t.is(config.brokerUpdateProcessor.config, undefined)
  config.localConfigManager.load('broker')
  t.is(config.brokerUpdateProcessor.config.broker.name, 'SimpleBroker')
  t.is(config.agentDriverUpdateProcessor.config, undefined)
  t.is(config.airlineUpdateProcessor.config, undefined)
})

test('loads all configs without side effects', t => {
  config.localConfigManager.load('agentDriver')
  config.localConfigManager.load('airline')
  config.localConfigManager.load('broker')
  t.is(
    config.agentDriverUpdateProcessor.config.agent['driver.name'],
    'agent_driver'
  )
  t.is(config.airlineUpdateProcessor.config.airline.name, 'example')
  t.is(config.brokerUpdateProcessor.config.broker.name, 'SimpleBroker')
})

test('throws not found error for missing file', t => {
  t.throws(() => {
    config.localConfigManager.load('never existent file ever')
  }, Error)
})
