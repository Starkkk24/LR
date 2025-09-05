import {Outlet, Links} from "react-router-dom"
import Styles from '../static/css/home.module.css'
import Product_Card from "../components/product_card"

function Home(){
    return(
        <>
            <p>This is Home!</p>
            <div className={Styles.Section_wrap}>
                <div><Product_Card/></div>
                <div><Product_Card/></div>
                <div><Product_Card/></div>
                <div><Product_Card/></div>
                <div><Product_Card/></div>
                <div><Product_Card/></div>
                <div><Product_Card/></div>
                <div><Product_Card/></div>
            </div>
        </>
    )
}

export default Home