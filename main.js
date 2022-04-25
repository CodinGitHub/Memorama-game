let classList = [
  'nes-bulbasaur',
  'nes-charmander',
  'nes-squirtle',
  'nes-bulbasaur',
  'nes-charmander',
  'nes-squirtle',
]

// Card Generator
/*
for(i=0; i<classList.length; i++){
    cardGrid.innerHTML += `
    <div class="card-container" id="${i}">
        <div id="front" class="card front nes-container is-rounded">
            <i class="${classList[i]}"></i>
        </div>
        <div id="back" class="card back nes-container is-rounded">
            <i class="nes-pokeball"></i>
        </div>
    </div>`
    
}
*/

cardGrid.innerHTML = `
    <div class="card-container" id="1">
        <div id="front" class="card front nes-container is-rounded">
            <i class="${classList[1]}"></i>
        </div>
        <div id="back" class="card back nes-container is-rounded">
            <i class="nes-pokeball"></i>
        </div>
    </div>`

card = document.getElementsByClassName('card-container')
front = document.getElementById('front');
back = document.getElementById('back');

front.style.transform = 'rotateY(0deg)';
back.style.transform = 'rotateY(180deg)';

console.log(card)

card.addEventListener('click', (event)=>{
    console.log(event)
    front.style.transform = 'rotateY(180deg)';
    back.style.transform = 'rotateY(360deg)';
    setTimeout(()=>{
        front.style.transform = 'rotateY(360deg)';
        back.style.transform = 'rotateY(180deg)';
    },1000);
});