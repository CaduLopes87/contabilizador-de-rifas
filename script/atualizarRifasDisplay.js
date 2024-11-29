import { bancoDeDadosRifas } from "./obterDadosDoServidor.js";

export function atualizarRifasDisplay(){
    const rifasContainer = document.querySelector("[rifas-container]");
    rifasContainer.innerHTML = '';

    let listaRifas = [];

    bancoDeDadosRifas.listar().then(rifas => {
       const fragment = document.createDocumentFragment();
       
       rifas.forEach(rifa => { 
           const pNome = document.createElement('p');
           const pNumero = document.createElement('p');
           const pPagamento = document.createElement('p');
           const botaoExcluirElemento = document.createElement('button');
           const divRifaDados = document.createElement('div');
           
           divRifaDados.classList.add("rifa-dados");
           divRifaDados.setAttribute('data-rifa-id', `rifa-${rifa.id}`);
           
           botaoExcluirElemento.classList.add('excluir-rifa');
           botaoExcluirElemento.classList.add('hidden');
           botaoExcluirElemento.setAttribute('data-excluir-bt-id',  `${rifa.id}`);
   
           botaoExcluirElemento.innerText = 'X';
           pNome.innerText = `Nome: ${rifa.nome}`;
           pNumero.innerText = `Número: ${rifa.numero}`;
           pPagamento.innerText = `Pagamento: ${rifa.pagamento}`;
           
           divRifaDados.appendChild(botaoExcluirElemento);
           divRifaDados.appendChild(pNome);
           divRifaDados.appendChild(pNumero);
           divRifaDados.appendChild(pPagamento);
           fragment.appendChild(divRifaDados);            
       });
       
       rifasContainer.appendChild(fragment);
    });

}