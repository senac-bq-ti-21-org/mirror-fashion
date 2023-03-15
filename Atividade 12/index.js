document.querySelector("#form-busca").onsubmit = validaBusca;
document.querySelector("#q").onfocus = restaurarBusca;
document.querySelector("#q").onkeydown = restaurarBusca;


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