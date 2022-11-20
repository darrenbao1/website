import Link from 'next/link';
import styles from "../styles/Navbar.module.css";
import { Logo } from "./Logo";
import EmailLogo from "../public/mail.svg";
import TwitterLogo from "../public/twitter.svg";
import HamburgerIcon from "../public/hamburger.svg"
import CrossIcon from "../public/cross.svg"
import { useRouter } from "next/router";
import { Modal } from './Modal';
import { useState } from 'react';
import { Constants } from '../types/constants';
export const Navbar = () =>{
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    return (
        <>
    <div className={styles.navbar}>
        <div className={styles.navbar_items}>
        <div className={router.pathname == "/" ? styles.navbar_logo_active : styles.navbar_logo}>
                <Link className={styles.navbar_link} href="/" onClick={() => setShowModal(false)}><Logo/></Link>
            </div>

            {Constants.ACTIVE_PAGES.map((page,index) => 
                (page.isActive && <div className={router.pathname == page.routeLink ? styles.navbar_item_active : styles.navbar_item} key={index}>    
                <Link className={styles.navbar_link} href={page.routeLink}>
                    {page.title}</Link>
                </div>)
            )}
            <div className={styles.navbar_item}>
            <Link className={styles.navbar_link} href="https://twitter.com/SeraphLabs" target="_blank" ><div style={{marginTop:"5px"}}><TwitterLogo/></div></Link>
            </div>
            <div className={styles.navbar_item}>
                <a className={styles.navbar_link} href="mailto:211lp@seraphlabs.io">
                <div style={{marginTop:"5px"}}><EmailLogo/></div>
                </a>
            </div>
            {showModal ? <div className={styles.hamburger_menu} onClick={() => setShowModal(false)}> <CrossIcon/></div>  :  <div className={styles.hamburger_menu} onClick={() => setShowModal(true)}><HamburgerIcon/></div>}
        </div>
    </div>
    {showModal && <Modal close={() => setShowModal(false)}/>}
    </>
    )
}