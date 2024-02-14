// fetch(`https://jsonplaceholder.typicode.com/posts`)
//   .then((response) => response.json())
//   .then((data) => {
//    data.forEach(post => {
//     const table = document.createElement("div");
//     table.innerHTML = `
//     <td>${post.title}</td>
//     `
//     document.body.appendChild(table);
//    })
//   })

const button = document.getElementById("button");
const names = document.getElementById("name");

button.addEventListener("click", () => {
  fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: "hello",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        alert("users deleted successfull!!");
      }
    })
    .catch((err) => {
      console.log("messsage", err);
    });
});
