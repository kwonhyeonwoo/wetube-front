import AuthInput from "../AuthInput"

interface Props{
    type:string;
    name:string;
    value:string;
    label:string;
    placeholder:string;
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}

const AuthInputContainer = ({
    label,
    type,
    name,
    value,
    placeholder,
    handleChange,
}:Props) => {
  return (
    <AuthInput
        label={label}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        handleChange={handleChange}
    />
  )
}

export default AuthInputContainer