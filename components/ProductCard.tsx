import { product } from "../types/interfaces"
import styles from "../styles/ProductCard.module.css"
import Link from "next/link";
import Image from 'next/image'
interface Props {
    product:product
}
export const ProductCard = (props:Props) => {
    return ( <Link className={styles.container}  href={props.product.link} target="_blank">
        <Image src={props.product.imageUrl} alt= ""
            width={200}
            height={200}
            className={styles.image}
            priority={true}
            />   
        <div className={styles.name}>{props.product.name}</div>
    </Link>)


}