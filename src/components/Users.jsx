import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users =()=>{
    const [users , setUsers] = useState([]);
    const [searchTerm , setSearchTerm] = useState("");
    useEffect(() => {
        axios.get("https://reqres.in/api/users").then((res) => {
            setUsers(res.data.data);
        });
    }, []);

    //functions//
    //function برای پاک کردن//
    const handleDelete =(user)=>{
        const newUsers = users.filter(u => u.id !== user.id);
        setUsers(newUsers);
    }

    //function مقدار سرچ شده را برمیگرداند و درون stateمیریزیم //
    const handleSearch =(event)=>{
        setSearchTerm(event.target.value.toLowerCase())
    }

    //function برای filter کردن//
    const filteredUsers = users.filter((user)=>
        user.first_name.toLowerCase().includes(searchTerm)||
        user.last_name.toLowerCase().includes(searchTerm)||
        user.email.toLowerCase().includes(searchTerm)
    );
    //functions//
    return(
        <div className="container-fluid mt-5">
            <div className="d-flex align-items-center justify-content-center ">
                <input onChange={handleSearch}  type="search" placeholder="user search" className="w-50  my-input-search" />
            </div>
            <div className="row">
                {filteredUsers.map((user , index)=>{
                    return(
                        <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
                            <div className="d-flex flex-column align-items-center justify-content-center shadow p-4 mt-5" style={{width:"70%" , borderRadius:"20px"}}>
                                <img src={user.avatar} alt=""  style={{borderRadius:"50%"}} />
                                <h4  className="mt-4">{user.first_name}{user.last_name}</h4>
                                <h5 className="mt-2 text-muted">{user.email}</h5>
                                <div className="d-flex align-items-center justify-content-around w-100 mt-4">
                                    <button onClick={()=>{handleDelete(user)}} className="btn btn-danger">Delete</button>
                                    <Link to={`/users/${user.id}`}><button className="btn btn-info text-white">View</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
export default Users;