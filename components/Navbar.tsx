import Link from 'next/link';
import styles from "../styles/Navbar.module.css";
import { Logo } from "./Logo";
import EmailLogo from "../public/mail.svg";
import TwitterLogo from "../public/twitter.svg";
import HamburgerIcon from "../public/hamburger.svg"
import { useRouter } from "next/router";
export const Navbar = () =>{
    const router = useRouter();
    return (
    <div className={styles.navbar}>
        <div className={styles.navbar_items}>
        <div className={styles.navbar_logo}>
                <Link className={router.pathname == "/" ? styles.navbar_link_active : styles.navbar_link} href="/" ><Logo/></Link>
            </div>
            <div className={styles.navbar_item}>    
            <Link className={router.pathname == "/products" ? styles.navbar_link_active : styles.navbar_link} href="/products">
                Products</Link>
            </div>
            <div className={styles.navbar_item}>
            <Link className={router.pathname == "/team" ? styles.navbar_link_active : styles.navbar_link} href="/team">Team</Link>
            </div>
            <div className={styles.navbar_item}>
            <Link className={router.pathname == "/articles" ? styles.navbar_link_active : styles.navbar_link} href="/articles">Articles</Link>
            </div>

            <div className={styles.navbar_item}>
            <Link className={router.pathname == "/vision" ? styles.navbar_link_active : styles.navbar_link} href="/vision">Vision</Link>
            </div>
            <div className={styles.navbar_item}>
            <Link className={styles.navbar_link} href="https://twitter.com/SeraphLabs" target="_blank"><TwitterLogo/></Link>
            </div>
            <div className={styles.navbar_item}>
                <a className={styles.navbar_link} href="mailto:211lp@seraphlabs.io">
                <EmailLogo/>
                </a>
            </div>
            {/* show modal here */}
            <div className={styles.hamburger_menu}><HamburgerIcon/></div>
        </div>
    </div>
    )
}