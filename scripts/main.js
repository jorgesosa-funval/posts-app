import { editPost, cancelEdition, saveEdition } from './editPost.js'
import {loadPosts} from './showPost.js'
import { deletePost } from './deletePost.js'
import { toggleModal } from './createPost.js'

const add = document.querySelector('#add')

const btnClose = document.querySelector('#close')
const btnCancel = document.querySelector('#edit_post_form button[type="button"]')

const posts_list = document.querySelector('#posts_list')
const post_form = document.querySelector('#post_form')
const edit_post_form = document.querySelector('#edit_post_form')





function buttonsAction(event) {

    let target = event.target // obtener etique sobre la que se hizo click
    let id = parseInt(target.closest('li').id)// id del post sobre el cual se hizo click

    if (target.id === 'delete') { // validar si se hizo click sobre el boton delete
        deletePost(id) // llamar a la function de eliminar el post
    } else if (target.id === 'edit') { // validar si se hizo click sobre el boton edit
        editPost(id) // llamar a la function de editar el post
    }

}


add.addEventListener('click', toggleModal)
// btnClose.addEventListener('click', toggleModal)
// post_form.addEventListener('submit', newPost)
posts_list.addEventListener('click', buttonsAction)
btnCancel.addEventListener('click', cancelEdition)
edit_post_form.addEventListener('submit', saveEdition)


loadPosts()