import React, { useState } from 'react'

export const UserDataContext = React.createContext()

function UserContext({children}) {

    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    })

  return (
    <div>
      <UserDataContext.Provider value={user}>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
