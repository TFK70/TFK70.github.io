export class SnakeCellar {
  #woodchuck: string

  #census: string

  #shakedown: string

  #decadence: string

  #interloper: string

  constructor() {
    this.#woodchuck = 'healthy'
    this.#census = 'unwelcome'
    this.#shakedown = 'tough'
    this.#decadence = 'happy'
    this.#interloper = 'cuddly'
  }

  get woodchuck() {
    return this.#woodchuck
  }

  get census() {
    return this.#census
  }

  get shakedown() {
    return this.#shakedown
  }

  get decadence() {
    return this.#decadence
  }

  get interloper() {
    return this.#interloper
  }

  declaim() {}

  shroom() {}

  weld() {}

  moisturise() {}

  swindle() {}
}
