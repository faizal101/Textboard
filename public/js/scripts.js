getPosts()
  .then(data => data.forEach(p => {
    formatPosts(p)
  }))
  .finally(() => addEventHandlers())

let posts;

async function getPosts() {
  const response = await fetch('/get');
  return await response.json();
}

async function deletePost(post) {
  console.log(post)
  const response = await fetch('/delete', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({post})
  });
  return await response.json();
}

function formatPosts(post) {
  document.getElementById("posts").innerHTML +=
  `<div id="post-no-${post.postID}" data-post-no="${post.postID}"></div>`
  document.getElementById(`post-no-${post.postID}`).innerHTML =
  `<div class="date"><p>Posted on: ${post.postDate}</p></div>
  <div><p>${post.postText}</p></div>
  <div class="footer">
  <div class="edit">edit</div>
  </div>
  <div class="delete">delete</div>
  </div>`;
};

function addEventHandlers() {
  
  addEditPostsHandler();
  addDeletePostsHandler();
}

function addDeletePostsHandler() {
  let elements = document.getElementsByClassName("delete");
  let deletePostNo = function() {
    const postNo = this.parentElement.attributes["data-post-no"].value; // Might be a better way to do this?
    let result = confirm("Are you sure you want to delete this post?")
    if (result) {
      deletePost(postNo);
      document.getElementById(`post-no-${postNo}`).remove();
    }
  }

  Array.from(elements).forEach(element => {
    element.addEventListener('click', deletePostNo);
  })
}

function addEditPostsHandler() {
  let elements = document.getElementsByClassName("edit");
  let editPostNo = function() {
    const postNo = this.parentElement.parentElement.attributes["data-post-no"].value; // Might be a better way to do this?
    console.log(postNo);
  }

  Array.from(elements).forEach(element => {
    element.addEventListener('click', editPostNo);
  })
}