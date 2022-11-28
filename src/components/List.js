
import Item from "./Item";


function List(){
    return (
        <>
        
        <h1>minha lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={2005}/>
            <Item marca="Lamborguini" ano_lancamento={2009}/>
            <Item marca="Fiat" ano_lancamento={1997}/>
            <Item marca="bugati" ano_lancamento={"192"}/>
        </ul>

        </>
    )
}

export default List