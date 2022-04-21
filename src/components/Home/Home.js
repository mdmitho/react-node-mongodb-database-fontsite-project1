import React from 'react';
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res =>res.json())
        .then(data => setUsers(data))
    },[])
    const handleUserDelete = _id =>{
const proceed = window.confirm('Are you sure you want to delete?')
if(proceed){
    console.log('deleting user with id', _id);
}

    }
    return (
        <div>
            <Link to='/user/add'>user</Link>


            <h1>Available Users : {users.length}</h1>

            <ul>
            {
                users.map(user => <li
                key={user._id}
                >name : {user.name} : email :{user.email}
                <button onClick={()=>{handleUserDelete(user._id)}}>X</button></li>)
            }
            </ul>
        </div> 
    );
};

export default Home;