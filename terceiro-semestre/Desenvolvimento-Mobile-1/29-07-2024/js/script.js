const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const telefone = document.querySelector("#telefone");

const button = document.querySelector(".button");
const lista = document.querySelector(".lista")

// Eventos de JavaScript
button.addEventListener('click', (event) => {
    event.preventDefault();
    const inputNameValue = nome.value;
    const inputIdadeValue = idade.value;
    const inputTelefoneValue = telefone.value;
    const templateHTML = `<li>${inputNameValue}</li> <br><li>${inputIdadeValue}</li> <br><li>${inputTelefoneValue}</li><br> <br> <br>`

    // Condição
    if (inputNameValue === "") {
        alert("Adicione um nome ao campo.")
        return false;
    } else if (inputIdadeValue === "") {
        alert("Adicione uma idade ao campo.")
        return false
    } else if (inputTelefoneValue === "") {
        alert("Adicione um telefone ao campo.")
        return false
    }

    // Incluindo itens no HTML
    lista.innerHTML += templateHTML;

    // Limpando meu campo   
    nome.value = "";    
    idade.value = "";    
    telefone.value = "";    
})

