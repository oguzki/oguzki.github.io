const player = document.getElementById('player');
var perem = 'pause';

function trackload() {
    player.load();
    if (perem === 'play') {
        player.play();
        perem = 'pause';
        document.getElementById('pp').innerHTML = '&#9654;';
    }
}

function ppbutton() {
    if (perem === 'pause') {
        player.pause();
        perem = 'play';
        document.getElementById('pp').innerHTML = '&#9208;';
    } else {
        player.play();
        perem = 'pause';
        document.getElementById('pp').innerHTML = '&#9654;';
    }
}

function reset() {
    if (perem === 'pause') {
        player.pause();
        player.currentTime = 0;
        player.play();
        perem = 'play';
    } else {
        player.pause();
        player.currentTime = 0;
        player.play();
        perem = 'pause';
        document.getElementById('pp').innerHTML = '&#9654;'
    }
}
