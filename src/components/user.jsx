import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const [user, setUser] = useState({});
    const { id } = useParams(); // دریافت پارامتر id از URL

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users/${id}`);
                setUser(response.data.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchData();
    }, [id]); // اضافه کردن id به آرایه وابستگی‌ها

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center justify-content-center shadow p-4 mt-5" style={{ width: "70%", borderRadius: "20px" }}>
                        <img src={user.avatar} alt="" style={{ borderRadius: "50%" }} />
                        <h4 className="mt-4">{user.first_name} {user.last_name}</h4>
                        <h5 className="mt-2 text-muted">{user.email}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
