// let nome = prompt("Digite o seu nome")
let estilo = null;
let contadorDeItens = 0;
let model = null;
let neck = null;
let material = null;
const API_fashionDrive = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
function select(selecionado, estilo, tipo) {
   Deselect(`${estilo}`);
   selecionado.classList.add("selecionado") ;
   contadorDeItens += 1;
   catchModel(`${estilo}`, `${tipo}`);
   catchNeck(`${estilo}`, `${tipo}`);
   catchMaterial(`${estilo}`, `${tipo}`);
}
function Deselect(produto){
    const produtoSelecionado = document.querySelector(`.${produto} .selecionado`)
    if (produtoSelecionado !==null){
        produtoSelecionado.classList.remove("selecionado")
        contadorDeItens -= 1

    }

}
function catchModel(estilo, modelo){
    if (estilo=="modelo"){
        model = modelo
    }

}
function catchNeck(estilo, gola){
    if (estilo=="gola"){
        neck = gola
    }

}
function catchMaterial(estilo, tecido){
    if (estilo=="gola"){
        material = tecido
    }

}
function GetData(){
    const promise = axios.get(API_fashionDrive);
    promise.then(LastRequest);

}
GetData()
function LastRequest(response){
    let Pedidos = response.data;
    htmlResute = "";
    for(i=0; i<5;i++){

        htmlResute += `<div class="background-pedido">
        <img src="${Pedidos[i].image}">
        <p>
        <span>Criador:</span>${Pedidos[i].owner}
        </p>
        </div>
        `;
    }
    
    let lastRequests = document.getElementById("last_requests");
    lastRequests.innerHTML=htmlResute;
}


