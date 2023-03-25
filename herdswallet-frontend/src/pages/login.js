import {Helmet} from "react-helmet";
import BrandNavbar from "../components/navbar.js"

export default function Login() {
    return(
        <>
            <Helmet> <title>Herds Wallet | Login</title> </Helmet>
            <BrandNavbar/>
        </>
    )
}