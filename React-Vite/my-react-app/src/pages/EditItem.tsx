import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Mock load existing item
    setItemName('Sample Item');
    setDescription('Sample Description');
  }, [id]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated item:', { id, itemName, description });
    navigate('/dashboard');
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm">
        <h3 className="mb-4">Edit Item - {id}</h3>
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="warning" type="submit">
            Update Item
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default EditItem;
