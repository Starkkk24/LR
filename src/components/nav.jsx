import Styles from "../static/css/nav.module.css"
import {Outlet, Link} from "react-router-dom"

function Nav(){
    return(
        <>

        <nav className={Styles.navig}>
            <div className={Styles.navele}>
                <button>left</button>
                <button>left</button>
                <button>left</button>
                <button>left</button>

            </div>
            <div className={Styles.navele}>
                <button>right</button>
                <button>right</button>

            </div>
        </nav >

        <main>
            <Outlet/>
        </main>
        
        </>
    )
}
export default Nav