// import React, { useEffect, useState } from 'react';
// import './Market.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import Cart from './Cart';
// import tractor from '../Pictures/1.webp';
// import harvester from '../Pictures/2.jpeg';
// import plough from '../Pictures/3.jpeg';
// import seeder from '../Pictures/4.jpeg';
// import spreader from '../Pictures/5.webp';
// import rotavator from '../Pictures/6.webp';
// import trailer from '../Pictures/7.webp';
// import combine from '../Pictures/8.webp';
// import sprayer from '../Pictures/9.webp';
// import seederFertilizer from '../Pictures/10.webp';
// import mower from '../Pictures/11.webp';
// import tiller from '../Pictures/12.webp';
// import baler from '../Pictures/13.webp';
// import cultivator from '../Pictures/14.webp';
// import boomSprayer from '../Pictures/15.webp';
// import rowSeeder from '../Pictures/16.webp';
// import flatbedTrailer from '../Pictures/17.webp';
// import manureSpreader from '../Pictures/18.webp';
// import heavyDutyRotavator from '../Pictures/19.webp';
// import selfPropelledHarvester from '../Pictures/20.webp';
// import flatbedTrailer1 from '../Pictures/21.webp';
// import manureSpreader1 from '../Pictures/22.webp';
// import heavyDutyRotavator1 from '../Pictures/23.webp';
// import selfPropelledHarvester1 from '../Pictures/24.webp';

// const staticMarketData = [
//   {
//     "commodity": "Wheat",
//     "market": "Delhi",
//     "price_min": 1800,
//     "price_max": 2000,
//     "price_avg": 1900,
//     "date": "2024-10-28", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuc1EEYvIQKkJetgbgNprmdE4w4STLdLnFkw&s"
//   },
//   {
//     "commodity": "Rice",
//     "market": "Mumbai",
//     "price_min": 3000,
//     "price_max": 3200,
//     "price_avg": 3100,
//     "date": "2024-10-28",
//     "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt10iTXbL5JUXISkIpTGCQSzhdqsExkK4BcA&s"
//   },
//   {
//     "commodity": "Lentils",
//     "market": "Kolkata",
//     "price_min": 7000,
//     "price_max": 7500,
//     "price_avg": 7250,
//     "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcXeEUhDswz2e7WVeH6O4m5lNVoFAdQqI7w&s",
//     "date": "2024-10-28"
//   },
//   {
//     "commodity": "Chickpeas",
//     "market": "Chennai",
//     "price_min": 5000,
//     "price_max": 5500,
//     "price_avg": 5250,
//     "date": "2024-10-28",
//     "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxucybRJHnj6f_E-GJk27RKKx8R9_zCawKQ&s"
//   },
//   {
//     "commodity": "Soybean",
//     "market": "Pune",
//     "price_min": 3500,
//     "price_max": 4000,
//     "price_avg": 3750,
//     "date": "2024-10-28"
//   },
//   {
//     "commodity": "Mustard",
//     "market": "Jaipur",
//     "price_min": 4600,
//     "price_max": 5000,
//     "price_avg": 4800,
//     "date": "2024-10-28"
//   },
//   {
//     "commodity": "Maize",
//     "market": "Hyderabad",
//     "price_min": 1500,
//     "price_max": 1700,
//     "price_avg": 1600,
//     "date": "2024-10-28"
//   },
//   {
//     "commodity": "Green Gram",
//     "market": "Ahmedabad",
//     "price_min": 8000,
//     "price_max": 8500,
//     "price_avg": 8250,
//     "date": "2024-10-28"
//   },
//   {
//     "commodity": "Pigeon Peas",
//     "market": "Bangalore",
//     "price_min": 6200,
//     "price_max": 6700,
//     "price_avg": 6450,
//     "date": "2024-10-28"
//   },
//   {
//     "commodity": "Barley",
//     "market": "Lucknow",
//     "price_min": 1200,
//     "price_max": 1400,
//     "price_avg": 1300,
//     "date": "2024-10-28"
//   }
// ]

// // Mapping images to identifiers
// const imageMap = {
//   tractor: tractor,
//   harvester: harvester,
//   plough: plough,
//   seeder: seeder,
//   spreader: spreader,
//   rotavator: rotavator,
//   trailer: trailer,
//   combine: combine,
//   sprayer: sprayer,
//   seederFertilizer: seederFertilizer,
//   mower: mower,
//   tiller: tiller,
//   baler: baler,
//   cultivator: cultivator,
//   boomSprayer: boomSprayer,
//   rowSeeder: rowSeeder,
//   flatbedTrailer: flatbedTrailer,
//   manureSpreader: manureSpreader,
//   heavyDutyRotavator: heavyDutyRotavator,
//   selfPropelledHarvester: selfPropelledHarvester,
//   flatbedTrailer1: flatbedTrailer1,
//   manureSpreader1: manureSpreader1,
//   heavyDutyRotavator1: heavyDutyRotavator1,
//   selfPropelledHarvester1: selfPropelledHarvester1,
// };

// const ITEMS_PER_PAGE = 10;

// // Function to call the Data.gov.in API
// const getAllMarketdata = async () => {
//   const API_KEY = 'YOUR_API_KEY'; // Replace with your Data.gov.in API key
//   const url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Failed to fetch market data');
//     }
//     const data = await response.json();

//     // Mapping the API response to fit the data structure you need
//     const marketData = data.records.map(item => ({
//       id: item.commodity_id, // Adjust field names as per API response
//       name: item.commodity,
//       year: item.date, // Adjust field names as per API response
//       price: item.modal_price, // Adjust field names as per API response
//       image: 'tractor', // Adjust this to map images properly
//     }));

//     return marketData;
//   } catch (error) {
//     console.error('API Error:', error);
//     throw error;
//   }
// };

// const Market = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cart, setCart] = useState([]);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [MarketData, setMarketData] = useState([]);

//   // Pagination controls
  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handlePreviousPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // // Cart management
  // const handleAddToCart = (item) => {
  //   const existingItem = cart.find(cartItem => cartItem.id === item.id);
  //   if (existingItem) {
  //     setCart(cart.map(cartItem =>
  //       cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
  //     ));
  //   } else {
  //     setCart([...cart, { ...item, quantity: 1 }]);
  //   }
  // };

  // const handleAddQuantity = (itemId) => {
  //   setCart(cart.map(item =>
  //     item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
  //   ));
  // };

  // const handleRemoveQuantity = (itemId) => {
  //   setCart(cart.map(item =>
  //     item.id === itemId ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
  //   ));
  // };

  // const handleRemoveFromCart = (itemId) => {
  //   setCart(cart.filter(item => item.id !== itemId));
  // };

//   // Fetch market data from Data.gov.in API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getAllMarketdata();
//         setMarketData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Search and pagination logic
//   const filteredItems = MarketData ? MarketData : staticMarketData.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentPageItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   return (
//     <div className="market-container">
//       <div className="search-bar">
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Search Your Item"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <FontAwesomeIcon icon={faSearch} className="search-icon" />
//       </div>

//       <div className="cart-icon" onClick={() => setCartOpen(!cartOpen)}>
//         <FontAwesomeIcon icon={faShoppingCart} />
//         <span className="cart-count">{cart.length}</span>
//       </div>

//       {cartOpen && cart.length > 0 && (
//         <Cart
//           cartItems={cart}
//           handleAddQuantity={handleAddQuantity}
//           handleRemoveQuantity={handleRemoveQuantity}
//           handleRemoveFromCart={handleRemoveFromCart}
//         />
//       )}

//       <div className="market-item-grid">
//         {staticMarketData.map(item => (
//           <div key={item.id} className="market-item">
//             <img src={item.image} alt={item.commodity} />
//             <div className="item-price-section">
//               <div>
//                 <h3 className="item-name">{item.commodity}</h3>
//                 <p className="item-year">Year: {item.date}</p>
//               </div>
//               <div>
//                 <button className="item-price"> ₹{item.price_avg.toLocaleString()}</button>
//               </div>
//             </div>
//             <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="pagination">
//         <button className="page-button" onClick={handlePreviousPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span>Page {currentPage} of {totalPages}</span>
//         <button className="page-button" onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Market;
import React, { useEffect, useState } from 'react';
import './Market.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';
import tractor from '../Pictures/1.webp';
import harvester from '../Pictures/2.jpeg';
import plough from '../Pictures/3.jpeg';
import seeder from '../Pictures/4.jpeg';
import spreader from '../Pictures/5.webp';
import rotavator from '../Pictures/6.webp';
import trailer from '../Pictures/7.webp';
import combine from '../Pictures/8.webp';
import sprayer from '../Pictures/9.webp';
import seederFertilizer from '../Pictures/10.webp';
import mower from '../Pictures/11.webp';
import tiller from '../Pictures/12.webp';
import baler from '../Pictures/13.webp';
import cultivator from '../Pictures/14.webp';
import boomSprayer from '../Pictures/15.webp';
import rowSeeder from '../Pictures/16.webp';
import flatbedTrailer from '../Pictures/17.webp';
import manureSpreader from '../Pictures/18.webp';
import heavyDutyRotavator from '../Pictures/19.webp';
import selfPropelledHarvester from '../Pictures/20.webp';
import flatbedTrailer1 from '../Pictures/21.webp';
import manureSpreader1 from '../Pictures/22.webp';
import heavyDutyRotavator1 from '../Pictures/23.webp';
import selfPropelledHarvester1 from '../Pictures/24.webp';

const staticMarketData = [
  {
    "commodity": "Wheat",
    "market": "Delhi",
    "price_min": 1800,
    "price_max": 2000,
    "price_avg": 1900,
    "date": "2024-10-28", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuc1EEYvIQKkJetgbgNprmdE4w4STLdLnFkw&s"
  },
  {
    "commodity": "Rice",
    "market": "Mumbai",
    "price_min": 3000,
    "price_max": 3200,
    "price_avg": 3100,
    "date": "2024-10-28",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt10iTXbL5JUXISkIpTGCQSzhdqsExkK4BcA&s"
  },
  {
    "commodity": "Lentils",
    "market": "Kolkata",
    "price_min": 7000,
    "price_max": 7500,
    "price_avg": 7250,
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcXeEUhDswz2e7WVeH6O4m5lNVoFAdQqI7w&s",
    "date": "2024-10-28"
  },
  {
    "commodity": "Chickpeas",
    "market": "Chennai",
    "price_min": 5000,
    "price_max": 5500,
    "price_avg": 5250,
    "date": "2024-10-28",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxucybRJHnj6f_E-GJk27RKKx8R9_zCawKQ&s"
  },
  {
    "commodity": "Soybean",
    "market": "Pune",
    "price_min": 3500,
    "price_max": 4000,
    "price_avg": 3750,
    "date": "2024-10-28"
  },
  {
    "commodity": "Mustard",
    "market": "Jaipur",
    "price_min": 4600,
    "price_max": 5000,
    "price_avg": 4800,
    "date": "2024-10-28"
  },
  {
    "commodity": "Maize",
    "market": "Hyderabad",
    "price_min": 1500,
    "price_max": 1700,
    "price_avg": 1600,
    "date": "2024-10-28"
  },
  {
    "commodity": "Green Gram",
    "market": "Ahmedabad",
    "price_min": 8000,
    "price_max": 8500,
    "price_avg": 8250,
    "date": "2024-10-28"
  },
  {
    "commodity": "Pigeon Peas",
    "market": "Bangalore",
    "price_min": 6200,
    "price_max": 6700,
    "price_avg": 6450,
    "date": "2024-10-28"
  },
  {
    "commodity": "Barley",
    "market": "Lucknow",
    "price_min": 1200,
    "price_max": 1400,
    "price_avg": 1300,
    "date": "2024-10-28"
  }
]

// Mapping images to identifiers
const imageMap = {
  tractor: tractor,
  harvester: harvester,
  plough: plough,
  seeder: seeder,
  spreader: spreader,
  rotavator: rotavator,
  trailer: trailer,
  combine: combine,
  sprayer: sprayer,
  seederFertilizer: seederFertilizer,
  mower: mower,
  tiller: tiller,
  baler: baler,
  cultivator: cultivator,
  boomSprayer: boomSprayer,
  rowSeeder: rowSeeder,
  flatbedTrailer: flatbedTrailer,
  manureSpreader: manureSpreader,
  heavyDutyRotavator: heavyDutyRotavator,
  selfPropelledHarvester: selfPropelledHarvester,
  flatbedTrailer1: flatbedTrailer1,
  manureSpreader1: manureSpreader1,
  heavyDutyRotavator1: heavyDutyRotavator1,
  selfPropelledHarvester1: selfPropelledHarvester1,
};
const Market = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [MarketData, setMarketData] = useState([]);
  const [deliveryCharge] = useState(100); // Fixed delivery charge
  const [successMessage, setSuccessMessage] = useState('');
  // Calculate total price including delivery charge
  const calculateTotal = () => {
    const totalPrice = cart.reduce((total, item) => total + (item.price_avg * item.quantity), 0);
    return totalPrice + deliveryCharge;
  };

  // Handle payment
  const handlePayment = () => {
    // Display success message
    setSuccessMessage('Payment Successful! Thank you for your purchase.');
    // Reset the cart if needed
    setCart([]);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Cart management
  const handleAddToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleAddQuantity = (itemId) => {
    setCart(cart.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleRemoveQuantity = (itemId) => {
    setCart(cart.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
    ));
  };

  const handleRemoveFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  // (your existing pagination and cart management logic)
  const totalPages = Math.ceil(staticMarketData.length / 10);

  return (
    <div className="market-container">
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search Your Item"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>

      <div className="cart-icon" onClick={() => setCartOpen(!cartOpen)}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-count">{cart.length}</span>
      </div>

      {cartOpen && cart.length > 0 && (
        <Cart
          cartItems={cart}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      )}

      <div className="market-item-grid">
        {staticMarketData.map(item => (
          <div key={item.id} className="market-item">
            <img src={item.image} alt={item.commodity} />
            <div className="item-price-section">
              <div>
                <h3 className="item-name">{item.commodity}</h3>
                <p className="item-year">Year: {item.date}</p>
              </div>
              <div>
                <button className="item-price"> ₹{item.price_avg.toLocaleString()}</button>
              </div>
            </div>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p>Total Amount: ₹{calculateTotal().toLocaleString()}</p>
          <p>Delivery Charge: ₹{deliveryCharge}</p>
          <button className="pay-button" onClick={handlePayment}>Pay</button>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      )}

      <div className="pagination">
        <button className="page-button" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button className="page-button" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Market;
