import {Helmet} from "react-helmet";
import BrandNavbar from "../components/navbar.js"
import SetUpForm from "../components/forms/SignUpForm";

export default function SignUp() {
    return(
        <>  
            <BrandNavbar/>
            <Helmet> <title>Herds Wallet | Sign-up</title> </Helmet>
            <SetUpForm/>
        </>
    )
}