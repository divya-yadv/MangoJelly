import React from 'react';
import { useSelector } from 'react-redux';
import { allItems } from '../features/inventory/inventorySlice';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ItemScreen() {
  let navigate = useNavigate();
  const params = useParams();
  const { slug } = params;
  const items = useSelector(allItems);
  const item = items.filter((itemc) => itemc.productSlug === slug)[0];
  const deleteItem = (item) => {};
  const updateItem = (item) => {};
  return (
    <div>
      <Button
        className="mt-5"
        onClick={() => {
          navigate('/');
        }}
      >
        Back
      </Button>
      <Container>
        <Card className="shadow mt-5 text-black text-start">
          <Card.Body>
            <Row>
              <Col sm={6} md={6}>
                <Card.Img
                  className="card-img-top imagewidth"
                  src={item.productThumbnail}
                  alt={item.productName}
                />
              </Col>
              <Col sm={6} md={6}>
                <Card.Title>{item.productName}</Card.Title>
                <Card.Text>{item.brandName}</Card.Text>
                <Card.Text>₹{item.price}</Card.Text>
                <Card.Text>{item.RAM}</Card.Text>
                <Card.Text>{item.internalStorage}</Card.Text>
                <Card.Text>{item.battery}</Card.Text>
                <Card.Text>{item.productDescription}</Card.Text>
                <Row className="mb-5">
                  <Col sm={3} md={3} lg={3}>
                    <Button type="button" onClick={updateItem}>
                      update details
                    </Button>
                  </Col>
                  <Col sm={3} md={3} lg={3}>
                    <Button
                      className="btn-danger"
                      type="button"
                      onClick={deleteItem}
                    >
                      Delete Item
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
