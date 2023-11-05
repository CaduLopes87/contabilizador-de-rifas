import { atualizarRifasDisplay } from "./atualizarRifasDisplay.js";
import { bancoDeDadosRifas } from "./obterDadosDoServidor.js";

export function concluirAdicionar() {
    const botaoConcluir = document.querySelector('[concluir-adicionar-bt]');

    botaoConcluir.addEventListener('click', async (e) => {
        e.preventDefault();

        
        const nomeRifa = document.getElementById('nome-rifa').value;
        const numeroRifa = document.getElementById('numero-rifa').value;
        const pagamentoRifa = document.getElementById('pagamento-rifa').value;

        const formDadosRifa =  {
            nome: nomeRifa,
            numero: numeroRifa,
            pagamento: pagamentoRifa,
        }
        console.log(formDadosRifa);

        await bancoDeDadosRifas.criar(formDadosRifa);
        atualizarRifasDisplay();

        document.getElementById('nome-rifa').value = '';
        document.getElementById('numero-rifa').value = '';
        document.getElementById('pagamento-rifa').value = '';
    })
}