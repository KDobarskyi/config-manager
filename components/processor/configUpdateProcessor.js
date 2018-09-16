const eventBus = require('../events/configEventBus')

class ConfigUpdateProcessor {
  getTargetSource () {
    throw new TypeError(
      'Method getTargetSource is abstract in ConfigUpdateProcessor'
    )
  }

  constructor () {
    this.eventBus = eventBus
    this.eventBus.on(this.getTargetSource(), event => this.handleEvent(event))
  }

  handleEvent (event) {
    this.config = event.config
    // uncomment for tracing
    // console.log(event.source + ': ' + JSON.stringify(this.config))
  }
}

module.exports = ConfigUpdateProcessor
