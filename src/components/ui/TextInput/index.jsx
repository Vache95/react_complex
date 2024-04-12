
import React from "react";
import {Controller} from "react-hook-form";
 import './styles.scss';

import { InputMask } from '@react-input/mask';

const TextInput= ({     
	   order , 
       name,
       control,
       rules,
       label,
	  ...rest
   }) => (
        <>
            <Controller
                control={control}
                name={name}
                defaultValue=''
                rules={rules}
                render={({ field: { onChange, value }, fieldState: { error} }) => (
           			   <label>
							{!!label && <span>{label}</span>}
                             <InputMask 
                                {...rest}
                                onChange={onChange}
                                value={value} 
                                mask="+7 (___) ___-__-__"
                                replacement={{ _: /\d/ }}  
                                className={error || order === 0 ? "input-error" : ""}
                             />
 	       				</label>
                )}
            />

        </>
    );

export default TextInput;