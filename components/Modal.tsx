import Link from "next/link";
import styles from "../styles/Modal.module.css";
import EmailLogo from "../public/mail.svg";
import TwitterLogo from "../public/twitter.svg";
import { useRouter } from "next/router";
import { Constants } from "../types/constants";
export const Modal = (props: { close: any }) => {
    const router = useRouter();
   return <div className={styles.modalContainer} style={{zIndex:1}}>
    <ul className={styles.modalItems}>
        {Constants.ACTIVE_PAGES.map((page,index) => (
          page.isActive &&   <li key={index}>
                <Link className={router.pathname == page.routeLink ? styles.navbar_link_active : styles.navbar_link} href={page.routeLink} onClick={props.close}>
                    {page.title}</Link>
            </li>
        ))}
        <li>
            <Link className={styles.navbar_link} href="https://twitter.com/SeraphLabs" target="_blank">
            <TwitterLogo/>
            </Link>
        </li>
        <li>
            <Link className={styles.navbar_link}  href="mailto:211lp@seraphlabs.io">
            <EmailLogo/>
            </Link>
        </li>
    </ul>
   </div>
}