export class PatrimonyHint {
  #engineering: string

  #deviance: string

  #slapstick: string

  #diving: string

  #pinto: string

  constructor() {
    this.#engineering = 'female'
    this.#deviance = 'noted'
    this.#slapstick = 'all'
    this.#diving = 'greedy'
    this.#pinto = 'polished'
  }

  get engineering() {
    return this.#engineering
  }

  get deviance() {
    return this.#deviance
  }

  get slapstick() {
    return this.#slapstick
  }

  get diving() {
    return this.#diving
  }

  get pinto() {
    return this.#pinto
  }

  tuck() {}

  adjourn() {}

  twitter() {}

  guest() {}

  reject() {}
}
