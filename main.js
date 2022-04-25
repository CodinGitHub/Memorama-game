let classList = [
  'nes-bulbasaur',
  'nes-charmander',
  'nes-squirtle',
  'nes-bulbasaur',
  'nes-charmander',
  'nes-squirtle',
]

card = document.getElementById('card')
front = document.getElementsByClassName('front');
back = document.getElementsByClassName('back');

// Card Generator

for(i=0; i<classList.length; i++){
    cardGrid.innerHTML += `
    <div class="card-container" id="card${i}">
        <div class="card back nes-container is-rounded">
            <li class="nes-pokeball"></li>
        </div>
        <div class="card front nes-container is-rounded"></div>
    </div>`
    front[i].style.transform = 'rotateY(180deg)';
    back[i].style.transform = 'rotateY(0deg)';   
}

/*
cardGrid.innerHTML = `
    <div class="card-container" id="card0">
        <div class="card back nes-container is-rounded">
            <li class="nes-pokeball"></li>
        </div>
        <div class="card front nes-container is-rounded"></div>
    </div>
`
*/

cardGrid.addEventListener('click', (event)=>{
    console.log(event)
    if(event.srcElement.offsetParent.id == ''){
        console.log ('hiciste clic en la imagen')
    }else{
        console.log(event.srcElement.offsetParent.id)
    }
});


function flipCard (id){
    currentCard = document.getElementById(`card${id}`)
    currentCard.addEventListener('click', (event)=>{
        // console.log(event)
        // console.log(event.srcElement.offsetParent.id)
        front[id].style.transform = 'rotateY(0deg)';
        back[id].style.transform = 'rotateY(180deg)';
        setTimeout(()=>{
            front[id].style.transform = 'rotateY(180deg)';
            back[id].style.transform = 'rotateY(360deg)';
        },500);
    });
}

flipCard(0);



//ESTO SI FUNCIONA
/*


front = document.getElementById('front');
back = document.getElementById('back');
card.addEventListener('click', (event)=>{
    // console.log(event)
    console.log(event.srcElement.offsetParent.id)
    front.style.transform = 'rotateY(180deg)';
    back.style.transform = 'rotateY(360deg)';
    setTimeout(()=>{
        front.style.transform = 'rotateY(360deg)';
        back.style.transform = 'rotateY(180deg)';
    },1000);
});

*/