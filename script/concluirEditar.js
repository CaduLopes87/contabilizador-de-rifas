import { atualizarRifasDisplay } from "./atualizarRifasDisplay.js";
import { bancoDeDadosRifas } from "./obterDadosDoServidor.js";

export function concluirEditar() {
    const botaoConcluirEditar = document.querySelector('[concluir-editar-bt]');

    botaoConcluirEditar.addEventListener('click', async (e) => {
        e.preventDefault();

        const RifaId = document.getElementById('numero-editar-rifa').value;
        const novoNomeRifa = document.getElementById('novo-nome-rifa').value;
        const novoNumeroRifa = document.getElementById('novo-numero-rifa').value;
        const novoPagamentoRifa = document.getElementById('novo-pagamento-rifa').value;

        const novoFormDadosRifa =  {
            nome: novoNomeRifa,
            numero: novoNumeroRifa,
            pagamento: novoPagamentoRifa,
        }
        await bancoDeDadosRifas.atualizar(RifaId, novoFormDadosRifa);
        atualizarRifasDisplay();

        document.getElementById('numero-editar-rifa').value = '';
        document.getElementById('novo-nome-rifa').value = '';
        document.getElementById('novo-numero-rifa').value = '';
        document.getElementById('novo-pagamento-rifa').value = '';
    })
}