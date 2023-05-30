function start() {
    day = 1;
    mon = 1;
    year = 23;
    money = 1000;
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
        if (lang === 0) {
            var ww = "Пароль неверный";
        }
        if (lang === 1) {
            var ww = "Wrong password";
        }
        if (lang === 2) {
            var ww = "パスワードが違います。";
        }
        document.getElementById('errormsg').innerHTML = ww;
    } else {
        if (code === "wow") {
            year = 2023;
            day = 12;
            mon = 12;
            money = 200000;
            daychange();
            monchange();
            yearchange();
            moneychange();
            closeMenu();
        } else {
            var a1 = Number(code.slice(0, 2));
            var a2 = Number(code.slice(3, 5));
            var a3 = Number(code.slice(6, 8));
            var a4 = Number(code.slice(10));
            year = a1;
            day = a2;
            mon = a3;
            money = a4 / 2;
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
    if (mon < 10 && day < 10) {
        var aboba = year + "U" + "0" + day + "-" + "0" + mon + "K" + "-" + (money * 2);
    } else {
        if (mon < 10) {
            var aboba = year + "U" + day + "-" + "0" + mon + "K" + "-" + (money * 2);
        }
        if (day < 10) {
            var aboba = year + "U" + "0" + day + "-" + mon + "K" + "-" + (money * 2);
        }
        if (mon >= 10 && day >= 10) {
            var aboba = year + "U" + day + "-" + mon + "K" + "-" + (money * 2);
        }
    }
    document.getElementById('showpass').innerHTML = aboba;
    console.log(aboba);
}
