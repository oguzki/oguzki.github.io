var c1 = document.getElementById('chislo1');
var c2 = document.getElementById('chislo2');
var c3 = document.getElementById('chislo3');

const winlose = document.getElementById('winlose');
const winlose_pic = document.getElementById('winlose_pic');

var r1;
var r2;
var r3;

var stavka;

function kazich() {
    stavka = Number(document.getElementById('stavki').value);
    winlose.textContent = "";
    if (stavka > money) {
        winlose.textContent = "ставка больше баланса";
        winlose_pic.src = "https://media.tenor.com/-CfhczC_cREAAAAC/angai313-spongebob-sad.gif";
        winlose_pic.style.height = "150px"
    } else {
        if (stavka === 0) {
            winlose.textContent = "брат, укажи ставку";
            winlose_pic.src = "https://media.tenor.com/sADndc5QpsQAAAAC/no-score.gif";
            winlose_pic.style.height = "115px"
        } else {
            if (stavka < 0) {
                winlose.textContent = "ставка меньше нуля";
                winlose_pic.src = "https://media.tenor.com/-CfhczC_cREAAAAC/angai313-spongebob-sad.gif";
                winlose_pic.style.height = "150px"
            } else {
                r1 = Math.floor(Math.random() * 5) + 1;
                r2 = Math.floor(Math.random() * 5) + 1;
                r3 = Math.floor(Math.random() * 5) + 1;
                kzpicks();
            }
        }
    }
}

function kzpicks() {
    //кристал номер 1
    if (r1 === 5) {
        c1.innerHTML = '<img class="gems" src="files/pic/gems/5.png">';
    }
    if (r1 === 4) {
        c1.innerHTML = '<img class="gems" src="files/pic/gems/4.png">';
    }
    if (r1 === 3) {
        c1.innerHTML = '<img class="gems" src="files/pic/gems/3.png">';
    }
    if (r1 === 2) {
        c1.innerHTML = '<img class="gems" src="files/pic/gems/2.png">';
    }
    if (r1 === 1) {
        c1.innerHTML = '<img class="gems" src="files/pic/gems/1.png">';
    }

    //кристал номер 2
    if (r2 === 5) {
        c2.innerHTML = '<img class="gems" src="files/pic/gems/5.png">';
    }
    if (r2 === 4) {
        c2.innerHTML = '<img class="gems" src="files/pic/gems/4.png">';
    }
    if (r2 === 3) {
        c2.innerHTML = '<img class="gems" src="files/pic/gems/3.png">';
    }
    if (r2 === 2) {
        c2.innerHTML = '<img class="gems" src="files/pic/gems/2.png">';
    }
    if (r2 === 1) {
        c2.innerHTML = '<img class="gems" src="files/pic/gems/1.png">';
    }

    //кристал номер 3
    if (r3 === 5) {
        c3.innerHTML = '<img class="gems" src="files/pic/gems/5.png">';
    }
    if (r3 === 4) {
        c3.innerHTML = '<img class="gems" src="files/pic/gems/4.png">';
    }
    if (r3 === 3) {
        c3.innerHTML = '<img class="gems" src="files/pic/gems/3.png">';
    }
    if (r3 === 2) {
        c3.innerHTML = '<img class="gems" src="files/pic/gems/2.png">';
    }
    if (r3 === 1) {
        c3.innerHTML = '<img class="gems" src="files/pic/gems/1.png">';
    }

    kzcheck();
}

function kzcheck() {
    if (r1 === 5 && r2 === 5 && r3 === 5) {
        winlose.textContent = "ДЖЕКПОТ";
        winlose_pic.src = "https://media.tenor.com/qNDgTlYUYwAAAAAC/jackpot-%D0%B4%D0%B6%D0%B5%D0%BA%D0%BF%D0%BE%D1%82.gif";
        winlose_pic.style.height = "112px"
        money = money + (stavka * 5);
        moneychange();
    }
    if (r1 === 4 && r2 === 4 && r3 === 4) {
        winlose.textContent = "Победа!";
        winlose_pic.src = "https://psv4.userapi.com/c536436/u382434012/docs/d18/b6d5b55d5809/shef_iz_kukhni_prikolny_muzhik_gif_bumery_pobeda.gif?extra=Bfq5sGpOgg4Ei7wU3ODRk8oSOCt46smS4Pm5XO8zWarrLZYy6HI146A1zohdTx0Qcnth72Oku5sWWDz3BK5nHI5JUa09t5lug-zicS0_vDsYHkMa3Mf_FNeenvd9srvuw2l67-EWIqL-9MLkM8PHj9fT";
        winlose_pic.style.height = "86px"
        money = money + (stavka * 4);
        moneychange();
    }
    if (r1 === 3 && r2 === 3 && r3 === 3) {
        winlose.textContent = "Всем пиво за мой счёт!";
        winlose_pic.src = "https://psv4.userapi.com/c235031/u470760053/docs/d9/415d440fea1b/ded_pyot_pivo.gif?extra=V00f-0PytKuGlQN-yQOCDc2NmKN4TAZBf8OenzbD70tzLY8jtcVnKcs3MgtEV5TxKWNvQsGSez8dD-tG8CAA_GfiXc3_Z0VErrKh5MjgYqQ7DugNwJkcpzCnODNxxXsMMw4YTQKcZ3kzXJyg3tpnvLQAMg";
        winlose_pic.style.height = "274px"
        money = money + (stavka * 5);
        moneychange();
    }
    if (r1 === 2 && r2 === 2 && r3 === 2) {
        winlose.textContent = "на мотороллер хватит";
        winlose_pic.src = "https://media.tenor.com/ROmWbzs_aSQAAAAC/maddy-murk-murk-power.gif";
        winlose_pic.style.height = "84px";
        money = money + Math.round(stavka * 2.5);
        moneychange();
    }
    if (r1 === 1 && r2 === 1 && r3 === 1) {
        winlose.textContent = "нормально";
        winlose_pic.src = "https://psv4.userapi.com/c520036/u151886304/docs/d33/a490b0b9f316/jadeyanh-vylerria_1.gif?extra=4wcZloucgB6ScXFM3VVpIy6mV8PD4lSbwDjn6V_wAKdIDgcr7PvSjmcdvqWrII10zYvJPcRVNgEW6BbRbXNzgFahys0qhy2IOuDqMB9fMBFI3wExJYILtvlPeirh7hMWlTboD5l1t_pJVrdTV1P36mhwfA";
        winlose_pic.style.height = "110px"
        money = money + (stavka * 2);
        moneychange();
    } else {
        if (r1 === r2 || r2 === r3) {
            winlose.textContent = "почти...";
            winlose_pic.src = "https://media.discordapp.net/attachments/786030245688901674/1094306737756045312/ezgif-2-b9e8a376f7.gif";
            winlose_pic.style.height = "150px";
            money = money + Math.round(stavka * 1.9);
            moneychange();
        } else {
            if (r1 === r3) {
                winlose.textContent = "почти...";
                winlose_pic.src = "https://media.discordapp.net/attachments/786030245688901674/1094306737756045312/ezgif-2-b9e8a376f7.gif";
                winlose_pic.style.height = "150px";
                money = money + Math.round(stavka * 1.9);
                moneychange();
            } else {
                money = money - stavka;
                moneychange();
                winlose.textContent = "...";
                winlose_pic.src = "https://psv4.userapi.com/c237231/u704977679/docs/d52/3f9992bac2a9/clowndoomer.gif?extra=SPobilmhiUq1ovcXZjD7F_n88UrmJdlm8WQL-_t5d6JE5mAli5fq9_YNI4D3IOaEJDBeDkDopp8Pjal8dWWBPkgy4I14JSIuWpSKHQiu0UWnLOukyQl1YNKK4mhyHc4oR_jogn1UqAuL6qOpfTX_dXVPeg";
                winlose_pic.style.height = "113px";
            }
        }
    }
}