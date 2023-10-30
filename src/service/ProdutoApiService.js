const BASE_URL = 'http://localhost:3000';

export default {


    cadastrarProduto: async (codigo, nome, quantidade, dataValidade, preco, categoria) => {
        const req = await fetch(`${BASE_URL}/produto/cadastrar`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ codigo, nome, quantidade, dataValidade, preco, categoria })
        })

        const json = await req.json()
        return json
    },

    getProdutos: async () => {
        const req = await fetch(`${BASE_URL}/produto/`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        const json = await req.json()
        return json
    },

    getProduto: async (codigo) => {
        const req = await fetch(`${BASE_URL}/produto/codigo/${codigo}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await req.json()
        return json
    },

    getProdutoVencido: async () => {
        const req = await fetch(`${BASE_URL}/produto/vencido`, {
            method: 'GET',
            headers: {
                Accepet: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await req.json()
        return json
    },

    getProdutoCategoria: async (categoria) => {
        const req = await fetch(`${BASE_URL}/produto/categoria/${categoria}`, {
            method: 'GET',
            headers: {
                Accepet: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const json = await req.json();
        return json;
    },

    atualizaProduto: async (codigo, nome, quantidade, dataValidade, preco, categoria) => {
        const req = await fetch(`${BASE_URL}/produto/${codigo}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ codigo, nome, quantidade, dataValidade, preco, categoria })
        })

        const json = await req.json()
        return json
    },

    deletaProduto: async (codigo) => {
        const req = await fetch(`${BASE_URL}/produto/${codigo}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ codigo })
        })

        const json = await req.json()
        return json
    },
}
