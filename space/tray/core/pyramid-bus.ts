export class PyramidBus {
  #idiom: string

  #parent: string

  #critic: string

  #circadian: string

  #surrounds: string

  constructor() {
    this.#idiom = 'even'
    this.#parent = 'accurate'
    this.#critic = 'cute'
    this.#circadian = 'ashamed'
    this.#surrounds = 'wasteful'
  }

  get idiom() {
    return this.#idiom
  }

  get parent() {
    return this.#parent
  }

  get critic() {
    return this.#critic
  }

  get circadian() {
    return this.#circadian
  }

  get surrounds() {
    return this.#surrounds
  }

  shalt() {}

  sensationalize() {}

  horse() {}

  integrate() {}

  unplug() {}
}
