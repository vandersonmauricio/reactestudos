import {useState} from 'react'
function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Cadastrou o usuario")
        console.log(name)
        console.log(password)

    }

    const [name,setName] = useState()

    const[password,setPassword]=useState()

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text"
                    id="name"
                    name="name"
                    placeholder="Digite o seu nome"
                    onChange={(valornome)=>setName(valornome.target.value)}
                    />
                    
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="text"
                    id="password"
                    name="password"
                    placeholder="Digite a sua senha"
                    onChange={(valorpassword)=>setPassword(valorpassword.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form