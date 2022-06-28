import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { allItems, itemUpdated } from '../features/inventory/inventorySlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const UpdateItemForm = () => {
  const params = useParams();
  const { slug } = params;
  const items = useSelector(allItems);
  const item = items.filter((itemc) => itemc.productSlug === slug)[0];
  const dispatch = useDispatch();
  const [productName, setName] = useState('');
  const [internalStorage, setStorage] = useState('');
  const [productDescription, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [RAM, setRAM] = useState('');
  const [brandName, setbName] = useState('');
  const [battery, setBattery] = useState('');
  const [productThumbnail, setThumbnail] = useState('');
  const navigate = useNavigate();
  const onSave = () => {
    const productSlug = productName.replace(/\s+/g, '-').toLowerCase();
    dispatch(
      itemUpdated(
        productName,
        productSlug,
        productThumbnail,
        internalStorage,
        productDescription,
        price,
        RAM,
        brandName,
        internalStorage,
        battery
      )
    );
    setName('');
    setDesc('');
    setPrice('');
    setRAM('');
    setbName('');
    setStorage('');
    setBattery('');
    setThumbnail('');
    navigate('/');
  };
  let cansave =
    Boolean(productName) &&
    Boolean(productDescription) &&
    Boolean(price) &&
    Boolean(RAM) &&
    Boolean(brandName) &&
    Boolean(internalStorage) &&
    Boolean(battery);
  return (
    <Container className="widthcontainer">
      <h2 className="mt-5">Add a new Item</h2>
      <form className="mt-5">
        <label htmlFor="productName">Product Name:</label>
        <input
          className="mb-2"
          type="text"
          id="productName"
          name="productName"
          value={productName}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="productThumbnail">Product Thumbnail:</label>
        <input
          className="mb-2"
          type="text"
          id="productThumbnail"
          name="productThumbnail"
          value={productThumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <label htmlFor="productDescription">Product Description:</label>
        <input
          className="mb-2"
          type="text"
          id="productDescription"
          name="productDescription"
          value={productDescription}
          onChange={(e) => setDesc(e.target.value)}
        />
        <label htmlFor="productPrice">Product Price:</label>
        <input
          className="mb-2"
          type="text"
          id="productPrice"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="RAM">RAM:</label>
        <input
          className="mb-2"
          type="text"
          id="RAM"
          name="RAM"
          value={RAM}
          onChange={(e) => setRAM(e.target.value)}
        />
        <label htmlFor="brandName">Brand Name:</label>
        <input
          className="mb-2"
          type="text"
          id="brandName"
          name="brandName"
          value={brandName}
          onChange={(e) => setbName(e.target.value)}
        />
        <label htmlFor="internalStorage">Internal Storage:</label>
        <input
          className="mb-2"
          type="text"
          id="internalStorage"
          name="internalStorage"
          value={internalStorage}
          onChange={(e) => setStorage(e.target.value)}
        />
        <label htmlFor="battery">Battery</label>
        <input
          className="mb-2"
          type="text"
          id="battery"
          name="battery"
          value={battery}
          onChange={(e) => setBattery(e.target.value)}
        />
        <button
          className="mt-3"
          onClick={onSave}
          type="button"
          disabled={!cansave}
        >
          Add Item
        </button>
        <button
          className="mt-3"
          onClick={() => {
            navigate('/');
          }}
          type="button"
        >
          Cancel
        </button>
      </form>
    </Container>
  );
};

export default UpdateItemForm;
