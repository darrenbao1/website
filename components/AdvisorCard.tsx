import { Advisor } from "../types/interfaces";
import styles from "../styles/TeamMemberCard.module.css";
import Link from "next/link";
interface Props {
	member: Advisor;
}
export const AdvisorCard = (props: Props) => {
	return (
		<Link
			className={styles.memberCardContainer}
			href={props.member.twitterLink}
			target="_blank">
			<div>
				<picture>
					<img
						className={styles.profilePicture}
						src={props.member.imageUrl}
						alt=""></img>
				</picture>
			</div>
			<div className={styles.name} style={{ fontWeight: "800" }}>
				{props.member.name}
			</div>
			<div className={styles.role}>{props.member.role}</div>
			{props.member.company && (
				<div className={styles.role}>{props.member.company}</div>
			)}
		</Link>
	);
};
