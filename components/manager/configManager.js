const eventBus = require('../events/configEventBus')
const ConfigUpdateEvent = require('../events/configUpdateEvent')

class ConfigManager {
  constructor () {
    if (this.constructor === ConfigManager) {
      throw new TypeError('Can not construct abstract class.')
    }
    this.eventBus = eventBus
  }

  refresh (source, config) {
    let configUpdateEvent = new ConfigUpdateEvent(source, config)
    this.eventBus.emit(source, configUpdateEvent)
  }

  loadUnderlying (source) {
    throw new TypeError('Method loadUnderlying is abstract in ConfigManager')
  }

  load (source) {
    let config = this.loadUnderlying(source)
    this.refresh(source, config)
  }
}

module.exports = ConfigManager
