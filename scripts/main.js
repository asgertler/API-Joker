import { getJoke, useJoke } from './JokeProvider.js'
import { Joke } from './Joke.js'

const jokeBtn = document.querySelector(".request-joke-btn")
const jokeTarget = document.querySelector(".joke-test")

jokeBtn.addEventListener("click", () => {
  getJoke()
    .then(_ => {
      const joke = useJoke()
      const jokeHTML = Joke(joke)
      jokeTarget.innerHTML = jokeHTML
    })
  // TODO: fetch a joke from the Joke API and render it to the DOM
})