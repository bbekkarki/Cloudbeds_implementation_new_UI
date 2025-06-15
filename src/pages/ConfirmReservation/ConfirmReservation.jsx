// // // import { Home, HelpCircle, ChevronLeft, Edit, ChevronRight, HandHelpingIcon as HelpIcon } from "lucide-react"
// // // import "./ConfirmReservation.css"

// // // export default function ConfirmReservation() {
// // //   return (
// // //     <div className="review-page">
// // //       <div className="review-container">
// // //         <header className="review-header">
// // //           <div className="logo-section">
// // //               <img src="../src/assets/images/bookingdetails/home.png" alt="home" /> 
// // //             <h1 className="review-title">Review reservation</h1>
// // //           </div>
// // //           <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
// // //         </header>

// // //         <div className="review-card">
// // //           <button className="back-button">
// // //             <ChevronLeft size={20} />
// // //             <span>Back</span>
// // //           </button>

// // //           <div className="room-summary">
// // //             <div className="room-image-container">
// // //               {/* <img src="C:/Users/User/Desktop/New folder (2)/my-react-app/src/assets/images/bookingdetails/room 1.png?height=130&width=220" alt="Ada Double Queen Room" className="room-image" /> */}
// // //                <img src="../src/assets/images/bookingdetails/room 1.png?height=130&width=220" alt="Ada Double Queen Room" className="room-image" />
// // //                  <div className="room-details">
// // //               <div className="booking-id">
// // //                 <span className="id-label">Booking ID</span>
// // //                 <div className="id-value-container">
// // //                   <span className="id-value">0004565643K</span>
// // //                   <span className="pending-badge">
// // //                     <span className="pending-dot"></span>
// // //                     Pending
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //               <h2 className="room-name">Ada Double Queen</h2>
// // //               <p className="room-description">Perfect for business travelers</p>
// // //               <p className="room-price">Per day $378.07</p>
// // //             </div>
// // //             </div>
          
// // //           </div>

// // //           <section className="details-section">
// // //             <h3 className="section-title">Guest details</h3>
// // //             <div className="details-content">
// // //               <div className="detail-row">
// // //                 <span className="detail-label">Name</span>
// // //                 <span className="detail-value">Siemantel Donovan</span>
// // //               </div>
// // //               <div className="detail-row">
// // //                 <span className="detail-label">Email</span>
// // //                 <span className="detail-value">siemanteldonovan@outlook.com</span>
// // //               </div>
// // //               <div className="detail-row">
// // //                 <span className="detail-label">Phone</span>
// // //                 <span className="detail-value">+1-212-456-7890</span>
// // //               </div>
// // //               <div className="detail-row">
// // //                 <span className="detail-label">Country</span>
// // //                 <span className="detail-value">United State</span>
// // //               </div>
// // //               <div className="detail-row">
// // //                 <span className="detail-label">Postal code</span>
// // //                 <span className="detail-value">78602</span>
// // //               </div>
// // //               <button className="edit-button">
// // //                 <Edit size={20} />
// // //                 <span>Edit</span>
// // //               </button>
// // //             </div>
// // //           </section>

// // //           <section className="details-section">
// // //             <h3 className="section-title">Booking details</h3>
// // //             <div className="details-content">
// // //               <div className="detail-row with-edit">
// // //                 <div className="detail-col">
// // //                   <span className="detail-label">Check-In/Check-Out</span>
// // //                   <span className="detail-value">March 27-28</span>
// // //                 </div>
// // //                 <button className="small-edit-button">
// // //                   <Edit size={14} />
// // //                   <span>Edit</span>
// // //                 </button>
// // //               </div>
// // //               <div className="detail-row with-edit">
// // //                 <div className="detail-col">
// // //                   <div className="detail-col-split">
// // //                     <div className="detail-col-item">
// // //                       <span className="detail-label">No. of Rooms</span>
// // //                       <span className="detail-value">2</span>
// // //                     </div>
// // //                     <div className="detail-col-item">
// // //                       <span className="detail-label">Guest</span>
// // //                       <span className="detail-value">4 Adult</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <button className="small-edit-button">
// // //                   <Edit size={14} />
// // //                   <span>Edit</span>
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </section>

// // //           <section className="details-section">
// // //             <h3 className="section-title">Payment info</h3>
// // //             <div className="details-content-payment">
// // //               <div className="detail-row-payment">
// // //                 <span className="detail-label">Due amount</span>
// // //                 <div className="price-container">
// // //                   <span className="current-price">$429.9</span>
// // //                   <span className="original-price">$378.07</span>
// // //                 </div>
// // //               </div>
// // //               <div className="payment-method">
// // //                 <div className="payment-method-option">
// // //                   <div className="checkbox-container blue">
// // //                     <input type="checkbox" id="cashPayment" className="checkbox-input" checked readOnly />
// // //                   <img src="../src/assets/images/cash-in.png" className="card-icon" alt="cash" />
// // //                   </div>
// // //                   <span className="payment-method-text">Insert Cash</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </section>

// // //           <div className="price-summary">
// // //             <div className="price-container">
// // //               <span className="price-amount">$429.9</span>
// // //               <span className="price-details">/ Night • Includes taxes and other fees.</span>
// // //             </div>
// // //           </div>

// // //           <button className="confirm-button">
// // //             <span>Confirm Reservation</span>
// // //             <ChevronRight size={20} />
// // //           </button>
// // //         </div>

// // //         <div className="help-section">
// // //           <div className="help-content">
// // //             <HelpIcon size={24} className="help-icon" />
// // //             <div className="help-text">
// // //               <h3 className="help-title">Need some help?</h3>
// // //               <p className="help-description">
// // //                 Contact our front desk at extension 0 or visit the concierge desk in the lobby.
// // //               </p>
// // //             </div>
// // //             <ChevronRight size={20} className="help-arrow" />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }



// // import { useState } from "react";
// // import {
// //   Home,
// //   HelpCircle,
// //   ChevronLeft,
// //   Edit,
// //   ChevronRight,
// //   HandHelpingIcon as HelpIcon,
// // } from "lucide-react";
// // import "./ConfirmReservation.css";

// // export default function ConfirmReservation() {
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [guestDetails, setGuestDetails] = useState({
// //     name: "Siemantel Donovan",
// //     email: "siemanteldonovan@outlook.com",
// //     phone: "+1-212-456-7890",
// //     country: "United State",
// //     postalCode: "78602",
// //   });

// //   const handleChange = (field, value) => {
// //     setGuestDetails({ ...guestDetails, [field]: value });
// //   };

// //   return (
// //     <div className="review-page">
// //       <div className="review-container">
// //         <header className="review-header">
// //           <div className="logo-section">
// //             <img
// //               src="../src/assets/images/bookingdetails/home.png"
// //               alt="home"
// //             />
// //             <h1 className="review-title">Review reservation</h1>
// //           </div>
// //           <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
// //         </header>

// //         <div className="review-card">
// //           <button className="back-button">
// //             <ChevronLeft size={20} />
// //             <span>Back</span>
// //           </button>

// //           <div className="room-summary">
// //             <div className="room-image-container">
// //               <img
// //                 src="../src/assets/images/bookingdetails/room 1.png?height=130&width=220"
// //                 alt="Ada Double Queen Room"
// //                 className="room-image"
// //               />
// //               <div className="room-details">
// //                 <div className="booking-id">
// //                   <span className="id-label">Booking ID</span>
// //                   <div className="id-value-container">
// //                     <span className="id-value">0004565643K</span>
// //                     <span className="pending-badge">
// //                       <span className="pending-dot"></span>
// //                       Pending
// //                     </span>
// //                   </div>
// //                 </div>
// //                 <h2 className="room-name">Ada Double Queen</h2>
// //                 <p className="room-description">Perfect for business travelers</p>
// //                 <p className="room-price">Per day $378.07</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Guest Details Section */}
// //           <section className="details-section">
// //             <h3 className="section-title">Guest details</h3>
// //             <div className="details-content">
// //               <div className="detail-row">
// //                 <span className="detail-label">Name</span>
// //                 {isEditing ? (
// //                   <input
// //                     type="text"
// //                     className="detail-value"
// //                     value={guestDetails.name}
// //                     onChange={(e) => handleChange("name", e.target.value)}
// //                   />
// //                 ) : (
// //                   <span className="detail-value">{guestDetails.name}</span>
// //                 )}
// //               </div>
// //               <div className="detail-row">
// //                 <span className="detail-label">Email</span>
// //                 {isEditing ? (
// //                   <input
// //                     type="email"
// //                     className="detail-value"
// //                     value={guestDetails.email}
// //                     onChange={(e) => handleChange("email", e.target.value)}
// //                   />
// //                 ) : (
// //                   <span className="detail-value">{guestDetails.email}</span>
// //                 )}
// //               </div>
// //               <div className="detail-row">
// //                 <span className="detail-label">Phone</span>
// //                 {isEditing ? (
// //                   <input
// //                     type="text"
// //                     className="detail-value"
// //                     value={guestDetails.phone}
// //                     onChange={(e) => handleChange("phone", e.target.value)}
// //                   />
// //                 ) : (
// //                   <span className="detail-value">{guestDetails.phone}</span>
// //                 )}
// //               </div>
// //               <div className="detail-row">
// //                 <span className="detail-label">Country</span>
// //                 {isEditing ? (
// //                   <input
// //                     type="text"
// //                     className="detail-value"
// //                     value={guestDetails.country}
// //                     onChange={(e) => handleChange("country", e.target.value)}
// //                   />
// //                 ) : (
// //                   <span className="detail-value">{guestDetails.country}</span>
// //                 )}
// //               </div>
// //               <div className="detail-row">
// //                 <span className="detail-label">Postal code</span>
// //                 {isEditing ? (
// //                   <input
// //                     type="text"
// //                     className="detail-value"
// //                     value={guestDetails.postalCode}
// //                     onChange={(e) => handleChange("postalCode", e.target.value)}
// //                   />
// //                 ) : (
// //                   <span className="detail-value">{guestDetails.postalCode}</span>
// //                 )}
// //               </div>
// //               <button
// //                 className="edit-button"
// //                 onClick={() => setIsEditing((prev) => !prev)}
// //               >
// //                 <Edit size={20} />
// //                 <span>{isEditing ? "Save" : "Edit"}</span>
// //               </button>
// //             </div>
// //           </section>

// //           {/* Booking Details Section (Unchanged) */}
// //           <section className="details-section">
// //             <h3 className="section-title">Booking details</h3>
// //             <div className="details-content">
// //               <div className="detail-row with-edit">
// //                 <div className="detail-col">
// //                   <span className="detail-label">Check-In/Check-Out</span>
// //                   <span className="detail-value">March 27-28</span>
// //                 </div>
// //                 <button className="small-edit-button">
// //                   <Edit size={14} />
// //                   <span>Edit</span>
// //                 </button>
// //               </div>
// //               <div className="detail-row with-edit">
// //                 <div className="detail-col">
// //                   <div className="detail-col-split">
// //                     <div className="detail-col-item">
// //                       <span className="detail-label">No. of Rooms</span>
// //                       <span className="detail-value">2</span>
// //                     </div>
// //                     <div className="detail-col-item">
// //                       <span className="detail-label">Guest</span>
// //                       <span className="detail-value">4 Adult</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <button className="small-edit-button">
// //                   <Edit size={14} />
// //                   <span>Edit</span>
// //                 </button>
// //               </div>
// //             </div>
// //           </section>

// //           {/* Payment Info Section (Unchanged) */}
// //           <section className="details-section">
// //             <h3 className="section-title">Payment info</h3>
// //             <div className="details-content-payment">
// //               <div className="detail-row-payment">
// //                 <span className="detail-label">Due amount</span>
// //                 <div className="price-container">
// //                   <span className="current-price">$429.9</span>
// //                   <span className="original-price">$378.07</span>
// //                 </div>
// //               </div>
// //               <div className="payment-method">
// //                 <div className="payment-method-option">
// //                   <div className="checkbox-container blue">
// //                     <input
// //                       type="checkbox"
// //                       id="cashPayment"
// //                       className="checkbox-input"
// //                       checked
// //                       readOnly
// //                     />
// //                     <img
// //                       src="../src/assets/images/cash-in.png"
// //                       className="card-icon"
// //                       alt="cash"
// //                     />
// //                   </div>
// //                   <span className="payment-method-text">Insert Cash</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </section>

// //           <div className="price-summary">
// //             <div className="price-container">
// //               <span className="price-amount">$429.9</span>
// //               <span className="price-details">
// //                 / Night • Includes taxes and other fees.
// //               </span>
// //             </div>
// //           </div>

// //           <button className="confirm-button">
// //             <span>Confirm Reservation</span>
// //             <ChevronRight size={20} />
// //           </button>
// //         </div>

// //         <div className="help-section">
// //           <div className="help-content">
// //             <HelpIcon size={24} className="help-icon" />
// //             <div className="help-text">
// //               <h3 className="help-title">Need some help?</h3>
// //               <p className="help-description">
// //                 Contact our front desk at extension 0 or visit the concierge desk in
// //                 the lobby.
// //               </p>
// //             </div>
// //             <ChevronRight size={20} className="help-arrow" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// // import { useState } from "react";
// // import {
// //   ChevronLeft,
// //   Edit,
// //   ChevronRight,
// //   HandHelpingIcon as HelpIcon,
// // } from "lucide-react";
// // import "./ConfirmReservation.css";

// // export default function ConfirmReservation() {
// //   const [isEditingGuest, setIsEditingGuest] = useState(false);
// //   const [isEditingDates, setIsEditingDates] = useState(false);

// //   const [guestDetails, setGuestDetails] = useState({
// //     name: "Siemantel Donovan",
// //     email: "siemanteldonovan@outlook.com",
// //     phone: "+1-212-456-7890",
// //     country: "United State",
// //     postalCode: "78602",
// //   });

// //   const [checkInDate, setCheckInDate] = useState("2025-03-27");
// //   const [checkOutDate, setCheckOutDate] = useState("2025-03-28");

// //   const handleChange = (field, value) => {
// //     setGuestDetails({ ...guestDetails, [field]: value });
// //   };

// //   return (
// //     <div className="review-page">
// //       <div className="review-container">
// //         <header className="review-header">
// //           <div className="logo-section">
// //             <img
// //               src="../src/assets/images/bookingdetails/home.png"
// //               alt="home"
// //             />
// //             <h1 className="review-title">Review reservation</h1>
// //           </div>
// //           <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
// //         </header>

// //         <div className="review-card">
// //           <button className="back-button">
// //             <ChevronLeft size={20} />
// //             <span>Back</span>
// //           </button>

// //           <div className="room-summary">
// //             <div className="room-image-container">
// //               <img
// //                 src="../src/assets/images/bookingdetails/room 1.png?height=130&width=220"
// //                 alt="Ada Double Queen Room"
// //                 className="room-image"
// //               />
// //               <div className="room-details">
// //                 <div className="booking-id">
// //                   <span className="id-label">Booking ID</span>
// //                   <div className="id-value-container">
// //                     <span className="id-value">0004565643K</span>
// //                     <span className="pending-badge">
// //                       <span className="pending-dot"></span>
// //                       Pending
// //                     </span>
// //                   </div>
// //                 </div>
// //                 <h2 className="room-name">Ada Double Queen</h2>
// //                 <p className="room-description">Perfect for business travelers</p>
// //                 <p className="room-price">Per day $378.07</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Guest Details Section */}
// //           <section className="details-section">
// //             <h3 className="section-title">Guest details</h3>
// //             <div className="details-content">
// //               {["name", "email", "phone", "country", "postalCode"].map((field) => (
// //                 <div className="detail-row" key={field}>
// //                   <span className="detail-label">{field.charAt(0).toUpperCase() + field.slice(1).replace("postalCode", "Postal code")}</span>
// //                   {isEditingGuest ? (
// //                     <input
// //                       type="text"
// //                       className="detail-value"
// //                       value={guestDetails[field]}
// //                       onChange={(e) => handleChange(field, e.target.value)}
// //                     />
// //                   ) : (
// //                     <span className="detail-value">{guestDetails[field]}</span>
// //                   )}
// //                 </div>
// //               ))}
// //               <button
// //                 className="edit-button"
// //                 onClick={() => setIsEditingGuest((prev) => !prev)}
// //               >
// //                 <Edit size={20} />
// //                 <span>{isEditingGuest ? "Save" : "Edit"}</span>
// //               </button>
// //             </div>
// //           </section>

// //           {/* Booking Details Section */}
// //           <section className="details-section">
// //             <h3 className="section-title">Booking details</h3>
// //             <div className="details-content">
// //               <div className="detail-row with-edit">
// //                 <div className="detail-col">
// //                   <span className="detail-label">Check-In/Check-Out</span>
// //                   {isEditingDates ? (
// //                     <div className="date-inputs">
// //                       <input
// //                         type="date"
// //                         value={checkInDate}
// //                         onChange={(e) => setCheckInDate(e.target.value)}
// //                         className="date-picker"
// //                       />
// //                       <input
// //                         type="date"
// //                         value={checkOutDate}
// //                         onChange={(e) => setCheckOutDate(e.target.value)}
// //                         className="date-picker"
// //                       />
// //                     </div>
// //                   ) : (
// //                     <span className="detail-value">
// //                       {new Date(checkInDate).toLocaleDateString(undefined, {
// //                         month: "long",
// //                         day: "numeric",
// //                       })}{" "}
// //                       -{" "}
// //                       {new Date(checkOutDate).toLocaleDateString(undefined, {
// //                         month: "long",
// //                         day: "numeric",
// //                       })}
// //                     </span>
// //                   )}
// //                 </div>
// //                 <button
// //                   className="small-edit-button"
// //                   onClick={() => setIsEditingDates((prev) => !prev)}
// //                 >
// //                   <Edit size={14} />
// //                   <span>{isEditingDates ? "Save" : "Edit"}</span>
// //                 </button>
// //               </div>

// //               <div className="detail-row with-edit">
// //                 <div className="detail-col">
// //                   <div className="detail-col-split">
// //                     <div className="detail-col-item">
// //                       <span className="detail-label">No. of Rooms</span>
// //                       <span className="detail-value">2</span>
// //                     </div>
// //                     <div className="detail-col-item">
// //                       <span className="detail-label">Guest</span>
// //                       <span className="detail-value">4 Adult</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <button className="small-edit-button">
// //                   <Edit size={14} />
// //                   <span>Edit</span>
// //                 </button>
// //               </div>
// //             </div>
// //           </section>

// //           {/* Payment Info Section */}
// //           <section className="details-section">
// //             <h3 className="section-title">Payment info</h3>
// //             <div className="details-content-payment">
// //               <div className="detail-row-payment">
// //                 <span className="detail-label">Due amount</span>
// //                 <div className="price-container">
// //                   <span className="current-price">$429.9</span>
// //                   <span className="original-price">$378.07</span>
// //                 </div>
// //               </div>
// //               <div className="payment-method">
// //                 <div className="payment-method-option">
// //                   <div className="checkbox-container blue">
// //                     <input
// //                       type="checkbox"
// //                       id="cashPayment"
// //                       className="checkbox-input"
// //                       checked
// //                       readOnly
// //                     />
// //                     <img
// //                       src="../src/assets/images/cash-in.png"
// //                       className="card-icon"
// //                       alt="cash"
// //                     />
// //                   </div>
// //                   <span className="payment-method-text">Insert Cash</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </section>

// //           <div className="price-summary">
// //             <div className="price-container">
// //               <span className="price-amount">$429.9</span>
// //               <span className="price-details">
// //                 / Night • Includes taxes and other fees.
// //               </span>
// //             </div>
// //           </div>

// //           <button className="confirm-button">
// //             <span>Confirm Reservation</span>
// //             <ChevronRight size={20} />
// //           </button>
// //         </div>

// //         <div className="help-section">
// //           <div className="help-content">
// //             <HelpIcon size={24} className="help-icon" />
// //             <div className="help-text">
// //               <h3 className="help-title">Need some help?</h3>
// //               <p className="help-description">
// //                 Contact our front desk at extension 0 or visit the concierge desk in
// //                 the lobby.
// //               </p>
// //             </div>
// //             <ChevronRight size={20} className="help-arrow" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // import { useState } from "react";
// // import {
// //   ChevronLeft,
// //   Edit,
// //   ChevronRight,
// //   HandHelpingIcon as HelpIcon,
// // } from "lucide-react";
// // import "./ConfirmReservation.css";
// // import Header from "../../components/Header/Header";
// // import HelpFooter from "../../components/HelpFooter/HelpFooter";

// // export default function ConfirmReservation() {
// //   const [isEditingGuest, setIsEditingGuest] = useState(false);
// //   const [isEditingDates, setIsEditingDates] = useState(false);
// //   const [isEditingRoomsGuests, setIsEditingRoomsGuests] = useState(false);

// //   const [guestDetails, setGuestDetails] = useState({
// //     name: "Siemantel Donovan",
// //     email: "siemanteldonovan@outlook.com",
// //     phone: "+1-212-456-7890",
// //     country: "United State",
// //     postalCode: "78602",
// //   });

// //   const [checkInDate, setCheckInDate] = useState("2025-03-27");
// //   const [checkOutDate, setCheckOutDate] = useState("2025-03-28");

// //   const [rooms, setRooms] = useState(2);
// //   const [guests, setGuests] = useState("4 Adult");

// //   const handleChange = (field, value) => {
// //     setGuestDetails({ ...guestDetails, [field]: value });
// //   };

// //   return (
// //     <div className="review-page">
// //       <div className="review-container">
// //         {/* <header className="review-header">
// //           <div className="logo-section">
// //             <img src="../src/assets/images/bookingdetails/home.png" alt="home" />
// //             <h1 className="review-title">Review reservation</h1>
// //           </div>
// //           <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
// //         </header> */}
// // <Header />
// //         <div className="review-card">
// //           <button className="back-button">
// //             <ChevronLeft size={20} />
// //             <span>Back</span>
// //           </button>

// //           {/* Room Summary */}
// //           <div className="room-summary">
// //             <div className="room-image-container">
// //               <img
// //                 src="../../src/assets/images/bookingdetails/room 1.png?height=130&width=220"
// //                 alt="Ada Double Queen Room"
// //                 className="room-image"
// //               />
// //               <div className="room-details">
// //                 <div className="booking-id">
// //                   <span className="id-label">Booking ID</span>
// //                   <div className="id-value-container">
// //                     <span className="id-value">0004565643K</span>
// //                     <span className="pending-badge">
// //                       <span className="pending-dot"></span>
// //                       Pending
// //                     </span>
// //                   </div>
// //                 </div>
// //                 <h2 className="room-name">Ada Double Queen</h2>
// //                 <p className="room-description">Perfect for business travelers</p>
// //                 <p className="room-price">Per day $378.07</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Guest Details */}
// //           <section className="details-section">
// //             <h3 className="section-title">Guest details</h3>
// //             <div className="details-content">
// //               {["name", "email", "phone", "country", "postalCode"].map((field) => (
// //                 <div className="detail-row" key={field}>
// //                   <span className="detail-label">{field === "postalCode" ? "Postal Code" : field.charAt(0).toUpperCase() + field.slice(1)}</span>
// //                   {isEditingGuest ? (
// //                     <input
// //                       type="text"
// //                       className="cr-guestdetail-value"
// //                       value={guestDetails[field]}
// //                       onChange={(e) => handleChange(field, e.target.value)}
// //                     />
// //                   ) : (
// //                     <span className="cr-detail-value">{guestDetails[field]}</span>
// //                   )}
// //                 </div>
// //               ))}
// //               <button
// //                 className="edit-button"
// //                 onClick={() => setIsEditingGuest((prev) => !prev)}
// //               >
// //                 <Edit size={20} />
// //                 <span>{isEditingGuest ? "Save" : "Edit"}</span>
// //               </button>
// //             </div>
// //           </section>

// //           {/* Booking Details */}
// //           <section className="details-section">
// //             <h3 className="section-title">Booking details</h3>
// //             <div className="details-content">

// //               {/* Check-In/Check-Out */}
// //               <div className="detail-row with-edit">
// //                 <div className="detail-col">
// //                   <span className="cr-detail-label">Check-In/Check-Out</span>
// //                   {isEditingDates ? (
// //                     <div className="date-inputs">
// //                       <input
// //                         type="date"
// //                         value={checkInDate}
// //                         onChange={(e) => setCheckInDate(e.target.value)}
// //                         className="cr-date-picker"
// //                       />
// //                       <input
// //                         type="date"
// //                         value={checkOutDate}
// //                         onChange={(e) => setCheckOutDate(e.target.value)}
// //                         className="cr-date-picker"
// //                       />
// //                     </div>
// //                   ) : (
// //                     <span className="cr-detail-value">
// //                       {new Date(checkInDate).toLocaleDateString()} - {new Date(checkOutDate).toLocaleDateString()}
// //                     </span>
// //                   )}
// //                 </div>
// //                 <button
// //                   className="small-edit-button"
// //                   onClick={() => setIsEditingDates((prev) => !prev)}
// //                 >
// //                   <Edit size={14} />
// //                   <span>{isEditingDates ? "Save" : "Edit"}</span>
// //                 </button>
// //               </div>

// //               {/* Rooms and Guests */}
// //               <div className="detail-row with-edit">
// //                 <div className="detail-col">
// //                   <div className="detail-col-split">
// //                     <div className="detail-col-item">
// //                       <span className="cr-detail-label">No. of Rooms</span>
// //                       {isEditingRoomsGuests ? (
// //                         <select
// //                           value={rooms}
// //                           onChange={(e) => setRooms(parseInt(e.target.value))}
// //                           className="cr-detail-value"
// //                         >
// //                           {[1, 2, 3, 4, 5].map((r) => (
// //                             <option key={r} value={r}>
// //                               {r}
// //                             </option>
// //                           ))}
// //                         </select>
// //                       ) : (
// //                         <span className="cr-detail-value">{rooms}</span>
// //                       )}
// //                     </div>
// //                     <div className="detail-col-item">
// //                       <span className="cr-detail-label">Guest</span>
// //                       {isEditingRoomsGuests ? (
// //                         <select
// //                           value={guests}
// //                           onChange={(e) => setGuests(e.target.value)}
// //                           className="cr-detail-value"
// //                         >
// //                           {["1 Adult", "2 Adult", "3 Adult", "4 Adult", "5 Adult", "2 Adult 1 Child"].map((g) => (
// //                             <option key={g} value={g}>
// //                               {g}
// //                             </option>
// //                           ))}
// //                         </select>
// //                       ) : (
// //                         <span className="cr-detail-value">{guests}</span>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <button
// //                   className="small-edit-button"
// //                   onClick={() => setIsEditingRoomsGuests((prev) => !prev)}
// //                 >
// //                   <Edit size={14} />
// //                   <span>{isEditingRoomsGuests ? "Save" : "Edit"}</span>
// //                 </button>
// //               </div>
// //             </div>
// //           </section>

// //           {/* Payment Info */}
// //           <section className="details-section">
// //             <h3 className="section-title">Payment info</h3>
// //             <div className="details-content-payment">
// //               <div className="detail-row-payment">
// //                 <span className="cr-detail-label">Due amount</span>
// //                 <div className="price-container">
// //                   <span className="current-price">$429.9</span>
// //                   <span className="original-price">$378.07</span>
// //                 </div>
// //               </div>
// //               <div className="payment-method">
// //                 <div className="payment-method-option">
// //                   <div className="checkbox-container blue">
// //                     <input
// //                       type="checkbox"
// //                       id="cashPayment"
// //                       className="checkbox-input"
// //                       checked
// //                       readOnly
// //                     />
// //                     <img
// //                       src="../../src/assets/images/cash-in.png"
// //                       className="card-icon"
// //                       alt="cash"
// //                     />
// //                   </div>
// //                   <span className="payment-method-text">Insert Cash</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </section>

// //           <div className="price-summary">
// //             <div className="price-container">
// //               <span className="price-amount">$429.9</span>
// //               <span className="price-details">
// //                 / Night • Includes taxes and other fees.
// //               </span>
// //             </div>
// //           </div>

// //           <button className="confirm-button">
// //             <span>Confirm Reservation</span>
// //             <ChevronRight size={20} />
// //           </button>
// //         </div>

// //         {/* <div className="help-section">
// //           <div className="help-content">
// //             <HelpIcon size={24} className="help-icon" />
// //             <div className="help-text">
// //               <h3 className="help-title">Need some help?</h3>
// //               <p className="help-description">
// //                 Contact our front desk at extension 0 or visit the concierge desk in the lobby.
// //               </p>
// //             </div>
// //             <ChevronRight size={20} className="help-arrow" />
// //           </div>
// //         </div> */}
// //       <HelpFooter />
// //       </div>
// //     </div>
// //   );
// // }



// import { useState, useEffect } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   ChevronLeft,
//   Edit,
//   ChevronRight,
//   HandHelpingIcon as HelpIcon,
// } from "lucide-react";
// import "./ConfirmReservation.css";
// import Header from "../../components/Header/Header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// import qs from "qs";
// import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";

// export default function ConfirmReservation() {
//   const navigate = useNavigate();
//   const [isEditingGuest, setIsEditingGuest] = useState(false);
//   const [isEditingDates, setIsEditingDates] = useState(false);
//   const [isEditingRoomsGuests, setIsEditingRoomsGuests] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [reservationData, setReservationData] = useState(null);

//   // Initialize from sessionStorage
//   useEffect(() => {
//     const data = {
//       checkInDate: sessionStorage.getItem("checkInDate"),
//       checkOutDate: sessionStorage.getItem("checkOutDate"),
//       numRooms: Number(sessionStorage.getItem("numRooms")),
//       numAdults: Number(sessionStorage.getItem("numAdults")),
//       selectedRoomTypeID: sessionStorage.getItem("selectedRoomTypeID"),
//       guestFirstName: sessionStorage.getItem("guestFirstName"),
//       guestLastName: sessionStorage.getItem("guestLastName"),
//       guestEmail: sessionStorage.getItem("guestEmail"),
//       guestPhone: sessionStorage.getItem("guestPhone"),
//       guestCountry: sessionStorage.getItem("guestCountry") || "US",
//       guestZip: sessionStorage.getItem("guestZip"),
//       paymentMethod: sessionStorage.getItem("paymentMethod"),
//       roomTypeName: sessionStorage.getItem("roomTypeName"),
//       roomTypePrice: sessionStorage.getItem("roomTypePrice"),
//     };
    
//     setReservationData(data);
//   }, []);

//   const confirmReservation = async () => {
//     if (!reservationData) return;

//     setLoading(true);
//     const requestData = {
//       rooms: JSON.stringify([
//         {
//           roomTypeID: reservationData.selectedRoomTypeID,
//           quantity: reservationData.numRooms,
//         },
//       ]),
//       startDate: reservationData.checkInDate,
//       endDate: reservationData.checkOutDate,
//       guestFirstName: reservationData.guestFirstName,
//       guestLastName: reservationData.guestLastName,
//       guestGender: "M", // Default as in original
//       guestCountry: reservationData.guestCountry,
//       guestZip: reservationData.guestZip,
//       guestEmail: reservationData.guestEmail,
//       guestPhone: reservationData.guestPhone,
//       adults: JSON.stringify([
//         {
//           roomTypeID: reservationData.selectedRoomTypeID,
//           quantity: reservationData.numAdults,
//         },
//       ]),
//       children: JSON.stringify([
//         { roomTypeID: reservationData.selectedRoomTypeID, quantity: 0 },
//       ]),
//       paymentMethod: reservationData.paymentMethod,
//       propertyID: propertyID,
//     };

//     try {
//       const response = await axios.post(
//         `${BASE_API_URL}/reservation/postReservation`,
//         qs.stringify(requestData),
//         {
//           headers: {
//             accept: "application/json",
//             authorization: `Bearer ${API_KEY}`,
//             "x-api-key": API_KEY,
//             "content-type": "application/x-www-form-urlencoded",
//           },
//         }
//       );

//       if (response.data.success) {
//         const reservationID = response.data.reservationID;
//         sessionStorage.setItem("reservationID", reservationID);
//         sessionStorage.setItem("bookingID", `000${reservationID}K`);
        
//         toast.success("Reservation confirmed!");
//         navigate("/payment");
//       } else {
//         toast.error("Reservation failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Reservation Error:", error);
//       toast.error("Error processing reservation.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   if (!reservationData) {
//     return (
//       <div className="review-page">
//         <div className="review-container">
//           <Header />
//           <div className="loading-container">
//             <p>Loading reservation details...</p>
//           </div>
//           <HelpFooter />
//         </div>
//       </div>
//     );
//   }

//   // Format dates for display
//   const formatDisplayDate = (dateStr) => {
//     const options = { month: 'short', day: 'numeric' };
//     return new Date(dateStr).toLocaleDateString("en-US", options);
//   };

//   // Calculate price
//   const roomPrice = parseFloat(reservationData.roomTypePrice || "378.07");
//   const totalPrice = (roomPrice * reservationData.numRooms).toFixed(2);
//   const tax = (totalPrice * 0.12).toFixed(2);
//   const grandTotal = (parseFloat(totalPrice) + parseFloat(tax)).toFixed(2);

//   return (
//     <div className="review-page">
//       <div className="review-container">
//         <Toaster position="top-center" />
//         <Header />
//         <div className="review-card">
//           <button className="back-button" onClick={handleBack}>
//             <ChevronLeft size={20} />
//             <span>Back</span>
//           </button>

//           {/* Room Summary */}
//           <div className="room-summary">
//             <div className="room-image-container">
//               <img
//                 src="../../src/assets/images/bookingdetails/room 1.png?height=130&width=220"
//                 alt={reservationData.roomTypeName || "Ada Double Queen Room"}
//                 className="room-image"
//               />
//               <div className="room-details">
//                 <div className="booking-id">
//                   <span className="id-label">Booking ID</span>
//                   <div className="id-value-container">
//                     <span className="id-value">
//                       {sessionStorage.getItem("bookingID") || "0004565643K"}
//                     </span>
//                     <span className="pending-badge">
//                       <span className="pending-dot"></span>
//                       Pending
//                     </span>
//                   </div>
//                 </div>
//                 <h2 className="room-name">
//                   {reservationData.roomTypeName || "Ada Double Queen"}
//                 </h2>
//                 <p className="room-description">Perfect for business travelers</p>
//                 <p className="room-price">
//                   Per day ${reservationData.roomTypePrice || "378.07"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Guest Details */}
//           <section className="details-section">
//             <h3 className="section-title">Guest details</h3>
//             <div className="details-content">
//               <div className="detail-row">
//                 <span className="detail-label">Name</span>
//                 <span className="cr-detail-value">
//                   {reservationData.guestFirstName} {reservationData.guestLastName}
//                 </span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Email</span>
//                 <span className="cr-detail-value">
//                   {reservationData.guestEmail}
//                 </span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Phone</span>
//                 <span className="cr-detail-value">
//                   {reservationData.guestPhone}
//                 </span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Country</span>
//                 <span className="cr-detail-value">
//                   {reservationData.guestCountry}
//                 </span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Postal Code</span>
//                 <span className="cr-detail-value">
//                   {reservationData.guestZip}
//                 </span>
//               </div>
//             </div>
//           </section>

//           {/* Booking Details */}
//           <section className="details-section">
//             <h3 className="section-title">Booking details</h3>
//             <div className="details-content">
//               {/* Check-In/Check-Out */}
//               <div className="detail-row with-edit">
//                 <div className="detail-col">
//                   <span className="cr-detail-label">Check-In/Check-Out</span>
//                   <span className="cr-detail-value">
//                     {formatDisplayDate(reservationData.checkInDate)} -{" "}
//                     {formatDisplayDate(reservationData.checkOutDate)}
//                   </span>
//                 </div>
//               </div>

//               {/* Rooms and Guests */}
//               <div className="detail-row with-edit">
//                 <div className="detail-col">
//                   <div className="detail-col-split">
//                     <div className="detail-col-item">
//                       <span className="cr-detail-label">No. of Rooms</span>
//                       <span className="cr-detail-value">
//                         {reservationData.numRooms}
//                       </span>
//                     </div>
//                     <div className="detail-col-item">
//                       <span className="cr-detail-label">Guest</span>
//                       <span className="cr-detail-value">
//                         {reservationData.numAdults} Adult
//                         {reservationData.numAdults > 1 ? "s" : ""}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Payment Info */}
//           <section className="details-section">
//             <h3 className="section-title">Payment info</h3>
//             <div className="details-content-payment">
//               <div className="detail-row-payment">
//                 <span className="cr-detail-label">Due amount</span>
//                 <div className="price-container">
//                   <span className="current-price">${grandTotal}</span>
//                   <span className="original-price">${totalPrice}</span>
//                 </div>
//               </div>
//               <div className="payment-method">
//                 <div className="payment-method-option">
//                   <div className="checkbox-container blue">
//                     <input
//                       type="checkbox"
//                       id="cashPayment"
//                       className="checkbox-input"
//                       checked={
//                         reservationData.paymentMethod === "cash"
//                       }
//                       readOnly
//                     />
//                     <img
//                       src="../../src/assets/images/cash-in.png"
//                       className="card-icon"
//                       alt="cash"
//                     />
//                   </div>
//                   <span className="payment-method-text">Insert Cash</span>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <div className="price-summary">
//             <div className="price-container">
//               <span className="price-amount">${grandTotal}</span>
//               <span className="price-details">
//                 / Night • Includes taxes and other fees.
//               </span>
//             </div>
//           </div>

//           <button
//             className="confirm-button"
//             onClick={confirmReservation}
//             disabled={loading}
//           >
//             {loading ? (
//               <span>Processing...</span>
//             ) : (
//               <>
//                 <span>Confirm Reservation</span>
//                 <ChevronRight size={20} />
//               </>
//             )}
//           </button>
//         </div>
//         <HelpFooter />
//       </div>
//     </div>
//   );
// }




// import { useState, useEffect } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   ChevronLeft,
//   Edit,
//   ChevronRight,
//   HandHelpingIcon as HelpIcon,
// } from "lucide-react";
// import "./ConfirmReservation.css";
// import Header from "../../components/Header/header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// import qs from "qs";
// import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";

// export default function ConfirmReservation() {
//   const navigate = useNavigate();
//   const [isEditingGuest, setIsEditingGuest] = useState(false);
//   const [isEditingDates, setIsEditingDates] = useState(false);
//   const [isEditingRoomsGuests, setIsEditingRoomsGuests] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [reservationData, setReservationData] = useState(null);

//   // Initialize from sessionStorage
//   useEffect(() => {
//     const data = {
//       checkInDate: sessionStorage.getItem("checkInDate"),
//       checkOutDate: sessionStorage.getItem("checkOutDate"),
//       numRooms: Number(sessionStorage.getItem("numRooms")),
//       numAdults: Number(sessionStorage.getItem("numAdults")),
//       selectedRoomTypeID: sessionStorage.getItem("selectedRoomTypeID"),
//       guestFirstName: sessionStorage.getItem("guestFirstName"),
//       guestLastName: sessionStorage.getItem("guestLastName"),
//       guestEmail: sessionStorage.getItem("guestEmail"),
//       guestPhone: sessionStorage.getItem("guestPhone"),
//       guestCountry: sessionStorage.getItem("guestCountry") || "US",
//       guestZip: sessionStorage.getItem("guestZip"),
//       paymentMethod: sessionStorage.getItem("paymentMethod"),
//       roomTypeName: sessionStorage.getItem("roomTypeName"),
//       roomTypePrice: sessionStorage.getItem("roomTypePrice"),
//     };
    
//     setReservationData(data);
//   }, []);

//   // Toggle editing for guest details
//   const toggleGuestEditing = () => {
//     if (isEditingGuest) {
//       // Save guest details to sessionStorage
//       sessionStorage.setItem("guestFirstName", reservationData.guestFirstName);
//       sessionStorage.setItem("guestLastName", reservationData.guestLastName);
//       sessionStorage.setItem("guestEmail", reservationData.guestEmail);
//       sessionStorage.setItem("guestPhone", reservationData.guestPhone);
//       sessionStorage.setItem("guestCountry", reservationData.guestCountry);
//       sessionStorage.setItem("guestZip", reservationData.guestZip);
//     }
//     setIsEditingGuest(!isEditingGuest);
//   };

//   // Toggle editing for dates
//   const toggleDatesEditing = () => {
//     if (isEditingDates) {
//       // Save dates to sessionStorage
//       sessionStorage.setItem("checkInDate", reservationData.checkInDate);
//       sessionStorage.setItem("checkOutDate", reservationData.checkOutDate);
//     }
//     setIsEditingDates(!isEditingDates);
//   };

//   // Toggle editing for rooms and guests
//   const toggleRoomsGuestsEditing = () => {
//     if (isEditingRoomsGuests) {
//       // Save room and guest details to sessionStorage
//       sessionStorage.setItem("numRooms", reservationData.numRooms);
//       sessionStorage.setItem("numAdults", reservationData.numAdults);
//     }
//     setIsEditingRoomsGuests(!isEditingRoomsGuests);
//   };

//   // Handle guest detail changes
//   const handleGuestChange = (field, value) => {
//     setReservationData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const confirmReservation = async () => {
//     if (!reservationData) return;

//     setLoading(true);
//     const requestData = {
//       rooms: JSON.stringify([
//         {
//           roomTypeID: reservationData.selectedRoomTypeID,
//           quantity: reservationData.numRooms,
//         },
//       ]),
//       startDate: reservationData.checkInDate,
//       endDate: reservationData.checkOutDate,
//       guestFirstName: reservationData.guestFirstName,
//       guestLastName: reservationData.guestLastName,
//       guestGender: "M", // Default as in original
//       guestCountry: reservationData.guestCountry,
//       guestZip: reservationData.guestZip,
//       guestEmail: reservationData.guestEmail,
//       guestPhone: reservationData.guestPhone,
//       adults: JSON.stringify([
//         {
//           roomTypeID: reservationData.selectedRoomTypeID,
//           quantity: reservationData.numAdults,
//         },
//       ]),
//       children: JSON.stringify([
//         { roomTypeID: reservationData.selectedRoomTypeID, quantity: 0 },
//       ]),
//       paymentMethod: reservationData.paymentMethod,
//       propertyID: propertyID,
//     };

//     try {
//       const response = await axios.post(
//         `${BASE_API_URL}/reservation/postReservation`,
//         qs.stringify(requestData),
//         {
//           headers: {
//             accept: "application/json",
//             authorization: `Bearer ${API_KEY}`,
//             "x-api-key": API_KEY,
//             "content-type": "application/x-www-form-urlencoded",
//           },
//         }
//       );

//       if (response.data.success) {
//         const reservationID = response.data.reservationID;
//         sessionStorage.setItem("reservationID", reservationID);
//         sessionStorage.setItem("bookingID", `000${reservationID}K`);
        
//         toast.success("Reservation confirmed!");
//         navigate("/payment");
//       } else {
//         toast.error("Reservation failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Reservation Error:", error);
//       toast.error("Error processing reservation.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   if (!reservationData) {
//     return (
//       <div className="review-page">
//         <div className="review-container">
//           <Header />
//           <div className="loading-container">
//             <p>Loading reservation details...</p>
//           </div>
//           <HelpFooter />
//         </div>
//       </div>
//     );
//   }

//   // Format dates for display
//   const formatDisplayDate = (dateStr) => {
//     const options = { month: 'short', day: 'numeric' };
//     return new Date(dateStr).toLocaleDateString("en-US", options);
//   };

//   // Calculate price
//   const roomPrice = parseFloat(reservationData.roomTypePrice || "159");
//   const totalPrice = (roomPrice * reservationData.numRooms).toFixed(2);
//   const tax = (totalPrice * 0.12).toFixed(2);
//   const grandTotal = (parseFloat(totalPrice) + parseFloat(tax)).toFixed(2);

//   return (
//     <div className="review-page">
//       <div className="review-container">
//         <Toaster position="top-center" />
//         <Header value="Reservation"/>
//         <div className="review-card">
//           <button className="back-button" onClick={handleBack}>
//             <ChevronLeft size={20} />
//             <span>Back</span>
//           </button>

//           {/* Room Summary */}
//           <div className="room-summary">
//             <div className="room-image-container">
//               <img
//                 src="/assets/images/bookingdetails/room 1.png?height=130&width=220"
//                 alt={reservationData.roomTypeName || "Ada Double Queen Room"}
//                 className="room-image"
//               />
//               <div className="room-details">
//                 <div className="booking-id">
//                   <span className="id-label">Booking ID</span>
//                   <div className="id-value-container">
//                     <span className="id-value">
//                       {sessionStorage.getItem("bookingID") || "0004565643K"}
//                     </span>
//                     <span className="pending-badge">
//                       <span className="pending-dot"></span>
//                       Pending
//                     </span>
//                   </div>
//                 </div>
//                 <h2 className="room-name">
//                   {reservationData.roomTypeName || "Ada Double Queen"}
//                 </h2>
//                 <p className="room-description">Perfect for business travelers</p>
//                 <p className="room-price">
//                   Per day ${reservationData.roomTypePrice || "378.07"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Guest Details */}
//           <section className="details-section">
//             <h3 className="section-title">Guest details</h3>
//             <div className="details-content">
//               <div className="detail-row">
//                 <span className="detail-label">First Name</span>
//                 {isEditingGuest ? (
//                   <input
//                     type="text"
//                     className="cr-guestdetail-value"
//                     value={reservationData.guestFirstName}
//                     onChange={(e) => handleGuestChange("guestFirstName", e.target.value)}
//                   />
//                 ) : (
//                   <span className="cr-detail-value">
//                     {reservationData.guestFirstName}
//                   </span>
//                 )}
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Last Name</span>
//                 {isEditingGuest ? (
//                   <input
//                     type="text"
//                     className="cr-guestdetail-value"
//                     value={reservationData.guestLastName}
//                     onChange={(e) => handleGuestChange("guestLastName", e.target.value)}
//                   />
//                 ) : (
//                   <span className="cr-detail-value">
//                     {reservationData.guestLastName}
//                   </span>
//                 )}
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Email</span>
//                 {isEditingGuest ? (
//                   <input
//                     type="email"
//                     className="cr-guestdetail-value"
//                     value={reservationData.guestEmail}
//                     onChange={(e) => handleGuestChange("guestEmail", e.target.value)}
//                   />
//                 ) : (
//                   <span className="cr-detail-value">
//                     {reservationData.guestEmail}
//                   </span>
//                 )}
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Phone</span>
//                 {isEditingGuest ? (
//                   <input
//                     type="tel"
//                     className="cr-guestdetail-value"
//                     value={reservationData.guestPhone}
//                     onChange={(e) => handleGuestChange("guestPhone", e.target.value)}
//                   />
//                 ) : (
//                   <span className="cr-detail-value">
//                     {reservationData.guestPhone}
//                   </span>
//                 )}
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Country</span>
//                 {isEditingGuest ? (
//                   <input
//                     type="text"
//                     className="cr-guestdetail-value"
//                     value={reservationData.guestCountry}
//                     onChange={(e) => handleGuestChange("guestCountry", e.target.value)}
//                   />
//                 ) : (
//                   <span className="cr-detail-value">
//                     {reservationData.guestCountry}
//                   </span>
//                 )}
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Postal Code</span>
//                 {isEditingGuest ? (
//                   <input
//                     type="text"
//                     className="cr-guestdetail-value"
//                     value={reservationData.guestZip}
//                     onChange={(e) => handleGuestChange("guestZip", e.target.value)}
//                   />
//                 ) : (
//                   <span className="cr-detail-value">
//                     {reservationData.guestZip}
//                   </span>
//                 )}
//               </div>
//               <button
//                 className="edit-button"
//                 onClick={toggleGuestEditing}
//               >
//                 <Edit size={20} />
//                 <span>{isEditingGuest ? "Save" : "Edit"}</span>
//               </button>
//             </div>
//           </section>

//           {/* Booking Details */}
//           <section className="details-section">
//             <h3 className="section-title">Booking details</h3>
//             <div className="details-content">
//               {/* Check-In/Check-Out */}
//               <div className="detail-row with-edit">
//                 <div className="detail-col">
//                   <span className="cr-detail-label">Check-In/Check-Out</span>
//                   {isEditingDates ? (
//                     <div className="date-inputs">
//                       <input
//                         type="date"
//                         value={reservationData.checkInDate}
//                         onChange={(e) => 
//                           setReservationData(prev => ({
//                             ...prev,
//                             checkInDate: e.target.value
//                           }))
//                         }
//                         className="cr-date-picker"
//                       />
//                       <input
//                         type="date"
//                         value={reservationData.checkOutDate}
//                         onChange={(e) => 
//                           setReservationData(prev => ({
//                             ...prev,
//                             checkOutDate: e.target.value
//                           }))
//                         }
//                         className="cr-date-picker"
//                       />
//                     </div>
//                   ) : (
//                     <span className="cr-detail-value">
//                       {formatDisplayDate(reservationData.checkInDate)} -{" "}
//                       {formatDisplayDate(reservationData.checkOutDate)}
//                     </span>
//                   )}
//                 </div>
//                 <button
//                   className="small-edit-button"
//                   onClick={toggleDatesEditing}
//                 >
//                   <Edit size={14} />
//                   <span>{isEditingDates ? "Save" : "Edit"}</span>
//                 </button>
//               </div>

//               {/* Rooms and Guests */}
//               <div className="detail-row with-edit">
//                 <div className="detail-col">
//                   <div className="detail-col-split">
//                     <div className="detail-col-item">
//                       <span className="cr-detail-label">No. of Rooms</span>
//                       {isEditingRoomsGuests ? (
//                         <select
//                           value={reservationData.numRooms}
//                           onChange={(e) => 
//                             setReservationData(prev => ({
//                               ...prev,
//                               numRooms: parseInt(e.target.value)
//                             }))
//                           }
//                           className="cr-detail-value"
//                         >
//                           {[1, 2, 3, 4, 5].map((num) => (
//                             <option key={num} value={num}>
//                               {num}
//                             </option>
//                           ))}
//                         </select>
//                       ) : (
//                         <span className="cr-detail-value">
//                           {reservationData.numRooms}
//                         </span>
//                       )}
//                     </div>
//                     <div className="detail-col-item">
//                       <span className="cr-detail-label">Adults</span>
//                       {isEditingRoomsGuests ? (
//                         <select
//                           value={reservationData.numAdults}
//                           onChange={(e) => 
//                             setReservationData(prev => ({
//                               ...prev,
//                               numAdults: parseInt(e.target.value)
//                             }))
//                           }
//                           className="cr-detail-value"
//                         >
//                           {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
//                             <option key={num} value={num}>
//                               {num} {num === 1 ? "Adult" : "Adults"}
//                             </option>
//                           ))}
//                         </select>
//                       ) : (
//                         <span className="cr-detail-value">
//                           {reservationData.numAdults} {reservationData.numAdults === 1 ? "Adult" : "Adults"}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   className="small-edit-button"
//                   onClick={toggleRoomsGuestsEditing}
//                 >
//                   <Edit size={14} />
//                   <span>{isEditingRoomsGuests ? "Save" : "Edit"}</span>
//                 </button>
//               </div>
//             </div>
//           </section>

//           {/* Payment Info */}
//           <section className="details-section">
//             <h3 className="section-title">Payment info</h3>
//             <div className="details-content-payment">
//               <div className="detail-row-payment">
//                 <span className="cr-detail-label">Due amount</span>
//                 <div className="price-container">
//                   <span className="current-price">${grandTotal}</span>
//                   <span className="original-price">$220</span>
//                 </div>
//               </div>
//               <div className="payment-method">
//                 <div className="payment-method-option">
//                   <div className="checkbox-container blue">
//                     <input
//                       type="checkbox"
//                       id="cashPayment"
//                       className="checkbox-input"
//                       checked={
//                         reservationData.paymentMethod === "cash"
//                       }
//                       readOnly
//                     />
//                     <img
//                       src="/assets/images/cash-in.png"
//                       className="card-icon"
//                       alt="cash"
//                     />
//                   </div>
//                   <span className="payment-method-text">Insert Cash</span>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <div className="price-summary">
//             <div className="price-container">
//               <span className="price-amount">${grandTotal}</span>
//               <span className="price-details">
//                 / Night • Includes taxes and other fees.
//               </span>
//             </div>
//           </div>

//           <button
//             className="confirm-button"
//             onClick={confirmReservation}
//             disabled={loading}
//           >
//             {loading ? (
//               <span>Processing...</span>
//             ) : (
//               <>
//                 <span>Confirm Reservation</span>
//                 <ChevronRight size={20} />
//               </>
//             )}
//           </button>
//         </div>
//         {/* <HelpFooter /> */}
//       </div>
//     </div>
//   );
// }







// import { useState, useEffect, useRef } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   ChevronLeft,
//   Edit,
//   ChevronRight,
//   HandHelpingIcon as HelpIcon,
// } from "lucide-react";
// import "./ConfirmReservation.css";
// import Header from "../../components/Header/header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// import VirtualKeyboard from "../../components/KeyBoard/KeyBoard";
// import qs from "qs";
// import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";

// export default function ConfirmReservation() {
//   const navigate = useNavigate();
//   const [isEditingGuest, setIsEditingGuest] = useState(false);
//   const [isEditingDates, setIsEditingDates] = useState(false);
//   const [isEditingRoomsGuests, setIsEditingRoomsGuests] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [reservationData, setReservationData] = useState(null);

//   // Keyboard state management
//   const [keyboardState, setKeyboardState] = useState({
//     isVisible: false,
//     activeField: null,
//     inputType: "text",
//   });

//   const inputRefs = useRef({});

//   // Initialize from sessionStorage
//   useEffect(() => {
//     const data = {
//       checkInDate: sessionStorage.getItem("checkInDate"),
//       checkOutDate: sessionStorage.getItem("checkOutDate"),
//       numRooms: Number(sessionStorage.getItem("numRooms")),
//       numAdults: Number(sessionStorage.getItem("numAdults")),
//       selectedRoomTypeID: sessionStorage.getItem("selectedRoomTypeID"),
//       guestFirstName: sessionStorage.getItem("guestFirstName"),
//       guestLastName: sessionStorage.getItem("guestLastName"),
//       guestEmail: sessionStorage.getItem("guestEmail"),
//       guestPhone: sessionStorage.getItem("guestPhone"),
//       guestCountry: sessionStorage.getItem("guestCountry") || "US",
//       guestZip: sessionStorage.getItem("guestZip"),
//       paymentMethod: sessionStorage.getItem("paymentMethod"),
//       roomTypeName: sessionStorage.getItem("roomTypeName"),
//       roomTypePrice: sessionStorage.getItem("roomTypePrice"),
//     };
    
//     setReservationData(data);
//   }, []);

//   // Keyboard handlers
//   const handleInputFocus = (fieldName, inputType = "text") => {
//     setKeyboardState({
//       isVisible: true,
//       activeField: fieldName,
//       inputType,
//     });
//   };

//   const handleKeyboardKeyPress = (key) => {
//     if (keyboardState.activeField && reservationData) {
//       const currentValue = reservationData[keyboardState.activeField] || "";
//       handleGuestChange(keyboardState.activeField, currentValue + key);
//     }
//   };

//   const handleKeyboardBackspace = () => {
//     if (keyboardState.activeField && reservationData) {
//       const currentValue = reservationData[keyboardState.activeField] || "";
//       handleGuestChange(keyboardState.activeField, currentValue.slice(0, -1));
//     }
//   };

//   const handleKeyboardEnter = () => {
//     setKeyboardState(prev => ({ 
//       ...prev, 
//       isVisible: false, 
//       activeField: null 
//     }));
//   };

//   const handleKeyboardClose = () => {
//     setKeyboardState(prev => ({ 
//       ...prev, 
//       isVisible: false, 
//       activeField: null 
//     }));
//   };

//   // Toggle editing for guest details
//   const toggleGuestEditing = () => {
//     if (isEditingGuest) {
//       // Save guest details to sessionStorage
//       sessionStorage.setItem("guestFirstName", reservationData.guestFirstName);
//       sessionStorage.setItem("guestLastName", reservationData.guestLastName);
//       sessionStorage.setItem("guestEmail", reservationData.guestEmail);
//       sessionStorage.setItem("guestPhone", reservationData.guestPhone);
//       sessionStorage.setItem("guestCountry", reservationData.guestCountry);
//       sessionStorage.setItem("guestZip", reservationData.guestZip);
//     }
//     setIsEditingGuest(!isEditingGuest);
//     // Close keyboard when toggling edit mode
//     setKeyboardState(prev => ({ 
//       ...prev, 
//       isVisible: false, 
//       activeField: null 
//     }));
//   };

//   // Toggle editing for dates
//   const toggleDatesEditing = () => {
//     if (isEditingDates) {
//       // Save dates to sessionStorage
//       sessionStorage.setItem("checkInDate", reservationData.checkInDate);
//       sessionStorage.setItem("checkOutDate", reservationData.checkOutDate);
//     }
//     setIsEditingDates(!isEditingDates);
//     // Close keyboard when toggling edit mode
//     setKeyboardState(prev => ({ 
//       ...prev, 
//       isVisible: false, 
//       activeField: null 
//     }));
//   };

//   // Toggle editing for rooms and guests
//   const toggleRoomsGuestsEditing = () => {
//     if (isEditingRoomsGuests) {
//       // Save room and guest details to sessionStorage
//       sessionStorage.setItem("numRooms", reservationData.numRooms);
//       sessionStorage.setItem("numAdults", reservationData.numAdults);
//     }
//     setIsEditingRoomsGuests(!isEditingRoomsGuests);
//     // Close keyboard when toggling edit mode
//     setKeyboardState(prev => ({ 
//       ...prev, 
//       isVisible: false, 
//       activeField: null 
//     }));
//   };

//   // Handle guest detail changes
//   const handleGuestChange = (field, value) => {
//     setReservationData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const confirmReservation = async () => {
//     if (!reservationData) return;

//     setLoading(true);
//     const requestData = {
//       rooms: JSON.stringify([
//         {
//           roomTypeID: reservationData.selectedRoomTypeID,
//           quantity: reservationData.numRooms,
//         },
//       ]),
//       startDate: reservationData.checkInDate,
//       endDate: reservationData.checkOutDate,
//       guestFirstName: reservationData.guestFirstName,
//       guestLastName: reservationData.guestLastName,
//       guestGender: "M", // Default as in original
//       guestCountry: reservationData.guestCountry,
//       guestZip: reservationData.guestZip,
//       guestEmail: reservationData.guestEmail,
//       guestPhone: reservationData.guestPhone,
//       adults: JSON.stringify([
//         {
//           roomTypeID: reservationData.selectedRoomTypeID,
//           quantity: reservationData.numAdults,
//         },
//       ]),
//       children: JSON.stringify([
//         { roomTypeID: reservationData.selectedRoomTypeID, quantity: 0 },
//       ]),
//       paymentMethod: reservationData.paymentMethod,
//       propertyID: propertyID,
//     };

//     try {
//       const response = await axios.post(
//         `${BASE_API_URL}/reservation/postReservation`,
//         qs.stringify(requestData),
//         {
//           headers: {
//             accept: "application/json",
//             authorization: `Bearer ${API_KEY}`,
//             "x-api-key": API_KEY,
//             "content-type": "application/x-www-form-urlencoded",
//           },
//         }
//       );

//       if (response.data.success) {
//         const reservationID = response.data.reservationID;
//         sessionStorage.setItem("reservationID", reservationID);
//         sessionStorage.setItem("bookingID", `000${reservationID}K`);
        
//         toast.success("Reservation confirmed!");
//         navigate("/payment");
//       } else {
//         toast.error("Reservation failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Reservation Error:", error);
//       toast.error("Error processing reservation.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   if (!reservationData) {
//     return (
//       <div className="review-page">
//         <div className="review-container">
//           <Header />
//           <div className="loading-container">
//             <p>Loading reservation details...</p>
//           </div>
//           <HelpFooter />
//         </div>
//       </div>
//     );
//   }

//   // Format dates for display
//   const formatDisplayDate = (dateStr) => {
//     const options = { month: 'short', day: 'numeric' };
//     return new Date(dateStr).toLocaleDateString("en-US", options);
//   };

//   // Calculate price
//   const roomPrice = parseFloat(reservationData.roomTypePrice || "159");
//   const totalPrice = (roomPrice * reservationData.numRooms).toFixed(2);
//   const tax = (totalPrice * 0.12).toFixed(2);
//   const grandTotal = (parseFloat(totalPrice) + parseFloat(tax)).toFixed(2);

//   return (
//     <div className="review-page">
//       <div className="review-container">
//         <Toaster position="top-center" />
//         <Header value="Reservation"/>
//         <div className="review-card">
//           <button className="back-button" onClick={handleBack}>
//             <ChevronLeft size={20} />
//             <span>Back</span>
//           </button>

//           {/* Room Summary */}
//           <div className="room-summary">
//             <div className="room-image-container">
//               <img
//                 src="/assets/images/bookingdetails/room 1.png?height=130&width=220"
//                 alt={reservationData.roomTypeName || "Ada Double Queen Room"}
//                 className="room-image"
//               />
//               <div className="room-details">
//                 <div className="booking-id">
//                   <span className="id-label">Booking ID</span>
//                   <div className="id-value-container">
//                     <span className="id-value">
//                       {sessionStorage.getItem("bookingID") || "0004565643K"}
//                     </span>
//                     <span className="pending-badge">
//                       <span className="pending-dot"></span>
//                       Pending
//                     </span>
//                   </div>
//                 </div>
//                 <h2 className="room-name">
//                   {reservationData.roomTypeName || "Ada Double Queen"}
//                 </h2>
//                 <p className="room-description">Perfect for business travelers</p>
//                 <p className="room-price">
//                   Per day ${reservationData.roomTypePrice || "378.07"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Guest Details */}
//           <section className="details-section">
//             <h3 className="section-title">Guest details</h3>
//             <div className="details-content">
//               <div className="detail-row">
//                 <span className="detail-label">First Name</span>
//                 {isEditingGuest ? (
//                   <input
//                     ref={el => inputRefs.current.guestFirstName = el}
//                     type="text"
//                     className="cr-guestdetail-value"
//                     value={reservationData.guestFirstName || ""}
//                     onChange={(e) => handleGuestChange("guestFirstName", e.target.value)}
//                     onFocus={() => handleInputFocus("guestFirstName", "text")}
//                   />
//                 ) : (
//                   <span className="cr-detail-value">
//                     {reservationData.guestFirstName}
//                   </span>
//                 )}
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Last Name</span>
//                 {isEditingGuest ? (
//                   <input
//                     ref={el => inputRefs.current.guestLastName = el}
//                     type="text"
//                     className="cr-guestdetail-value"
//                     value={reservationData.guestLastName || ""}
//                     onChange={(e) => handleGuestChange("guestLastName", e.target.value)}
//                     onFocus={() => handleInputFocus("guestLastName", "text")}
//                   />
//                 ) : (
//                   <span className="cr-detail-value">
//                     {reservationData.guestLastName}
//                   </span>
//                 )}
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Email</span>
//                 {isEditingGuest ? (
//                   <input
//                     ref={el => inputRefs.current.guestEmail = el}
//                     type="email"
//                     className="cr-guestdetail-value"
//                     value={reservationData.guestEmail || ""}
//                     onChange={(e) => handleGuestChange("guestEmail", e.target.value)}
//                     onFocus={() => handleInputFocus("guestEmail", "email")}
//                   />
//                 ) : (
//                   <span className="cr-detail-value">
//                     {reservationData.guestEmail}
//                   </span>
//                 )}
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Phone</span>
//                 {isEditingGuest ? (
//                   <input
//                     ref={el => inputRefs.current.guestPhone = el}
//                     type="tel"
//                     className="cr-guestdetail-value"
//                     value={reservationData.guestPhone || ""}
//                     onChange={(e) => handleGuestChange("guestPhone", e.target.value)}
//                     onFocus={() => handleInputFocus("guestPhone", "tel")}
//                   />
//                 ) : (
//                   <span className="cr-detail-value">
//                     {reservationData.guestPhone}
//                   </span>
//                 )}
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Country</span>
//                 {isEditingGuest ? (
//                   <input
//                     ref={el => inputRefs.current.guestCountry = el}
//                     type="text"
//                     className="cr-guestdetail-value"
//                     value={reservationData.guestCountry || ""}
//                     onChange={(e) => handleGuestChange("guestCountry", e.target.value)}
//                     onFocus={() => handleInputFocus("guestCountry", "text")}
//                   />
//                 ) : (
//                   <span className="cr-detail-value">
//                     {reservationData.guestCountry}
//                   </span>
//                 )}
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Postal Code</span>
//                 {isEditingGuest ? (
//                   <input
//                     ref={el => inputRefs.current.guestZip = el}
//                     type="text"
//                     className="cr-guestdetail-value"
//                     value={reservationData.guestZip || ""}
//                     onChange={(e) => handleGuestChange("guestZip", e.target.value)}
//                     onFocus={() => handleInputFocus("guestZip", "number")}
//                   />
//                 ) : (
//                   <span className="cr-detail-value">
//                     {reservationData.guestZip}
//                   </span>
//                 )}
//               </div>
//               <button
//                 className="edit-button"
//                 onClick={toggleGuestEditing}
//               >
//                 <Edit size={20} />
//                 <span>{isEditingGuest ? "Save" : "Edit"}</span>
//               </button>
//             </div>
//           </section>

//           {/* Booking Details */}
//           <section className="details-section">
//             <h3 className="section-title">Booking details</h3>
//             <div className="details-content">
//               {/* Check-In/Check-Out */}
//               <div className="detail-row with-edit">
//                 <div className="detail-col">
//                   <span className="cr-detail-label">Check-In/Check-Out</span>
//                   {isEditingDates ? (
//                     <div className="date-inputs">
//                       <input
//                         type="date"
//                         value={reservationData.checkInDate || ""}
//                         onChange={(e) => 
//                           setReservationData(prev => ({
//                             ...prev,
//                             checkInDate: e.target.value
//                           }))
//                         }
//                         className="cr-date-picker"
//                       />
//                       <input
//                         type="date"
//                         value={reservationData.checkOutDate || ""}
//                         onChange={(e) => 
//                           setReservationData(prev => ({
//                             ...prev,
//                             checkOutDate: e.target.value
//                           }))
//                         }
//                         className="cr-date-picker"
//                       />
//                     </div>
//                   ) : (
//                     <span className="cr-detail-value">
//                       {formatDisplayDate(reservationData.checkInDate)} -{" "}
//                       {formatDisplayDate(reservationData.checkOutDate)}
//                     </span>
//                   )}
//                 </div>
//                 <button
//                   className="small-edit-button"
//                   onClick={toggleDatesEditing}
//                 >
//                   <Edit size={14} />
//                   <span>{isEditingDates ? "Save" : "Edit"}</span>
//                 </button>
//               </div>

//               {/* Rooms and Guests */}
//               <div className="detail-row with-edit">
//                 <div className="detail-col">
//                   <div className="detail-col-split">
//                     <div className="detail-col-item">
//                       <span className="cr-detail-label">No. of Rooms</span>
//                       {isEditingRoomsGuests ? (
//                         <select
//                           value={reservationData.numRooms || 1}
//                           onChange={(e) => 
//                             setReservationData(prev => ({
//                               ...prev,
//                               numRooms: parseInt(e.target.value)
//                             }))
//                           }
//                           className="cr-detail-value"
//                         >
//                           {[1, 2, 3, 4, 5].map((num) => (
//                             <option key={num} value={num}>
//                               {num}
//                             </option>
//                           ))}
//                         </select>
//                       ) : (
//                         <span className="cr-detail-value">
//                           {reservationData.numRooms}
//                         </span>
//                       )}
//                     </div>
//                     <div className="detail-col-item">
//                       <span className="cr-detail-label">Adults</span>
//                       {isEditingRoomsGuests ? (
//                         <select
//                           value={reservationData.numAdults || 1}
//                           onChange={(e) => 
//                             setReservationData(prev => ({
//                               ...prev,
//                               numAdults: parseInt(e.target.value)
//                             }))
//                           }
//                           className="cr-detail-value"
//                         >
//                           {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
//                             <option key={num} value={num}>
//                               {num} {num === 1 ? "Adult" : "Adults"}
//                             </option>
//                           ))}
//                         </select>
//                       ) : (
//                         <span className="cr-detail-value">
//                           {reservationData.numAdults} {reservationData.numAdults === 1 ? "Adult" : "Adults"}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   className="small-edit-button"
//                   onClick={toggleRoomsGuestsEditing}
//                 >
//                   <Edit size={14} />
//                   <span>{isEditingRoomsGuests ? "Save" : "Edit"}</span>
//                 </button>
//               </div>
//             </div>
//           </section>

//           {/* Payment Info */}
//           <section className="details-section">
//             <h3 className="section-title">Payment info</h3>
//             <div className="details-content-payment">
//               <div className="detail-row-payment">
//                 <span className="cr-detail-label">Due amount</span>
//                 <div className="price-container">
//                   <span className="current-price">${grandTotal}</span>
//                   <span className="original-price">$220</span>
//                 </div>
//               </div>
//               <div className="payment-method">
//                 <div className="payment-method-option">
//                   <div className="checkbox-container blue">
//                     <input
//                       type="checkbox"
//                       id="cashPayment"
//                       className="checkbox-input"
//                       checked={
//                         reservationData.paymentMethod === "cash"
//                       }
//                       readOnly
//                     />
//                     <img
//                       src="/assets/images/cash-in.png"
//                       className="card-icon"
//                       alt="cash"
//                     />
//                   </div>
//                   <span className="payment-method-text">Insert Cash</span>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <div className="price-summary">
//             <div className="price-container">
//               <span className="price-amount">${grandTotal}</span>
//               <span className="price-details">
//                 / Night • Includes taxes and other fees.
//               </span>
//             </div>
//           </div>

//           <button
//             className="confirm-button"
//             onClick={confirmReservation}
//             disabled={loading}
//           >
//             {loading ? (
//               <span>Processing...</span>
//             ) : (
//               <>
//                 <span>Confirm Reservation</span>
//                 <ChevronRight size={20} />
//               </>
//             )}
//           </button>
//         </div>
//         {/* <HelpFooter /> */}
//       </div>

//       <VirtualKeyboard
//         isVisible={keyboardState.isVisible}
//         onKeyPress={handleKeyboardKeyPress}
//         onBackspace={handleKeyboardBackspace}
//         onEnter={handleKeyboardEnter}
//         onClose={handleKeyboardClose}
//         inputType={keyboardState.inputType}
//       />
//     </div>
//   );
// }







import { useState, useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Edit,
  ChevronRight,
  HandHelpingIcon as HelpIcon,
} from "lucide-react";
import "./ConfirmReservation.css";
import Header from "../../components/Header/header";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import VirtualKeyboard from "../../components/KeyBoard/KeyBoard";
import qs from "qs";
import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";

export default function ConfirmReservation() {
  const navigate = useNavigate();
  const [isEditingGuest, setIsEditingGuest] = useState(false);
  const [isEditingDates, setIsEditingDates] = useState(false);
  const [isEditingRoomsGuests, setIsEditingRoomsGuests] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reservationData, setReservationData] = useState(null);

  // Keyboard state management
  const [keyboardState, setKeyboardState] = useState({
    isVisible: false,
    activeField: null,
    inputType: "text",
  });

  const inputRefs = useRef({});

  // Initialize from sessionStorage
  useEffect(() => {
    const data = {
      checkInDate: sessionStorage.getItem("checkInDate"),
      checkOutDate: sessionStorage.getItem("checkOutDate"),
      numRooms: Number(sessionStorage.getItem("numRooms")),
      numAdults: Number(sessionStorage.getItem("numAdults")),
      selectedRoomTypeID: sessionStorage.getItem("selectedRoomTypeID"),
      guestFirstName: sessionStorage.getItem("guestFirstName"),
      guestLastName: sessionStorage.getItem("guestLastName"),
      guestEmail: sessionStorage.getItem("guestEmail"),
      guestPhone: sessionStorage.getItem("guestPhone"),
      guestCountry: sessionStorage.getItem("guestCountry") || "US",
      guestZip: sessionStorage.getItem("guestZip"),
      paymentMethod: sessionStorage.getItem("paymentMethod"),
      roomTypeName: sessionStorage.getItem("roomTypeName"),
      roomTypePrice: sessionStorage.getItem("roomTypePrice"),
    };
    
    setReservationData(data);
  }, []);

  // Keyboard handlers
  const handleInputFocus = (fieldName, inputType = "text") => {
    setKeyboardState({
      isVisible: true,
      activeField: fieldName,
      inputType,
    });
  };

  const handleKeyboardKeyPress = (key) => {
    if (keyboardState.activeField && reservationData) {
      const currentValue = reservationData[keyboardState.activeField] || "";
      handleGuestChange(keyboardState.activeField, currentValue + key);
    }
  };

  const handleKeyboardBackspace = () => {
    if (keyboardState.activeField && reservationData) {
      const currentValue = reservationData[keyboardState.activeField] || "";
      handleGuestChange(keyboardState.activeField, currentValue.slice(0, -1));
    }
  };

  const handleKeyboardEnter = () => {
    setKeyboardState(prev => ({ 
      ...prev, 
      isVisible: false, 
      activeField: null 
    }));
  };

  const handleKeyboardClose = () => {
    setKeyboardState(prev => ({ 
      ...prev, 
      isVisible: false, 
      activeField: null 
    }));
  };

  // Toggle editing for guest details
  const toggleGuestEditing = () => {
    if (isEditingGuest) {
      // Save guest details to sessionStorage
      sessionStorage.setItem("guestFirstName", reservationData.guestFirstName);
      sessionStorage.setItem("guestLastName", reservationData.guestLastName);
      sessionStorage.setItem("guestEmail", reservationData.guestEmail);
      sessionStorage.setItem("guestPhone", reservationData.guestPhone);
      sessionStorage.setItem("guestCountry", reservationData.guestCountry);
      sessionStorage.setItem("guestZip", reservationData.guestZip);
    }
    setIsEditingGuest(!isEditingGuest);
    // Close keyboard when toggling edit mode
    setKeyboardState(prev => ({ 
      ...prev, 
      isVisible: false, 
      activeField: null 
    }));
  };

  // Toggle editing for dates
  const toggleDatesEditing = () => {
    if (isEditingDates) {
      // Save dates to sessionStorage
      sessionStorage.setItem("checkInDate", reservationData.checkInDate);
      sessionStorage.setItem("checkOutDate", reservationData.checkOutDate);
    }
    setIsEditingDates(!isEditingDates);
    // Close keyboard when toggling edit mode
    setKeyboardState(prev => ({ 
      ...prev, 
      isVisible: false, 
      activeField: null 
    }));
  };

  // Toggle editing for rooms and guests
  const toggleRoomsGuestsEditing = () => {
    if (isEditingRoomsGuests) {
      // Save room and guest details to sessionStorage
      sessionStorage.setItem("numRooms", reservationData.numRooms);
      sessionStorage.setItem("numAdults", reservationData.numAdults);
    }
    setIsEditingRoomsGuests(!isEditingRoomsGuests);
    // Close keyboard when toggling edit mode
    setKeyboardState(prev => ({ 
      ...prev, 
      isVisible: false, 
      activeField: null 
    }));
  };

  // Handle guest detail changes
  const handleGuestChange = (field, value) => {
    setReservationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const confirmReservation = async () => {
    if (!reservationData) return;

    setLoading(true);
    const requestData = {
      rooms: JSON.stringify([
        {
          roomTypeID: reservationData.selectedRoomTypeID,
          quantity: reservationData.numRooms,
        },
      ]),
      startDate: reservationData.checkInDate,
      endDate: reservationData.checkOutDate,
      guestFirstName: reservationData.guestFirstName,
      guestLastName: reservationData.guestLastName,
      guestGender: "M", // Default as in original
      guestCountry: reservationData.guestCountry,
      guestZip: reservationData.guestZip,
      guestEmail: reservationData.guestEmail,
      guestPhone: reservationData.guestPhone,
      adults: JSON.stringify([
        {
          roomTypeID: reservationData.selectedRoomTypeID,
          quantity: reservationData.numAdults,
        },
      ]),
      children: JSON.stringify([
        { roomTypeID: reservationData.selectedRoomTypeID, quantity: 0 },
      ]),
      paymentMethod: reservationData.paymentMethod,
      propertyID: propertyID,
    };

    try {
      const response = await axios.post(
        `${BASE_API_URL}/reservation/postReservation`,
        qs.stringify(requestData),
        {
          headers: {
            accept: "application/json",
            authorization: `Bearer ${API_KEY}`,
            "x-api-key": API_KEY,
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data.success) {
        const reservationID = response.data.reservationID;
        sessionStorage.setItem("reservationID", reservationID);
        sessionStorage.setItem("bookingID", `000${reservationID}K`);
        
        toast.success("Reservation confirmed!");
        navigate("/payment");
      } else {
        toast.error("Reservation failed. Please try again.");
      }
    } catch (error) {
      console.error("Reservation Error:", error);
      toast.error("Error processing reservation.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!reservationData) {
    return (
      <div className="review-page">
        <div className="review-container">
          <Header />
          <div className="loading-container">
            <p>Loading reservation details...</p>
          </div>
          <HelpFooter />
        </div>
      </div>
    );
  }

  // Format dates for display
  const formatDisplayDate = (dateStr) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString("en-US", options);
  };

  // Calculate price
  const roomPrice = parseFloat(reservationData.roomTypePrice || "159");
  const totalPrice = (roomPrice * reservationData.numRooms).toFixed(2);
  const tax = (totalPrice * 0.12).toFixed(2);
  const grandTotal = (parseFloat(totalPrice) + parseFloat(tax)).toFixed(2);

  return (
    <div className="review-page">
      <div className="review-container">
        <Toaster position="top-center" />
        <Header value="Reservation"/>
        <div className="review-card">
          <button className="back-button" onClick={handleBack}>
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>

          {/* Room Summary */}
          <div className="room-summary">
            <div className="room-image-container">
              <img
                src="/assets/images/bookingdetails/room 1.png?height=130&width=220"
                alt={reservationData.roomTypeName || "Ada Double Queen Room"}
                className="room-image"
              />
              <div className="room-details">
                <div className="booking-id">
                  <span className="id-label">Booking ID</span>
                  <div className="id-value-container">
                    <span className="id-value">
                      {sessionStorage.getItem("bookingID") || "0004565643K"}
                    </span>
                    <span className="pending-badge">
                      <span className="pending-dot"></span>
                      Pending
                    </span>
                  </div>
                </div>
                <h2 className="room-name">
                  {reservationData.roomTypeName || "Ada Double Queen"}
                </h2>
                <p className="room-description">Perfect for business travelers</p>
                <p className="room-price">
                  Per day ${reservationData.roomTypePrice || "378.07"}
                </p>
              </div>
            </div>
          </div>

          {/* Guest Details */}
          <section className={`details-section ${keyboardState.isVisible ? 'keyboard-active' : ''}`}>
            <h3 className="section-title">Guest details</h3>
            <div className="details-content">
              <div className="detail-row">
                <span className="detail-label">First Name</span>
                {isEditingGuest ? (
                  <input
                    ref={el => inputRefs.current.guestFirstName = el}
                    type="text"
                    className="cr-guestdetail-value"
                    value={reservationData.guestFirstName || ""}
                    onChange={(e) => handleGuestChange("guestFirstName", e.target.value)}
                    onFocus={() => handleInputFocus("guestFirstName", "text")}
                  />
                ) : (
                  <span className="cr-detail-value">
                    {reservationData.guestFirstName}
                  </span>
                )}
              </div>
              <div className="detail-row">
                <span className="detail-label">Last Name</span>
                {isEditingGuest ? (
                  <input
                    ref={el => inputRefs.current.guestLastName = el}
                    type="text"
                    className="cr-guestdetail-value"
                    value={reservationData.guestLastName || ""}
                    onChange={(e) => handleGuestChange("guestLastName", e.target.value)}
                    onFocus={() => handleInputFocus("guestLastName", "text")}
                  />
                ) : (
                  <span className="cr-detail-value">
                    {reservationData.guestLastName}
                  </span>
                )}
              </div>
              <div className="detail-row">
                <span className="detail-label">Email</span>
                {isEditingGuest ? (
                  <input
                    ref={el => inputRefs.current.guestEmail = el}
                    type="email"
                    className="cr-guestdetail-value"
                    value={reservationData.guestEmail || ""}
                    onChange={(e) => handleGuestChange("guestEmail", e.target.value)}
                    onFocus={() => handleInputFocus("guestEmail", "email")}
                  />
                ) : (
                  <span className="cr-detail-value">
                    {reservationData.guestEmail}
                  </span>
                )}
              </div>
              <div className="detail-row">
                <span className="detail-label">Phone</span>
                {isEditingGuest ? (
                  <input
                    ref={el => inputRefs.current.guestPhone = el}
                    type="tel"
                    className="cr-guestdetail-value"
                    value={reservationData.guestPhone || ""}
                    onChange={(e) => handleGuestChange("guestPhone", e.target.value)}
                    onFocus={() => handleInputFocus("guestPhone", "tel")}
                  />
                ) : (
                  <span className="cr-detail-value">
                    {reservationData.guestPhone}
                  </span>
                )}
              </div>
              <div className="detail-row">
                <span className="detail-label">Country</span>
                {isEditingGuest ? (
                  <input
                    ref={el => inputRefs.current.guestCountry = el}
                    type="text"
                    className="cr-guestdetail-value"
                    value={reservationData.guestCountry || ""}
                    onChange={(e) => handleGuestChange("guestCountry", e.target.value)}
                    onFocus={() => handleInputFocus("guestCountry", "text")}
                  />
                ) : (
                  <span className="cr-detail-value">
                    {reservationData.guestCountry}
                  </span>
                )}
              </div>
              <div className="detail-row">
                <span className="detail-label">Postal Code</span>
                {isEditingGuest ? (
                  <input
                    ref={el => inputRefs.current.guestZip = el}
                    type="text"
                    className="cr-guestdetail-value"
                    value={reservationData.guestZip || ""}
                    onChange={(e) => handleGuestChange("guestZip", e.target.value)}
                    onFocus={() => handleInputFocus("guestZip", "number")}
                  />
                ) : (
                  <span className="cr-detail-value">
                    {reservationData.guestZip}
                  </span>
                )}
              </div>
              <button
                className="edit-button"
                onClick={toggleGuestEditing}
              >
                <Edit size={20} />
                <span>{isEditingGuest ? "Save" : "Edit"}</span>
              </button>
            </div>
          </section>

          {/* Booking Details */}
          <section className={`details-section ${keyboardState.isVisible ? 'keyboard-active' : ''}`}>
            <h3 className="section-title">Booking details</h3>
            <div className="details-content">
              {/* Check-In/Check-Out */}
              <div className="detail-row with-edit">
                <div className="detail-col">
                  <span className="cr-detail-label">Check-In/Check-Out</span>
                  {isEditingDates ? (
                    <div className="date-inputs">
                      <input
                        type="date"
                        value={reservationData.checkInDate || ""}
                        onChange={(e) => 
                          setReservationData(prev => ({
                            ...prev,
                            checkInDate: e.target.value
                          }))
                        }
                        className="cr-date-picker"
                      />
                      <input
                        type="date"
                        value={reservationData.checkOutDate || ""}
                        onChange={(e) => 
                          setReservationData(prev => ({
                            ...prev,
                            checkOutDate: e.target.value
                          }))
                        }
                        className="cr-date-picker"
                      />
                    </div>
                  ) : (
                    <span className="cr-detail-value">
                      {formatDisplayDate(reservationData.checkInDate)} -{" "}
                      {formatDisplayDate(reservationData.checkOutDate)}
                    </span>
                  )}
                </div>
                <button
                  className="small-edit-button"
                  onClick={toggleDatesEditing}
                >
                  <Edit size={14} />
                  <span>{isEditingDates ? "Save" : "Edit"}</span>
                </button>
              </div>

              {/* Rooms and Guests */}
              <div className="detail-row with-edit">
                <div className="detail-col">
                  <div className="detail-col-split">
                    <div className="detail-col-item">
                      <span className="cr-detail-label">No. of Rooms</span>
                      {isEditingRoomsGuests ? (
                        <select
                          value={reservationData.numRooms || 1}
                          onChange={(e) => 
                            setReservationData(prev => ({
                              ...prev,
                              numRooms: parseInt(e.target.value)
                            }))
                          }
                          className="cr-detail-value"
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <span className="cr-detail-value">
                          {reservationData.numRooms}
                        </span>
                      )}
                    </div>
                    <div className="detail-col-item">
                      <span className="cr-detail-label">Adults</span>
                      {isEditingRoomsGuests ? (
                        <select
                          value={reservationData.numAdults || 1}
                          onChange={(e) => 
                            setReservationData(prev => ({
                              ...prev,
                              numAdults: parseInt(e.target.value)
                            }))
                          }
                          className="cr-detail-value"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Adult" : "Adults"}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <span className="cr-detail-value">
                          {reservationData.numAdults} {reservationData.numAdults === 1 ? "Adult" : "Adults"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  className="small-edit-button"
                  onClick={toggleRoomsGuestsEditing}
                >
                  <Edit size={14} />
                  <span>{isEditingRoomsGuests ? "Save" : "Edit"}</span>
                </button>
              </div>
            </div>
          </section>

          {/* Payment Info */}
          <section className={`details-section ${keyboardState.isVisible ? 'keyboard-active' : ''}`}>
            <h3 className="section-title">Payment info</h3>
            <div className="details-content-payment">
              <div className="detail-row-payment">
                <span className="cr-detail-label">Due amount</span>
                <div className="price-container">
                  <span className="current-price">${grandTotal}</span>
                  <span className="original-price">$220</span>
                </div>
              </div>
              <div className="payment-method">
                <div className="payment-method-option">
                  <div className="checkbox-container blue">
                    <input
                      type="checkbox"
                      id="cashPayment"
                      className="checkbox-input"
                      checked={
                        reservationData.paymentMethod === "cash"
                      }
                      readOnly
                    />
                    <img
                      src="/assets/images/cash-in.png"
                      className="card-icon"
                      alt="cash"
                    />
                  </div>
                  <span className="payment-method-text">Insert Cash</span>
                </div>
              </div>
            </div>
          </section>

          <div className={`price-summary ${keyboardState.isVisible ? 'keyboard-hidden' : ''}`}>
            <div className="price-container">
              <span className="price-amount">${grandTotal}</span>
              <span className="price-details">
                / Night • Includes taxes and other fees.
              </span>
            </div>
          </div>

          <button
            className="confirm-button"
            onClick={confirmReservation}
            disabled={loading}
          >
            {loading ? (
              <span>Processing...</span>
            ) : (
              <>
                <span>Confirm Reservation</span>
                <ChevronRight size={20} />
              </>
            )}
          </button>
        </div>
        {/* <HelpFooter /> */}
      </div>

      <VirtualKeyboard
        isVisible={keyboardState.isVisible}
        onKeyPress={handleKeyboardKeyPress}
        onBackspace={handleKeyboardBackspace}
        onEnter={handleKeyboardEnter}
        onClose={handleKeyboardClose}
        inputType={keyboardState.inputType}
      />
    </div>
  );
}