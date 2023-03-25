import {Helmet} from "react-helmet";
import BrandNavbar from "../components/navbar.js"

export default function Dashboard() {
    return(
        <>
            <Helmet> <title>Herds Wallet | Dashboard</title> </Helmet>
            <BrandNavbar/>
        </>

    )
}