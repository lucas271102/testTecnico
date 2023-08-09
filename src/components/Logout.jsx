import React from 'react'
import { useAuth0  } from '@auth0/auth0-react'
const Logout = () => {
    const {logout}  = useAuth0()
  return (
    <>
    <button onClick={()=>logout({returnTo:window.location.origin})} className='bg-red-500 p-2 border rounded-md text-center'>Cerrar sesión</button>
    </>
  )
}

export default Logout