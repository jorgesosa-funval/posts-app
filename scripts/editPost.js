import {findElement} from './utils.js'
import { loadPosts } from './showPost.js'
const edit_modal = document.querySelector('#edit_modal')
const edit_post_form = document.querySelector('#edit_post_form')
let postToEdit = {}

export function toggleEditModal() {
    edit_modal.classList.toggle('d-none')
}

export function editPost(id) {
    postToEdit = findElement(id)
    edit_post_form.elements.titulo.value = postToEdit.titulo
    edit_post_form.elements.contenido.value = postToEdit.content
    toggleEditModal()
}

export function cancelEdition() {
    edit_post_form.reset()
    postToEdit = {}
    toggleEditModal()
}

export function saveEdition(event) {
    event.preventDefault()
    const formData = new FormData(edit_post_form)

    postToEdit.content = formData.get('contenido')
    postToEdit.titulo = formData.get('titulo')

    loadPosts()
    edit_post_form.reset()
    toggleEditModal()
    postToEdit = {}

}
 