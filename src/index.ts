/**
 * This program reverse
 *
 * By:      Lily Liu
 * Version: 1.0
 * Since:   2022-11-17
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

/**
 * reverseString
 *
 * @param {string} str accepts a string
 * @returns {string} the string backwards
 */
function reverseString (str: string): string {
  if (str === '') {
    return str
  } else {
    return reverseString(str.slice(1)) + str.slice(0, 1)
  }
}

const stringInput = prompt('Enter a string : ')

console.log(`The reversed string is ${reverseString(stringInput)}`)

console.log('\nDone.')
