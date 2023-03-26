import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import { useState } from 'react';

function LogExpenseForm() {
    const [validated, setValidated] = useState(false);

    const [show, setShow] = useState(true); //true bc of the conditional render in dashboard
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    function refreshPage() {
        window.location.reload(false);
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
    
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
      };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header>
              <Modal.Title>Add Expense</Modal.Title>
              <CloseButton onClick={refreshPage}/>
          </Modal.Header>
          <Modal.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Expense Name</Form.Label>
                      <Form.Control required type="text" />
                      <Form.Control.Feedback type='invalid'>
                          A name is required.
                      </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="amount">
                      <Form.Label>Amount</Form.Label>
                      <Form.Control required type="number" />
                      <Form.Control.Feedback type='invalid'>
                          An amount is required.
                      </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="category">
                      <Form.Label>Category</Form.Label>
                      <Form.Control required type="text" />
                      <Form.Control.Feedback type='invalid'>
                          A category is required.
                      </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                      Submit
                  </Button>
              </Form>
          </Modal.Body>
      </Modal>
      </>
  );
}

export default LogExpenseForm;