function start() {
    day = 1;
    mon = 1;
    year = 23;
    money = 1000;
    health = 100;
    healthchange();
    moneychange();
    daychange();
    monchange();
    yearchange();
    closeMenu();
}

function resume() {
    var code = document.getElementById('parol').value;
    var code1 = Number(document.getElementById('parol').value);
    if (code1 === 0) {
        var ww = "Введи пароль";
        document.getElementById('errormsg').innerHTML = ww;
    } else {
        if (code === "wow") {
            health = 100;
            year = 23;
            day = 12;
            mon = 12;
            money = 200000;
            healthchange();
            daychange();
            monchange();
            yearchange();
            moneychange();
            closeMenu();
        } else {
            var a0 = Number(code.slice(0, 3));
            var a1 = Number(code.slice(4, 6));
            var a2 = Number(code.slice(7, 9));
            var a3 = Number(code.slice(10, 12));
            var a4 = Number(code.slice(14));
            health = a0;
            year = a1;
            day = a2;
            mon = a3;
            money = a4 / 2;
            healthchange();
            daychange();
            monchange();
            yearchange();
            moneychange();
            closeMenu();
        }
    }
}

function generate() {
    document.getElementById('showcode').style.zIndex = "3";
    document.getElementById('showcode').style.opacity = "1";
    if (mon < 10 && day < 10 && health < 100 && health >= 10) {
        var aboba = "0" + health + "-" + year + "Y" + "0" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
    } else {
        if (mon < 10 && day < 10 && health < 10) {
            var aboba = "0" + "0" + health + "-" + year + "Y" + "0" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
        }

        if (mon < 10 && day < 10 && health === 100) {
            var aboba = health + "-" + year + "Y" + "0" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
        }

        if (mon > 10 && day > 10 && health === 100) {
            var aboba = health + "-" + year + "Y" + day + "-" + mon + "C" + "-" + (money * 2);
        }

        if (mon > 10 && day > 10 && health < 100 && health >= 10) {
            var aboba = "0" + health + "-" + year + "Y" + day + "-" + mon + "C" + "-" + (money * 2);
        }

        if (mon > 10 && day > 10 && health < 10) {
            var aboba = "0" + "0" + health + "-" + year + "Y" + day + "-" + mon + "C" + "-" + (money * 2);
        }

        if (mon > 10 && health === 100) {
            var aboba = health + "-" + year + "Y" + "0" + day + "-" + mon + "C" + "-" + (money * 2);
        }

        if (mon > 10 && health < 100 && health >= 10) {
            var aboba = "0" + health + "-" + year + "Y" + "0" + day + "-" + mon + "C" + "-" + (money * 2);
        }

        if (mon > 10 && health < 10) {
            var aboba = "0" + "0" + health + "-" + year + "Y" + "0" + day + "-" + mon + "C" + "-" + (money * 2);
        }

        if (day > 10 && health === 100) {
            var aboba = health + "-" + year + "Y" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
        }

        if (day > 10 && health < 100 && health >= 10) {
            var aboba = "0" + health + "-" + year + "Y" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
        }

        if (day > 10 && health < 10) {
            var aboba = "0" + "0" + health + "-" + year + "Y" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
        }
    }
    document.getElementById('showpass').innerHTML = aboba;
    console.log(aboba);
}
