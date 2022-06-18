import { faker } from '@faker-js/faker'
import { existsSync } from 'fs'
import { mkdirSync } from 'fs'

import { GEN_PATH } from '../config.js'

export const createDomain = (cache) => {
  let domainName = faker.word.noun()

  while(existsSync(`${GEN_PATH}/${domainName}`)) {
    domainName = faker.word.noun()
  }

  mkdirSync(`${GEN_PATH}/${domainName}`)
  cache.domain = domainName
}
