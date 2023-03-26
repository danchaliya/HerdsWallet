import '../../styles/forms.scss'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';

function SetUpForm() {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [phone, setPhone] = useState('');

const [tempfirstName, setTFirstName] = useState('');
const [templastName, setTLastName] = useState('');
const [tempEmail, setTEmail] = useState('');
const [tempUsername, setTUsername] = useState('');
const [tempPassword, setTPassword] = useState('');
const [tempPhone, setTPhone] = useState('');

const [validated, setValidated] = useState(false);
const [isEmailValidated, setEmailValidation] = useState(false);
const [isPasswordInvalid, setPasswordInvalidation] = useState(true);
const [isPasswordValid, setPasswordValidation] = useState(false);
const [isPhoneInvalid, setPhoneInvalidation] = useState(true);
const [isPhoneValid, setPhoneValidation] = useState(false)

    function passTemps(tempfirstName, templastName, tempEmail, tempUsername, tempPassword, tempPhone){
        setFirstName(tempfirstName)
        setLastName(templastName)
        setEmail(tempEmail)
        setUsername(tempUsername)
        setPassword(tempPassword)
        setPhone(tempPhone)
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    validateEmail();
    validatePassword();
    validatePhone();

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    var bodyFormData = new FormData();
    bodyFormData.append('username', username);
    bodyFormData.append('email', email);
    bodyFormData.append('password', password);
    bodyFormData.append('firstName', firstName);
    bodyFormData.append('lastName', lastName);
    bodyFormData.append('phoneNumber', phone);

    fetch('http://localhost:7002/register', {
        method: "POST",
        body: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(response => response.json()).then((data) => {
        console.log(`POST success!`, data);
    }).catch(err => {
        console.log(`Post failed :( ${err})`);
    });
    

  };

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email) || email === '') {
        setEmailValidation(false);
    } else {
        setEmailValidation(true);
    }
  }

  const validatePassword = () => {
    console.log(password)
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    if (!passRegex.test(password) || password === '') {
        setPasswordValidation(false);
        setPasswordInvalidation(true);
        console.log("val fail")
    } else {
        setPasswordValidation(true);
        setPasswordInvalidation(false);
        console.log("val success")
    }
  }

  const validatePhone = () => {
    // const phoneRegex = /[0-9]{0,10}$/
    const phoneRegex = /^\d{9}/
    if (!phoneRegex.test(phone) || phone === '' || phone.length < 10) {
        setPhoneValidation(false);
        setPhoneInvalidation(true);
        console.log("val fail")
    } else {
        setPhoneValidation(true);
        setPhoneInvalidation(false);
        console.log("val success")
    }
  }


  return (
    <Container className='shrunk-form'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    value={tempfirstName}
                    onChange={event => {setTFirstName(event.target.value)}}/>
                <Form.Control.Feedback type='invalid'>
                    First name is required.
                </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    value={templastName}
                    onChange={event => {setTLastName(event.target.value)}}/>
                <Form.Control.Feedback type='invalid'>
                    Last name is required.
                </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
                required
                value={tempEmail}
                type="email"
                onChange={event => {setTEmail(event.target.value)}}
            />
            <Form.Control.Feedback type='invalid'>
                Enter a valid email.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
                required
                type="text"
                value={tempUsername}
                onChange={event => {setTUsername(event.target.value)}}/>
            <Form.Control.Feedback type='invalid'>
                Username is required.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                required
                value={tempPassword}
                type="password"
                isValid={isPasswordValid}
                isInvalid={isPasswordInvalid}
                onChange={event => {setTPassword(event.target.value); console.log(password); validatePassword()}}
            />
            <Form.Control.Feedback type='invalid'>
                Enter a valid password.
            </Form.Control.Feedback>
            <Form.Control.Feedback type='valid'>
                Password matches requirements!
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
            Password Requirements:
            Minimum of 8 characters, one number, one capital letter, one special character
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
                required
                value={tempPhone}
                type="text"
                isValid={isPhoneValid}
                isInvalid={isPhoneInvalid}
                onChange={event => {setTPhone(event.target.value); console.log(phone); validatePhone()}}
            />
            <Form.Control.Feedback type='invalid'>
                Enter a 10-digit phone number.
            </Form.Control.Feedback>
            <Form.Control.Feedback type='valid'>
                Phone number meets requirements!
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
                Please only enter numbers
            </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={() => passTemps(tempfirstName, templastName, tempEmail, tempUsername, tempPassword, tempPhone)}>
            Sign Up
        </Button>
        </Form>
    </Container>
  );
}

export default SetUpForm;