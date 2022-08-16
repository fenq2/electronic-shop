import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';

import Header from '../../components/Header/Header';

const Card: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

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
                {slug}
              </Col>
            </Row>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Card;
