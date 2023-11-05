import { excluirElemento } from "./excluirElemento.js";

const pMensagemRemocao = document.createElement('p');
pMensagemRemocao.classList.add('hidden');

export function botaoRemover(){
    const botaoRemover = document.querySelector('[remover-bt]');
    
    botaoRemover.addEventListener('click', (e) => {
        e.preventDefault();
        
        mostrarBotoesDeRemocao();
        excluirElemento();
    });
}

export function esconderElementosRemocao() {
    const botoesExcluirElemento = document.querySelectorAll('[data-excluir-bt-id]');

    pMensagemRemocao.classList.add('hidden');
    botoesExcluirElemento.forEach(botao => {
        botao.classList.add('hidden');
    });
}

function mostrarBotoesDeRemocao(){
    const formAdicionarDados = document.querySelector('[adicionar-dados]');
    const formEditarDados = document.querySelector('[editar-dados]');    
    const botoesExcluirElemento = document.querySelectorAll('[data-excluir-bt-id]');
    
    botoesExcluirElemento.forEach(botao => {
        botao.classList.toggle('hidden');
    });
    
    //esconde os formulários de outras funções
    formAdicionarDados.classList.add('hidden');
    formEditarDados.classList.add('hidden');
    
    mostrarMensagemDeRemocao();
}

function mostrarMensagemDeRemocao(){
    const editarRifasSecao = document.querySelector('[editar-rifas]');
    
    pMensagemRemocao.innerText = 'Clique no botão de excluir da rifa que deseja remover.';    
    editarRifasSecao.appendChild(pMensagemRemocao);
    toggleMessage(pMensagemRemocao);
}

function toggleMessage(elemento) {
    elemento.classList.toggle('hidden')
}
