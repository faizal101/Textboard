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
    `<p>${post.postText}</p>
    <p>Posted on: ${post.postDate}</p>`;
};
