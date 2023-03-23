var banners = ["../src/img/destaque-home.png", "../src/img/destaque-home-2.png"];
var bannerAtual = 0; 
var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector(".pause");


document.querySelector("#form-busca").onsubmit = validaBusca;
document.querySelector("#q").onfocus = restaurarBusca;
document.querySelector("#q").onkeypress = restaurarBusca;


function validaBusca() {
    if(document.querySelector("#q").value == "") {
        document.querySelector("#q").style.background = "#ffaaaa";
        document.querySelector("#q").placeholder = "Digite uma pesquisa";
        return false;
    }
}
function restaurarBusca() {
    document.querySelector("#q").style.background = "#ffffff";
    document.querySelector("#q").placeholder = "";
}
function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2; 
    document.querySelector("#destaque-img").src = banners[bannerAtual];
} 
controle.onclick = function() {
    if(controle.className == "pause") {
        clearInterval(timer);
        controle.className = "play";
    } else {
        timer = setInterval(trocaBanner, 4000);
        controle.className = "pause"
    }
    return false;
}