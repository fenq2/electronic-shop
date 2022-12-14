import Link from 'next/link';
import React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  Row,
} from 'react-bootstrap';

import Categories from '../Navigation/Categories/Categories';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Row
          style={{
            paddingBottom: '16px',
          }}
          className="align-items-center"
        >
          <Col className="d-flex">
            <Link href="/">
              <a className={styles.logo}>TO THE BURN</a>
            </Link>
          </Col>
          <Col className="d-flex">
            <InputGroup>
              <Form.Control
                placeholder="Поиск..."
                aria-label="Поиск"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                Найти
              </Button>
            </InputGroup>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              variant="link"
              style={{ textDecoration: 'none', color: '#5e6d55' }}
            >
              Войти
            </Button>
            <Button variant="primary">Регистрация</Button>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="d-flex">
            <Categories />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
