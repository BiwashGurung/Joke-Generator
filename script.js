const JokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,explicit&type=single";

let getJoke = () => {
    JokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        JokeContainer.textContent = `${item.joke}`;
        JokeContainer.classList.toggle("fade");
    })
}
