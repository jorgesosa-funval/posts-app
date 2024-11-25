import { posts } from "./data.js";
export function loadPosts() {
    posts_list.innerHTML = ""
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        gerateTemplate(post)
    }
}

export function gerateTemplate({ id, titulo, fecha }) {
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