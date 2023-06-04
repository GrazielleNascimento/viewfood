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
    }
}
