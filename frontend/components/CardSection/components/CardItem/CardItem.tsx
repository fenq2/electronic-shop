import React from 'react';
import { Button, Card } from 'react-bootstrap';

interface ICardItemProps {
  setModalShow: (arg0: boolean) => void;
}

const CardItem: React.FC<ICardItemProps> = ({ setModalShow }) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img
        variant="top"
        src="https://pcshop.ua/image/cache/catalog/tovar/30689-1024x768.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card`s content.
        </Card.Text>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Купить в 1 клик
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
