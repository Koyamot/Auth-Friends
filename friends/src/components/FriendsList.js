import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from "../api/axiosWithAuth";


const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then((res) => {
                setFriends(res.data);
                console.log("ko: FriendsList.js: FriendsList: res: ", res)
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    

    return (
            <div className="friendsList">
                {friends.map(friend => {
                    return(
                        <div className="friendCard" key={friend.id}>
                            <h3>{friend.name}</h3>
                            <p>Age: {friend.age}</p>
                            <p className="email-label">Email:</p><p className="email"> {friend.email}</p>
                        </div>
                    )
                })}
            </div>
    )

}

export default FriendsList