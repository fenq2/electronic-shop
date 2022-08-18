import React from 'react';
import { Col, Row } from 'react-bootstrap';

import CardItem from '../CardItem/CardItem';

interface ICardListProps {
  setModalShow: (arg0: boolean) => void;
}

const CardList: React.FC<ICardListProps> = ({ setModalShow }) => {
  return (
    <Row>
      <Col className="col-3">
        <CardItem setModalShow={setModalShow} />
      </Col>
    </Row>
  );
};

export default CardList;
