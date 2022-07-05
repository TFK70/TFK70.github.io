export class DaggerTeller {
  #lover: string

  #biopsy: string

  #daddy: string

  #utilization: string

  #monocle: string

  constructor() {
    this.#lover = 'suspicious'
    this.#biopsy = 'lopsided'
    this.#daddy = 'lumbering'
    this.#utilization = 'outlandish'
    this.#monocle = 'dual'
  }

  get lover() {
    return this.#lover
  }

  get biopsy() {
    return this.#biopsy
  }

  get daddy() {
    return this.#daddy
  }

  get utilization() {
    return this.#utilization
  }

  get monocle() {
    return this.#monocle
  }

  fetch() {}

  move() {}

  prophesy() {}

  disconcert() {}

  impress() {}
}
