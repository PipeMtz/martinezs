// const options = {method: 'GET'};

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

function fetchXML(){

    
    
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    
    const xhr = new XMLHttpRequest()
    {
        xhr.open('GET', apiUrl, true);
        xhr.onreadystatechange = ()=>{
            if (xhr.readyState ===4 && xhr.status == 200){
                var data = JSON.parse(xhr.responseText);

                const pokemonName = data.name;
                        const pokemonWeight = data.weight;
                        const pokemonTypes = data.types.map(type => type.type.name).join(', ');
                        const pokemonImage = data.sprites.front_default;
                        document.getElementById('pokemonName').textContent = pokemonName;
                        document.getElementById('pokemonWeight').textContent = (pokemonWeight) + " lb";
                        document.getElementById('pokemonTypes').textContent = pokemonTypes;
                        document.getElementById('image').src = pokemonImage;
            }
        };
        xhr.send();
    }


}

function fetchPromise(){
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

async function fetchAsync(){
    const randomNumber = Math.floor(Math.random() * 200) + 1;
        
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
        
    try {
        const response = await fetch(apiUrl);

        const data = await response.json();
            const pokemonName = data.name;
            const pokemonWeight = data.weight;
            const pokemonTypes = data.types.map(type => type.type.name).join(', ');
            const pokemonImage = data.sprites.front_default;
            document.getElementById('pokemonName').textContent = pokemonName;
            document.getElementById('pokemonWeight').textContent = (pokemonWeight) + " lb";
            document.getElementById('pokemonTypes').textContent = pokemonTypes;
            document.getElementById('image').src = pokemonImage;
                      
    } catch (error) {
        
    }
                
}

function fetchJQUERY(){
    const randomNumber = Math.floor(Math.random() * 200) + 1;
        
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    $.ajax({
        url:apiUrl,
        method:"GET",
        success:(data)=>{ 
            const pokemonName = data.name;
            const pokemonWeight = data.weight;
            const pokemonTypes = data.types.map(type => type.type.name).join(', ');
            const pokemonImage = data.sprites.front_default;
            document.getElementById('pokemonName').textContent = pokemonName;
            document.getElementById('pokemonWeight').textContent = (pokemonWeight) + " lb";
            document.getElementById('pokemonTypes').textContent = pokemonTypes;
            document.getElementById('image').src = pokemonImage;
         },
        error :(e)=>{}
        
    })
}

function fetchAxios(){
    const randomNumber = Math.floor(Math.random() * 200) + 1;
        
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    axios(apiUrl).then((res)=>{
            const data = res.data;
            const pokemonName = data.name;
            const pokemonWeight = data.weight;
            const pokemonTypes = data.types.map(type => type.type.name).join(', ');
            const pokemonImage = data.sprites.front_default;
            document.getElementById('pokemonName').textContent = pokemonName;
            document.getElementById('pokemonWeight').textContent = (pokemonWeight) + " lb";
            document.getElementById('pokemonTypes').textContent = pokemonTypes;
            document.getElementById('image').src = pokemonImage;
    }).catch(error =>{})
}



document.getElementById('fetchXML').addEventListener('click',fetchXML)
document.getElementById('fetchPromise').addEventListener('click',fetchPromise)
document.getElementById('fetchAsync').addEventListener('click',fetchAsync)
document.getElementById('fetchJQUERY').addEventListener('click',fetchJQUERY)
document.getElementById('fetchAxios').addEventListener('click',fetchAxios)
