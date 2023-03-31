let url = 'https://apis.ccbp.in/jokes/random';
let jokeBtn = document.getElementById('jokeBtn');
let jokeText = document.getElementById('jokeText');

function displayJoke() {
    let options = {
        method: 'GET'
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let {
                value
            } = jsonData;
            jokeText.textContent = value;
        });
}
jokeBtn.addEventListener('click', displayJoke);