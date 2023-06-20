function nextDay() {
    day = day + 1;
    randomsob();
    if (mon === 2) {
        if (day === 29) {
            nextMon();
            stp();
        }
    }
    if (day === 32) {
        nextMon();
        stp();
    } else {
        daychange();
    }

    if (mon === 13) {
        nextYear();
    }
}

function nextMon() {
    mon = mon + 1;
    day = 1;
    monchange();
    daychange();
}
function nextYear() {
    year = year + 1;
    mon = 1;
    monchange();
    yearchange();
}

function daychange() {
    document.getElementById('dayD').innerHTML = day;
}

function monchange() {
    document.getElementById('monD').innerHTML = mon;
}

function yearchange() {
    document.getElementById('yearD').innerHTML = year;
}

function moneychange() {
    document.getElementById('dengi').innerHTML = money;
}

function healthchange() {
    document.getElementById('zdorovie').innerHTML = health;
}
