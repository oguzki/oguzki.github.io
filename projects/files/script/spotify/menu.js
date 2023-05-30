function openNav() {
    document.getElementById("mySidepanel").style.width = "300px";
    document.getElementById("sidepannel2").style.width = "1920px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("sidepannel2").style.width = "0";
}
function krug() {
    document.getElementById("image").style = "border-radius: 100%; width: 220px; height: 220px; border: 1px white solid;";
    document.getElementById("image").src = "https://ult11.github.io/files/pic/krug.jpg";
    document.getElementById("name").innerHTML = "Михаил Круг";
    document.getElementById("text").innerHTML = "Легенда русского шансона";
    document.getElementById("song_name1").innerHTML = '<a class="elprimo" onclick="krug_1()">Владимирский централ</a>';
    document.getElementById("song_name2").innerHTML = '<a class="elprimo" onclick="krug_2()">Девочка пай</a>';
    document.getElementById("song_name3").innerHTML = '<a class="elprimo" onclick="krug_3()">Фраер</a>';
    document.getElementById("song_name4").innerHTML = '';
    
}
function trofimov() {
    document.getElementById("image").style = "border-radius: 100%; width: 220px; height: 220px; border: 1px white solid;";
    document.getElementById("image").src = "https://ult11.github.io/files/pic/trofimov.jpg";
    document.getElementById("name").innerHTML = "Сергей Трофимов";
    document.getElementById("text").innerHTML = "также известен как Трофим";
    document.getElementById("song_name1").innerHTML = '<a class="elprimo" onclick="trofimov_1()">Город Сочи</a>';
    document.getElementById("song_name2").innerHTML = '<a class="elprimo" onclick="trofimov_2()">Московская песня</a>';
    document.getElementById("song_name3").innerHTML = '<a class="elprimo" onclick="trofimov_3()">Дальнобойная</a>';
    document.getElementById("song_name4").innerHTML = '';
}
