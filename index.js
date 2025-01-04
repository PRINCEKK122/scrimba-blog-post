const postsContainer = document.getElementById("post-container");
const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    console.log(formData.get("body"));
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
