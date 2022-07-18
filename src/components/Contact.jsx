import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import { CargaDatos } from './CargaDatos'
import UserList from './UserList'

export const Contact = () => {
 

  return (
    <div className='container'>
      <Button />
      <div id='userList'>
        <UserList  />
      </div>


    </div>


  )
}
