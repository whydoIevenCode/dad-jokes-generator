const jokes = document.querySelector(".jokes");
const btn = document.querySelector(".btn");

function getJokes() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      jokes.textContent = data.joke;
    });
}
btn.addEventListener("click", getJokes);
