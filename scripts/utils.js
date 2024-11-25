import { posts } from './data.js'

/**
 * encuentra el indice de un elemento dentro del array baso en su id
 * @param {number} id 
 * @returns {number} - indice del elemento
 */
export function findIndex(id) {
    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];
        if (element.id === id) {
            return i
        }
    }
}

/**
 * Encuentra un elemento en el array basado en su Id
 * @param {number} id 
 * @returns {Object}
 */
export function findElement(id) {
    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];
        if (element.id === id) {
            return element
        }
    }
}
/**
 * Returna la fecha actual en fromato m/d/yyyy
 * @returns {string}
 */
export function getDate() {
    const now = new Date()
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()
    let formatedDate = `${month}/${day}/${year}`
    return formatedDate
}
