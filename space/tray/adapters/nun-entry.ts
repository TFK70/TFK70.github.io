export class NunEntry {
  #thermostat: string

  #download: string

  #litmus: string

  #credential: string

  #recorder: string

  constructor() {
    this.#thermostat = 'multicolored'
    this.#download = 'somber'
    this.#litmus = 'barren'
    this.#credential = 'supportive'
    this.#recorder = 'popular'
  }

  get thermostat() {
    return this.#thermostat
  }

  get download() {
    return this.#download
  }

  get litmus() {
    return this.#litmus
  }

  get credential() {
    return this.#credential
  }

  get recorder() {
    return this.#recorder
  }

  help() {}

  jeopardise() {}

  ballot() {}

  embezzle() {}

  supersede() {}
}
