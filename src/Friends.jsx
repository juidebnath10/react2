import './Friends.css'
import { useEffect, useState } from "react"
import Frnd from './Frnd';

export default function Friends() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))

    }, [])

    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(frnd => <Frnd frnd={frnd}></Frnd>)
            }
        </div>
    )
}