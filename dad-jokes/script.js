const jokeEl = document.getElementById('joke')
const get_joke = document.getElementById('get_joke')

get_joke.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
  // call the icanhaz API
  const jokeRes = await fetch(
    'https://github.com/15Dkatz/official_joke_api/blob/master/jokes/index.json',
    {
      headers: {
        Accept: 'application/json',
      },
    }
  )

  const joke = await jokeRes.json()

  console.log(joke)
  // set the new joke
  jokeEl.innerHTML = joke.joke
}
