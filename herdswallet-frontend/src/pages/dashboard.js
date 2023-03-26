import {Helmet} from "react-helmet";
import BrandNavbar from "../components/navbar.js"
import CategoryCard from "../components/categoryCard.js"

export default function Dashboard() {
    return(
        <>
            <Helmet> <title>Herds Wallet | Dashboard</title> </Helmet>
            <BrandNavbar/>
            <CategoryCard name="shawty" amount = "300"/>
        </>

    )
}