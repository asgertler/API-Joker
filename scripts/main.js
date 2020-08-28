import { getJoke, useJoke } from './JokeProvider.js'

var joke = []

const jokeBtn = document.querySelector(".request-joke-btn");

jokeBtn.addEventListener("click", () => {
  getJoke()
    .then(_ => {
      joke = useJoke()
      console.log(joke)
    })
  // TODO: fetch a joke from the Joke API and render it to the DOM
});