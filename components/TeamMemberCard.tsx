import { teamMember } from "../types/interfaces";
import styles from "../styles/TeamMemberCard.module.css";
import Link from "next/link";
interface Props {
    member:teamMember
}
export const TeamMemberCard = (props:Props) => {
    return (<Link className={styles.memberCardContainer} href={props.member.twitterLink} target="_blank">
        <div><picture><img className={styles.profilePicture} src={props.member.imageUrl} alt=""></img></picture></div>
        <div className={styles.name}>{props.member.name}</div>
        <div className={styles.role}>{props.member.role}</div>
    </Link>)
}