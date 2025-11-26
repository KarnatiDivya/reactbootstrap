import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export function ReactBootstrap() {
  return (
    <Container className="mt-4">
        <h1>React Bootstrap</h1>
      <Row className="g-4">
        <Col xs={6} md={4}>
          <Image
            src="https://tse4.mm.bing.net/th/id/OIP.oWScGxjOKVManxowh95M8AHaE8?pid=Api&P=0&h=180"
            rounded
            fluid
          />
        </Col>

        <Col xs={6} md={4}>
          <Image
            src="https://images.pexels.com/photos/863963/pexels-photo-863963.jpeg?cs=srgb&dl=nature-flowers-garden-863963.jpg&fm=jpg"
            roundedCircle
            fluid
          />
        </Col>

        <Col xs={6} md={4}>
          <Image
            src="https://static.vecteezy.com/system/resources/previews/022/257/312/large_2x/rose-flower-pictures-beautiful-roses-love-rose-flower-beautiful-flowers-wallpapers-ai-generated-free-photo.jpg"
            thumbnail
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
}
