const BASE_URL = 'http://localhost:3000'


export default {
    login: async (email, senha) => {
        const req = await fetch(`${BASE_URL}/usuario/`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                Accepet: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        })

        const json = await req.json()
        return json
    },

    cadastrarUsuario: async (nome, email, senha) => {
        const req = await fetch(`${BASE_URL}/usuario/novo`, {
            method: 'POST',
            headers: {
                Accepet: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha })
        })

        const json = await req.json()
        return json
    },

    cadastrarProduto: async (codigo, nome, quantidade, dataValidade, preco, categoria) => {
        const req = await fetch(`${BASE_URL}/produto/novo`, {
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
