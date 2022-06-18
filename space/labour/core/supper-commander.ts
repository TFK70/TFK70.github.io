export class SupperCommander {
  #corral: string

  #hops: string

  #daffodil: string

  #pursuit: string

  #swordfight: string

  constructor() {
    this.#corral = 'informal'
    this.#hops = 'noted'
    this.#daffodil = 'slushy'
    this.#pursuit = 'stained'
    this.#swordfight = 'assured'
  }

  get corral() {
    return this.#corral
  }

  get hops() {
    return this.#hops
  }

  get daffodil() {
    return this.#daffodil
  }

  get pursuit() {
    return this.#pursuit
  }

  get swordfight() {
    return this.#swordfight
  }

  renovate() {}

  equip() {}

  ritualise() {}

  blacklist() {}

  thresh() {}
}
