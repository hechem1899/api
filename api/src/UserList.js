import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const UserList = () => {

    const [user, setUser] = useState( [] );


    useEffect(() => {
   
    axios.get(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res=> {setUser(res.data)})
    .catch(er=>console.log(er))
    

           
});

    return ( <div>
        <h2>checkpoint API</h2>
<Table striped bordered hover variant="dark">
    <th >name</th>
    <th> username</th>
    <th>email</th>
    <th>address</th>
    <th> Company</th>

    <tbody style={{textAlign: "center"}}>{user.map((el,id) => <tr key={id}>
    <td>{el.name}</td>
    <td>{el.username}</td>
    <td>{el.email}</td>
    <td>{`street : ${el.address.street} , suite: ${el.address.suite}, city: ${el.address.city} `}</td>
    <td>{`name : ${el.company.name} bs : ${el.company.bs}`}</td>
    </tr>)}



    </tbody>
</Table>


    </div> );
}

export default UserList;