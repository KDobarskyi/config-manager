class ConfigUpdateEvent {
  constructor (source, config) {
    this.source = source
    this.config = config
  }
}

module.exports = ConfigUpdateEvent
