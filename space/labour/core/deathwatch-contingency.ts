export class DeathwatchContingency {
  #displacement: string

  #effect: string

  #commuter: string

  #benefit: string

  #steppingStone: string

  constructor() {
    this.#displacement = 'naughty'
    this.#effect = 'juvenile'
    this.#commuter = 'trained'
    this.#benefit = 'anguished'
    this.#steppingStone = 'utilized'
  }

  get displacement() {
    return this.#displacement
  }

  get effect() {
    return this.#effect
  }

  get commuter() {
    return this.#commuter
  }

  get benefit() {
    return this.#benefit
  }

  get steppingStone() {
    return this.#steppingStone
  }

  colour() {}

  complete() {}

  overdraw() {}

  parley() {}

  wander() {}
}
