import { posts } from "./data"
import { loadPosts } from "./showPost"
const modal = document.querySelector('#modal')

export function toggleModal() {
    modal.classList.toggle('d-none')
    /*  const clases = [...modal.classList]
      if(clases.includes('d-none')){
         console.log('esta presente');
         modal.classList.remove('d-none')
      }else{
         console.log('No esta presente');
         modal.classList.add('d-none')
      } */
}



export function newPost(event) {
    event.preventDefault()

    const formData = new FormData(post_form)
    const titulo = formData.get('titulo')
    const content = formData.get('contenido')
    const fecha = getDate()
    const nuevo = {
        id: posts[posts.length - 1]?.id + 1 || 1,
        titulo: titulo,
        fecha: fecha,
        content: content
    }
    posts.push(nuevo)
    post_form.reset()
    loadPosts()
    toggleModal()
}