import { useCallback, useState } from "react"

export const useAuthForm = <T>(initialState: T) => {
    const [inputs, setInputs] = useState<T>(initialState);

    const handleChange = useCallback(
      (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
       setInputs((prev)=>({
            ...prev,
            [name]:value
       })) 
      },
      [],
    );

    const reset = useCallback(
      () => {
        setInputs(initialState);
      },
      [initialState],
    )
    
    return {inputs,handleChange, reset}
}   