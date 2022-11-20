import { teamMember } from "../types/interfaces";
import styles from "../styles/team.module.css";
import { TeamMemberCard } from "../components/TeamMemberCard";
export default function advisors() {
    const advisors: teamMember[] = [
        {
            name: "hedgedhog",
            role: "Co-Founder | eGirl Capital",
            imageUrl: "./hedgehog.jpeg",
            twitterLink: "https://twitter.com/hedgedhog7"
        },
        {
            name: "Zhang Taiyang",
            role: "Founder | Ren Protocol",
            imageUrl: "tai.jpeg",
            twitterLink: "https://twitter.com/bftzhang"
        },
        {
            name: "Koppel Verma",
            role: "Global Payments Research Lead | Netflix",
            imageUrl: "koppel.jpeg",
            twitterLink: ""
        },
        {
            name: "momo",
            role: "Co-Founder | Tulip Protocol",
            imageUrl:"momo.jpeg",
            twitterLink: ""
        },
        {
            name: "fjvdb",
            role: "Partner | Chad Capital",
            imageUrl:"fj.jpeg",
            twitterLink: ""
        },
        {
            name: "Sherwin Lee",
            role: "Founder | QCP Soteria Node",
            imageUrl:"sherwin.jpeg",
            twitterLink: ""
        },

    ]
    return (<>  
     <div className={styles.cardContainer}>
        <span className={styles.header}>Advisors</span>
                {advisors.map((member,index) => 
                    <TeamMemberCard member={member} key={index}/>
                ) }
                </div> 
                <div className="backgroundBlur">
                </div>
            </>
        )
}