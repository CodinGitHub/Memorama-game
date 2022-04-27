let classList = [
  'nes-bulbasaur',
  'nes-charmander',
  'nes-squirtle',
]

card = document.getElementById('card')
front = document.getElementsByClassName('front');
back = document.getElementsByClassName('back');

// Card Generator
for(i=0; i<classList.length*2; i++){
    cardGrid.innerHTML += `
    <div class="card-container" id="${i}">
        <div class="card back nes-container is-rounded">
            <li class="nes-pokeball"></li>
        </div>
        <div class="card front nes-container is-rounded"></div>
    </div>`
    front[i].style.transform = 'rotateY(180deg)';
    back[i].style.transform = 'rotateY(0deg)';   
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


function showCard (id){
    currentCard = document.getElementById(id);
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