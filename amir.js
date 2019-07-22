var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var login = document.getElementById("login");
var search = document.getElementById("sch-img");
var search1 = document.getElementById("search");
var submit = document.getElementById("submit");
var log_x = document.getElementById("log-close");
var search_close = document.getElementById("sch-close");

search.onclick = function() {
    btn1.style.display = "none";
    btn2.style.display = "none";
    submit.style.display = "inline";
    search.style.display = "none";
    search1.style.display = "inline";
}
search_close.onclick = function() {
    btn1.style.display = "inline";
    btn2.style.display = "inline";
    search.style.display = "inline";
    submit.style.display = "none";
    search1.style.display = "none";
}

var x = 1, n = 4;
show();
    setInterval(next, 4000);
    function next() { x < n ? x++ : x = 1; show(); }
    function show() {
    document.getElementById("header").style.backgroundImage = 'linear-gradient(rgba(5,5,5,0.8), rgba(5,5,5,0.6),rgba(5,5,5,0.4)), url(img/manshet' + x + '.jpg)';
}
