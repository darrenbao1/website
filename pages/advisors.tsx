import { teamMember } from "../types/interfaces";
import styles from "../styles/team.module.css";
import { TeamMemberCard } from "../components/TeamMemberCard";
export default function advisors() {
	const advisors: teamMember[] = [
		{
			name: "Zhang Taiyang",
			role: "Founder | Ren Protocol",
			imageUrl: "tai.jpeg",
			twitterLink: "https://twitter.com/bftzhang",
		},
		{
			name: "Koppel Verma",
			role: "Global Payments Research Lead | Netflix",
			imageUrl: "koppel.jpeg",
			twitterLink: "",
		},
		{
			name: "Sherwin Lee",
			role: "Founder | QCP Soteria Node",
			imageUrl: "sherwin.jpeg",
			twitterLink: "",
		},
	];
	return (
		<>
			<div className={styles.cardContainer}>
				<span className={styles.header}>Advisors</span>
				{advisors.map((member, index) => (
					<TeamMemberCard member={member} key={index} />
				))}
			</div>
			<div className="backgroundBlur"></div>
		</>
	);
}
