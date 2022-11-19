import styles from "../styles/BackgroundVideo.module.css"
export const BackgroundVideo = () => {
  return (<div className={styles.videoContainer}>
    <video autoPlay muted loop>
        <source src="./BackgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  </div>)
}