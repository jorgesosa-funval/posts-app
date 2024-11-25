import { posts } from "./data.js";
import {loadPosts} from './showPost.js'
import { findIndex } from './utils.js'

export function deletePost(id) {

    let index = findIndex(id) // encontrar el la posicion del elemento a eliminar
    posts.splice(index, 1) // eliminar post del array untilizando splice
    loadPosts() // volver a cargar los post despues de elminar.
}
