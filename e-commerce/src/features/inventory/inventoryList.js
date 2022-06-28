import { useSelector } from 'react-redux';
import { allItems } from './inventorySlice';
import { Card, Container, Row, Col } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';
import ListItemDisplay from '../../components/listItemDisplay';

const ItemsList = () => {
  const items = useSelector(allItems);

  return (
    <div>
      <Container>
        {items && (
          <Row>
            {items.map((item) => (
              <Col key={item.productId} sm={2} md={3}>
                <Link
                  className="text-decoration-none"
                  to={`/item/${item.productSlug}`}
                >
                  <ListItemDisplay itemId={item.productId} />
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ItemsList;
