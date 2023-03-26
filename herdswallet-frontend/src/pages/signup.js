import {Helmet} from "react-helmet";
import BrandNavbar from "../components/navbar.js"
import SetUpForm from "../components/forms/SignUpForm";
import '../styles/forms.scss';

export default function SignUp() {
    return(
        <>  
            <BrandNavbar/>
            <Helmet> <title>Herds Wallet | Sign-up</title> </Helmet>
            <div className="form-desc">
                <h1>Sign Up</h1>
                <p>Fill out this form to create your account and start tracking your budget!</p>
            </div>
            <SetUpForm/>
        </>
    )
}