card = document.getElementById('card')
front = document.getElementsByClassName('front');
back = document.getElementsByClassName('back');
let totalOfPokemons = 150;
let totalOfCards = 12;
let mainArray = allNumbersArray(totalOfCards, totalOfPokemons);

//Genero numeros aleatorios
numeros = mainArray.sort(function(){return Math.random() - 0.3})


async function init(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await response.json()
    return data
    
}

async function searchByID(id){
    const pokemon = await init(id)
    let pokeName = pokemon.name;
    let pokeImg = pokemon.sprites.other['official-artwork'].front_default;
    return pokeName, pokeImg;
}

cardGenerator(mainArray);

//Seleciona el nivel
let nivel = document.getElementById('default_select');
nivel.addEventListener('change', (event)=>{
    newLevel = nivel.options[nivel.selectedIndex].text;
    console.log(newLevel);
    if (newLevel === 'Fácil'){
        totalOfCards = 8;
    }else if (newLevel === 'Medio'){
        totalOfCards = 12;
    }else if (newLevel === 'Difícil'){
        totalOfCards = 16;
    } 
    mainArray = allNumbersArray(totalOfCards, totalOfPokemons);
    cardGenerator(mainArray);
});

//Generar un número aleatorio

function randomNumber(maxNumber){
    result = Math.ceil(Math.random()*maxNumber);
    return result;
}

function allNumbersArray(totalElements, totalNumbers){
    let allNumbers = [];
    for(let i = 0; i<(totalElements/2); i++){
        let number = randomNumber(totalNumbers);
        allNumbers.push(number)
    }
    allNumbers = allNumbers.concat(allNumbers)
    return allNumbers;
}

// Card Generator
function cardGenerator(mainArray){
    cardGrid.innerHTML = '';
    for(i=0; i<mainArray.length; i++){
        cardGrid.innerHTML += `
        <div class="card-container" id="${i}">
            <div class="card back nes-container is-rounded">
                <li class="nes-pokeball"></li>
            </div>
            <div class="card front nes-container is-rounded" id="card${i}">
            </div>
        </div>`
        front[i].style.transform = 'rotateY(180deg)';
        back[i].style.transform = 'rotateY(0deg)';   
    }
}


// Gettind card ID
cardGrid.addEventListener('click', (event)=>{
    let id;
    if(event.srcElement.offsetParent.id == ''){
        id = event.srcElement.offsetParent.offsetParent.id;
    }else{
        id = event.srcElement.offsetParent.id;
    }
    showCard(Number(id));
});





function createImgCard(url){
    var newPokemonImg = document.createElement('img');
    newPokemonImg.setAttribute('src', url);
    newPokemonImg.setAttribute('class', 'img-front');
    return newPokemonImg;
}

let url = './prueba.png';

function showCard (id){
    
    let newPokemonImg = createImgCard(url);
    currentCard = document.getElementById(`card${id}`);
    // console.log(currentCard)
    currentCard.appendChild(newPokemonImg);
    front[id].style.transform = 'rotateY(0deg)';
    back[id].style.transform = 'rotateY(180deg)';
}

function flipCard(id){
    currentCard = document.getElementById(id);
    setTimeout(()=>{
        front[id].style.transform = 'rotateY(180deg)';
        back[id].style.transform = 'rotateY(360deg)';
    },500); 
}