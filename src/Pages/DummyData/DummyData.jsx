import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './DummyData.css'
function DummyData(){
    const [users,setUsers]=useState([]);

    useEffect(() =>{
        axios.get("https://dummyjson.com/users").then((response)=>setUsers(response.data.users))
        .catch((error)=>console.error(error));
    },[]);

    return(
        <div className='DummyData'>
      <h1>Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><img src={user.image} alt={`${user.firstName} ${user.lastName}`}/></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DummyData;