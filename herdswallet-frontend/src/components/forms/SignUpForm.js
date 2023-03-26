import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

function SetUpForm() {
const [validated, setValidated] = useState(false);
const [email, setEmail] = useState('');
const [isEmailValidated, setEmailValidation] = useState(false);
const [password, setPassword] = useState('');
const [isPasswordInvalid, setPasswordInvalidation] = useState(true);
const [isPasswordValid, setPasswordValidation] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    validateEmail();
    validatePassword();

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
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
    // setPassword(input)
    console.log(password)
    // const passRegex = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^!#%]*[!#%])[A-Za-z0-9!#%]{8,}$/;
    // const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
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


  return (
    <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text"/>
                <Form.Control.Feedback type='invalid'>
                    First name is required.
                </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required type="text"/>
                <Form.Control.Feedback type='invalid'>
                    Last name is required.
                </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
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

        <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control required type="text"/>
            <Form.Control.Feedback type='invalid'>
                Username is required.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
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
        
        <Button variant="primary" type="submit">
            Sign Up
        </Button>
        </Form>
    </Container>
  );
}

export default SetUpForm;