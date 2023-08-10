import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Logout from './Logout'
const Profile = () => {
    const {user} = useAuth0()
    
  
 if(user){
    return(
        <div className='flex gap-2 items-center '>
         
            <img className='w-6 rounded-xl h-6' src={user.picture} alt="" />
            
            <p className='text-black'>¡Bienvenido/a,  {user.name}!</p>

            <Logout/>
        </div>

    )
 }else{
    return(
        <h2>Invitado</h2>
    )
 }
    
    
   
}

export default Profile