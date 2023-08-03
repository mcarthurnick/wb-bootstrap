import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Values.css'

function Value({ title, description, action }) {
  return (
    <Card className="valueCard">
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button className="bg-success">{action}</Button>
    </Card>
  );
}

export default function Values({ values }) {
  return (
    <Container className="valueContainer">
      <Row>
        {values.map(({ title, description, action }, index) => (
          <Col key={index}>
            <Value title={title} description={description} action={action} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
