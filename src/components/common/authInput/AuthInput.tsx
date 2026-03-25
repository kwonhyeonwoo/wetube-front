import "./css/index.css";

interface Props{
    type:string;
    name:string;
    value:string;
    label:string;
    placeholder:string;
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
const AuthInput = ({
    type,
    name,
    value,
    label,
    placeholder,
    handleChange,
}:Props) => {
  return (
    <div className="auth-input-wrapper">
        <span className="auth-input-label">{label}</span>
        <input
            className="auth-input"
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
        />
    </div>
  )
}

export default AuthInput