getPosts()
  .then(data => data.forEach(p => {
      document.getElementById("posts").innerHTML += p.postText;
  }));

let posts;

async function getPosts() {
    const response = await fetch('/get');
    return await response.json();
}


