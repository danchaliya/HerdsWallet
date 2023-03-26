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

const [validated, setValidated] = useState(false);
const [isEmailValidated, setEmailValidation] = useState(false);
const [isPasswordInvalid, setPasswordInvalidation] = useState(true);
const [isPasswordValid, setPasswordValidation] = useState(false);
const [isPhoneInvalid, setPhoneInvalidation] = useState(true);
const [isPhoneValid, setPhoneValidation] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    validateEmail();
    validatePassword();
    validatePhone();

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    axios.post("http://localhost:7002/register", {
        username: username,
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phone
    })
        .then(response => {
            console.log("POST success!");
            console.log(response)
        })
        .catch(error => {
            console.log("POST failed!");
            console.log(error)
        })
  };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//     validateEmail();
//   } 

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email) || email === '') {
        setEmailValidation(false);
    } else {
        setEmailValidation(true);
    }
  }

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     validatePassword()
//   } 

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
                    value={firstName}
                    onChange={event => {setFirstName(event.target.value)}}/>
                <Form.Control.Feedback type='invalid'>
                    First name is required.
                </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    value={lastName}
                    onChange={event => {setLastName(event.target.value)}}/>
                <Form.Control.Feedback type='invalid'>
                    Last name is required.
                </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
                required
                value={email}
                type="email"
                onChange={event => {setEmail(event.target.value)}}
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
                value={username}
                onChange={event => {setUsername(event.target.value)}}/>
            <Form.Control.Feedback type='invalid'>
                Username is required.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                required
                value={password}
                type="password"
                isValid={isPasswordValid}
                isInvalid={isPasswordInvalid}
                onChange={event => {setPassword(event.target.value); console.log(password); validatePassword()}}
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
                value={phone}
                type="text"
                isValid={isPhoneValid}
                isInvalid={isPhoneInvalid}
                onChange={event => {setPhone(event.target.value); console.log(phone); validatePhone()}}
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

        <Button variant="primary" type="submit">
            Sign Up
        </Button>
        </Form>
    </Container>
  );
}

export default SetUpForm;