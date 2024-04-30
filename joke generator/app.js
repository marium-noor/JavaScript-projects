const question = document.querySelector('.question');
const answer = document.querySelector('.ans')

const btn = document.querySelector('.btn');

const api_url = 'https://official-joke-api.appspot.com/random_joke';


async function genJoke(url) {
    const response = await fetch(url);
    let joke = await response.json()
    question.innerHTML = joke.setup;
    answer.innerHTML = joke.punchline
    console.log(joke)
}

btn.addEventListener('click', ()=> {
    genJoke(api_url);
})
