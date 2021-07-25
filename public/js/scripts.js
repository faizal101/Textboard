getPosts()
  .then(data => data.forEach(p => {
    formatPosts(p)
    //   document.getElementById("posts").innerHTML += p.postText;
  }));

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
  console.log(elements);
  
  // let myFunc = function() {
  //   console.log("the thing should happen")
  // }

  /**
   * From the Docs:
   * - The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s). 
   * - The HTMLCollection interface represents a generic collection (array-like object similar to arguments)
   * - The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
   * - `console.log(elements)` confirms that it's a HTMLCollection []
   *    - So it's an array-like object
   * - The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
   * 
   */
  console.log("this is just before the array."); // It prints

  Array.from(elements).forEach(element => {
    console.log(element); // not printing *anything*
    console.log("this is inside the array."); // this is not printing either  // so this means that this Array is not working.
    // console.log(element);
    // element.addEventListener('click', myFunc);
  })
  console.log("this is right after the array."); // It prints

  console.log(Array.from(elements)); // empty Array
}

deletePosts();