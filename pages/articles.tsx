import Link from "next/link";
import styles from "../styles/articles.module.css";
import { article } from "../types/interfaces";
export default function articles() {
    const articles: article[] = [
        {
            link:"https://seraphlabs.notion.site/Implementing-ERC-3525-through-ERC-2114-for-Games-f1986ac7e4c04c1da536b9109d0af8dd",
            title:"Implementing ERC-3525 through ERC-2114 for Games",
            date:"19.11.2022",
        },
]
    return (
    <>
        <div className={styles.container}>
            <div className={styles.header}>Articles</div>
            <ul style={{listStyle:'none', paddingLeft:"0px",marginTop:"0",marginBottom:"0"}}>
                {articles.map((article,index) => (
                    <Link href={article.link}  target="_blank" key={index}>
                    <li className={styles.article_item} >
                        <div className={styles.article_date}>{article.date}</div>
                        <div className={styles.article_title}>{article.title}</div>
                    </li>
                    </Link>
                ))}

            </ul>
        </div>
        <div className="backgroundBlur">
                </div>
    </>);
}