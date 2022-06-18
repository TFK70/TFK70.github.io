import { faker } from '@faker-js/faker'

import * as api from './gen/index.js'

const callSequence = ['createDomain', 'createLayers', 'createFiles']

const bootstrap = async () => {
  const runCache = {}

  for (const call of callSequence) {
    api[call](runCache)
  }
}

bootstrap()
