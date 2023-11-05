import { atualizarRifasDisplay } from "./atualizarRifasDisplay.js";
import { bancoDeDadosRifas } from "./obterDadosDoServidor.js";

export function excluirElemento() {
    const botoesExcluirElemento = document.querySelectorAll('[data-excluir-bt-id]');

    console.log('entrei em excluir')
    botoesExcluirElemento.forEach(botao => {
        botao.addEventListener('click', async (e) => {
            e.preventDefault();

            const idRifa = e.target.getAttribute('data-excluir-bt-id');
            await bancoDeDadosRifas.excluir(idRifa);
            atualizarRifasDisplay();
        })
    })
}