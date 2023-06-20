const rname = document.getElementById('rname');
const pname = document.getElementById('pname');
const spname = document.getElementById('spname');
const rchoice1 = document.getElementById('rchoice1');
const rchoice2 = document.getElementById('rchoice2');
const music = document.getElementById('music');
const audio = document.getElementById('audio');

const robj = [
    {
        name: 'сегодня вас укусила пчела',
        choice1: 'затерпеть',
        choice2: 'попытаться убить',
    },
    {
        name: 'вы пришли в шарагу, а там фсб с проверкой. у себя в кармане вы нашли 50кг кокаина и барахатные тяги. что будете делать?',
        choice1: 'попытаться скрыть',
        choice2: 'пойти домой',
    },
    {
        name: 'вы наткнулись на голосование, результатом которого должна решиться судьба жителей Зимбабве. что вы выберете?',
        choice1: 'я против жителей зимбабве',
        choice2: 'я за жителей зимбабве',
    },
];

let trackindex = 0;

var rantest;

function udacha() {
    music.src = "files/audio/random.mp3";
    audio.load();
}

function choice1() {
    if (rantest === 1) {
        changepole();
        spname.textContent = "Озон терпел и нам велел";
        pname.textContent = "Вы решили затерпеть. Вы потеряли 10 единиц здоровья.";
        health = health - 10;
        healthchange();
    }

    if (rantest === 2) {
        var podrandom = Math.floor(Math.random() * 2);
        if (podrandom === 0) {
            udacha();
            changepole();
            spname.textContent = "Ваше благородие, Госпожа Удача...";
            pname.textContent = "Увы, но в этот раз у вас ничего не получилось. Все нелегальные предметы были конфискованы, а вы потеряли 5 единиц здоровья.";
        } else {
            changepole();
            spname.textContent = "Счастливчик. Хотя, кто знает, что для тебя лучше...";
            pname.textContent = "В это раз всё прошло гладко.";
        }
    }

    if (rantest === 3) {
        randomobj.style.zIndex = "-1";
        randomobj.style.opacity = "0";
    }
}

function choice2() {
    if (rantest === 1) {
        var podrandom = Math.floor(Math.random() * 2);
        if (podrandom === 0) {
            udacha();
            changepole();
            spname.textContent = "Ваше благородие, Госпожа Удача...";
            pname.textContent = "Увы, но вы промахнулись. Пчела нанесла ответный удар. Вы потеряли 10 единиц здоровья";
            health = health - 10;
            healthchange();
        } else {
            changepole();
            spname.textContent = "Точно в цель";
            pname.textContent = "Вы успешно убили пчелу";
        }
    }

    if (rantest === 2) {
        var podrandom = Math.floor(Math.random() * 2);
        if (podrandom === 0) {
            udacha();
            changepole();
            spname.textContent = "Ваше благородие, Госпожа Удача...";
            pname.textContent = '"Зачем сидеть на парах" - подумали вы и отправились домой. Но по пути вы встретили куратора. Поздравляю, Вы снова в шараге. Вы потеряли 5 единиц здоровья и 30 рублей.';
        } else {
            changepole();
            spname.textContent = "В гостях хорошо, а дома лучше.";
            pname.textContent = "Вы успешно добрались до дома.";
        }
    }

    if (rantest === 3) {
        randomobj.style.zIndex = "-1";
        randomobj.style.opacity = "0";
    }
}

function openchoice() {
    randomobj.style.zIndex = "4";
    randomobj.style.opacity = "1";
}

function randomsob() {
    var random = Math.floor(Math.random() * 7) + 1;
    rantest = random;
    if (money < 200000) {
        if (random === 1) {
            openchoice();
            rname.textContent = robj[trackindex = 0].name;
            rchoice1.textContent = robj[trackindex = 0].choice1;
            rchoice2.textContent = robj[trackindex = 0].choice2;
        };
        if (random === 2) {
            openchoice();
            rname.textContent = robj[trackindex = 1].name;
            rchoice1.textContent = robj[trackindex = 1].choice1;
            rchoice2.textContent = robj[trackindex = 1].choice2;
        };
        if (random === 3) {
            openchoice();
            rname.textContent = robj[trackindex = 2].name;
            rchoice1.textContent = robj[trackindex = 2].choice1;
            rchoice2.textContent = robj[trackindex = 2].choice2;
        }
    } else {
        openchoice();
        document.getElementById('randomsod').innerHTML = '<video src="files/video/theend.mp4" autoplay></video>';
    }
}
