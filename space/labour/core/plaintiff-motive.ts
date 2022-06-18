export class PlaintiffMotive {
  #stem: string

  #edition: string

  #place: string

  #neuropsychiatry: string

  #stone: string

  constructor() {
    this.#stem = 'tragic'
    this.#edition = 'rural'
    this.#place = 'sweltering'
    this.#neuropsychiatry = 'mysterious'
    this.#stone = 'grand'
  }

  get stem() {
    return this.#stem
  }

  get edition() {
    return this.#edition
  }

  get place() {
    return this.#place
  }

  get neuropsychiatry() {
    return this.#neuropsychiatry
  }

  get stone() {
    return this.#stone
  }

  excrete() {}

  discompose() {}

  foregather() {}

  disinter() {}

  scout() {}
}
