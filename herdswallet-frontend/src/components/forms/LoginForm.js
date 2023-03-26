import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';

function LoginForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
    
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
      };
    
  return (
    <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUserLogin">
            <Form.Label>Username</Form.Label>
            <Form.Control required type="text"/>
            <Form.Control.Feedback type='invalid'>
                Username is required.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPasswordLogin">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" />
            <Form.Control.Feedback type='invalid'>
                Password is required.
            </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
            Log In
        </Button>
        </Form>
    </Container>
  );
}

export default LoginForm;