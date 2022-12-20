
'use strict';

let secrectNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

// Function Message
const displayMessage = message =>  {
    document.querySelector('.message').textContent = message
}

// Function Display for css
const displayCSS = css =>   {
    document.querySelector('.danger').style.display = css
}

document.querySelector('.check').addEventListener('click', function(){
    const inputNumber = Number(document.querySelector('.guess').value);
    document.querySelector('body').style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(116,208,159,1) 0%, rgba(95,188,207,1) 100%)';
    displayCSS('none');
    console.log(inputNumber);


    if(!inputNumber)    {
        displayMessage ('ERROR number');
        document.querySelector('body').style.background = '#e93b4e';
        displayCSS('block');

    }
    else if(inputNumber === secrectNumber)  {
        document.querySelector('.number').textContent =  secrectNumber;
        document.querySelector('body').style.background = '#33b52a';
        displayMessage ('Correct !!!');

        // check high score
        document.querySelector('.highscore').textContent = score;
    }

    else {
        if(score > 1)   {

            displayMessage(inputNumber > secrectNumber ? 'So High' : 'So Low');
            score --;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage ('Lose game');
            document.querySelector('body').style.background = '#e93b4e';
            document.querySelector('.number').textContent = secrectNumber
            document.querySelector('.score').textContent = 0;
            displayCSS('block');
        }
    }
})

document.querySelector('.button').addEventListener('click', function(){
    secrectNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('body').style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(116,208,159,1) 0%, rgba(95,188,207,1) 100%)';
    displayMessage ('Start Guessing');
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    displayCSS('none');
})