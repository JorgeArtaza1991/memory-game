function flipCard() {
    const cards = document.querySelectorAll('.memory-game');

    cards.forEach(card => card.addEventListener('click', () => {
      card.classList.add('flip');
    }));
}
flipCard();


function counter() {
    let cards = document.querySelectorAll('.memory-game');
   let counter = 0;

    cards.forEach(card => card.addEventListener('click', () => {
        counter++
        document.querySelector('.span-click').innerHTML = counter
    }));
}
counter();


function timer() {
let second = 0, minute = 0, hour = 0;
let timer = document.querySelector('.time-span');
let interval;
interval = setInterval(function() {
    timer.innerHTML = minute+"mins "+second+"secs";
    second++;
    if(second == 60) {
        minute++;
        second = 0;
    }

    if(minute == 60) {
        hour++;
        minute = 0;
    }
},1000);
}
timer();


(function shuffle() {
    let cards = document.querySelectorAll('.memory-game');

    cards.forEach(function(shuffle){
        let randomPosition = Math.floor(Math.random() * 12);
        shuffle.style.order = randomPosition;
    });
})();

var matchCards = function() {
    const cards = document.querySelectorAll('.memory-game');
    let first;
    let second;

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            if(!first && !second) {
                first = card;
                card.classList.add('flip');
            }else if (first && !second) {
                second = card;
                card.classList.add('flip');
       ;     }
            if(first.innerHTML === second.innerHTML) {
                document.querySelector('.player-message').innerHTML = 'Match';
                document.querySelector('.player-message').style.color = '#55aa00';
                first = null;
                second = null;
            } else {
                first.classList.add('flip');
                second.classList.add('flip');
                document.querySelector('.player-message').innerHTML = 'No Match';
                document.querySelector('.player-message').style.color = '#e4000f';
                setTimeout(() => {
                    first.classList.remove('flip');
                    second.classList.remove('flip')
                    first = null;
                    second = null;
                }, 1500)
            }
        })
    });
}
matchCards();



var reset = function() {
let restart = document.querySelector('.reset');

restart.addEventListener('click', () => {
    window.location.reload(true);
})
}
reset();
