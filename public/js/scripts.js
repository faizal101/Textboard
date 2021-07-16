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


function formatPosts(post) {
    document.getElementById("posts").innerHTML +=
    `<div id="post-no-${post.postID}"></div>`
    document.getElementById(`post-no-${post.postID}`).innerHTML = 
    `<div class="date"><p>Posted on: ${post.postDate}</p></div>
    <div><p>${post.postText}</p></div>
    <div class="footer">
    <div>edit</div>
    <div>delete</div>
    </div>`;
};
