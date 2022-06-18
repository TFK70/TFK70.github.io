import { mkdirSync } from 'fs'

import { LAYERS } from '../config.js'
import { GEN_PATH } from '../config.js'

export const createLayers = (cache) => {
  for (const layer of LAYERS) {
    mkdirSync(`${GEN_PATH}/${cache.domain}/${layer}`)
  }
}
