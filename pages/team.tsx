import { teamMember } from "../types/interfaces";
import styles from "../styles/team.module.css";
import { TeamMemberCard } from "../components/TeamMemberCard";
export default function team() {
	const teamMembers: teamMember[] = [
		{
			name: "@211lp",
			role: "Founder",
			imageUrl:
				"https://pbs.twimg.com/profile_images/1655885149152874498/r-ciy05w_400x400.jpg",
			twitterLink: "https://twitter.com/211lp",
		},
		{
			name: "@Jinath0n",
			role: "Creative",
			imageUrl:
				"https://pbs.twimg.com/profile_images/1527712554952208384/zPSFphKz_400x400.jpg",
			twitterLink: "https://twitter.com/Jinath0n",
		},
		{
			name: "@KahiEth",
			role: "Smart Contract Dev",
			imageUrl:
				"https://pbs.twimg.com/profile_images/1531689105104326657/a349PPe5_400x400.jpg",
			twitterLink: "https://twitter.com/KahiEth",
		},
		{
			name: "@DbaoEth",
			role: "FullStack Dev",
			imageUrl:
				"https://pbs.twimg.com/profile_images/1619129855462998018/XQ2m5vak_400x400.jpg",
			twitterLink: "https://twitter.com/DbaoEth",
		},
		{
			name: "@Ming33eth",
			role: "Junior Dev",
			imageUrl:
				"https://pbs.twimg.com/profile_images/1626540309126729728/hV_kZYJO_400x400.jpg",
			twitterLink: "https://twitter.com/ming33eth",
		},
	];
	return (
		<>
			<div className={styles.cardContainer}>
				<span className={styles.header}>Team</span>
				{teamMembers.map((member, index) => (
					<TeamMemberCard member={member} key={index} />
				))}
			</div>
			<div className="backgroundBlur"></div>
		</>
	);
}
