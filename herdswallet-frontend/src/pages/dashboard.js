import '../styles/dashboard.scss'
import {Helmet} from "react-helmet";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button.js";
import BrandNavbar from "../components/navbar.js"
import CategoryCard from "../components/categoryCard.js"
import LogExpenseForm from '../components/forms/LogExpenseForm';
import {BsPlusCircle} from 'react-icons/bs';
import Container from 'react-bootstrap/esm/Container';

export default function Dashboard() {
    const [showForm, setShowForm] = useState(false)
    const handleShow = () => setShowForm(true);

    return(
        <>
            <Helmet> <title>Herds Wallet | Dashboard</title> </Helmet>
            <BrandNavbar/>
            <div className="dash-header">
                <div className='header-item'>
                    <p style={{marginTop:"0.5rem"}}>Click to add an expense to keep track of</p>
                </div>
                <div className='header-item'>
                    <Button variant="primary" onClick={handleShow}><BsPlusCircle/> Add</Button>
                </div>
            </div>

            <Container>
                {/* todo dynamic rendering w grid */}
                <CategoryCard name="Groceries" amount = "$30.67"/>
            </Container>

            {showForm && <LogExpenseForm/>}
        </>

    )
}