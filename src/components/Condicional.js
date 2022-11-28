import { useState } from 'react'
function Condicional() {

    
        const [email, setEmail] = useState()

        const [userEmail, setUserEmail] = useState()

        function enviarEmail(e) {
            e.preventDefault()
        

            setUserEmail(email)
            console.log(userEmail+"useremailaqui")
            

        }



        return (
            <div>
                <h2>Cadastre o seu email</h2>
                <form onSubmit={enviarEmail}>
                    <input type="email" placeholder="digite seu email"
                        onChange={(e) => setEmail(e.target.value)} />
                    <button>Enviar-email</button>

                </form>
                {userEmail && (
                    alert("email cadastrado! Bem vindo!"+userEmail)
                    
                )

                }

            </div>
        )
    }
export default Condicional