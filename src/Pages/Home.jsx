import { Outlet } from "react-router-dom";
import Styles from "../static/css/home.module.css";
import Product_Card from "../components/product_card";
import products from "../data/products.json";

function Home() {
  return (
    <>
      {/* <h2>Home!</h2> */}
      <div className={Styles.Section_wrap}>
        {products.map((item) => (
          <Product_Card
            key={item.id}
            img={item.img}        
            p_name={item.p_name}  
            p_cate={item.p_cate}  
            p_price={item.p_price}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
