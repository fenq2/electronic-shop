import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

interface IOrderModalProps {
  isOpened: boolean;
  onHideHandler: () => void;
}

const OrderModal: React.FC<IOrderModalProps> = ({
  isOpened,
  onHideHandler,
}) => {
  const [phoneValue, setPhoneValue] = useState<string>('');

  const onSendHandler = async () => {
    const orderData = {
      phone: phoneValue,
    };

    const responseData = await axios.post(
      'http://localhost:5000/api/order',
      orderData
    );

    console.log(responseData);
  };

  return (
    <Modal
      show={isOpened}
      onHide={onHideHandler}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Оформить заказ
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: '2rem 72px' }}>
        {/* <p style={{ marginBottom: 16 }}>Оставь номер, блядИгорь!</p> */}
        <Form>
          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Имя</Form.Label>
            <Form.Control type="text" placeholder="блядИгорь" autoFocus />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-center w-100">
              Просто оставьте свой номер и мы вам перезвоним!
            </Form.Label>
            <Form.Control
              type="phone"
              placeholder="+380XXXXXXX"
              onChange={(e) => setPhoneValue(e.target.value)}
              value={phoneValue}
              autoFocus
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="primary" className="w-100" onClick={onSendHandler}>
              Заказать
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OrderModal;
