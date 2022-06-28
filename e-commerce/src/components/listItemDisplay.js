import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allItems, itemDeleted } from '../features/inventory/inventorySlice';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function ListItemDisplay(props) {
  const { itemId } = props;
  const items = useSelector(allItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const item = items.filter((itemc) => itemc.productId === itemId)[0];
  const deleteItem = () => {
    dispatch(itemDeleted(itemId));
  };
  const updateItem = (item) => {};
  return (
    <div>
      <Card className="shadow mt-5 text-black text-start">
        <Link className="text-decoration-none text-black" to={`/item/${item.productSlug}`}>
          <Card.Body>
            <Container className="card-img-top mb-3">
              <Card.Img
                height={200}
                width={200}
                src={item.productThumbnail}
                alt={item.productName}
              />
            </Container>
            <Card.Title>{item.productName}</Card.Title>
            <Card.Text>Brand:{item.brandName}</Card.Text>
            <Card.Text>
              <strong>₹{item.price}</strong>
            </Card.Text>
          </Card.Body>
        </Link>
        <Row className="mb-5 ms-2">
          <Col>
            <Button type="button" onClick={updateItem}>
              update details
            </Button>
          </Col>
          <Col>
            <Button className="btn-danger" type="button" onClick={deleteItem}>
              Delete Item
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
