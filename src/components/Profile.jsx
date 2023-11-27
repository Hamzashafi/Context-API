/* taking data from user from this jsx file */

import React, {useContext, useEffect} from 'react';
import UserContext from "../context/UserContext";

function Profile() {

   const {user} = useContext(UserContext) ;
   console.log("username");

  if (!user){

    return <div>Please Login</div>
  }
  else{

    return <div> Welcome {user.username} </div>
  }
                /*
                useEffect(() =>{
                  const userName = window.localStorage.getItem('UserName');
                  updatePassword(JSON.parse(userName));
                }, [])

                useEffect(() => {
                  window.localStorage.setItem('UserName', JSON.stringify(userName))
                });
                */
}

export default Profile