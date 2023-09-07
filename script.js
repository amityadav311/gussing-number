'use strict';
// document.querySelector('.number').textContent=13;
//
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let secret=Math.trunc(Math.random()*20)+1; 
let score = 20;
let highscore=0;
//document.querySelector('.number').textContent=
//secret;


document.querySelector('.check').addEventListener
('click',function(){
    
    
    
    const guess=Number(document.querySelector
        ('.guess').value);
        
        if(!guess){
            document.querySelector('.message').textContent=
            'correct number';
            
        }else if (guess ===secret){
            document.querySelector('.message').textContent=
            'correct number';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width ='30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent=highscore;

        }
            

        }else if (guess < secret){
            if(score >0){
            document.querySelector('.message').textContent=
            'too low';
            score--;
            document.querySelector('.score').textContent=score;
            }
            else{document.querySelector('.message').textContent=
            'GAME OVER YOU LOSE!';}


        }else if (guess > secret){
            if(score >0){
            document.querySelector('.message').textContent=
            'too HIGH';
            score--;
            document.querySelector('.score').textContent=score;
            }
            else{document.querySelector('.message').textContent=
            'GAME OVER YOU LOSE!';}
        }

        
});
document.querySelector('.again').addEventListener('click',function()
{
    score = 20;
    secret=Math.trunc(Math.random()*20)+1; 
    document.querySelector('.message').textContent=
    'start guessing....';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    

    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.number').style.width ='15rem';
    
});
