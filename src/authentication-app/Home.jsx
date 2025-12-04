import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import ShoppingApp from '../redux/shopping cart with redux toolkit/ShoppingApp';

function Home() {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div>
                <h2>Welcome,{user?.username}</h2>
                <p>This is your home page</p>
            </div>
            <div style={{ marginTop: "20px", height: "90vh" }}>
                <ShoppingApp />
            </div>
        </div>
    )
}

export default Home
