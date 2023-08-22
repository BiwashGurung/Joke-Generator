// script.js
const JokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,explicit&type=single";

let getJoke = () => {
    JokeContainer.classList.remove("fade");
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(item => {
            if (item.joke) {
                JokeContainer.textContent = item.joke;
            } else {
                JokeContainer.textContent = "Oops! No joke found.";
            }
            JokeContainer.classList.add("fade");
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            JokeContainer.textContent = "Oops! An error occurred.";
        });
};

btn.addEventListener("click", getJoke);

