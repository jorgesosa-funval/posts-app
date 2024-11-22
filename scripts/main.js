const modal = document.querySelector('#modal')
const add = document.querySelector('#add')
const btnClose = document.querySelector('#close')
const posts_list = document.querySelector('#posts_list')
const post_form = document.querySelector('#post_form')
let postToEdit = {}
const posts = [
    {
        id: 1,
        titulo: "Programacion desde cero",
        fecha: "12/09/2023",
        content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dicta voluptate quam atque esse ullam, nostrum laboriosam ea, obcaecati autem officia sint fuga itaque impedit voluptatibus aperiam, corporis doloribus? Soluta earum similique excepturi cupiditate adipisci ratione laboriosam repudiandae ducimus mollitia itaque minima, illo voluptates accusamus ea est error magnam nihil. Voluptatem suscipit, nemo vel tempore culpa cumque, libero possimus impedit quisquam quis vero quam ducimus nihil enim beatae commodi! Distinctio libero iure obcaecati odio dolores nobis, eos quia corporis ipsam quis nostrum qui, illo incidunt laboriosam dicta culpa asperiores aliquam harum soluta. Quibusdam similique corrupti repellat laudantium culpa eum obcaecati pariatur quod exercitationem, vero officia voluptates. Esse eos unde molestias quae voluptate iure, reprehenderit eius laudantium placeat dolorum odit, vero eaque corrupti recusandae suscipit dolore atque, deserunt qui repudiandae praesentium sapiente quasi! Quis voluptatum quibusdam architecto deserunt perferendis praesentium nobis animi sunt dolores quod aliquam culpa molestiae, tempora corporis! Iste!"
    },
    {
        id: 2,
        titulo: "Manipulacion del DOM",
        fecha: "12/31/2023",
        content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dicta voluptate quam atque esse ullam, nostrum laboriosam ea, obcaecati autem officia sint fuga itaque impedit voluptatibus aperiam, corporis doloribus? Soluta earum similique excepturi cupiditate adipisci ratione laboriosam repudiandae ducimus mollitia itaque minima, illo voluptates accusamus ea est error magnam nihil. Voluptatem suscipit, nemo vel tempore culpa cumque."
    },
]

function toggleModal() {
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

function loadPosts() {
    posts_list.innerHTML = ""
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        gerateTemplate(post)
    }
}

function gerateTemplate({ id, titulo, fecha }) {
    const post_template = `
        <li class="list-group-item d-md-flex align-items-center justify-content-between" id="${id}">
            <div class="d-flex align-items-md-center justify-content-between flex-grow-1 info flex-column-reverse flex-md-row">
               <h3 class="m-0">${titulo}</h3>
               <h6 class="m-0 text-end fst-italic">${fecha}</h6>
            </div>
            <div class="action d-flex justify-content-end gap-3 flex-grow-1">
               <button class="btn bg-primary" id="edit">
                  Edit
               </button>
               <button class="btn bg-danger" id="delete">
                  Delete
               </button>
            </div>
         </li>
    `
    posts_list.innerHTML += post_template
}

function newPost(event) {
    event.preventDefault()

    const formData = new FormData(post_form)
    const titulo = formData.get('titulo')
    const content = formData.get('contenido')
    const fecha = getDate()
    const nuevo = {
        id: posts[posts.length -1]?.id + 1 || 1,
        titulo: titulo,
        fecha: fecha,
        content: content
    }
    posts.push(nuevo)
    post_form.reset()
    loadPosts()
    toggleModal()
}

function getDate() {
    const now = new Date()
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()
    let formatedDate = `${month}/${day}/${year}`
    return formatedDate
}
/**
 * encuentra el indice de un elemento dentro del array baso en su id
 * @param {number} id 
 * @returns {number} - indice del elemento
 */
function findIndex(id) {
    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];
        if(element.id === id){
            return i
        }
    }
}

function findElement(id) {
    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];
        if(element.id === id){
            return element
        }
    }
}

function deletePost(id) {
    
    let index = findIndex(id) // encontrar el la posicion del elemento a eliminar
    posts.splice(index,1) // eliminar post del array untilizando splice
    loadPosts() // volver a cargar los post despues de elminar.
}

function buttonsAction(event){

    let target = event.target // obtener etique sobre la que se hizo click
    let id = parseInt(target.closest('li').id)// id del post sobre el cual se hizo click
 
      if(target.id === 'delete'){ // validar si se hizo click sobre el boton delete
          deletePost(id) // llamar a la function de eliminar el post
      }else if(target.id === 'edit'){ // validar si se hizo click sobre el boton edit
          editPost(id) // llamar a la function de editar el post
      }

}

function editPost(id) {
    postToEdit = findElement(id)
    post_form.elements.titulo.value = postToEdit.titulo
    post_form.elements.contenido.value = postToEdit.content
    toggleModal()
}

add.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
post_form.addEventListener('submit', newPost)
posts_list.addEventListener('click', buttonsAction)


loadPosts()