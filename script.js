score = 0;
cross = true;

document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode)

    if (e.keyCode == 38) {
        deer = document.querySelector('.deer');
        deer.classList.add('animateDeer');
        setTimeout(() => {

            deer.classList.remove('animateDeer')

        }, 700);
    }


    if (e.keyCode == 39) {
        deer = document.querySelector('.deer');
        deerX = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
        deer.style.left = deerX + 200 + "px";
    }

    if (e.keyCode == 37) {
        deer = document.querySelector('.deer');
        deerX = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
        deer.style.left = (deerX - 112) + "px";
    }


}





setInterval(() => {
    deer = document.querySelector('.deer');
    gameover = document.querySelector('.gamerover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(deer, null).getPropertyValue('top'));



    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    console.log(offsetX, offsetY);
    if (offsetX < 73 && offsetY < 52) {
        document.getElementsByClassName('gameOver')[0].style.visibility = 'visible';
        var obstacleLeft = window.getComputedStyle(obstacle).getPropertyValue('left');
        console.log('Obstacle left property:', obstacleLeft);
        obstacle.style.left = obstacleLeft + 'px';
        obstacle.classList.remove('obstacleAni');
    }


    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';

        }, 500);

    }




}, 10);


function updateScore(score) {

    scoreCont.innerHTML = "Your Score:" + score
}