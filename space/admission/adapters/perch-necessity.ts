export class PerchNecessity {
  #recipe: string

  #cloister: string

  #transition: string

  #corn: string

  #solvency: string

  constructor() {
    this.#recipe = 'definitive'
    this.#cloister = 'overdue'
    this.#transition = 'responsible'
    this.#corn = 'impressionable'
    this.#solvency = 'bronze'
  }

  get recipe() {
    return this.#recipe
  }

  get cloister() {
    return this.#cloister
  }

  get transition() {
    return this.#transition
  }

  get corn() {
    return this.#corn
  }

  get solvency() {
    return this.#solvency
  }

  mothball() {}

  bruise() {}

  appal() {}

  pooh() {}

  free() {}
}
