import { useParams } from "react-router-dom";
import styles from "../css/index.module.css";
import { useGetVideoQuery } from "@/hooks/queries/video/useGetVideoQuery";
import { useForm } from "react-hook-form";

const VideoEditContainer = () => {
    const {id} = useParams();
    const {data:video , isLoading, isError} = useGetVideoQuery(id ?? "");
    const { register, handleSubmit } = useForm();
    if(isLoading){
        return (
            <div>Loading...</div>
        )
    };
    if(!video){
        return (
            <div>비디오를 조회할 수 없습니다.</div>
        )
    }
  return (
    <main className={styles.videoEditPage}>
      <section className={styles.leftSection}>
        <div className={styles.videoBox}>
            <video src={`${import.meta.env.VITE_APP_BASE_URL}/${video.video}`} />
        </div>
      </section>
      <section className={styles.rightSection}></section>
    </main>
  );
}

export default VideoEditContainer