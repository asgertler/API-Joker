import { getJoke, useJoke } from './JokeProvider.js'
import { JokeSetup, JokePunchline } from './Joke.js'

const jokeBtn = document.querySelector(".request-joke-btn")

// const jokeTarget = document.querySelector(".joke-test")
const setupTarget = document.querySelector(".joke-setup")
const punchlineTarget = document.querySelector(".joke-punchline")

let setupHTML = []
let punchHTML = []

jokeBtn.addEventListener("click", () => {
  getJoke()
    .then(_ => {
      const joke = useJoke()
      setupHTML = JokeSetup(joke)
      punchHTML = JokePunchline(joke)
      setupTarget.innerHTML = setupHTML
      punchlineTarget.innerHTML = `
        <button class="request-punchline-btn">Show me the punchline!</button>
      `
    })
    .then(_ => {
      const punchBtn = document.querySelector(".request-punchline-btn")
      punchBtn.addEventListener("click", () => {
        punchlineTarget.innerHTML = punchHTML
      })
    })
})

/*
jokeBtn.addEventListener("click", () => {
  // TODO: fetch a joke from the Joke API and render it to the DOM
  getJoke()
    .then(_ => {
      const joke = useJoke()
      const jokeHTML = Joke(joke)
      jokeTarget.innerHTML = jokeHTML
    })
})
*/