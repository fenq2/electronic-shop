import type { NextPage } from 'next';
import { Col, Container, Row } from 'react-bootstrap';

import CardSection from '../components/CardSection/CardSection';
import Header from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div style={{ padding: '32px 0' }}>
            <Row
              style={{
                height: 300,
                backgroundColor: '#dedede',
                borderRadius: 16,
              }}
            >
              <Col className="d-flex align-items-center justify-content-center">
                BANNER
              </Col>
            </Row>
          </div>

          <CardSection title="Лидеры продаж" />
          <CardSection title="Новинки" />
        </Container>
      </main>
    </>
  );
};

export default Home;
