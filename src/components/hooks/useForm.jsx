import { useState } from "react";

 
export const useForm = (value = {}) => { 
 
    

    const [state, setForm] = useState(value)  

    const reset = () =>{
        setForm(value);
    }

    const onChange = ({target})=>{ 
        setForm({
            ...state,
            [target.name]: target.value
        })
    }

    return {
        onChange,
        reset, 
        state,
    } 
}
