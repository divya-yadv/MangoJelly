import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = [
  {
    productId: '1',
    productName: 'Samsung Galaxy M32',
    price: '12,499',
    RAM: '6GB',
    productSlug: 'samsung-galaxy-m32',
    productDescription:
      'Segment Best 16.21 centimeters (6.4-inch) Super AMOLED - Infinity U-cut display, FHD+ resolution with 90Hz Refresh rate, 800 Nits High Brightness Mode, protected by Gorilla Glass 5 Versatile 64MP+8MP+2MP+2MP Quad camera setup-64MP (F 1.8) main camera + 8MP (F2.2) Ultra wide camera+ 2MP (F2.4) depth camera + 2MP (2.4) Macro Camera| 20MP (F2.2) front camera',
    productThumbnail:
      'https://m.media-amazon.com/images/I/71F4jU7MRUS._SL1500_.jpg',
    brandName: 'Samsung',
    internalStorage: '128GB',
    battery: '6000 mAh',
  },
  {
    productId: '2',
    productName: 'Samsung Galaxy A23',
    price: '18,499',
    RAM: '6GB',
    productSlug: 'samsung-galaxy-m32',
    productDescription:
      '50MP Quad Camera with OIS Powerful 2.4GHz Snapdragon Octa-Core processor 165.4mm (6.6") FHD+ Infinity V 90Hz Smooth Display 6GB RAM, 128GB ROM ,Android 12.0 OS',
    productThumbnail:
      'https://m.media-amazon.com/images/I/91vCEThfTOL._SX679_.jpg',
    brandName: 'Samsung',
    internalStorage: '128GB',
    battery: '5000 mAh',
  },
  {
    productId: '3',
    productName: 'Oppo A31',
    price: '11,999',
    RAM: '6GB',
    productSlug: 'oppo-a31',
    productDescription:
      '12+2+2MP triple rear camera (12MP main camera+2MP macro lens+2MP depth camera) with Portrait bokeh, macro lens, dazzle color mode, AI beautification | 8MP front camera',
    productThumbnail:
      'https://m.media-amazon.com/images/I/61CnyJ-IbML._SX679_.jpg',
    brandName: 'Oppo',
    internalStorage: '128GB',
    battery: '6000 mAh',
  },
];
export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    itemAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(
        productName,
        productSlug,
        productThumbnail,
        price,
        productDescription,
        brandName,
        RAM,
        internalStorage,
        battery
      ) {
        return {
          payload: {
            productId: nanoid(),
            productName,
            productSlug,
            productThumbnail,
            price,
            productDescription,
            brandName,
            RAM,
            internalStorage,
            battery,
          },
        };
      },
    },
    itemDeleted(state, action) {
      return state.filter((item) => item.productId !== action.payload);
    },
    itemUpdated(state, action) {
      return state.filter((item) => item.productId !== action.payload);
    },
  },
});

export const allItems = (state) => state.inventory;
export const { itemAdded, itemDeleted, itemUpdated } = inventorySlice.actions;
export default inventorySlice.reducer;
