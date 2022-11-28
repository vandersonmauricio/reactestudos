function Saudacao({nome}){
    function gerarsaudacao(nome){
        return `olá, ${nome}, Bem vindo!`
    }
    
       
     return  <> {nome && <p>{gerarsaudacao(nome)}</p>}  </>
          

}

export default Saudacao;
