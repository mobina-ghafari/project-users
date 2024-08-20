import axios from "axios";
import { useEffect, useState } from "react";

const Users =()=>{
    const [users , setUsers] = useState([]);
    useEffect(()=>{
    axios.get("https://reqres.in/api/users").then((res)=>{
        setUsers(res.data.data);
    });
});
    return(
        <div className="container-fluid mt-5">
            <div className="d-flex align-items-center justify-content-center ">
                <input  type="search" placeholder="user search" className="w-50  my-input-search" />
            </div>
            <div className="row">
                {users.map((user , index)=>{
                    return(
                        <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
                            <div className="d-flex flex-column align-items-center justify-content-center shadow p-4 mt-5" style={{width:"70%" , borderRadius:"20px"}}>
                                <img src={user.avatar} alt=""  style={{borderRadius:"50%"}} />
                                <h4 className="mt-4">{user.first_name}{user.last_name}</h4>
                                <h5 className="mt-2 text-muted">{user.email}</h5>
                                <div className="d-flex align-items-center justify-content-around w-100 mt-4">
                                    <button className="btn btn-danger">Delete</button>
                                    <button className="btn btn-info text-white">View</button>
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