import { esconderElementosRemocao } from "./botaoRemover.js";

export function botaoEditar() {
    const botaoEditar = document.querySelector('[editar-bt]');
    const formEditarDados = document.querySelector('[editar-dados]');
    const formAdicionarDados = document.querySelector('[adicionar-dados]');

    botaoEditar.addEventListener('click', (e) => {
        e.preventDefault();

        formEditarDados.classList.toggle('hidden');

        //esconde os formulários de outras funções
        esconderElementosRemocao();
        formAdicionarDados.classList.add('hidden');    
    })
}