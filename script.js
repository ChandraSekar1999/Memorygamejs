const cardsArray = [
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'cycle',
        icon:'<i class="fa-solid fa-bicycle"></i>'
    },
    {
        name:'bomb',
        icon:'<i class="fa-solid fa-bomb"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },

    {
        name:'music',
        icon:'    <i class="fa-solid fa-music"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    
    {
        name:'flag',
        icon:'<i class="fa-solid fa-flag-checkered"></i>'
    },
    
    {
        name:'flag',
        icon:'<i class="fa-solid fa-flag-checkered"></i>'
    },
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
        {
        name:'cycle',
        icon:'<i class="fa-solid fa-bicycle"></i>'
    },
    
    {
        name:'bomb',
        icon:'<i class="fa-solid fa-bomb"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    
    {
        name:'music',
        icon:'    <i class="fa-solid fa-music"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    }
];

let flippedCards = [];
// finnal variable
let matchedPairs = 0;

shuffleCards();
const gameBoard = document.getElementById('gameBoard')

displayCards();

function shuffleCards(){
    for(let i=cardsArray.length-1;i>=0;i--){
        const randIndex = Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[randIndex]] = [cardsArray[randIndex],cardsArray[i]]      // card ah swappe panrom
    }
}

function displayCards(){
    cardsArray.forEach((curr,index,arr)=>{

        const card = document.createElement('div');
        
        card.setAttribute('id',index);
        
        card.classList.add('cardback');

                                                                //div kull irukura class console la paakanum
        card.classList.add('active');

        gameBoard.append(card);                                 // gameBoard kulla intha element(div) ah set panrom...... 

        card.addEventListener('click',flipCard);                //call Back Function
    })
}


//3rd stage......
function flipCard(){                                     // let flippedcards []=[];

    if(flippedCards.length<2 && this.classList.contains('active')){  

        //Local Variable
        let cardId = this.getAttribute('id');           //1    console la card id paakalaam...
        flippedCards.push(this);                        //2 push the card details in array list 
        this.classList.remove('cardback');              //3   card ooda backside theriya kudathu kaaga intha code
        this.innerHTML = cardsArray[cardId].icon;       //4  cardArray la ulla cardId la irukura icon ah paakamudiyum
       
       
        if(flippedCards.length==2){                     //    6 match check panra code    CHECKMATCH()
            //checkMatch();
            setTimeout(checkMatch,1000);                //    1 second wait pannitu checkmatch call pannu
        }
    }
}

function checkMatch(){
     //Local Variable
    const card1Id = flippedCards[0].getAttribute('id');
    const card2Id = flippedCards[1].getAttribute('id');


                                                                    // total information store aairukum athula vulla name....
    if(cardsArray[card1Id].name === cardsArray[card2Id].name){
                                                                    // card match aana piragu antha card ooda apirence ellam apidiyee change aaiyurum
        flippedCards[0].style.border = 'none';
        flippedCards[0].style.backgroundColor = 'chocolate';          // ithu body background color
        flippedCards[0].innerHTML = '';
        flippedCards[0].classList.remove('active');
        flippedCards[1].classList.remove('active');
        flippedCards[1].style.border = 'none';
        flippedCards[1].style.backgroundColor = 'chocolate';
        flippedCards[1].innerHTML = "";

        // ..................finally
        matchedPairs++;
        checkGameOver();
    }
    else{
        flippedCards[0].innerHTML = '';                                     
        flippedCards[0].classList.add('cardback');
        flippedCards[1].innerHTML = '';
        flippedCards[1].classList.add('cardback');
    }
    flippedCards = [];
}


function checkGameOver(){
    if(matchedPairs == cardsArray.length/2){                        // cardArrays length    / 2  means total la 12 / 2 == 2
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML = 'You Won';
        gameBoard.classList.remove('game');
        gameBoard.classList.add('won');
    }
}

