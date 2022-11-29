import styles from "../styles/Background.module.css";
export const Background = () => {
    return (
        <div className={styles.backgroundContainer}>
            <picture><img src="/background.jpg"></img></picture>
        </div>
    )
}