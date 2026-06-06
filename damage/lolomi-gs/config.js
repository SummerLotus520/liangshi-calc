import { LSconfig } from '#liangshi'

export const Config = {
  getConfig (type, name) {
    return LSconfig.getConfig(type, name) || {}
  }
}
