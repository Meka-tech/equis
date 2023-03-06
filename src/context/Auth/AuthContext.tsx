import React, { createContext, useContext } from 'react'

type Props = {}

type Context = {
user?:any;
setUser?: any;
login?: any;
}

export const authContext = createContext<Context>({})




const  useAuthContext = () => {

  let context = useContext(authContext)

  if(!context)  throw new Error("Please use Auth context inside Auth provider");

  return context

}

export default useAuthContext