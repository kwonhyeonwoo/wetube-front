import "./css/index.css";
const CenterHeader = () => {
  return (
    <form className="center-header-wrapper">
      <input 
        type="text" 
        className="center-header-wrapper-input"
        placeholder="검색어를 입력하세요"
        onChange={()=>{}}
      />
      <button className="center-header-wrapper-glass">
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