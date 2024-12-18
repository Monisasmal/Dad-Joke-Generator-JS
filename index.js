const jokeButton = document.getElementById('jokeButton');
const jokeDisplay = document.getElementById('jokeDisplay');

async function fetchJoke() {
    try {
        jokeDisplay.innerText = "Updating...";
        jokeButton.disabled = true;
        jokeButton.innerText = "Loading...";
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: { 'Accept': 'application/json' }  // Request JSON response
        });
        
        if (!response.ok) { 
            throw new Error('Network response was not ok');
        }

        const data = await response.json();          // Convert response to JSON
        jokeButton.disabled = false;
        jokeButton.innerText = "😀Get a New Joke😀"
        jokeDisplay.textContent = data.joke;         // Display joke

    } catch (error) {
        jokeDisplay.textContent = 'Error fetching joke!';
        jokeButton.disabled = false;
        jokeButton.innerText = "😀Get a New Joke😀"
        console.error('Fetch error:', error);        // Log error
    }
}

jokeButton.addEventListener('click', fetchJoke);
