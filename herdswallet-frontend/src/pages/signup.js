import {Helmet} from "react-helmet";
import BrandNavbar from "../components/navbar.js"

export default function SignUp() {
    return(
        <>  
            <BrandNavbar/>
            <Helmet> <title>Herds Wallet | Sign-up</title> </Helmet>
        </>
    )
}