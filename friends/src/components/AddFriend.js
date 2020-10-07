import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../api/axiosWithAuth';


const AddFriend = () => {

    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    });


    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/friends', newFriend)
            .then(res => {
                console.log(res);
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }


    return(
        <div>
            <h1>Add Your F. R. I. E. N. D. S.:</h1>
            <form>
                ADD FRIEND
                <label htmlFor='name'>
                    Name:
                    <input type='text' name='name' id='name' value={newFriend.name} onChange={handleChange}  />
                </label>
                <label htmlFor='age'>
                    Age: 
                    <input type='text' name='age' id='age' value={newFriend.age} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type='text' name='email' id='email' value={newFriend.email} onChange={handleChange} />
                </label>
                <button type='submit' onClick={handleSubmit}  >Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend