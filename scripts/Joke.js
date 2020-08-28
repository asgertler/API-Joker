// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string

export const Joke = (joke) => {
    return `
        <div class="joke-setup">${joke.setup}</div>
        <div class="joke-punchline">${joke.punchline}</div>
    `
}