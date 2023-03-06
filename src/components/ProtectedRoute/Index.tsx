import React from 'react'
import useAuthContext from '../../context/Auth/AuthContext'
import {Navigate, useLocation} from "react-router-dom"


type Props = {
   children: JSX.Element
}

const ProtectedRoute = ({children}: Props) => {
    const {user} = useAuthContext()
    let location = useLocation();
    if(!user) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
    
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute