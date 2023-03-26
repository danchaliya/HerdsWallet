import {Helmet} from "react-helmet";
import BrandNavbar from "../components/navbar.js"
import LoginForm from "../components/forms/LoginForm.js";
import { Link } from "react-router-dom";

export default function Login() {
    return(
        <>  
            <BrandNavbar/>
            <Helmet> <title>Herds Wallet | Login</title> </Helmet>
            <div className="form-desc">
                <h1>Log In</h1>
                <p>Don't have an account yet? <span><Link to={"/signup"}>Sign up!</Link></span></p>
            </div>
            <LoginForm/>
        </>
    )
}