import { product } from "../types/interfaces";
import styles from "../styles/products.module.css";
import { ProductCard } from "../components/ProductCard";
export default function products() {
    const products: product[] = [{
        name: "Souk",
        imageUrl:"./SoukLogo.png",
        link:"https://www.souk.gg",
    },

];
    return (<>  
        <div className={styles.cardContainer}>
           <span className={styles.header}>Products</span>
                   {products.map((product,index) => 
                       <ProductCard product={product} key={index}/>
                   ) }
                   </div> 
                   <div className="backgroundBlur">
                   </div>
               </>
           )
}