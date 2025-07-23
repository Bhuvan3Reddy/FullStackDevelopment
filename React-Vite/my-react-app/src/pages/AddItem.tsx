import { Button, Card, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual save logic
    console.log('Item added:', { itemName, description });
    navigate('/dashboard');
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm">
        <h3 className="mb-4">Add New Item</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter item name"
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
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Item
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddItem;
