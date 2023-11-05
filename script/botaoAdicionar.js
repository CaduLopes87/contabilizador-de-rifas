import { esconderElementosRemocao } from "./botaoRemover.js";

export function botaoAdicionar() {
    const botaoAdicionar = document.querySelector('[adicionar-bt]');
    const formAdicionarDados = document.querySelector('[adicionar-dados]');
    const formEditarDados = document.querySelector('[editar-dados]');

    botaoAdicionar.addEventListener('click', (e) => {
        e.preventDefault();

        formAdicionarDados.classList.toggle('hidden');

        //esconde os formulários de outras funções
        formEditarDados.classList.add('hidden');
        esconderElementosRemocao();
    })
}