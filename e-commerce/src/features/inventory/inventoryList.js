import { useSelector } from 'react-redux';
import { allItems } from './inventorySlice';
import {Container, Row, Col } from 'react-bootstrap';
import ListItemDisplay from '../../components/listItemDisplay';

const ItemsList = (props) => {
  const items = useSelector(allItems);
  const {currentView,onToggleCurrentView} = props;
  return (
    <div>
      <Container>
        {items && (
          <Row>
            {items.map((item) => (
              <Col key={item.productId} sm={2} md={3}>
                  <ListItemDisplay itemId={item.productId} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ItemsList;
