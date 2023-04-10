const rname = document.getElementById('rname');
const rchoice1 = document.getElementById('rchoice1');
const rchoice2 = document.getElementById('rchoice2');

const hfa = [
    {
        name: 'вы наткнулись на голосование, результатом которого должна решиться судьба жителей Зимбабве. что вы выберете?',
        choice1: 'я против жителей зимбабве',
        choice2: 'язагит лера',
    },
];

let trackindex = 0;

function openchoice() {
    document.getElementById('randomobj').style.zIndex = "4";
    document.getElementById('randomobj').style.opacity = "1";
}

function randomsob() {
    var random = Math.floor(Math.random() * 7) + 1;
    if (money < 200000) {
        if (random === 1) {
            openchoice();
            if (lang === 0) {
                rname.textContent = "сегодня вас укусила пчела";
                rchoice1.textContent = "затерпеть";
                rchoice2.textContent = "бомбить ирак";
            };
            if (lang === 1) {
                rname.textContent = "you were stung by a bee today";
                rchoice1.textContent = "be patient";
                rchoice2.textContent = "bomb Iraq";
            };
            if (lang === 2) {
                rname.textContent = "今日、蜂に刺されたんです。";
                rchoice1.textContent = "気を長く持つ";
                rchoice2.textContent = "爆弾イラク";
            }
        };
        if (random === 2) {
            openchoice();
            if (lang === 0) {
                rname.textContent = "вы пришли в шарагу, а там фсб с проверкой. у себя в кармане вы нашли 50кг кокаина и барахатные тяги. что будете делать?";
                rchoice1.textContent = "попытаться скрыть";
                rchoice2.textContent = "а я сидел за изнасилование";
            };
            if (lang === 1) {
                rname.textContent = "-";
                rchoice1.textContent = "try to cover up";
                rchoice2.textContent = "I was in jail for rape";
            };
            if (lang === 2) {
                rname.textContent = "-";
                rchoice1.textContent = "-";
                rchoice2.textContent = "レイプで刑務所にいた私";
            };
        };
        if (random === 3) {
            openchoice();
            rname.textContent = hfa[trackindex = 0].name;
            rchoice1.textContent = hfa[trackindex = 0].choice1;
            rchoice2.textContent = hfa[trackindex = 0].choice2;
        }
    } else {
        openchoice();
        document.getElementById('randomsod').innerHTML = '<video src="files/video/theend.mp4" autoplay></video>';
    }
}
