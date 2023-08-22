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
                        document.getElementById('pokemonName').textContent = pokemonName;
                        document.getElementById('pokemonWeight').textContent = (pokemonWeight) + " kg";
                        document.getElementById('pokemonTypes').textContent = pokemonTypes;
                    })
                    .catch(err => console.error(err));   
}

document.getElementById('fetchBtn').addEventListener('click',fetchPokemon)