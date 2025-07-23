import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Dashboard</h2>
      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Add Item</Card.Title>
              <Card.Text>Add a new item to the list.</Card.Text>
              <Button variant="primary" onClick={() => navigate('/dashboard/add')}>
                Go to Add Item
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Edit Item</Card.Title>
              <Card.Text>Edit an existing item by ID.</Card.Text>
              <Button variant="warning" onClick={() => navigate('/dashboard/edit/1')}>
                Go to Edit Item
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
