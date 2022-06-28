import React from 'react';
import ItemsList from '../features/inventory/inventoryList';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="mb-5 mt-5">Buy best phones at affordable prices</h2>
      <Button
        className="btn btn-primary"
        onClick={() => {
          navigate('/additem');
        }}
      >
        Add new Item
      </Button>
      <ItemsList />
    </div>
  );
}
