import Styles from "../static/css/nav.module.css"
import logo from '../static/img/MW3.jpg'
import {Outlet, Link} from "react-router-dom"

function Nav(){
    return(
        <>

        <nav className={Styles.navig}>
            <div className={Styles.navele}>
                <ul>
                    <li><h4>LEFT</h4></li>
                    {/* <li>LEFT</li>
                    <li>LEFT</li>
                    <li>LEFT</li> */}
                </ul>

            </div>
            <div>
                <img className={Styles.image} src={logo} alt="Logo"/>
            </div>
            <div className={Styles.navele}>
                <ul>
                    <li><h4>RIGHT</h4></li>
                </ul>

            </div>
        </nav >

        <main>
            <Outlet/>
        </main>
        
        </>
    )
}
export default Nav