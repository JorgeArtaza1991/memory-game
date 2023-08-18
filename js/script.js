const cards = document.querySelectorAll('.memory-card');
let lockBoard = false;
let seconds = 0;
let minutes = 0;
let hour = 0;
let interval;
let timer = document.querySelector('.time-span');
let counter = 0;
let reset = document.querySelector('.reset');
let hasFlippedCard = false;
let firstCard, secondCard;
function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
if(!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    counter +=1;
    document.querySelector('.span-click').innerHTML = counter;
    gameTimer();
    return;
}else {
    hasFlippedCard = false;
    secondCard = this;
    checkForMatch();
}

function gameTimer() {
    interval = setInterval(function(){
        timer.innerHTML = minutes+'mins '+seconds+"secs";
        seconds++;
        if(seconds == 60) {
            minutes++;
            seconds = 0;
        }
    
        if(minutes == 60) {
            hour++;
            minutes = 0;
        }
    }, 1000);
}
}

function checkForMatch() {
    if(firstCard.dataset.character === secondCard.dataset.character) {
        disableCards();
        }else {
            unflipedCards();
        
        }
}

function disableCards() {
    document.querySelector('.message').style.color = '#55aa00';
    document.querySelector('.message').innerHTML = 'You got a match';
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipedCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        document.querySelector('.message').style.color = '#e4000f';
        document.querySelector('.message').innerHTML = 'Not a match';
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard));


function restartButton() {
    reset.addEventListener('click', () => {
window.location.reload();
    });
}
restartButton();