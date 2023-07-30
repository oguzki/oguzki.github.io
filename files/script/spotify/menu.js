function openNav() {
    document.getElementById("mySidepanel").style.width = "300px";
    document.getElementById("sidepannel2").style.width = "1920px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("sidepannel2").style.width = "0";
}

function letov() {
    document.getElementById("image").style = "border-radius: 100%; width: 220px; height: 220px; border: 1px white solid;";
    document.getElementById("image").src = "files/pic/spotify/letov.jpg";
    document.getElementById("name").innerHTML = "Егор Летов";
    document.getElementById("text").innerHTML = "Музыкант тайги далёкой";
    document.getElementById("song_name1").innerHTML = '<a class="elprimo" onclick="letov_1()">Всё идёт по плану</a>';
    document.getElementById("song_name2").innerHTML = '';
    document.getElementById("song_name3").innerHTML = '';
    document.getElementById("song_name4").innerHTML = '';
}
function krug() {
    document.getElementById("image").style = "border-radius: 100%; width: 220px; height: 220px; border: 1px white solid;";
    document.getElementById("image").src = "files/pic/spotify/krug.jpg";
    document.getElementById("name").innerHTML = "Михаил Круг";
    document.getElementById("text").innerHTML = "Легенда русского шансона";
    document.getElementById("song_name1").innerHTML = '<a class="elprimo" onclick="krug_1()">Владимирский централ</a>';
    document.getElementById("song_name2").innerHTML = '<a class="elprimo" onclick="krug_2()">Девочка пай</a>';
    document.getElementById("song_name3").innerHTML = '<a class="elprimo" onclick="krug_3()">Фраер</a>';
    document.getElementById("song_name4").innerHTML = '';
    
}
function morgen() {
    document.getElementById("image").style = "border-radius: 100%; width: 220px; height: 220px; border: 1px white solid;";
    document.getElementById("image").src = "https://prostars.org/files/news/post/203/900x450/10158/60a7769ce1a78.png";
    document.getElementById("name").innerHTML = "Morgenshtern";
    document.getElementById("text").innerHTML = "является иноагентом на<br> территории РФ";
    document.getElementById("song_name1").innerHTML = '<a class="elprimo" onclick="morgen_1()">PABLO</a>';
    document.getElementById("song_name2").innerHTML = '<a class="elprimo" onclick="morgen_2()">Уфф... Деньги...</a>';
    document.getElementById("song_name3").innerHTML = '<a class="elprimo" onclick="morgen_3()">Cadillac (feat. Элджей)</a>';
    document.getElementById("song_name4").innerHTML = '';
}
function mzlff() {
    document.getElementById("image").style = "border-radius: 100%; width: 220px; height: 220px; border: 1px white solid;";
    document.getElementById("image").src = "https://static-cdn.jtvnw.net/jtv_user_pictures/5a25ae37-5f3c-4f30-af56-581bd5e08adf-profile_image-300x300.png";
    document.getElementById("name").innerHTML = "mazellovvv";
    document.getElementById("text").innerHTML = "лох и гений";
    document.getElementById("song_name1").innerHTML = '<a class="elprimo" onclick="mzlff_1()">Я помню</a>';
    document.getElementById("song_name2").innerHTML = '<a class="elprimo" onclick="mzlff_2()">Трактор</a>';
    document.getElementById("song_name3").innerHTML = '<a class="elprimo" onclick="mzlff_3()">Суббота</a>';
    document.getElementById("song_name4").innerHTML = '<a class="elprimo" onclick="mzlff_4()">Птички летят...</a>';
}
function trofimov() {
    document.getElementById("image").style = "border-radius: 100%; width: 220px; height: 220px; border: 1px white solid;";
    document.getElementById("image").src = "files/pic/spotify/trofimov.jpg";
    document.getElementById("name").innerHTML = "Сергей Трофимов";
    document.getElementById("text").innerHTML = "также известен как Трофим";
    document.getElementById("song_name1").innerHTML = '<a class="elprimo" onclick="trofimov_1()">Город Сочи</a>';
    document.getElementById("song_name2").innerHTML = '<a class="elprimo" onclick="trofimov_2()">Московская песня</a>';
    document.getElementById("song_name3").innerHTML = '<a class="elprimo" onclick="trofimov_2()">Дальнобойная</a>';
    document.getElementById("song_name4").innerHTML = '';
}
