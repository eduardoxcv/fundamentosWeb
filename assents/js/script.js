let nome = window.document.getElementById("nome")
/*o elemento getElementById quer dizer: pegue o elemento pelo id nesse caso nome*/
/* outros tipos de acesso: 
por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementByClassaName()
por seletor: querySelector()*/

let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = "60%"
email.style.width= "60%"
assunto.style.width= "59%"

function validaNome() {
    let txtNome = document.querySelector("#textNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Invalido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Valido"
        txtNome.style.color = "green"
}



}