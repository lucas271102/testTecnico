import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const Profile = () => {
    const {user} = useAuth0()
    
  
 if(user){
    return(
        <div className='flex gap-2'>
         
            <img className='w-6 rounded-xl h-6' src={user.picture} alt="" />
            
            <p className='text-black'>¡Bienvenido/a,  {user.name}!</p>
        </div>

    )
 }else{
    return(
        <h2>Invitado</h2>
    )
 }
    
    
   
}

export default Profile