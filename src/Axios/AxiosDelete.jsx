import axios from 'axios';
import React, { useState } from 'react'

const AxiosDelete = () => {

    const [userId, setUserId] = useState();
    const [message, setMessage] = useState();

    const handleDelete = async (e) => {
        e.preventDefault();
        try {

            const res = await axios.delete('https://jsonplaceholder.typicode.com/users/${userId}');
            console.log(res);
            setMessage('failed deleting user')

        } catch (error) {
            console.error(error);
            setMessage('failed deleting user')

        }
    }

    return (
        <div>
            <h2>Delete User</h2>
            <form onSubmit={handleDelete}>
                <input type="text"
                    placeholder='enter ur id'
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)} />
                    <button type='submit'>submit</button>
            </form>
            
            <p>{message}</p>
        </div>
    )
}

export default AxiosDelete
