getPosts()
  .then(data => data.forEach(p => {
    formatPosts(p)
    //   document.getElementById("posts").innerHTML += p.postText;
  }))
  .finally(() => deletePosts())

let posts;

async function getPosts() {
  const response = await fetch('/get');
  return await response.json();
}

async function deletePost(post) {
  console.log(post)
  const response = await fetch('/delete', {
    method: "POST",
    body: JSON.stringify({post}),
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
  <div>
  <button id="edit" type="button">edit</button
  </div>
  <div class="delete">delete</div>
  </div>`;
  // let foo = document.getElementById(`post-no-${post.postID}`).attributes["data-post-no"];
  // console.log(foo.value);
  // document.getElementById("edit").onclick=deletePost();
  
};

function deletePosts() {
  let elements = document.getElementsByClassName("delete");
  let getPostNo = function() {
    const postNo = this.parentElement.parentElement.parentElement.attributes["data-post-no"].value; // Might be a better way to do this?
    // console.log(postNo);
    deletePost(postNo);
  }

  Array.from(elements).forEach(element => {
    element.addEventListener('click', getPostNo);
  })
}

// function foo(div) {
//   // const postNo = div.parentElement.parentElement.parentElement.attributes["data-post-no"].value; // Might be a better way to do this?
//     console.log(div); 
// }