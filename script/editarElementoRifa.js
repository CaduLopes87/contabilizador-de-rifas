export function editarDadosRifa(id, nome, numero) {
    const divRifaDados = document.querySelector(`[data-rifa-id="rifa-${id}"]`);
    const botaoExcluirElemento = document.querySelector(`[data-excluir-bt-id="${id}"]`)

    divRifaDados.children[1].textContent = `Nome: ${nome}`;
    divRifaDados.children[2].textContent = `Número: ${numero}`;

    divRifaDados.setAttribute('data-rifa-id', `rifa-${numero}`);
    botaoExcluirElemento.setAttribute('data-excluir-bt-id',  `${numero}`);
}