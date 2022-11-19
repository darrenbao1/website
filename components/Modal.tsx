import Link from "next/link";
import styles from "../styles/Modal.module.css";
import EmailLogo from "../public/mail.svg";
import TwitterLogo from "../public/twitter.svg";
import { useRouter } from "next/router";
export const Modal = (props: { close: any }) => {
    const router = useRouter();
   return <div className={styles.modalContainer} style={{zIndex:1}}>
    <ul className={styles.modalItems}>
        <li>
            <Link className={router.pathname == "/products" ? styles.navbar_link_active : styles.navbar_link} href="/products" onClick={props.close}>
                Products</Link>
        </li>
        <li>
            <Link className={router.pathname == "/team" ? styles.navbar_link_active : styles.navbar_link} href="/team" onClick={props.close}>
                Team</Link>
        </li>
        <li>
            <Link className={router.pathname == "/articles" ? styles.navbar_link_active : styles.navbar_link} href="/articles" onClick={props.close}>
                Articles</Link>
        </li>
        <li>
            <Link className={router.pathname == "/vision" ? styles.navbar_link_active : styles.navbar_link} href="/vision" onClick={props.close}>
                Vision</Link>
        </li>

    </ul>
   </div>
}