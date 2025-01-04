const postsContainer = document.getElementById("post-container");
const postTitle = document.getElementById("title");
const postBody = document.getElementById("body");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const postData = {
    title: postTitle.value,
    body: postBody.value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then((res) => res.json())
    .then((data) => {
      postsContainer.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.body}</p>
            ${postsContainer.innerHTML}
        `;
    });

  form.reset();
});

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const posts = data.slice(0, 5);
    let html = "";

    posts.forEach(function (post) {
      const { title, body } = post;

      html += `
        <div class="post">
            <h2 class="post-title">${title}</h2>
            <p class="post-body">${body}</p>
        </div>
       `;
    });

    postsContainer.innerHTML = html;
  });
