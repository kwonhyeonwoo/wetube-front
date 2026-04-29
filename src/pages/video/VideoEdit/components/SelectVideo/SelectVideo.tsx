import styles from "./css/index.module.css"
import PlayerIcon from "@/assets/video/play.svg?react";
interface Props{
    mediaPreview:string | null;
    video:string;
    addPreviewMedia:(e: React.ChangeEvent<HTMLInputElement>)=>void;
}
const SelectVideo = ({
    video,
    mediaPreview,
    addPreviewMedia,

}:Props) => {
    return (
        <div className={styles.videoBox}>
            <label htmlFor="video" className={styles.videoFilesBtn}>
                <div className={styles.circle}>
                    <PlayerIcon />
                </div>
            </label>
            <input
                type="file"
                onChange={addPreviewMedia}
                id="video"
                style={{ display: "none" }}
            />
            <video
                className={styles.video}
                controls={mediaPreview === null ? false : true}
                src={
                    mediaPreview
                        ? mediaPreview
                        : `${import.meta.env.VITE_APP_BASE_SRC}/${video}`
                }
            />
        </div>
    )
}

export default SelectVideo