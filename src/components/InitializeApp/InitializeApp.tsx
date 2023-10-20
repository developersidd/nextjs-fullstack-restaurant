import React from 'react'
import UserAuthHandler from '../UserAuthHandler/UserAuthHandler'

const InitializeApp = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <UserAuthHandler>
                {children}
            </UserAuthHandler>
        </div>
    )
}

export default InitializeApp