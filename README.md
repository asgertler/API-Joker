# Tell Me A Joke!

Use the [Joke API](https://github.com/15Dkatz/official_joke_api) to dynamically add a fresh dad joke to the DOM.

Try testing this API in Postman. Make a GET request to the following URL and look at the JSON object that gets returned

https://official-joke-api.appspot.com/jokes/random

Requirements

- When a user clicks the "Tell me a joke" button, they should see a joke setup and punchline on the screen

- Every time the user clicks the "Tell me a joke" button they should see a new joke and the old one should be replaced

**Advanced Challenge**

- When a user clicks the "Tell me a joke" button, they should only see the joke's setup. They should also be presented with another button that says "Show Punchline". Clicking that button should reveal the joke's punchline

**Ultra Challenge**

- The joke API can give us a joke based on category. It offers General, Knock-Knock, and Programming jokes. Present a dropdown menu for the user with these options. If they select "Programming Jokes" from the dropdown and then hit the "Tell me a joke" button, they should be given a programming joke. Note: you'll need to read the documentation for the [Joke API](https://github.com/15Dkatz/official_joke_api) to know how this works.
