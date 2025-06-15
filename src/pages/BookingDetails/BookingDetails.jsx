
// // // import React from "react";
// // // import { useNavigate } from "react-router-dom"; // import useNavigate
// // // import {
// // //   ChevronRight,
// // //   User,
// // //   Users,
// // //   BedDouble
// // // } from "lucide-react";
// // // import "./BookingDetails.css";

// // // export default function BookingDetails() {
// // //   const navigate = useNavigate(); // initialize navigate

// // //   const handleRateClick = () => {
// // //     navigate("/id-verification");
// // //   };

// // //   const handleHomeClick = () => {
// // //     navigate("/"); // navigate to home on click
// // //   };

// // //   return (
// // //     <div className="bookingdetails-container">
// // //       <header className="bookingdetails-header">
// // //         <div className="bookingdetails-logo-section">
// // //           <div
// // //             className="bookingdetails-home-icon"
// // //             style={{ cursor: "pointer" }}
// // //             onClick={handleHomeClick} // attach click handler here
// // //           >
// // //             <img src="../src/assets/images/bookingdetails/home.png" alt="home" />
// // //           </div>
// // //           <h1 className="bookingdetails-title">Booking details</h1>
// // //         </div>
// // //         <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
// // //       </header>

// // //       <div className="bookingdetails-card">
// // //         <div className="bookingdetails-room-image-container">
// // //           <img
// // //             src="../src/assets/images/bookingdetails/room 1.png"
// // //             alt="Ada Double Queen Room"
// // //             width={600}
// // //             height={400}
// // //             className="bookingdetails-room-image"
// // //           />
// // //         </div>

// // //         <h2 className="bookingdetails-room-title">Ada Double Queen</h2>
// // //         <p className="bookingdetails-room-subtitle">Spacious suite with city view</p>

// // //         <div className="bookingdetails-room-details">
// // //           <div className="bookingdetails-detail-box">
// // //             <p className="bookingdetails-detail-label">Base people</p>
// // //             <div className="bookingdetails-detail-value">
// // //               <User className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
// // //               <span className="bookingdetails-detail-number">2</span>
// // //             </div>
// // //           </div>

// // //           <div className="bookingdetails-detail-box">
// // //             <p className="bookingdetails-detail-label">Max people</p>
// // //             <div className="bookingdetails-detail-value">
// // //               <Users className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
// // //               <span className="bookingdetails-detail-number">4</span>
// // //             </div>
// // //           </div>

// // //           <div className="bookingdetails-detail-box">
// // //             <p className="bookingdetails-detail-label">Bed</p>
// // //             <div className="bookingdetails-detail-value">
// // //               <BedDouble className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
// // //               <span className="bookingdetails-detail-number">2</span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="bookingdetails-rates-section">
// // //           {[
// // //             { name: "Name of rate", price: "$303.8", tax: "$51.83" },
// // //             { name: "Name of rate", price: "$429.9", tax: "$89.12" },
// // //             { name: "Name of rate", price: "$209.8", tax: "$48.23" },
// // //             { name: "Name of rate", price: "$199.3", tax: "$25.68" },
// // //           ].map((rate, index) => (
// // //             <div key={index} className="bookingdetails-rate-item">
// // //               <div className="bookingdetails-rate-info">
// // //                 <p className="bookingdetails-rate-name">{rate.name}</p>
// // //                 <div className="bookingdetails-rate-price-container">
// // //                   <span className="bookingdetails-rate-price">{rate.price}</span>
// // //                   <span className="bookingdetails-rate-tax">TAX {rate.tax}</span>
// // //                 </div>
// // //               </div>
// // //               <button
// // //                 className="bookingdetails-rate-button"
// // //                 onClick={handleRateClick} // navigate on rate button click
// // //               >
// // //                 <ChevronRight color="white" size={45} />
// // //               </button>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import {
// //   ChevronRight,
// //   User,
// //   Users,
// //   BedDouble
// // } from "lucide-react";
// // import "./BookingDetails.css";

// // const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw";
// // const BASE_API_URL = "https://kiotel-backend-middleware.onrender.com/api/v1.1";

// // export default function BookingDetails() {
// //   const navigate = useNavigate();

// //   const [room, setRoom] = useState(null);
// //   const [tax, setTax] = useState(0);
// //   const [rate, setRate] = useState(0);

// //   useEffect(() => {
// //     fetchRoomData();
// //   }, []);

// //   const fetchRoomData = async () => {
// //     const apiUrl = `${BASE_API_URL}/getAvailableRoomTypes?startDate=2025-05-22&endDate=2025-05-23&rooms=1&adults=2&children=0&detailedRates=true&sort=room_price&order=desc`;

// //     try {
// //       const response = await axios.get(apiUrl, {
// //         headers: {
// //           accept: "application/json",
// //           authorization: `Bearer ${API_KEY}`,
// //           "x-api-key": API_KEY
// //         }
// //       });

// //       if (response.data.success) {
// //         const defaultRoom = response.data.data[0]?.propertyRooms[0];
// //         const taxAmount = 15.9; // Use fixed or dynamically from another API if needed

// //         if (defaultRoom) {
// //           setRoom(defaultRoom);
// //           setRate(defaultRoom.roomRate);
// //           setTax(taxAmount);
// //         }
// //       }
// //     } catch (error) {
// //       console.error("Error fetching room data:", error);
// //     }
// //   };

// //   const handleRateClick = () => {
// //     navigate("/id-verification");
// //   };

// //   const handleHomeClick = () => {
// //     navigate("/");
// //   };

// //   if (!room) return null;

// //   return (
// //     <div className="bookingdetails-container">
// //       <header className="bookingdetails-header">
// //         <div className="bookingdetails-logo-section">
// //           <div
// //             className="bookingdetails-home-icon"
// //             style={{ cursor: "pointer" }}
// //             onClick={handleHomeClick}
// //           >
// //             <img src="../src/assets/images/bookingdetails/home.png" alt="home" />
// //           </div>
// //           <h1 className="bookingdetails-title">Booking details</h1>
// //         </div>
// //         <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
// //       </header>

// //       <div className="bookingdetails-card">
// //         <div className="bookingdetails-room-image-container">
// //           <img
// //             src={room.roomTypePhotos[0]?.image}
// //             alt={room.roomTypeName}
// //             width={600}
// //             height={400}
// //             className="bookingdetails-room-image"
// //           />
// //         </div>

// //         <h2 className="bookingdetails-room-title">{room.roomTypeName}</h2>
// //         <p className="bookingdetails-room-subtitle">{room.roomTypeDescription}</p>

// //         <div className="bookingdetails-room-details">
// //           <div className="bookingdetails-detail-box">
// //             <p className="bookingdetails-detail-label">Base people</p>
// //             <div className="bookingdetails-detail-value">
// //               <User className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
// //               <span className="bookingdetails-detail-number">{room.adultsIncluded}</span>
// //             </div>
// //           </div>

// //           <div className="bookingdetails-detail-box">
// //             <p className="bookingdetails-detail-label">Max people</p>
// //             <div className="bookingdetails-detail-value">
// //               <Users className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
// //               <span className="bookingdetails-detail-number">{room.maxGuests}</span>
// //             </div>
// //           </div>

// //           <div className="bookingdetails-detail-box">
// //             <p className="bookingdetails-detail-label">Bed</p>
// //             <div className="bookingdetails-detail-value">
// //               <BedDouble className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
// //               <span className="bookingdetails-detail-number">2</span> {/* adjust if bed count is available in data */}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="bookingdetails-rates-section">
// //           <div className="bookingdetails-rate-item">
// //             <div className="bookingdetails-rate-info">
// //               <p className="bookingdetails-rate-name">{room.ratePlanNamePublic}</p>
// //               <div className="bookingdetails-rate-price-container">
// //                 <span className="bookingdetails-rate-price">${rate.toFixed(2)}</span>
// //                 <span className="bookingdetails-rate-tax">TAX ${tax.toFixed(2)}</span>
// //               </div>
// //             </div>
// //             <button
// //               className="bookingdetails-rate-button"
// //               onClick={handleRateClick}
// //             >
// //               <ChevronRight color="white" size={45} />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import {
//   ChevronRight,
//   User,
//   Users,
//   BedDouble
// } from "lucide-react";
// import "./BookingDetails.css";

// const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw"; // Replace with your actual key
// const BASE_API_URL = "https://kiotel-backend-middleware.onrender.com/api/v1.1";

// export default function BookingDetails() {
//   const navigate = useNavigate();

//   const [room, setRoom] = useState(null);
//   const [tax, setTax] = useState(0);
//   const [rate, setRate] = useState(0);

//   const checkInDate = "2025-05-22";
//   const checkOutDate = "2025-05-23";
//   const propertyID = "317150";

//   useEffect(() => {
//     fetchRoomAndTax();
//   }, []);

//   const fetchRoomAndTax = async () => {
//     try {
//       // Step 1: Get room info
//       const roomRes = await axios.get(
//         `${BASE_API_URL}/getAvailableRoomTypes?startDate=${checkInDate}&endDate=${checkOutDate}&rooms=1&adults=2&children=0&detailedRates=true&sort=room_price&order=desc`,
//         {
//           headers: {
//             accept: "application/json",
//             authorization: `Bearer ${API_KEY}`,
//             "x-api-key": API_KEY
//           }
//         }
//       );

//       if (roomRes.data.success) {
//         const selectedRoom = roomRes.data.data[0]?.propertyRooms[0];
//         const roomRate = parseFloat(selectedRoom.roomRate);

//         setRoom(selectedRoom);
//         setRate(roomRate);

//         // Step 2: Fetch tax based on room rate
//         const taxRes = await axios.get(
//           `${BASE_API_URL}/getRoomsFeesAndTaxes?propertyID=${propertyID}&startDate=${checkInDate}&endDate=${checkOutDate}&roomsTotal=${roomRate}&roomsCount=1`,
//           {
//             headers: {
//               accept: "application/json",
//               authorization: `Bearer ${API_KEY}`,
//               "x-api-key": API_KEY
//             }
//           }
//         );

//         if (taxRes.data.success) {
//           const totalRate = parseFloat(taxRes.data.totalTaxes);
//           setTax(totalRate);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching room or tax data:", error);
//     }
//   };

//   const handleRateClick = () => {
//     navigate("/id-verification");
//   };

//   const handleHomeClick = () => {
//     navigate("/");
//   };

//   if (!room) return null;

//   return (
//     <div className="bookingdetails-container">
//       <header className="bookingdetails-header">
//         <div className="bookingdetails-logo-section">
//           <div
//             className="bookingdetails-home-icon"
//             style={{ cursor: "pointer" }}
//             onClick={handleHomeClick}
//           >
//             <img src="../src/assets/images/bookingdetails/home.png" alt="home" />
//           </div>
//           <h1 className="bookingdetails-title">Booking details</h1>
//         </div>
//         <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
//       </header>

//       <div className="bookingdetails-card">
//         <div className="bookingdetails-room-image-container">
//           <img
//             src={room.roomTypePhotos[0]?.image}
//             alt={room.roomTypeName}
//             width={600}
//             height={400}
//             className="bookingdetails-room-image"
//           />
//         </div>

//         <h2 className="bookingdetails-room-title">{room.roomTypeName}</h2>
//         <p className="bookingdetails-room-subtitle">{room.roomTypeDescription}</p>

//         <div className="bookingdetails-room-details">
//           <div className="bookingdetails-detail-box">
//             <p className="bookingdetails-detail-label">Base people</p>
//             <div className="bookingdetails-detail-value">
//               <User className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
//               <span className="bookingdetails-detail-number">{room.adultsIncluded}</span>
//             </div>
//           </div>

//           <div className="bookingdetails-detail-box">
//             <p className="bookingdetails-detail-label">Max people</p>
//             <div className="bookingdetails-detail-value">
//               <Users className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
//               <span className="bookingdetails-detail-number">{room.maxGuests}</span>
//             </div>
//           </div>

//           <div className="bookingdetails-detail-box">
//             <p className="bookingdetails-detail-label">Bed</p>
//             <div className="bookingdetails-detail-value">
//               <BedDouble className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
//               <span className="bookingdetails-detail-number">2</span> {/* or fetch dynamically if available */}
//             </div>
//           </div>
//         </div>

//         <div className="bookingdetails-rates-section">
//           <div className="bookingdetails-rate-item">
//             <div className="bookingdetails-rate-info">
//               <p className="bookingdetails-rate-name">Price</p>
//               <div className="bookingdetails-rate-price-container">
//                 <span className="bookingdetails-rate-price">${rate.toFixed(2)}</span>
//                 <span className="bookingdetails-rate-tax">TAX ${tax.toFixed(2)}</span>
//               </div>
//             </div>
//             <button
//               className="bookingdetails-rate-button"
//               onClick={handleRateClick}
//             >
//               <ChevronRight color="white" size={45} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import {
//   ChevronRight,
//   User,
//   Users,
//   BedDouble
// } from "lucide-react";
// import "./BookingDetails.css";

// const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw";
// const BASE_API_URL = "https://kiotel-backend-middleware.onrender.com/api/v1.1";

// export default function BookingDetails() {
//   const navigate = useNavigate();

//   const [room, setRoom] = useState(null);
//   const [tax, setTax] = useState(0);
//   const [rate, setRate] = useState(0);

//   const checkInDate = "2025-05-22";
//   const checkOutDate = "2025-05-23";
//   const propertyID = "317150";

//   useEffect(() => {
//     fetchRoomAndTax();
//   }, []);

//   const fetchRoomAndTax = async () => {
//     try {
//       // Step 1: Get available rooms
//       const roomRes = await axios.get(
//         `${BASE_API_URL}/getAvailableRoomTypes?startDate=${checkInDate}&endDate=${checkOutDate}&rooms=1&adults=2&children=0&detailedRates=true&sort=room_price&order=desc`,
//         {
//           headers: {
//             accept: "application/json",
//             authorization: `Bearer ${API_KEY}`,
//             "x-api-key": API_KEY
//           }
//         }
//       );

//       if (roomRes.data.success) {
//         const selectedRoom = roomRes.data.data[0]?.propertyRooms[0];
//         const roomRate = parseFloat(selectedRoom.roomRate);

//         setRoom(selectedRoom);
//         setRate(roomRate);

//         // Step 2: Get tax info using roomRate
//         const taxRes = await axios.get(
//           `${BASE_API_URL}/getRoomsFeesAndTaxes?propertyID=${propertyID}&startDate=${checkInDate}&endDate=${checkOutDate}&roomsTotal=${roomRate}&roomsCount=1`,
//           {
//             headers: {
//               accept: "application/json",
//               authorization: `Bearer ${API_KEY}`,
//               "x-api-key": API_KEY
//             }
//           }
//         );

//         if (taxRes.data.success) {
//           const totalTax = parseFloat(taxRes.data.data.totalTaxes);
//           setTax(totalTax);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching room or tax data:", error);
//     }
//   };

//   const handleRateClick = () => {
//     navigate("/id-verification");
//   };

//   const handleHomeClick = () => {
//     navigate("/");
//   };

//   if (!room) return null;

//   return (
//     <div className="bookingdetails-container">
//       <header className="bookingdetails-header">
//         <div className="bookingdetails-logo-section">
//           <div
//             className="bookingdetails-home-icon"
//             style={{ cursor: "pointer" }}
//             onClick={handleHomeClick}
//           >
//             <img src="../src/assets/images/bookingdetails/home.png" alt="home" />
//           </div>
//           <h1 className="bookingdetails-title">Booking details</h1>
//         </div>
//         <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
//       </header>

//       <div className="bookingdetails-card">
//         <div className="bookingdetails-room-image-container">
//           <img
//             src={room.roomTypePhotos[0]?.image}
//             alt={room.roomTypeName}
//             width={600}
//             height={400}
//             className="bookingdetails-room-image"
//           />
//         </div>

//         <h2 className="bookingdetails-room-title">{room.roomTypeName}</h2>
//         <p className="bookingdetails-room-subtitle">{room.roomTypeDescription}</p>

//         <div className="bookingdetails-room-details">
//           <div className="bookingdetails-detail-box">
//             <p className="bookingdetails-detail-label">Base people</p>
//             <div className="bookingdetails-detail-value">
//               <User className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
//               <span className="bookingdetails-detail-number">{room.adultsIncluded}</span>
//             </div>
//           </div>

//           <div className="bookingdetails-detail-box">
//             <p className="bookingdetails-detail-label">Max people</p>
//             <div className="bookingdetails-detail-value">
//               <Users className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
//               <span className="bookingdetails-detail-number">{room.maxGuests}</span>
//             </div>
//           </div>

//           <div className="bookingdetails-detail-box">
//             <p className="bookingdetails-detail-label">Bed</p>
//             <div className="bookingdetails-detail-value">
//               <BedDouble className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
//               <span className="bookingdetails-detail-number">2</span>
//             </div>
//           </div>
//         </div>

//         <div className="bookingdetails-rates-section">
//           <div className="bookingdetails-rate-item">
//             <div className="bookingdetails-rate-info">
//               <p className="bookingdetails-rate-name">Price</p>
//               <div className="bookingdetails-rate-price-container">
//                 <span className="bookingdetails-rate-price">${rate.toFixed(2)}</span>
//                 <span className="bookingdetails-rate-tax">TAX ${tax.toFixed(2)}</span>
//               </div>
//             </div>
//             <button
//               className="bookingdetails-rate-button"
//               onClick={handleRateClick}
//             >
//               <ChevronRight color="white" size={45} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ChevronRight,
  User,
  Users,
  BedDouble
} from "lucide-react";
import "./BookingDetails.css";
import Loading from '../../components/Loading/Loading';

const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw";
const BASE_API_URL = "https://kiotel-backend-middleware.onrender.com/api/v1.1";

export default function BookingDetails() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [room, setRoom] = useState(null);
  const [tax, setTax] = useState(0);
  const [rate, setRate] = useState(0);

  // Read from sessionStorage

  const numRooms = sessionStorage.getItem("numRooms");
  const numAdults = sessionStorage.getItem("numAdults");
  const numChildren = sessionStorage.getItem("numChildren") || 0;
  const checkInDate = sessionStorage.getItem("checkInDate");
  const checkOutDate = sessionStorage.getItem("checkOutDate");
  const selectedRoomTypeID = sessionStorage.getItem("selectedRoomTypeID");
  const propertyID = "317150";  // Keep this if static or get from session if dynamic

  useEffect(() => {
    if (!selectedRoomTypeID || !checkInDate || !checkOutDate||!numRooms||!numAdults) {
      // If required info is missing, navigate back or show error
      console.error("Missing booking data in sessionStorage.");
      navigate("/");
      return;
    }
    fetchRoomAndTax();
  }, [selectedRoomTypeID, checkInDate, checkOutDate]);

  // const fetchRoomAndTax = async () => {
  //   try {
  //       setLoading(true);
  //     // Fetch available rooms for the stored dates
  //     const roomRes = await axios.get(
  //       `${BASE_API_URL}/getAvailableRoomTypes?startDate=${checkInDate}&endDate=${checkOutDate}&rooms=${numRooms}&adults=${numAdults}&children=${numChildren}&detailedRates=true&sort=room_price&order=desc`,
  //       {
  //         headers: {
  //           accept: "application/json",
  //           authorization: `Bearer ${API_KEY}`,
  //           "x-api-key": API_KEY
  //         }
  //       }
  //     );

  //     if (roomRes.data.success) {
  //       // Find the room that matches the selectedRoomTypeID
  //       const availableRooms = roomRes.data.data[0]?.propertyRooms || [];
  //       const selectedRoom = availableRooms.find(r => r.roomTypeID == selectedRoomTypeID);

  //       if (!selectedRoom) {
  //         console.error("Selected room not found for the given dates.");
  //         return;
  //       }

  //       const roomRate = parseFloat(selectedRoom.roomRate || selectedRoom.roomRateDetailed?.[0]?.rate);

  //       setRoom(selectedRoom);
  //       setRate(roomRate);

  //       // Fetch tax info based on room rate and property
  //       const taxRes = await axios.get(
  //         `${BASE_API_URL}/getRoomsFeesAndTaxes?propertyID=${propertyID}&startDate=${checkInDate}&endDate=${checkOutDate}&roomsTotal=${roomRate}&roomsCount=1`,
  //         {
  //           headers: {
  //             accept: "application/json",
  //             authorization: `Bearer ${API_KEY}`,
  //             "x-api-key": API_KEY
  //           }
  //         }
  //       );

  //       if (taxRes.data.success) {
  //         const totalTax = parseFloat(taxRes.data.data.totalTaxes);
  //         setTax(totalTax);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error fetching room or tax data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const fetchRoomAndTax = async () => {
  try {
    setLoading(true);

    const roomRes = await axios.get(
      `${BASE_API_URL}/getAvailableRoomTypes?startDate=${checkInDate}&endDate=${checkOutDate}&rooms=${numRooms}&adults=${numAdults}&children=${numChildren}&detailedRates=true&sort=room_price&order=desc`,
      {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${API_KEY}`,
          "x-api-key": API_KEY
        }
      }
    );

    if (roomRes.data.success) {
      const availableRooms = roomRes.data.data[0]?.propertyRooms || [];
      const selectedRoom = availableRooms.find(r => r.roomTypeID == selectedRoomTypeID);

      if (!selectedRoom) {
        console.error("Selected room not found for the given dates.");
        return;
      }

      const roomRate = parseFloat(selectedRoom.roomRate || selectedRoom.roomRateDetailed?.[0]?.rate);

      setRoom(selectedRoom);
      setRate(roomRate);

      // ✅ Store in sessionStorage
      sessionStorage.setItem("roomTypeName", selectedRoom.roomTypeName);
      console.log("Room Type Name:", selectedRoom.roomTypeName);
      console.log("roomTypeprice", roomRate.toString());
      sessionStorage.setItem("roomTypePrice", roomRate.toString());

      // Fetch tax info
      const taxRes = await axios.get(
        `${BASE_API_URL}/getRoomsFeesAndTaxes?propertyID=${propertyID}&startDate=${checkInDate}&endDate=${checkOutDate}&roomsTotal=${roomRate}&roomsCount=1`,
        {
          headers: {
            accept: "application/json",
            authorization: `Bearer ${API_KEY}`,
            "x-api-key": API_KEY
          }
        }
      );

      if (taxRes.data.success) {
        const totalTax = parseFloat(taxRes.data.data.totalTaxes);
         const grandTotal = parseFloat(taxRes.data.data.grandTotal);
         sessionStorage.setItem("roomTypeTax",totalTax);
         sessionStorage.setItem("grandTotal",grandTotal);
        setTax(totalTax);
      }
    }
  } catch (error) {
    console.error("Error fetching room or tax data:", error);
  } finally {
    setLoading(false);
  }
};

  const handleRateClick = () => {
    navigate("/id-verification");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  if (loading) return <Loading />;
  if (!room) return <p>Loading room details...</p>;

  return (
    <div className="bookingdetails-container">
      <header className="bookingdetails-header">
        <div className="bookingdetails-logo-section">
          <div
            className="bookingdetails-home-icon"
            style={{ cursor: "pointer" }}
            onClick={handleHomeClick}
          >
            <img src="/assets/images/bookingdetails/home.png" alt="home" />
          </div>
          <h1 className="bookingdetails-title">Booking details</h1>
        </div>
        <img src="/assets/images/bookingdetails/help.png" alt="help" />
      </header>

      <div className="bookingdetails-card">
        <div className="bookingdetails-room-image-container">
          <img
            src={room.roomTypePhotos?.[0]?.image || "/assets/images/bookingdetails/default-room.png"}
            alt={room.roomTypeName}
            width={600}
            height={400}
            className="bookingdetails-room-image"
          />
        </div>

        <h2 className="bookingdetails-room-title">{room.roomTypeName}</h2>
        <p className="bookingdetails-room-subtitle">{room.roomTypeDescription}</p>

        <div className="bookingdetails-room-details">
          <div className="bookingdetails-detail-box">
            <p className="bookingdetails-detail-label">Base people</p>
            <div className="bookingdetails-detail-value">
              <User className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
              <span className="bookingdetails-detail-number">{room.adultsIncluded}</span>
            </div>
          </div>

          <div className="bookingdetails-detail-box">
            <p className="bookingdetails-detail-label">Max people</p>
            <div className="bookingdetails-detail-value">
              <Users className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
              <span className="bookingdetails-detail-number">{room.maxGuests}</span>
            </div>
          </div>

          <div className="bookingdetails-detail-box">
            <p className="bookingdetails-detail-label">Bed</p>
            <div className="bookingdetails-detail-value">
              <BedDouble className="bookingdetails-detail-icon" color="#1E88E5" size={45} />
              <span className="bookingdetails-detail-number">2</span>
            </div>
          </div>
        </div>

        <div className="bookingdetails-rates-section">
          <div className="bookingdetails-rate-item">
            <div className="bookingdetails-rate-info">
              <p className="bookingdetails-rate-name">Price</p>
              <div className="bookingdetails-rate-price-container">
                <span className="bookingdetails-rate-price">${rate.toFixed(2)}</span>
                <span className="bookingdetails-rate-tax">TAX ${tax.toFixed(2)}</span>
              </div>
            </div>
            <button
              className="bookingdetails-rate-button"
              onClick={handleRateClick}
            >
              <ChevronRight color="white" size={45} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
