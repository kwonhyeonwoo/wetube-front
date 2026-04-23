import styles from "./css/index.module.css";

interface Props{
    type:'video';
    title:string;
}
const MediaSlider = ({height, title}:Props) => {
  return (
    <div className={styles.mediaSlider}>
        <h2></h2>
    </div>
  )
}

export default MediaSlider