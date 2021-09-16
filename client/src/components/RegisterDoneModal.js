import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const RegisterDoneModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Awesome!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your account is successfully created</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
