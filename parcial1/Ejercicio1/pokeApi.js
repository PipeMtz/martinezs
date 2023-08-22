// const options = {method: 'GET'};

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

function fetchPokemon(){
        const randomNumber = Math.floor(Math.random() * 200) + 1;
        
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
        
        const options = { method: 'GET' };
        
                fetch(apiUrl, options)
                    .then(response => response.json())
                    .then(data => {
                        const pokemonName = data.name;
                        const pokemonWeight = data.weight;
                        const pokemonTypes = data.types.map(type => type.type.name).join(', ');
                        const pokemonImage = data.sprites.front_default;
                        document.getElementById('pokemonName').textContent = pokemonName;
                        document.getElementById('pokemonWeight').textContent = (pokemonWeight) + " lb";
                        document.getElementById('pokemonTypes').textContent = pokemonTypes;
                        document.getElementById('image').src = pokemonImage;
                    })
                    .catch(err => console.error(err));   
}

document.getElementById('fetchBtn').addEventListener('click',fetchPokemon)