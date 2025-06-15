
// // // // import React from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import './rooms.css';

// // // // const roomslist = [
// // // //   {
// // // //     title: 'Ada Double Queen',
// // // //     description: 'Spacious suite with city view',
// // // //     price: '$303.8',
// // // //     image: '../src/assets/images/bookingdetails/room 1.png',
// // // //   },
// // // //   {
// // // //     title: 'King Suite',
// // // //     description: 'Spacious suite with city view',
// // // //     price: '$399.21',
// // // //     image: '../src/assets/images/bookingdetails/room 2.png',
// // // //   },
// // // //   {
// // // //     title: 'Double Queen',
// // // //     description: 'Spacious suite with city view',
// // // //     price: '$419.18',
// // // //     image: '../src/assets/images/bookingdetails/room 3.png',
// // // //   },
// // // //   {
// // // //     title: 'Ada Double Queen',
// // // //     description: 'Spacious suite with city view',
// // // //     price: '$299.9',
// // // //     image: '../src/assets/images/bookingdetails/room 4.png',
// // // //   },
// // // // ];

// // // // function Rooms() {
// // // //   const navigate = useNavigate();

// // // //   const handleNextClick = () => {
// // // //     navigate('/booking-details');
// // // //   };

// // // //   const handleHomeClick = () => {
// // // //     navigate('/');
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <div className="rooms-background">
// // // //         <div className="booking-page">
// // // //           <header className="header">
// // // //             <div className="icon-title">
// // // //               <img
// // // //                 src="../src/assets/images/bookingdetails/home.png"
// // // //                 alt="home"
// // // //                 style={{ cursor: 'pointer' }}
// // // //                 onClick={handleHomeClick}
// // // //               />
// // // //               <span>Booking details</span>
// // // //             </div>
// // // //             <div>
// // // //               <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
// // // //             </div>
// // // //           </header>

// // // //           <section className="room-type-section">
// // // //             <h2>Type of Rooms</h2>
// // // //             <div className="filters">
// // // //               <button className="active">All</button>
// // // //               <button>Occupancy</button>
// // // //               <button>Size</button>
// // // //               <button>Layout</button>
// // // //             </div>
// // // //           </section>
// // // //         </div>

// // // //         <section className="available-suits">
// // // //           <h3>Available Suits</h3>
// // // //           <div className="room-grid">
// // // //             {roomslist.map((room, idx) => (
// // // //               <div className="room-card" key={idx}>
// // // //                 <img src={room.image} alt={room.title} className="room-img" />
// // // //                 <div className="room-info">
// // // //                   <h4>{room.title}</h4>
// // // //                   <p>{room.description}</p>
// // // //                   <div className="room-footer">
// // // //                     <span className="price">{room.price}</span>
// // // //                     <img className="icon" src="../src/assets/images/bookingdetails/info.png" alt="info" />
// // // //                     <img
// // // //                       src="../src/assets/images/bookingdetails/next.png"
// // // //                       alt="next"
// // // //                       style={{ cursor: 'pointer' }}
// // // //                       onClick={handleNextClick}
// // // //                     />
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </section>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // // export default Rooms;


// // // import React, { useEffect, useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import axios from 'axios';
// // // import './rooms.css';

// // // // Replace with your actual API key and base URL
// // // const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw";
// // // const BASE_API_URL =  "https://kiotel-backend-middleware.onrender.com/api/v1.1"; // Replace this

// // // function Rooms() {
// // //   const navigate = useNavigate();
// // //   const [availableRooms, setAvailableRooms] = useState([]);
// // //   const [loading, setLoading] = useState(false);

// // //   // Get session values
// // //   const checkInDate = sessionStorage.getItem("checkInDate");
// // //   const checkOutDate = sessionStorage.getItem("checkOutDate");
// // //   const numRooms = sessionStorage.getItem("numRooms");
// // //   const numAdults = sessionStorage.getItem("numAdults");
// // //   const numChildren = sessionStorage.getItem("numChildren") || 0;

// // //   const fetchAvailableRooms = async () => {
// // //     setLoading(true);
// // //     setAvailableRooms([]);

// // //     const apiUrl = `${BASE_API_URL}/getAvailableRoomTypes?startDate=${checkInDate}&endDate=${checkOutDate}&rooms=${numRooms}&adults=${numAdults}&children=${numChildren}&detailedRates=true&sort=room_price&order=desc`;

// // //     try {
// // //       const response = await axios.get(apiUrl, {
// // //         headers: {
// // //           accept: "application/json",
// // //           authorization: `Bearer ${API_KEY}`,
// // //           "x-api-key": API_KEY,
// // //         },
// // //       });

// // //       console.log("API response:", response.data); // 👈 Logs the full API response

// // //       if (response.data.success) {
// // //         setAvailableRooms(response.data.data[0]?.propertyRooms || []);
// // //       } else {
// // //         console.warn("No rooms available for the selected dates.");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error fetching rooms:", error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchAvailableRooms();
// // //   }, []);

// // //   const handleNextClick = () => {
// // //     navigate('/booking-details');
// // //   };

// // //   const handleHomeClick = () => {
// // //     navigate('/');
// // //   };

// // //   return (
// // //     <div className="rooms-background">
// // //       <div className="booking-page">
// // //         <header className="header">
// // //           <div className="icon-title">
// // //             <img
// // //               src="../src/assets/images/bookingdetails/home.png"
// // //               alt="home"
// // //               style={{ cursor: 'pointer' }}
// // //               onClick={handleHomeClick}
// // //             />
// // //             <span>Booking details</span>
// // //           </div>
// // //           <div>
// // //             <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
// // //           </div>
// // //         </header>

// // //         <section className="room-type-section">
// // //           <h2>Type of Rooms</h2>
// // //           <div className="filters">
// // //             <button className="active">All</button>
// // //             <button>Occupancy</button>
// // //             <button>Size</button>
// // //             <button>Layout</button>
// // //           </div>
// // //         </section>
// // //       </div>

// // //       <section className="available-suits">
// // //         <h3>Available Suits</h3>
// // //         {loading ? (
// // //           <p>Loading rooms...</p>
// // //         ) : (
// // //           <div className="room-grid">
// // //             {availableRooms.length > 0 ? (
// // //               availableRooms.map((room, idx) => (
// // //                 <div className="room-card" key={idx}>
// // //                   <img
// // //                     src={room.imageUrl || '../src/assets/images/bookingdetails/default-room.png'}
// // //                     alt={room.name}
// // //                     className="room-img"
// // //                   />
// // //                   <div className="room-info">
// // //                     <h4>{room.name}</h4>
// // //                     <p>{room.description || 'No description available'}</p>
// // //                     <div className="room-footer">
// // //                       <span className="price">${room.price || 'N/A'}</span>
// // //                       <img className="icon" src="../src/assets/images/bookingdetails/info.png" alt="info" />
// // //                       <img
// // //                         src="../src/assets/images/bookingdetails/next.png"
// // //                         alt="next"
// // //                         style={{ cursor: 'pointer' }}
// // //                         onClick={handleNextClick}
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))
// // //             ) : (
// // //               <p>No rooms available</p>
// // //             )}
// // //           </div>
// // //         )}
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // // export default Rooms;



// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import './rooms.css';

// // const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw";
// // const BASE_API_URL = "https://kiotel-backend-middleware.onrender.com/api/v1.1";

// // function Rooms() {
// //   const navigate = useNavigate();
// //   const [availableRooms, setAvailableRooms] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   const checkInDate = sessionStorage.getItem("checkInDate");
// //   const checkOutDate = sessionStorage.getItem("checkOutDate");
// //   const numRooms = sessionStorage.getItem("numRooms");
// //   const numAdults = sessionStorage.getItem("numAdults");
// //   const numChildren = sessionStorage.getItem("numChildren") || 0;

// //   const fetchAvailableRooms = async () => {
// //     setLoading(true);
// //     setAvailableRooms([]);

// //     const apiUrl = `${BASE_API_URL}/getAvailableRoomTypes?startDate=${checkInDate}&endDate=${checkOutDate}&rooms=${numRooms}&adults=${numAdults}&children=${numChildren}&detailedRates=true&sort=room_price&order=desc`;

// //     try {
// //       const response = await axios.get(apiUrl, {
// //         headers: {
// //           accept: "application/json",
// //           authorization: `Bearer ${API_KEY}`,
// //           "x-api-key": API_KEY,
// //         },
// //       });

// //       if (response.data.success) {
// //         setAvailableRooms(response.data.data[0]?.propertyRooms || []);
// //       } else {
// //         console.warn("No rooms available for the selected dates.");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching rooms:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchAvailableRooms();
// //   }, []);

// //   const handleNextClick = () => {
// //     navigate('/booking-details');
// //   };

// //   const handleHomeClick = () => {
// //     navigate('/');
// //   };

// //   return (
// //     <div className="rooms-background">
// //       <div className="booking-page">
// //         <header className="header">
// //           <div className="icon-title">
// //             <img
// //               src="../src/assets/images/bookingdetails/home.png"
// //               alt="home"
// //               style={{ cursor: 'pointer' }}
// //               onClick={handleHomeClick}
// //             />
// //             <span>Booking details</span>
// //           </div>
// //           <div>
// //             <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
// //           </div>
// //         </header>

// //         <section className="room-type-section">
// //           <h2>Type of Rooms</h2>
// //           <div className="filters">
// //             <button className="active">All</button>
// //             <button>Occupancy</button>
// //             <button>Size</button>
// //             <button>Layout</button>
// //           </div>
// //         </section>
// //       </div>

// //       <section className="available-suits">
// //         <h3>Available Rooms</h3>
// //         {loading ? (
// //           <p>Loading rooms...</p>
// //         ) : (
// //           <div className="room-grid">
// //             {availableRooms.length > 0 ? (
// //               availableRooms.map((room, idx) => (
// //                 <div className="room-card" key={idx}>
// //                   <div className="room-images">
// //                     {room.roomTypePhotos && room.roomTypePhotos.length > 0 ? (
// //                       room.roomTypePhotos.map((photo, i) => (
// //                         <img
// //                           key={i}
// //                           src={photo.image}
// //                           alt={`room-${idx}-img-${i}`}
// //                           className="room-img"
// //                         />
// //                       ))
// //                     ) : (
// //                       <img
// //                         src="../src/assets/images/bookingdetails/default-room.png"
// //                         alt="default room"
// //                         className="room-img"
// //                       />
// //                     )}
// //                   </div>
// //                   <div className="room-info">
// //                     <h4>{room.roomTypeName}</h4>
// //                     <p>{room.roomTypeDescription || 'No description available'}</p>
// //                     <p><strong>Features:</strong> {room.roomTypeFeatures?.join(', ') || 'None listed'}</p>
// //                     <div className="room-footer">
// //                       <span className="price">
// //                         ${room.roomRate || room.roomRateDetailed?.[0]?.rate || 'N/A'}
// //                       </span>
// //                       <img className="icon" src="../src/assets/images/bookingdetails/info.png" alt="info" />
// //                       <img
// //                         src="../src/assets/images/bookingdetails/next.png"
// //                         alt="next"
// //                         style={{ cursor: 'pointer' }}
// //                         onClick={handleNextClick}
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))
// //             ) : (
// //               <p>No rooms available</p>
// //             )}
// //           </div>
// //         )}
// //       </section>
// //     </div>
// //   );
// // }

// // export default Rooms;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './rooms.css';

// const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw";
// const BASE_API_URL = "https://kiotel-backend-middleware.onrender.com/api/v1.1";

// function Rooms() {
//   const navigate = useNavigate();
//   const [availableRooms, setAvailableRooms] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const checkInDate = sessionStorage.getItem("checkInDate");
//   const checkOutDate = sessionStorage.getItem("checkOutDate");
//   const numRooms = sessionStorage.getItem("numRooms");
//   const numAdults = sessionStorage.getItem("numAdults");
//   const numChildren = sessionStorage.getItem("numChildren") || 0;

//   const fetchAvailableRooms = async () => {
//     setLoading(true);
//     setAvailableRooms([]);

//     const apiUrl = `${BASE_API_URL}/getAvailableRoomTypes?startDate=${checkInDate}&endDate=${checkOutDate}&rooms=${numRooms}&adults=${numAdults}&children=${numChildren}&detailedRates=true&sort=room_price&order=desc`;

//     try {
//       const response = await axios.get(apiUrl, {
//         headers: {
//           accept: "application/json",
//           authorization: `Bearer ${API_KEY}`,
//           "x-api-key": API_KEY,
//         },
//       });

//       if (response.data.success) {
//         setAvailableRooms(response.data.data[0]?.propertyRooms || []);
//       } else {
//         console.warn("No rooms available for the selected dates.");
//       }
//     } catch (error) {
//       console.error("Error fetching rooms:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAvailableRooms();
//   }, []);

//   const handleNextClick = () => {
//     navigate('/booking-details');
//   };

//   const handleHomeClick = () => {
//     navigate('/');
//   };

//   return (
//     <div className="rooms-background">
//       <div className="booking-page">
//         <header className="header">
//           <div className="icon-title">
//             <img
//               src="../src/assets/images/bookingdetails/home.png"
//               alt="home"
//               style={{ cursor: 'pointer' }}
//               onClick={handleHomeClick}
//             />
//             <span>Booking details</span>
//           </div>
//           <div>
//             <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
//           </div>
//         </header>

//         <section className="room-type-section">
//           <h2>Type of Rooms</h2>
//           <div className="filters">
//             <button className="active">All</button>
//             <button>Occupancy</button>
//             <button>Size</button>
//             <button>Layout</button>
//           </div>
//         </section>
//       </div>

//       <section className="available-suits">
//         <h3>Available Rooms</h3>
//         {loading ? (
//           <p>Loading rooms...</p>
//         ) : (
//           <div className="room-grid">
//             {availableRooms.length > 0 ? (
//               availableRooms.map((room, idx) => (
//                 <div className="room-card" key={idx}>
//                   <div className="room-images">
//                     {room.roomTypePhotos && room.roomTypePhotos.length > 0 ? (
//                       <img
//                         src={room.roomTypePhotos[0].image}
//                         alt={`room-${idx}-img`}
//                         className="room-img"
//                       />
//                     ) : (
//                       <img
//                         src="../src/assets/images/bookingdetails/default-room.png"
//                         alt="default room"
//                         className="room-img"
//                       />
//                     )}
//                   </div>
//                   <div className="room-info">
//                     <h4>{room.roomTypeName}</h4>
//                     <p>{room.roomTypeDescription || 'No description available'}</p>
//                     <p><strong>Features:</strong> {room.roomTypeFeatures?.join(', ') || 'None listed'}</p>
//                     <div className="room-footer">
//                       <span className="price">
//                         ${room.roomRate || room.roomRateDetailed?.[0]?.rate || 'N/A'}
//                       </span>
//                       <img className="icon" src="../src/assets/images/bookingdetails/info.png" alt="info" />
//                       <img
//                         src="../src/assets/images/bookingdetails/next.png"
//                         alt="next"
//                         style={{ cursor: 'pointer' }}
//                         onClick={handleNextClick}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No rooms available</p>
//             )}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// export default Rooms;





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './rooms.css';

// const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw";
// const BASE_API_URL = "https://kiotel-backend-middleware.onrender.com/api/v1.1";

// function Rooms() {
//   const navigate = useNavigate();
//   const [availableRooms, setAvailableRooms] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const checkInDate = sessionStorage.getItem("checkInDate");
//   const checkOutDate = sessionStorage.getItem("checkOutDate");
//   const numRooms = sessionStorage.getItem("numRooms");
//   const numAdults = sessionStorage.getItem("numAdults");
//   const numChildren = sessionStorage.getItem("numChildren") || 0;

//   const fetchAvailableRooms = async () => {
//     setLoading(true);
//     setAvailableRooms([]);

//     const apiUrl = `${BASE_API_URL}/getAvailableRoomTypes?startDate=${checkInDate}&endDate=${checkOutDate}&rooms=${numRooms}&adults=${numAdults}&children=${numChildren}&detailedRates=true&sort=room_price&order=desc`;

//     try {
//       const response = await axios.get(apiUrl, {
//         headers: {
//           accept: "application/json",
//           authorization: `Bearer ${API_KEY}`,
//           "x-api-key": API_KEY,
//         },
//       });

//       if (response.data.success) {
//         setAvailableRooms(response.data.data[0]?.propertyRooms || []);
//       } else {
//         console.warn("No rooms available for the selected dates.");
//       }
//     } catch (error) {
//       console.error("Error fetching rooms:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAvailableRooms();
//   }, []);

//   const handleNextClick = () => {
//     navigate('/booking-details');
//   };

//   const handleHomeClick = () => {
//     navigate('/');
//   };

//   return (
//     <div className="rooms-background">
//       <div className="booking-page">
//         <header className="header">
//           <div className="icon-title">
//             <img
//               src="../src/assets/images/bookingdetails/home.png"
//               alt="home"
//               style={{ cursor: 'pointer' }}
//               onClick={handleHomeClick}
//             />
//             <span>Booking details</span>
//           </div>
//           <div>
//             <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
//           </div>
//         </header>

//         <section className="room-type-section">
//           <h2>Type of Rooms</h2>
//           <div className="filters">
//             <button className="active">All</button>
//             <button>Occupancy</button>
//             <button>Size</button>
//             <button>Layout</button>
//           </div>
//         </section>
//       </div>

//       <section className="available-suits">
//         <h3>Available Rooms</h3>
//         {loading ? (
//           <p>Loading rooms...</p>
//         ) : (
//           <div className="room-grid">
//             {availableRooms.length > 0 ? (
//               availableRooms.map((room, idx) => (
//                 <div className="room-card" key={idx}>
//                   <div className="room-images">
//                     {room.roomTypePhotos && room.roomTypePhotos.length > 0 ? (
//                       <img
//                         src={room.roomTypePhotos[0].image}
//                         alt={`room-${idx}-img`}
//                         className="room-img"
//                       />
//                     ) : (
//                       <img
//                         src="../src/assets/images/bookingdetails/default-room.png"
//                         alt="default room"
//                         className="room-img"
//                       />
//                     )}
//                   </div>
//                   <div className="room-info">
//                     <h4>{room.roomTypeName}</h4>
//                     <p>{room.roomTypeDescription || 'No description available'}</p>
//                     {/* <p><strong>Features:</strong> {room.roomTypeFeatures?.join(', ') || 'None listed'}</p> */}
//                     <div className="room-footer">
//                       <span className="price">
//                         ${room.roomRate || room.roomRateDetailed?.[0]?.rate || 'N/A'}
//                       </span>
//                       <img className="icon" src="../src/assets/images/bookingdetails/info.png" alt="info" />
//                       <img
//                         src="../src/assets/images/bookingdetails/next.png"
//                         alt="next"
//                         style={{ cursor: 'pointer' }}
//                         onClick={handleNextClick}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No rooms available</p>
//             )}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// export default Rooms;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './rooms.css';

// const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw";
// const BASE_API_URL = "https://kiotel-backend-middleware.onrender.com/api/v1.1";

// function Rooms() {
//   const navigate = useNavigate();
//   const [availableRooms, setAvailableRooms] = useState([]);
//   const [filteredRooms, setFilteredRooms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [activeFilter, setActiveFilter] = useState("All");

//   const checkInDate = sessionStorage.getItem("checkInDate");
//   const checkOutDate = sessionStorage.getItem("checkOutDate");
//   const numRooms = sessionStorage.getItem("numRooms");
//   const numAdults = sessionStorage.getItem("numAdults");
//   const numChildren = sessionStorage.getItem("numChildren") || 0;

//   const fetchAvailableRooms = async () => {
//     setLoading(true);
//     setAvailableRooms([]);
//     const apiUrl = `${BASE_API_URL}/getAvailableRoomTypes?startDate=${checkInDate}&endDate=${checkOutDate}&rooms=${numRooms}&adults=${numAdults}&children=${numChildren}&detailedRates=true&sort=room_price&order=desc`;

//     try {
//       const response = await axios.get(apiUrl, {
//         headers: {
//           accept: "application/json",
//           authorization: `Bearer ${API_KEY}`,
//           "x-api-key": API_KEY,
//         },
//       });

//       if (response.data.success) {
//         const rooms = response.data.data[0]?.propertyRooms || [];
//         setAvailableRooms(rooms);
//         setFilteredRooms(rooms);
//       } else {
//         console.warn("No rooms available for the selected dates.");
//       }
//     } catch (error) {
//       console.error("Error fetching rooms:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAvailableRooms();
//   }, []);

//   const handleFilter = (filterType) => {
//     setActiveFilter(filterType);

//     if (filterType === "All") {
//       setFilteredRooms(availableRooms);
//     } else if (filterType === "Occupancy") {
//       setFilteredRooms(availableRooms.filter(room => parseInt(room.maxGuests) >= 2));
//     } else if (filterType === "Size") {
//       // Assume "Deluxe King" is larger than "Deluxe Queen"
//       setFilteredRooms(availableRooms.filter(room => room.roomTypeName.includes("King")));
//     } else if (filterType === "Layout") {
//       // Assume layout is determined by bed type in name
//       setFilteredRooms(availableRooms.filter(room =>
//         room.roomTypeName.includes("Queen") || room.roomTypeName.includes("King")
//       ));
//     }
//   };

//   const handleNextClick = () => {
//     navigate('/booking-details');
//   };

//   const handleHomeClick = () => {
//     navigate('/');
//   };

//   return (
//     <div className="rooms-background">
//       <div className="booking-page">
//         <header className="header">
//           <div className="icon-title">
//             <img
//               src="../src/assets/images/bookingdetails/home.png"
//               alt="home"
//               style={{ cursor: 'pointer' }}
//               onClick={handleHomeClick}
//             />
//             <span>Booking details</span>
//           </div>
//           <div>
//             <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
//           </div>
//         </header>

//         <section className="room-type-section">
//           <h2>Type of Rooms</h2>
//           <div className="filters">
//             {["All", "Occupancy", "Size", "Layout"].map(filter => (
//               <button
//                 key={filter}
//                 className={activeFilter === filter ? "active" : ""}
//                 onClick={() => handleFilter(filter)}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </section>
//       </div>

//       <section className="available-suits">
//         <h3>Available Rooms</h3>
//         {loading ? (
//           <p>Loading rooms...</p>
//         ) : (
//           <div className="room-grid">
//             {filteredRooms.length > 0 ? (
//               filteredRooms.map((room, idx) => (
//                 <div className="room-card" key={idx}>
//                   <div className="room-images">
//                     {room.roomTypePhotos?.[0]?.image ? (
//                       <img
//                         src={room.roomTypePhotos[0].image}
//                         alt={`room-${idx}-img`}
//                         className="room-img"
//                       />
//                     ) : (
//                       <img
//                         src="../src/assets/images/bookingdetails/default-room.png"
//                         alt="default room"
//                         className="room-img"
//                       />
//                     )}
//                   </div>
//                   <div className="room-info">
//                     <h4>{room.roomTypeName}</h4>
//                     <p>{room.roomTypeDescription || 'No description available'}</p>
//                     <div className="room-footer">
//                       <span className="price">
//                         ${room.roomRate || room.roomRateDetailed?.[0]?.rate || 'N/A'}
//                       </span>
//                       <img className="icon" src="../src/assets/images/bookingdetails/info.png" alt="info" />
//                       <img
//                         src="../src/assets/images/bookingdetails/next.png"
//                         alt="next"
//                         style={{ cursor: 'pointer' }}
//                         onClick={handleNextClick}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No rooms match the selected filter.</p>
//             )}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// export default Rooms;






// import React, { useEffect, useState } from 'react'; 
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './rooms.css';

// const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw";
// const BASE_API_URL = "https://kiotel-backend-middleware.onrender.com/api/v1.1";

// function Rooms() {
//   const navigate = useNavigate();
//   const [availableRooms, setAvailableRooms] = useState([]);
//   const [filteredRooms, setFilteredRooms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [activeFilter, setActiveFilter] = useState("All");

//   const checkInDate = sessionStorage.getItem("checkInDate");
//   const checkOutDate = sessionStorage.getItem("checkOutDate");
//   const numRooms = sessionStorage.getItem("numRooms");
//   const numAdults = sessionStorage.getItem("numAdults");
//   const numChildren = sessionStorage.getItem("numChildren") || 0;

//   const fetchAvailableRooms = async () => {
//     setLoading(true);
//     setAvailableRooms([]);
//     const apiUrl = `${BASE_API_URL}/getAvailableRoomTypes?startDate=${checkInDate}&endDate=${checkOutDate}&rooms=${numRooms}&adults=${numAdults}&children=${numChildren}&detailedRates=true&sort=room_price&order=desc`;

//     try {
//       const response = await axios.get(apiUrl, {
//         headers: {
//           accept: "application/json",
//           authorization: `Bearer ${API_KEY}`,
//           "x-api-key": API_KEY,
//         },
//       });

//       if (response.data.success) {
//         const rooms = response.data.data[0]?.propertyRooms || [];
//         setAvailableRooms(rooms);
//         setFilteredRooms(rooms);
//       } else {
//         console.warn("No rooms available for the selected dates.");
//       }
//     } catch (error) {
//       console.error("Error fetching rooms:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAvailableRooms();
//   }, []);

//   const handleFilter = (filterType) => {
//     setActiveFilter(filterType);

//     if (filterType === "All") {
//       setFilteredRooms(availableRooms);
//     } else if (filterType === "Occupancy") {
//       setFilteredRooms(availableRooms.filter(room => parseInt(room.maxGuests) >= 2));
//     } else if (filterType === "Size") {
//       // Assume "Deluxe King" is larger than "Deluxe Queen"
//       setFilteredRooms(availableRooms.filter(room => room.roomTypeName.includes("King")));
//     } else if (filterType === "Layout") {
//       // Assume layout is determined by bed type in name
//       setFilteredRooms(availableRooms.filter(room =>
//         room.roomTypeName.includes("Queen") || room.roomTypeName.includes("King")
//       ));
//     }
//   };

//   const handleNextClick = (roomTypeID) => {
//     sessionStorage.setItem("selectedRoomTypeID", roomTypeID);  // Save selected room type ID
//     navigate('/booking-details');
//   };

//   const handleHomeClick = () => {
//     navigate('/');
//   };

//   return (
//     <div className="rooms-background">
//       <div className="booking-page">
//         <header className="header">
//           <div className="icon-title">
//             <img
//               src="../src/assets/images/bookingdetails/home.png"
//               alt="home"
//               style={{ cursor: 'pointer' }}
//               onClick={handleHomeClick}
//             />
//             <span>Booking details</span>
//           </div>
//           <div>
//             <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
//           </div>
//         </header>

//         <section className="room-type-section">
//           <h2>Type of Rooms</h2>
//           <div className="filters">
//             {["All", "Occupancy", "Size", "Layout"].map(filter => (
//               <button
//                 key={filter}
//                 className={activeFilter === filter ? "active" : ""}
//                 onClick={() => handleFilter(filter)}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </section>
//       </div>

//       <section className="available-suits">
//         <h3>Available Rooms</h3>
//         {loading ? (
//           <p>Loading rooms...</p>
//         ) : (
//           <div className="room-grid">
//             {filteredRooms.length > 0 ? (
//               filteredRooms.map((room, idx) => (
//                 <div className="room-card" key={idx}>
//                   <div className="room-images">
//                     {room.roomTypePhotos?.[0]?.image ? (
//                       <img
//                         src={room.roomTypePhotos[0].image}
//                         alt={`room-${idx}-img`}
//                         className="room-img"
//                       />
//                     ) : (
//                       <img
//                         src="../src/assets/images/bookingdetails/default-room.png"
//                         alt="default room"
//                         className="room-img"
//                       />
//                     )}
//                   </div>
//                   <div className="room-info">
//                     <h4>{room.roomTypeName}</h4>
//                     <p>{room.roomTypeDescription || 'No description available'}</p>
//                     <div className="room-footer">
//                       <span className="price">
//                         ${room.roomRate || room.roomRateDetailed?.[0]?.rate || 'N/A'}
//                       </span>
//                       <img className="icon" src="../src/assets/images/bookingdetails/info.png" alt="info" />
//                       <img
//                         src="../src/assets/images/bookingdetails/next.png"
//                         alt="next"
//                         style={{ cursor: 'pointer' }}
//                         onClick={() => handleNextClick(room.roomTypeID)}  
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No rooms match the selected filter.</p>
//             )}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// export default Rooms;


import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './rooms.css';
import Loading from '../../components/Loading/Loading';

const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw";
const BASE_API_URL = "https://kiotel-backend-middleware.onrender.com/api/v1.1";

function Rooms() {
  const navigate = useNavigate();
  const [availableRooms, setAvailableRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const checkInDate = sessionStorage.getItem("checkInDate");
  const checkOutDate = sessionStorage.getItem("checkOutDate");
  const numRooms = sessionStorage.getItem("numRooms");
  const numAdults = sessionStorage.getItem("numAdults");
  const numChildren = sessionStorage.getItem("numChildren") || 0;

  const fetchAvailableRooms = async () => {
    setLoading(true);
    setAvailableRooms([]);
    const apiUrl = `${BASE_API_URL}/getAvailableRoomTypes?startDate=${checkInDate}&endDate=${checkOutDate}&rooms=${numRooms}&adults=${numAdults}&children=${numChildren}&detailedRates=true&sort=room_price&order=desc`;

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${API_KEY}`,
          "x-api-key": API_KEY,
        },
      });

      if (response.data.success) {
        const rooms = response.data.data[0]?.propertyRooms || [];
        setAvailableRooms(rooms);
        setFilteredRooms(rooms);
      } else {
        console.warn("No rooms available for the selected dates.");
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailableRooms();
  }, []);

  const handleFilter = (filterType) => {
    setActiveFilter(filterType);

    if (filterType === "All") {
      setFilteredRooms(availableRooms);
    } else if (filterType === "Occupancy") {
      setFilteredRooms(availableRooms.filter(room => parseInt(room.maxGuests) >= 2));
    } else if (filterType === "Size") {
      setFilteredRooms(availableRooms.filter(room => room.roomTypeName.includes("King")));
    } else if (filterType === "Layout") {
      setFilteredRooms(availableRooms.filter(room =>
        room.roomTypeName.includes("Queen") || room.roomTypeName.includes("King")
      ));
    }
  };

  const handleNextClick = (roomTypeID) => {
    sessionStorage.setItem("selectedRoomTypeID", roomTypeID);
    navigate('/booking-details');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="rooms-background">
      <div className="booking-page">
        <header className="rooms-header">
          <div className="icon-title">
            <img
              src="/assets/images/bookingdetails/home.png"
              alt="home"
              style={{ cursor: 'pointer' }}
              onClick={handleHomeClick}
            />
            <span>Booking Details</span>
          </div>
          <div>
            <img src="/assets/images/bookingdetails/help.png" alt="help" />
          </div>
        </header>

        <section className="room-type-section">
          <h2>Type of Rooms</h2>
          <div className="filters">
            {["All", "Occupancy", "Size", "Layout"].map(filter => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => handleFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>
      </div>

      <section className="available-suits">
        <h3>Available Rooms</h3>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <Loading />
          </div>
        ) : (
          <div className="room-grid">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room, idx) => (
                <div className="room-card" key={idx}>
                  <div className="room-images">
                    {room.roomTypePhotos?.[0]?.image ? (
                      <img
                        src={room.roomTypePhotos[0].image}
                        alt={`room-${idx}-img`}
                        className="room-img"
                      />
                    ) : (
                      <img
                        src="/assets/images/bookingdetails/default-room.png"
                        alt="default room"
                        className="room-img"
                      />
                    )}
                  </div>
                  <div className="room-info">
                    <h4>{room.roomTypeName}</h4>
                    <p>{room.roomTypeDescription || 'No description available'}</p>
                    <div className="room-footer">
                      <span className="price">
                        ${room.roomRate || room.roomRateDetailed?.[0]?.rate || 'N/A'}
                      </span>
                      <img className="icon" src="/assets/images/bookingdetails/info.png" alt="info" />
                      <img
                        src="/assets/images/bookingdetails/next.png"
                        alt="next"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleNextClick(room.roomTypeID)}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No rooms match the selected filter.</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export default Rooms;
