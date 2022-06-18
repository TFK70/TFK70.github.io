import { faker } from '@faker-js/faker'
import uppercamelcase from 'uppercamelcase'
import camelcase from 'camelcase'

export const generateCode = () => {
  const genClass = () => {
    const name = `${faker.word.noun()}-${faker.word.noun()}`
    const genClassName = () => uppercamelcase(name)
    const genProperties = () => {
      const words = [...Array(5)].map(() => camelcase(faker.word.noun()))
      const privateProperties = words.map((word) => `  #${word}: string`).join('\n\n')
      const getters = words
        .map(
          (word) => `  get ${word}() {
    return this.#${word}
  }
      `
        )
        .join('\n\n')
      const construct = `  constructor() {
${words.map((word) => `   this.#${word} = '${faker.word.adjective()}'`).join('\n')}
  }`

      return `${privateProperties}\n\n${construct}\n\n${getters}`
    }
    const genMethods = () => {
      const words = [...Array(5)].map(() => faker.word.verb())
      const methods = words.map((word) => `  ${word}() {}`).join('\n\n')

      return methods
    }

    const code = `export class ${genClassName()} {
${genProperties()}
${genMethods()}      
}`

    return {
      name,
      code,
    }
  }

  const { name, code } = genClass()

  return { name, code }
}
