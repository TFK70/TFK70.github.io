export class FoldInvestor {
  #experience: string

  #can: string

  #hair: string

  #bassinet: string

  #fatigues: string

  constructor() {
    this.#experience = 'unrealistic'
    this.#can = 'hard'
    this.#hair = 'puzzled'
    this.#bassinet = 'squeaky'
    this.#fatigues = 'altruistic'
  }

  get experience() {
    return this.#experience
  }

  get can() {
    return this.#can
  }

  get hair() {
    return this.#hair
  }

  get bassinet() {
    return this.#bassinet
  }

  get fatigues() {
    return this.#fatigues
  }

  beep() {}

  emote() {}

  gussy() {}

  conform() {}

  invalidate() {}
}
