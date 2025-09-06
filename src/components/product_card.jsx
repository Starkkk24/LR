import {Outlet, Links} from 'react-router-dom'
import Styles from '../static/css/product_card.module.css'

function Product_Card({key,img, p_name, p_cate, p_price}){
    return(
        <>
        <div className={Styles.Card_wrap}>
            <div className={Styles.up}>
                <img className={Styles.image} src={img} alt='Product img'></img>
            </div>
            <div className={Styles.down}>
                <div>
                    <h3>{p_name}</h3>
                        <hr/>
                    <p>{p_cate}</p>
                </div>
                <div>
                    <p>₹ {p_price}</p>
                </div>                
            </div>

        </div>
        </>
    )
}

export default Product_Card