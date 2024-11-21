const modal = document.querySelector('#modal')
const add = document.querySelector('#add')
const btnClose = document.querySelector('#close')
const posts_list = document.querySelector('#posts_list')
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
 loadPosts()
function gerateTemplate({titulo,fecha}) {
    const post_template = `
        <li class="list-group-item d-md-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center justify-content-between flex-grow-1 info ">
               <h3>${titulo}</h3>
               <h6>${fecha}</h6>
            </div>
            <div class="action d-flex justify-content-end gap-3 flex-grow-1">
               <button class="btn bg-primary">
                  Edit
               </button>
               <button class="btn bg-danger">
                  Delete
               </button>
            </div>
         </li>
    `
    posts_list.innerHTML += post_template
}

add.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)