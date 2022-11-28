import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){

    return(
        <>
        <li>
            {marca} - {ano_lancamento}
        </li>
        </>
    )

    
      
}


export default Item