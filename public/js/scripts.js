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

async function deletePost() {
  // const postNo = document.querySelector('#post-no-1');
  // console.log(postNo.dataset.postno)
  const resonse = await fetch('/delete');
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
  let myFunc = function() {
    console.log("the thing should happen")
  }

  Array.from(elements).forEach(element => {
    element.addEventListener('click', myFunc);
  })
}

