import { product } from "../types/interfaces"
import styles from "../styles/ProductCard.module.css"
import { useState } from "react";
import Link from "next/link";
interface Props {
    product:product
}
export const ProductCard = (props:Props) => {
    const [isHover,setIsHover] = useState(false);
    return <Link className={styles.container}  href={props.product.link} target="_blank" onMouseOver={()=>setIsHover(true)} 
    onMouseOut={()=>setIsHover(false)}>
        <picture><img className={styles.image} src={props.product.imageUrl}alt=""></img></picture>
        {isHover &&  <div className={styles.name}>{props.product.name}</div>}
    </Link>

}