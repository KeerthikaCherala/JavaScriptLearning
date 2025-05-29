let score={
    wins: 0,
    loses: 0, 
    ties: 0
};

const scr=JSON.parse(localStorage.getItem('score'));
if (scr){
    score=scr;
}
updateScore();
function resetScore(){
    score.wins=0;
    score.loses=0;
    score.ties=0;
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();
};

function updateScore(){
    document.querySelector('.js-score' ).innerHTML= `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}
let systemMove='';
function systemsMove(){
    const randomNum=Math.random();
    let sysMove='';
    if(randomNum>=0 && randomNum<1/3){
        sysMove='Rock';
    }else if(randomNum>=1/3 && randomNum<2/3){
        sysMove='Paper';
    }else{
        sysMove='Scissors';
    }
        return sysMove;
}
function usersMove(usermove, systemMove){
    console.log(systemMove);
    let res='';
    if(systemMove==='Rock' && usermove==='Rock'){
        res='Tie.';
        score.ties++;
    
    }
    else if(systemMove==='Paper' && usermove==='Paper'){
        res='Tie.';
        score.ties++;
    }
    else if(systemMove==='Scissors' && usermove==='Scissors'){
        res='Tie.';
        score.ties++;
    }

    else if(systemMove==='Paper' && usermove==='Rock'){
        res='You Lose.';
        score.loses++;
    }else if (systemMove==='Scissors' && usermove==='Rock'){
        res='You Win.';
        score.wins++;
    }
    
    else if(systemMove==='Scissors' && usermove==='Paper'){
        res='You Lose.';
        score.loses++;
    }
    else if(systemMove==='Rock' && usermove==='Paper'){
        res='You Win.';
        score.wins++;
    }
    else if (systemMove==='Rock' && usermove==='Scissors'){
        res='You Lose.';
        score.loses++;
    }
    else if(systemMove==='Paper' && usermove==='Scissors'){
        res='You Win.';
        score.wins++;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();
    document.querySelector('.js-result').innerHTML=res;
    document.querySelector('.js-choices').innerHTML= `You <img src="images/${usermove}-emoji.png" alt="No image" class="move-icon"> 
<img src="images/${systemMove}-emoji.png" alt="No image" class="move-icon">Computer`;
}