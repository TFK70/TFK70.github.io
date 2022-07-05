export class CubeTournament {
  #league: string

  #dash: string

  #skyline: string

  #clarity: string

  #peony: string

  constructor() {
    this.#league = 'frequent'
    this.#dash = 'unfinished'
    this.#skyline = 'pricey'
    this.#clarity = 'ornery'
    this.#peony = 'idealistic'
  }

  get league() {
    return this.#league
  }

  get dash() {
    return this.#dash
  }

  get skyline() {
    return this.#skyline
  }

  get clarity() {
    return this.#clarity
  }

  get peony() {
    return this.#peony
  }

  stampede() {}

  disaffiliate() {}

  dishonour() {}

  pounce() {}

  recall() {}
}
