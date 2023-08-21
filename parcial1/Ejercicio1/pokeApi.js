// const options = {method: 'GET'};

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

const randomNumber = Math.floor(Math.random() * 200) + 1;

const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

const options = { method: 'GET' };

        fetch(apiUrl, options)
            .then(response => response.json())
            .then(data => {
                const pokemonName = data.name;
                document.getElementById('pokemonName').textContent = pokemonName;
            })
            .catch(err => console.error(err));