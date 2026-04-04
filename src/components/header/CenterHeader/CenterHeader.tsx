import styles from "./css/index.module.css";
const CenterHeader = () => {
  return (
    <form className={styles.centerHeaderForm}>
      <input 
        type="text" 
        className={styles.input}
        placeholder="검색어를 입력하세요"
        onChange={()=>{}}
      />
      <button className={styles.centerHeaderGlass}>
        <img 
          src="/assets/header/glass.png"
          srcSet="
            /assets/header/glass@2x.png 2x,
            /assets/header/glass@3x.png 3x,
          "
          alt="" 
        />
      </button>
    </form>
  )
}

export default CenterHeader