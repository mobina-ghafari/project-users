
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login =()=>{

    //yup
        const schema = yup.object().shape({
            fname:yup.string().required("first name is a required field"),
            lname:yup.string().required("last name is a required field"),
            email:yup.string().email().required(),
            password:yup.string().min(4).max(16).required()
        })

    //useform
        const {register , handleSubmit , formState:{errors}} = useForm({resolver:yupResolver(schema)});

    //navigate
        const navigate =  useNavigate();

    //functions//
    const onFormSubmit = async(data) => {
        try {
            const response = await axios.post('https://reqres.in/api/login', {
                email: data.email,
                password: data.password
            });
            console.log(response);
             // دریافت لیست کاربران
        const usersResponse = await axios.get('https://reqres.in/api/users');
        const users = usersResponse.data.data;

        // بررسی وجود ایمیل کاربر در لیست کاربران
        const user = users.find(user => user.email === data.email);

        if (user) {
            // هدایت به صفحه جزئیات کاربر
            navigate(`/users/${user.id}`);
        } else {
            console.error("کاربر با این ایمیل یافت نشد.");
        }
        } catch (error) {
            console.error("Login failed:", error.response.data);
        }
    }
    

    return(
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12 mx-auto">
                    <div className="">
                        <form onSubmit={handleSubmit(onFormSubmit)} action="" className="d-flex flex-column">
                            <label htmlFor="fname" className="">First name :</label>
                            <input id="fname" type="text" className=" mt-2" {...register("fname")} />
                            {errors.fname && (<span className="text-danger">{errors.fname?.message}</span>)}
                            <label htmlFor="lname" className="mt-5">Last name :</label>
                            <input id="lname" type="text" className=" mt-2" {...register("lname")} />
                            {errors.lname && (<span className="text-danger">{errors.lname?.message}</span>)}
                            <label htmlFor="email" className="mt-5">Email :</label>
                            <input id="email" type="email" className=" mt-2" {...register("email")} />
                            {errors.email && (<span className="text-danger">{errors.email?.message}</span>)}
                            <label htmlFor="password" className="mt-5">Password :</label>
                            <input id="password" type="password" className=" mt-2" {...register("password")} />
                            {errors.password && (<span className="text-danger">{errors.password?.message}</span>)}
                            <button  type="submit" className="mt-5">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;