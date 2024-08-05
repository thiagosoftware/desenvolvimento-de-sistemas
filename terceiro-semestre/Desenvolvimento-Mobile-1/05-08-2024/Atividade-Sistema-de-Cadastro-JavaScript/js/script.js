const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");

const button = document.querySelector(".button");
const lista = document.querySelector(".lista");

button.addEventListener('click', (event) => {
    event.preventDefault();
    const inputNameValue = nome.value;
    const inputEmailValue = email.value;
    const inputTelefoneValue = telefone.value;
    const templateHTML = `<li>
                          <strong>Nome:</strong> ${inputNameValue}<br>
                          <strong>Email:</strong> ${inputEmailValue}<br>
                          <strong>Telefone:</strong> ${inputTelefoneValue}<br>
                          <button class="excluir">Deletar</button>
                          </li>`;

    if (inputNameValue === "") {
        alert("Adicione um nome ao campo.");
        return false;
    } else if (inputEmailValue === "") {
        alert("Adicione um email ao campo.");
        return false;
    } else if (inputTelefoneValue === "") {
        alert("Adicione um telefone ao campo.");
        return false;
    }

    lista.innerHTML += templateHTML;

    nome.value = "";    
    email.value = "";    
    telefone.value = "";    
});

lista.addEventListener('click', (event) => {
    if (event.target.classList.contains('excluir')) {
        event.preventDefault();
        // Remover o item da lista
        event.target.parentElement.remove();
    }
});
