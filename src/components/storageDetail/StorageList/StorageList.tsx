import type { IVideo } from "@/@types/video.type";
import styles from "./css/index.module.css";

interface Props{
    item:IVideo;
    number:number;
}

const StorageList = ({
    item,
    number
}:Props) => {
  return (
    <div>StorageList</div>
  )
}

export default StorageList