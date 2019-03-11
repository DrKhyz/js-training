'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str){
    return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ');
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('str'), 'Str')
assert.strictEqual(jadenCase('la petite maison dans la pRairie'), 'La Petite Maison Dans La Prairie')
// End of tests */
