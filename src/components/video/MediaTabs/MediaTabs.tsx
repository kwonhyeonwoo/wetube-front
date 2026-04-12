import styles from "./css/index.module.css";

interface Props{
    currentTab:string;
    text:string;
    name:string;
    handleTabClicked:(key:string)=>void;
}
const MediaTabs = ({
    currentTab,
    text,
    name,
    handleTabClicked,
}:Props) => {
  return (
    <button
        className={`${styles.tabBtn} 
        ${currentTab === name && styles.activeTabBtn}`}
        onClick={() => handleTabClicked(name)}
    >
        {text}
    </button>
  )
}

export default MediaTabs