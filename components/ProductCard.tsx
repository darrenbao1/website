import { product } from "../types/interfaces"
import styles from "../styles/ProductCard.module.css"
import Link from "next/link";
interface Props {
    product:product
}
export const ProductCard = (props:Props) => {
    return ( <Link className={styles.container}  href={props.product.link} target="_blank">
        <picture><img className={styles.image} src={props.product.imageUrl}alt=""></img></picture>
        <div className={styles.name}>{props.product.name}</div>
    </Link>)


}