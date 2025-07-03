import { Container, Row, Col, Image } from "react-bootstrap";

function MainBootstrap() {
  return (
    <Container className="my-4">
      <Row className="align-items-center">
        <Col md={4}>
          <Image
            src="https://www.uship.com/learn/ca/wp-content/uploads/sites/3/thumbnail-placeholder-300x200-300x200.png"
            alt="Imagen ilustrativa"
            fluid
            rounded
          />
        </Col>
        <Col md={8}>
          <h2>Contenido Principal</h2>
          <p>
            Este es un ejemplo de contenido dentro del área principal.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MainBootstrap;
