import { writeFileSync } from 'fs'

import { generateCode } from './codegen.js'
import { LAYERS } from '../config.js'
import { GEN_PATH } from '../config.js'

export const createFiles = (cache) => {
  for (const layer of LAYERS) {
    for (const iteration of [1, 2, 3, 4, 5]) {
      const { name, code } = generateCode()

      writeFileSync(`${GEN_PATH}/${cache.domain}/${layer}/${name}.ts`, code)
    }
  }
}
