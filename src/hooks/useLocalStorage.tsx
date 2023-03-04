import React, {useEffect, useState} from 'react'



const useLocalStorage = (key:string, defaultValue:any) => {

    const [data, setData] = useState<any>(()=> { 
        let value;
        try {
            let data = localStorage.getItem(key);
            if(typeof data === "string"){
                
               value= JSON.parse(data) 
            }
        
        } catch (error) {
            value = defaultValue
        }

        return value
      
    
    });


    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(data))
    }, [data,key])

  return [data, setData];
}

export default useLocalStorage