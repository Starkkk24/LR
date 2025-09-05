import {Outlet, Links} from 'react-router-dom'
import Styles from '../static/css/product_card.module.css'

function Product_Card(){
    return(
        <>
        <div className={Styles.Card_wrap}>
            <div>
                <p>one</p>
            </div>
            <div>
                <p>two</p>
            </div>

        </div>
        </>
    )
}

export default Product_Card