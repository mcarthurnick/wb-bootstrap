import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Hero.css'

export default function Hero({ title, lead }) {
  return (
    <Container fluid lg="5" className="HeroContainer">
    <Row lg="5">
      <Col lg="6" className="mx-auto">
      <h1>{title}</h1>
      <p>{lead}</p>
      </Col>
    </Row>
  </Container>
  );
}
