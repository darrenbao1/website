import { Advisor, teamMember } from "../types/interfaces";
import styles from "../styles/team.module.css";
import { TeamMemberCard } from "../components/TeamMemberCard";
import { AdvisorCard } from "../components/AdvisorCard";
export default function advisors() {
	const advisors: Advisor[] = [
		{
			name: "Zhang Taiyang",
			role: "Founder",
			company: "Ren Protocol",
			imageUrl: "tai.jpeg",
			twitterLink: "https://twitter.com/bftzhang",
		},
		{
			name: "Koppel Verma",
			role: "Global Payments Research Lead",
			company: "Netflix",
			imageUrl: "koppel.jpeg",
			twitterLink: "",
		},
		{
			name: "Sherwin Lee",
			role: "Founder",
			company: "QCP Soteria Node",
			imageUrl: "sherwin.jpeg",
			twitterLink: "",
		},
		{
			name: "Impossible Finance",
			role: "Advisor",
			imageUrl:
				"https://pbs.twimg.com/profile_images/1388056927167340544/9SxWPsH6_400x400.jpg",
			twitterLink: "https://twitter.com/impossiblefi",
		},
	];
	return (
		<>
			<div className={styles.cardContainer}>
				<span className={styles.header}>Advisors</span>
				{advisors.map((member, index) => (
					<AdvisorCard member={member} key={index} />
				))}
			</div>
			<div className="backgroundBlur"></div>
		</>
	);
}
