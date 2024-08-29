import { useState } from "react";
import "../Components/form.css"

const Form = () => {
    // Estado inicial do formulário
    const initilForm = {
        nome: "",
    }

    // Estado do formulário
    const [formState, setFormState] = useState(initilForm);

    const handleInput = (event) => {
        // Obter o valor e o nome do campo de entrada
        const target = event.currentTarget;
        // Extrair  o valor e o nome do campo de entrada
        const { value, name } = target;

        // Atualizar o estado do formulário com os novos valores
        setFormState({ ...formState, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState.nome)
    }

    return (
        <div className="ContainerForm">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value = {formState.nome}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control">
                        <button type="submit" className="buttonForm">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;