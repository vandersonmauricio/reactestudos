import Button from "./Evento/Button"

function Evento(){
    function onClick(){
        console.log(`esta funcionando!`)
            
    }
    function onClick2(){
        console.log(`still working`)
    }

    return(
        <div>
            <p>Clique para disparar o evento</p>
            <Button event={onClick} text="Compre Agora"/>
            <button onClick={onClick2}>Ativar!</button>
        </div>
    )

}

export default Evento