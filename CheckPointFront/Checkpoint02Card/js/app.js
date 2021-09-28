//adicionar card
let addNewItem = document.getElementById("btn_Salvar");
addNewItem.addEventListener("click", addCard);

//Dark-Mode
const backGround = document.querySelector('body');
const executar = document.getElementById("darkmode");

executar.onclick = function () {
    backGround.classList.toggle('corfundo');
}
//Dark-mode

let dataCriacao = document.getElementById("dataCriacao");
let dataHoje = new Date();
let dataMin = dataHoje.toISOString().slice(0, 10);
dataCriacao.value = dataMin;

function addCard(e) {
    e.preventDefault();

    let dataLimite = document.getElementById("dataLimite");
    let descricao = document.getElementById("descricao");
    let titulo = document.getElementById("titulo");

    //selecionamos a section como referencia
    let addCard = document.getElementById("add-article");

    if (dataCriacao.value == "") {
        alert("Data de criação não inserida!!!")
        return false;
    }

    if (dataLimite.value == "") {
        alert("Data limite não inserida!!!")
        return false;
    }


    descricao.value = descricao.value.trim();
    if (descricao.value.length < 10) {
        alert("Caracteres insulficientes !!!");
        return false;

    }


    addCard.insertAdjacentHTML('beforeend', `
    <article id=card-id class=card>
    
    <h3>${titulo.value}</h3>
    <label for=data>Data de criação:   ${dataMin}</label>
    <label for=data>Data limite:   ${dataLimite.value}</label>

    <div id=editable class=editables contentEditable>
    ${descricao.value}
    </div>

    <input id=tachado class=tachar type=checkbox onClick=tacharCards(this)>
    
    <button id=remove-btn class=remove-btn onClick=removeCard(this)>&#215</button>
    </article>
    `);


    
    dataLimite.value = "";
    descricao.value = "";
}

function tacharCards(element) {
    let cardPai = element.parentElement;
    if (element.checked) {
        cardPai.children[3].style.textDecoration = 'line-through';
    } else {
        cardPai.children[3].style.textDecoration = 'none';
    }
}

function removeCard(elemento) {
    let cards = document.getElementById("add-article")
    let cardPai = elemento.parentElement;
    cards.removeChild(cardPai);

}; 

