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
    const url = `http://localhost:5000/user/${_id}`
    fetch(url,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
        // console.log(data)
        if(data.deletedCount >0){
            console.log('deleted');
            const remaining = users.filter(user => user._id !== _id)
            setUsers(remaining)
        }
    })
}

    }
    return (
        <div>
            <Link to='/user/add'>user</Link> <br />
            <Link to='/update/:id'>Update User</Link>


            <h1>Available Users : {users.length}</h1>

            <ul>
            {
                users.map(user => <li
                key={user._id}
                >name : {user.name} : email :{user.email}
                <Link to={`/update/${user._id}`}><button>Update</button></Link>
                <button onClick={()=>{handleUserDelete(user._id)}}>X</button></li>)
            }
            </ul>
        </div> 
    );
};

export default Home;