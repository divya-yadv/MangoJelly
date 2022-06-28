import React, { useCallback, useState } from 'react';
import ItemsList from '../features/inventory/inventoryList';
import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("list");

  const handleToggleCurrentView = useCallback(() => {
    setCurrentView(view => (view === "list" ? "grid" : "list"));
  }, [setCurrentView]);
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
      <ItemsList currentView={currentView}
        onToggleCurrentView={handleToggleCurrentView}
      />
    </div>
  );
}
