export class BobEagle {
  #lookout: string

  #turning: string

  #loyalty: string

  #resale: string

  #glow: string

  constructor() {
    this.#lookout = 'gentle'
    this.#turning = 'agreeable'
    this.#loyalty = 'plain'
    this.#resale = 'bulky'
    this.#glow = 'valid'
  }

  get lookout() {
    return this.#lookout
  }

  get turning() {
    return this.#turning
  }

  get loyalty() {
    return this.#loyalty
  }

  get resale() {
    return this.#resale
  }

  get glow() {
    return this.#glow
  }

  screech() {}

  infuse() {}

  hope() {}

  infuriate() {}

  ionize() {}
}
