document.querySelector("#form-busca").onsubmit = validaBusca;
function validaBusca() {
    if(document.querySelector("#q").value == "") {
        document.querySelector("#q").style.background = "#ffaaaa";
        document.querySelector("#q").placeholder = "Digite uma pesquisa";
        return false;
    }
}
document.querySelector("#q").onfocus = function() {
    document.querySelector("#q").style.background = "#ffffff";
    document.querySelector("#q").placeholder = "";
}