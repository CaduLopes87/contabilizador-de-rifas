class BancoDeDadosRifas {
    async listar() {
        const url = "https://contabilizador-de-rifas.onrender.com/rifas";
        const cabecalho = {
            method: 'GET',
        };

        const listaRifas = await fetch(url, cabecalho).then(async (response) => {
            if(!response.ok) {
                throw new Error(`Erro na solicitação GET: ${response.status}`);
            }
            const dados = await response.json();
            return dados;
        }).catch((err) => {
            console.log(err)
        });
        return listaRifas;
    }

    async criar(rifa) {
        const url = "https://contabilizador-de-rifas.onrender.com/rifas";
        const cabecalho = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rifa),
        };

        try {
            const response = await fetch(url, cabecalho);
            if (!response.ok) {
                throw new Error (`Erro na solicitação POST: ${response.status}`);
            }
            const respostaServidor = await response.text();
            if(respostaServidor){
                const resposta = JSON.parse(respostaServidor);
                console.log('Resposta do servidor: ', resposta);
            }                
        } catch (err) {
            console.log(err);
        }
    };

    async atualizar(id, rifa) {
        const url = `https://contabilizador-de-rifas.onrender.com/rifas/${id}`;
        
        const cabecalho = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rifa),
        };
        
        try {
            const response = await fetch(url, cabecalho);
            if (!response.ok) {
                throw new Error (`Erro na solicitação PUT: ${response.status}`);
            }
            const respostaServidor = await response.text();
            if(respostaServidor){
                const resposta = JSON.parse(respostaServidor);
                console.log('Resposta do servidor: ', resposta);
            }                
        } catch (err) {
            console.log(err);
        }
    }

    async excluir(id) {
        const url = `https://contabilizador-de-rifas.onrender.com/rifas/${id}`;

        const cabecalho = {
            method: 'DELETE',
        };

        await fetch(url, cabecalho).then(async response => {
            if(!response.ok) {
                throw new Error("Falha na solicitação DELETE: ", response.status);
            }
            const dadosRifa = await response.text();
            if(dadosRifa){
                const resposta = JSON.parse(dadosRifa);
                console.log('Resposta do servidor: ', resposta);
            }                
        })
    }
};

export const bancoDeDadosRifas = new BancoDeDadosRifas();