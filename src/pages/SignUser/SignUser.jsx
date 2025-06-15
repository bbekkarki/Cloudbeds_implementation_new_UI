// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import SignatureCanvas from "react-signature-canvas";
// import { Toaster, toast } from "react-hot-toast";
// import "./SignUser.css";
// import Header from "../../components/Header/Header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// import html2canvas from "html2canvas";
// import Loading from "../../components/Loading/Loading";
// import { propertyID, API_KEY, BASE_API_URL } from "../../components/constants/constants";

// const SignUser = () => {
//   const [reservation, setReservation] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showTC, setShowTC] = useState(false);
//   const sigPad = useRef(null);
//   const navigate = useNavigate();
//   const guestFirstName = sessionStorage.getItem("guestFirstName") || "unknown";
//   const guestLastName = sessionStorage.getItem("guestLastName") || "unknown";
//   const reservationID = sessionStorage.getItem("reservationID");

//   useEffect(() => {
//     const fetchReservation = async () => {
//       try {
//         const response = await fetch(
//           `${BASE_API_URL}/getReservationInvoiceInformation?propertyID=${propertyID}&reservationID=${reservationID}`,
//           {
//             method: "GET",
//             headers: {
//               accept: "application/json",
//               authorization: `Bearer ${API_KEY}`,
//               "x-api-key": `${API_KEY}`,
//             },
//           }
//         );
//         if (!response.ok) throw new Error("Failed to fetch reservation data");
//         const data = await response.json();
//         setReservation(data.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };
//     fetchReservation();
//   }, []);

//   const clearSignature = () => {
//     sigPad.current.clear();
//   };

//   const handleSubmit = async () => {
//     try {
//       const element = document.body; // Capture the full page
//       const canvas = await html2canvas(element, {
//         scrollX: 0,
//         scrollY: -window.scrollY,
//       });
//       const screenshotDataUrl = canvas.toDataURL("image/png");

//       const blob = await fetch(screenshotDataUrl).then((res) => res.blob());
//       const file = new File(
//         [blob],
//         `${guestFirstName}_${guestLastName}_Signature.png`,
//         { type: "image/png" }
//       );

//       const formData = new FormData();
//       formData.append("name", `${guestFirstName}_${guestLastName}_Signature`);
//       formData.append("avatar", file);

//       const response = await fetch(
//         "https://kiotel-backend-middleware.onrender.com/api/v1/user/upload-photo",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const result = await response.json();

//       if (response.ok) {
//         toast.success("Screenshot uploaded successfully!");
//         navigate("/key-dispense"); // Redirect after submission
//       } else {
//         toast.error(result.message || "Upload failed.");
//       }
//     } catch (error) {
//       console.error("Error capturing screenshot:", error);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <>
//         <Header />
//       <div className="sign-user-page" style={{ marginTop: "0px" }}>
//         {loading && <Loading />}
//         {error && <p className="error">{error}</p>}
//         {reservation && (
//           <div className="reservation-container">
//             <div className="reservation-details">
//               <h3>Hotel Terms and Conditions</h3>
//               <p>
//                 Before you proceed, please read our terms and conditions
//                 carefully.
//               </p>
//               <p>
//                 By proceeding, you acknowledge that you agree to the terms and
//                 conditions.
//               </p>
//               <button onClick={() => setShowTC(true)} className="tc-btn">
//                 Read T&C
//               </button>
//             </div>
//             <div className="reservation-details">
//               <h3>Guest Details</h3>
//               <p>
//                 <strong>Name:</strong>{" "}
//                 {reservation.mainGuestDetails.guestFirstName}{" "}
//                 {reservation.mainGuestDetails.guestLastName}
//               </p>
//               <p>
//                 <strong>Email:</strong>{" "}
//                 {reservation.mainGuestDetails.guestEmail}
//               </p>
//               <p>
//                 <strong>Phone:</strong>{" "}
//                 {reservation.mainGuestDetails.guestPhone}
//               </p>
//             </div>
//             <div className="reservation-details">
//               <h3>Reservations:</h3>
//               {reservation.reservationRooms.map((room, index) => (
//                 <div key={index}>
//                 <p><strong>Room:</strong> {room.roomName} </p>
//                <p><strong>Check-in:</strong> {room.startDate} <strong>Check-out:</strong> {room.endDate} <strong>Adults:</strong> {room.adults} <strong>RoomTotal:</strong>${room.roomTotal}</p>
//              </div>
//               ))}
//             </div>
//             <div className="reservation-details">
//               <h3>Billing Information:</h3>
//               <p>
//                 <strong>Room Total:</strong> $
//                 {reservation.reservationRoomsTotal}
//               </p>
//               <p>
//                 <strong>Taxes:</strong> ${reservation.reservationTaxesTotal}
//               </p>
//               <p>
//                 <strong>Grand Total:</strong> $
//                 {reservation.balanceDetailed.grandTotal}
//               </p>
//               <p>
//                 <strong>Paid:</strong> ${reservation.balanceDetailed.paid}
//               </p>
//               <p>
//                 <strong>Balance Due:</strong> ${reservation.balance}
//               </p>
//             </div>
//             <div className="signature-section">
//               <h3>Please Provide Your Signature Below</h3>
//               <SignatureCanvas
//                 ref={sigPad}
//                 penColor="black"
//                 canvasProps={{ className: "signature-pad" }}
//               />
//             </div>
//             <button onClick={clearSignature} className="clear-btn">
//               Clear
//             </button>
//             <button onClick={handleSubmit} className="sign-submit-btn">
//               Submit
//             </button>

//             {showTC && (
//               <div onClick={() => setShowTC(false)} className="tc-modal">
//                 <div className="tc-content">
//                   <h3>Terms & Conditions</h3>
//                   <p>
//                     By signing, you agree to the hotel’s policies regarding
//                     check-in, stay, and payments.
//                   </p>
//                   <div className="tc-scrollable-content">
//                     <h4>1. General Terms</h4>
//                     <p>
//                       These Terms and Conditions (the “Agreement”) are entered
//                       into by the guest (“Guest”) and the hotel (“Hotel”). By
//                       making a reservation, checking in, or staying at the
//                       Hotel, the Guest agrees to abide by the terms and
//                       conditions outlined herein.
//                     </p>

//                     <h4>2. Reservation & Check-in</h4>
//                     <p>
//                       All reservations must be confirmed with a valid credit
//                       card. A government-issued photo ID is required at
//                       check-in, and the name on the ID must match the
//                       reservation. Check-in time is generally after 3:00 PM.
//                       Early check-in may be available upon request, subject to
//                       availability and additional charges.
//                     </p>

//                     <h4>3. Cancellation & Refund Policy</h4>
//                     <p>
//                       A cancellation fee may apply if a reservation is canceled
//                       within 24 hours of the check-in time. If a guest fails to
//                       check in on the reserved date without prior notice, the
//                       reservation will be marked as a "no-show," and a penalty
//                       fee may be charged. Refunds, if applicable, will be
//                       processed according to the Hotel’s cancellation policy.
//                     </p>

//                     <h4>4. Payment Policy</h4>
//                     <p>
//                       Payment is due at check-in or at the time of booking,
//                       depending on the reservation type. The Hotel accepts
//                       credit/debit cards, cash, and approved digital payment
//                       methods. A security deposit may be required upon check-in
//                       and will be refunded at checkout, assuming no damages or
//                       additional charges have occurred.
//                     </p>

//                     <h4>5. Guest Behavior</h4>
//                     <p>
//                       Guests must comply with all Hotel policies, including but
//                       not limited to quiet hours, cleanliness standards, and
//                       respectful conduct toward staff and other guests. The
//                       Hotel reserves the right to refuse service or evict guests
//                       who engage in inappropriate behavior, including illegal
//                       activity, excessive noise, or disruptive conduct. The
//                       possession or use of illegal substances is strictly
//                       prohibited on Hotel premises.
//                     </p>

//                     <h4>6. Property Damages</h4>
//                     <p>
//                       Guests are responsible for any damages caused to Hotel
//                       property during their stay. The Hotel may charge for
//                       repairs or replacement of damaged or missing items. By
//                       signing this agreement, the Guest acknowledges financial
//                       responsibility for any such damages.
//                     </p>

//                     <h4>7. Smoking & Vaping Policy</h4>
//                     <p>
//                       Smoking and vaping are prohibited in all indoor areas of
//                       the Hotel. Designated smoking areas may be available. Any
//                       guest found violating this policy may be subject to a
//                       cleaning fee and potential eviction from the premises
//                       without refund.
//                     </p>

//                     <h4>8. Pet Policy</h4>
//                     <p>
//                       Pets may be permitted in designated pet-friendly rooms
//                       with prior approval. Additional fees may apply. Guests are
//                       responsible for cleaning up after their pets and ensuring
//                       they do not disturb others. Service animals are always
//                       welcome and exempt from pet fees.
//                     </p>

//                     <h4>9. Liability</h4>
//                     <p>
//                       The Hotel is not responsible for the loss, theft, or
//                       damage of personal belongings during a Guest’s stay.
//                       Guests are encouraged to use in-room safes or request
//                       front-desk security for valuables. The Hotel is not liable
//                       for injuries or accidents occurring on the premises unless
//                       caused by proven negligence of the Hotel.
//                     </p>

//                     <h4>10. Force Majeure</h4>
//                     <p>
//                       The Hotel shall not be held responsible for failure to
//                       fulfill its obligations due to causes beyond its
//                       reasonable control, including but not limited to natural
//                       disasters, strikes, government orders, or unforeseen
//                       circumstances.
//                     </p>

//                     <h4>11. Modifications to Terms</h4>
//                     <p>
//                       The Hotel reserves the right to modify these Terms and
//                       Conditions at any time without prior notice. All changes
//                       will be made available at the front desk, on the Hotel’s
//                       website, or through other official communication channels.
//                       By continuing to stay at the Hotel, the Guest agrees to
//                       abide by the updated terms.
//                     </p>

//                     <h4>12. Governing Law</h4>
//                     <p>
//                       These Terms and Conditions shall be governed by and
//                       construed in accordance with the applicable laws of the
//                       state in which the Hotel is located. Any disputes arising
//                       from these terms shall be resolved in the courts of the
//                       respective jurisdiction.
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => setShowTC(false)}
//                     className="close-btn"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//         <Toaster />
//       </div>
//         <HelpFooter />
//     </>
//   );
// };

// export default SignUser;


// import React, { useEffect, useState, useRef } from "react"; 
// import { useNavigate } from "react-router-dom";
// import SignatureCanvas from "react-signature-canvas";
// import { Toaster, toast } from "react-hot-toast";
// import "./SignUser.css";
// import Header from "../../components/Header/Header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// import html2canvas from "html2canvas";
// import Loading from "../../components/Loading/Loading";
// import { propertyID, API_KEY, BASE_API_URL } from "../../components/constants/constants";

// const SignUser = () => {
//   const [reservation, setReservation] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showTC, setShowTC] = useState(false);
//   const sigPad = useRef(null);
//   const navigate = useNavigate();
//   const guestFirstName = sessionStorage.getItem("guestFirstName") || "unknown";
//   const guestLastName = sessionStorage.getItem("guestLastName") || "unknown";
//   const reservationID = sessionStorage.getItem("reservationID");

//   useEffect(() => {
//     const fetchReservation = async () => {
//       try {
//         const response = await fetch(
//           `${BASE_API_URL}/getReservationInvoiceInformation?propertyID=${propertyID}&reservationID=${reservationID}`,
//           {
//             method: "GET",
//             headers: {
//               accept: "application/json",
//               authorization: `Bearer ${API_KEY}`,
//               "x-api-key": API_KEY,
//             },
//           }
//         );
//         if (!response.ok) throw new Error("Failed to fetch reservation data");
//         const data = await response.json();
//         setReservation(data.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };
//     fetchReservation();
//   }, []);

//   const clearSignature = () => {
//     sigPad.current.clear();
//   };

//   const handleSubmit = async () => {
//     try {
//       const element = document.body;
//       const canvas = await html2canvas(element, {
//         scrollX: 0,
//         scrollY: -window.scrollY,
//       });
//       const screenshotDataUrl = canvas.toDataURL("image/png");

//       const blob = await fetch(screenshotDataUrl).then((res) => res.blob());
//       const file = new File(
//         [blob],
//         `${guestFirstName}_${guestLastName}_Signature.png`,
//         { type: "image/png" }
//       );

//       const formData = new FormData();
//       formData.append("name", `${guestFirstName}_${guestLastName}_Signature`);
//       formData.append("avatar", file);

//       const response = await fetch(
//         "https://kiotel-backend-middleware.onrender.com/api/v1/user/upload-photo",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const result = await response.json();

//       if (response.ok) {
//         toast.success("Screenshot uploaded successfully!");
//         navigate("/key-dispense");
//       } else {
//         toast.error(result.message || "Upload failed.");
//       }
//     } catch (error) {
//       console.error("Error capturing screenshot:", error);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <>
    
//       <div className="sign-user-page">
//           <Header />
//         {loading && <Loading />}
//         {error && <p className="error">{error}</p>}
//         {reservation && (
//           <div className="reservation-container">
//             {/* Terms & Conditions Card */}
//             <div className="reservation-card">
//               <div className="card-header">
//                 <h3>Hotel Terms and Conditions</h3>
//               </div>
//               <div className="card-body">
//                 <p>
//                   Before you proceed, please read our terms and conditions carefully.
//                 </p>
//                 <p>
//                   By proceeding, you acknowledge that you agree to the terms and conditions.
//                 </p>
//                 <button onClick={() => setShowTC(true)} className="btn tc-btn">
//                   Read T&C
//                 </button>
//               </div>
//             </div>

//             {/* Guest Details Card */}
//             <div className="reservation-card">
//               <div className="card-header">
//                 <h3>Guest Details</h3>
//               </div>
//               <div className="card-body">
//                 <div className="detail-row">
//                   <span className="detail-label">Name:</span>
//                   <span className="detail-value">
//                     {reservation.mainGuestDetails.guestFirstName}{" "}
//                     {reservation.mainGuestDetails.guestLastName}
//                   </span>
//                 </div>
//                 <div className="detail-row">
//                   <span className="detail-label">Email:</span>
//                   <span className="detail-value">
//                     {reservation.mainGuestDetails.guestEmail}
//                   </span>
//                 </div>
//                 <div className="detail-row">
//                   <span className="detail-label">Phone:</span>
//                   <span className="detail-value">
//                     {reservation.mainGuestDetails.guestPhone}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Reservations Card */}
//             <div className="reservation-card">
//               <div className="card-header">
//                 <h3>Reservations</h3>
//               </div>
//               <div className="card-body">
//                 {reservation.reservationRooms.map((room, index) => (
//                   <div className="room-detail" key={index}>
//                     <div className="detail-row">
//                       <span className="detail-label">Room:</span>
//                       <span className="detail-value">{room.roomName}</span>
//                     </div>
//                     <div className="detail-grid">
//                       <div>
//                         <span className="detail-label">Check-in:</span>
//                         <span className="detail-value">{room.startDate}</span>
//                       </div>
//                       <div>
//                         <span className="detail-label">Check-out:</span>
//                         <span className="detail-value">{room.endDate}</span>
//                       </div>
//                       <div>
//                         <span className="detail-label">Adults:</span>
//                         <span className="detail-value">{room.adults}</span>
//                       </div>
//                       <div>
//                         <span className="detail-label">Room Total:</span>
//                         <span className="detail-value">${room.roomTotal}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Billing Information Card */}
//             <div className="reservation-card">
//               <div className="card-header">
//                 <h3>Billing Information</h3>
//               </div>
//               <div className="card-body">
//                 <div className="detail-grid">
//                   <div>
//                     <span className="detail-label">Room Total:</span>
//                     <span className="detail-value">${reservation.reservationRoomsTotal}</span>
//                   </div>
//                   <div>
//                     <span className="detail-label">Taxes:</span>
//                     <span className="detail-value">${reservation.reservationTaxesTotal}</span>
//                   </div>
//                   <div>
//                     <span className="detail-label">Grand Total:</span>
//                     <span className="detail-value">${reservation.balanceDetailed.grandTotal}</span>
//                   </div>
//                   <div>
//                     <span className="detail-label">Paid:</span>
//                     <span className="detail-value">${reservation.balanceDetailed.paid}</span>
//                   </div>
//                   <div className="total-balance">
//                     <span className="detail-label">Balance Due:</span>
//                     <span className="detail-value">${reservation.balance}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Signature Section */}
//             <div className="signature-section">
//               <h3>Please Provide Your Signature Below</h3>
//               <SignatureCanvas
//                 ref={sigPad}
//                 penColor="black"
//                 canvasProps={{ className: "signature-pad" }}
//               />
//               <div className="button-group">
//                 <button onClick={clearSignature} className="btn clear-btn">
//                   Clear Signature
//                 </button>
//                 <button onClick={handleSubmit} className="btn sign-submit-btn">
//                   Submit
//                 </button>
//               </div>
//             </div>

//             {/* Terms & Conditions Modal */}
//             {showTC && (
//               <div className="tc-modal" onClick={() => setShowTC(false)}>
//                 <div className="tc-content" onClick={e => e.stopPropagation()}>
//                   <div className="modal-header">
//                     <h3>Terms & Conditions</h3>
//                   </div>
//                   <div className="tc-scrollable-content">
//                     <h4>1. General Terms</h4>
//                     <p>
//                       These Terms and Conditions (the "Agreement") are entered
//                       into by the guest ("Guest") and the hotel ("Hotel"). By
//                       making a reservation, checking in, or staying at the
//                       Hotel, the Guest agrees to abide by the terms and
//                       conditions outlined herein.
//                     </p>

//                     <h4>2. Reservation & Check-in</h4>
//                     <p>
//                       All reservations must be confirmed with a valid credit
//                       card. A government-issued photo ID is required at
//                       check-in, and the name on the ID must match the
//                       reservation. Check-in time is generally after 3:00 PM.
//                       Early check-in may be available upon request, subject to
//                       availability and additional charges.
//                     </p>

//                     <h4>3. Cancellation & Refund Policy</h4>
//                     <p>
//                       A cancellation fee may apply if a reservation is canceled
//                       within 24 hours of the check-in time. If a guest fails to
//                       check in on the reserved date without prior notice, the
//                       reservation will be marked as a "no-show," and a penalty
//                       fee may be charged. Refunds, if applicable, will be
//                       processed according to the Hotel's cancellation policy.
//                     </p>

//                     <h4>4. Payment Policy</h4>
//                     <p>
//                       Payment is due at check-in or at the time of booking,
//                       depending on the reservation type. The Hotel accepts
//                       credit/debit cards, cash, and approved digital payment
//                       methods. A security deposit may be required upon check-in
//                       and will be refunded at checkout, assuming no damages or
//                       additional charges have occurred.
//                     </p>

//                     <h4>5. Guest Behavior</h4>
//                     <p>
//                       Guests must comply with all Hotel policies, including but
//                       not limited to quiet hours, cleanliness standards, and
//                       respectful conduct toward staff and other guests. The
//                       Hotel reserves the right to refuse service or evict guests
//                       who engage in inappropriate behavior, including illegal
//                       activity, excessive noise, or disruptive conduct. The
//                       possession or use of illegal substances is strictly
//                       prohibited on Hotel premises.
//                     </p>

//                     <h4>6. Property Damages</h4>
//                     <p>
//                       Guests are responsible for any damages caused to Hotel
//                       property during their stay. The Hotel may charge for
//                       repairs or replacement of damaged or missing items. By
//                       signing this agreement, the Guest acknowledges financial
//                       responsibility for any such damages.
//                     </p>

//                     <h4>7. Smoking & Vaping Policy</h4>
//                     <p>
//                       Smoking and vaping are prohibited in all indoor areas of
//                       the Hotel. Designated smoking areas may be available. Any
//                       guest found violating this policy may be subject to a
//                       cleaning fee and potential eviction from the premises
//                       without refund.
//                     </p>

//                     <h4>8. Pet Policy</h4>
//                     <p>
//                       Pets may be permitted in designated pet-friendly rooms
//                       with prior approval. Additional fees may apply. Guests are
//                       responsible for cleaning up after their pets and ensuring
//                       they do not disturb others. Service animals are always
//                       welcome and exempt from pet fees.
//                     </p>

//                     <h4>9. Liability</h4>
//                     <p>
//                       The Hotel is not responsible for the loss, theft, or
//                       damage of personal belongings during a Guest's stay.
//                       Guests are encouraged to use in-room safes or request
//                       front-desk security for valuables. The Hotel is not liable
//                       for injuries or accidents occurring on the premises unless
//                       caused by proven negligence of the Hotel.
//                     </p>

//                     <h4>10. Force Majeure</h4>
//                     <p>
//                       The Hotel shall not be held responsible for failure to
//                       fulfill its obligations due to causes beyond its
//                       reasonable control, including but not limited to natural
//                       disasters, strikes, government orders, or unforeseen
//                       circumstances.
//                     </p>

//                     <h4>11. Modifications to Terms</h4>
//                     <p>
//                       The Hotel reserves the right to modify these Terms and
//                       Conditions at any time without prior notice. All changes
//                       will be made available at the front desk, on the Hotel's
//                       website, or through other official communication channels.
//                       By continuing to stay at the Hotel, the Guest agrees to
//                       abide by the updated terms.
//                     </p>

//                     <h4>12. Governing Law</h4>
//                     <p>
//                       These Terms and Conditions shall be governed by and
//                       construed in accordance with the applicable laws of the
//                       state in which the Hotel is located. Any disputes arising
//                       from these terms shall be resolved in the courts of the
//                       respective jurisdiction.
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => setShowTC(false)}
//                     className="btn close-btn"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//         <Toaster />
//       </div>
//       <HelpFooter />
//     </>
//   );
// };

// export default SignUser;


import React, { useEffect, useState, useRef } from "react"; 
import { useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import { Toaster, toast } from "react-hot-toast";
import "./SignUser.css";
import Header from "../../components/Header/header";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import html2canvas from "html2canvas";
import Loading from "../../components/Loading/Loading";
import { propertyID, API_KEY, BASE_API_URL } from "../../components/constants/constants";

const SignUser = () => {
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showTC, setShowTC] = useState(false);
  const sigPad = useRef(null);
  const navigate = useNavigate();
  const guestFirstName = sessionStorage.getItem("guestFirstName") || "unknown";
  const guestLastName = sessionStorage.getItem("guestLastName") || "unknown";
  const reservationID = sessionStorage.getItem("reservationID");

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await fetch(
          `${BASE_API_URL}/getReservationInvoiceInformation?propertyID=${propertyID}&reservationID=${reservationID}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              authorization: `Bearer ${API_KEY}`,
              "x-api-key": API_KEY,
            },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch reservation data");
        const data = await response.json();
        setReservation(data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchReservation();
  }, []);

  const clearSignature = () => {
    sigPad.current.clear();
  };

  const handleSubmit = async () => {
    setReservation(null);
    setLoading(true);
    try {

      const element = document.body;
      const canvas = await html2canvas(element, {
        scrollX: 0,
        scrollY: -window.scrollY,
      });
      const screenshotDataUrl = canvas.toDataURL("image/png");

      const blob = await fetch(screenshotDataUrl).then((res) => res.blob());
      const file = new File(
        [blob],
        `${guestFirstName}_${guestLastName}_Signature.png`,
        { type: "image/png" }
      );

      const formData = new FormData();
      formData.append("name", `${guestFirstName}_${guestLastName}_Signature`);
      formData.append("avatar", file);

      const response = await fetch(
        "https://kiotel-backend-middleware.onrender.com/api/v1/user/upload-photo",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("Screenshot uploaded successfully!");
        navigate("/clickme");
      } else {
        toast.error(result.message || "Upload failed.");
      }
    } catch (error) {
      console.error("Error capturing screenshot:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
    
      <div className="sign-user-page">
         <header className="selfie-header" style={{ gap: "110px", marginBottom: "0px" }}>
          <div className="logo-section">
            <div className="home-icon-id">
              <img
                src="/assets/images/bookingdetails/home.png"
                alt="home"
               onClick={() => navigate("/")}
              />
            </div>
            <h1 className="selfie-title">Signature Form</h1>
          </div>
          <img src="/assets/images/bookingdetails/help.png" alt="help" />
        </header>
        {loading && <Loading />}
        {error && <p className="error">{error}</p>}
        {reservation && (
          <div className="reservation-container">
            <div className="cards-container">
              {/* Terms & Conditions Card */}
              <div className="reservation-card">
                <div className="card-header">
                  <h3>Hotel Terms and Conditions</h3>
                </div>
                <div className="card-body">
                  <p>Before you proceed, please read our terms and conditions carefully.</p>
                  <p>By proceeding, you acknowledge that you agree to the terms and conditions.</p>
                  <button onClick={() => setShowTC(true)} className="btn tc-btn">
                    Read T&C
                  </button>
                </div>
              </div>

              {/* Guest Details Card */}
              <div className="reservation-card">
                <div className="card-header">
                  <h3>Guest Details</h3>
                </div>
                <div className="card-body">
                  <div className="detail-row">
                    <span className="detail-label">Name:</span>
                    <span className="detail-value">
                      {reservation.mainGuestDetails.guestFirstName}{" "}
                      {reservation.mainGuestDetails.guestLastName}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Email:</span>
                    <span className="detail-value">
                      {reservation.mainGuestDetails.guestEmail}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Phone:</span>
                    <span className="detail-value">
                      {reservation.mainGuestDetails.guestPhone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Reservations Card */}
              <div className="reservation-card">
                <div className="card-header">
                  <h3>Reservations</h3>
                </div>
                <div className="card-body">
                  {reservation.reservationRooms.map((room, index) => (
                    <div className="room-detail" key={index}>
                      <div className="detail-row">
                        <span className="detail-label">Room:</span>
                        <span className="detail-value">{room.roomName}</span>
                      </div>
                      <div className="detail-grid">
                        <div>
                          <span className="detail-label">Check-in:</span>
                          <span className="detail-value">{room.startDate}</span>
                        </div>
                        <div>
                          <span className="detail-label">Check-out:</span>
                          <span className="detail-value">{room.endDate}</span>
                        </div>
                        <div>
                          <span className="detail-label">Adults:</span>
                          <span className="detail-value">{room.adults}</span>
                        </div>
                        <div>
                          <span className="detail-label">Room Total:</span>
                          <span className="detail-value">${room.roomTotal}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Billing Information Card */}
              <div className="reservation-card">
                <div className="card-header">
                  <h3>Billing Information</h3>
                </div>
                <div className="card-body">
                  <div className="detail-grid">
                    {/* <div>
                      <span className="detail-label">Room Total:</span>
                      <span className="detail-value">${reservation.reservationRoomsTotal}</span>
                    </div> */}
                    <div>
                      <span className="detail-label">Taxes:</span>
                      <span className="detail-value">${reservation.reservationTaxesTotal}</span>
                    </div>
                    <div>
                      <span className="detail-label">Grand Total:</span>
                      <span className="detail-value">${reservation.balanceDetailed.grandTotal}</span>
                    </div>
                    <div>
                      <span className="detail-label">Paid:</span>
                      <span className="detail-value">${reservation.balanceDetailed.paid}</span>
                    </div>
                    <div className="total-balance">
                      <span className="detail-label">Balance Due:</span>
                      <span className="detail-value">${reservation.balance}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="signature-section">
              <h3>Please Provide Your Signature Below</h3>
              <SignatureCanvas
                ref={sigPad}
                penColor="black"
                canvasProps={{ className: "signature-pad" }}
              />
              <div className="button-group">
                <button onClick={clearSignature} className="btn clear-btn">
                  Clear Signature
                </button>
                <button onClick={handleSubmit} className="btn sign-submit-btn">
                  Submit
                </button>
              </div>
            </div>

            {/* Terms & Conditions Modal */}
            {showTC && (
              <div className="tc-modal" onClick={() => setShowTC(false)}>
                <div className="tc-content" onClick={e => e.stopPropagation()}>
                  <div className="modal-header">
                    <h3>Terms & Conditions</h3>
                  </div>
                  <div className="tc-scrollable-content">
                    {/* T&C content remains the same */}
                    <h3>1. General Terms</h3>
                    <p>
                      These Terms and Conditions (the "Agreement") are entered
                      into by the guest ("Guest") and the hotel ("Hotel"). By
                      making a reservation, checking in, or staying at the
                      Hotel, the Guest agrees to abide by the terms and
                      conditions outlined herein.
                    </p>

                    <h3>2. Reservation & Check-in</h3>
                    <p>
                      All reservations must be confirmed with a valid credit
                      card. A government-issued photo ID is required at
                      check-in, and the name on the ID must match the
                      reservation. Check-in time is generally after 3:00 PM.
                      Early check-in may be available upon request, subject to
                      availability and additional charges.
                    </p>

                    <h3>3. Cancellation & Refund Policy</h3>
                    <p>
                      A cancellation fee may apply if a reservation is canceled
                      within 24 hours of the check-in time. If a guest fails to
                      check in on the reserved date without prior notice, the
                      reservation will be marked as a "no-show," and a penalty
                      fee may be charged. Refunds, if applicable, will be
                      processed according to the Hotel's cancellation policy.
                    </p>

                    <h3>4. Payment Policy</h3>
                    <p>
                      Payment is due at check-in or at the time of booking,
                      depending on the reservation type. The Hotel accepts
                      credit/debit cards, cash, and approved digital payment
                      methods. A security deposit may be required upon check-in
                      and will be refunded at checkout, assuming no damages or
                      additional charges have occurred.
                    </p>

                    <h3>5. Guest Behavior</h3>
                    <p>
                      Guests must comply with all Hotel policies, including but
                      not limited to quiet hours, cleanliness standards, and
                      respectful conduct toward staff and other guests. The
                      Hotel reserves the right to refuse service or evict guests
                      who engage in inappropriate behavior, including illegal
                      activity, excessive noise, or disruptive conduct. The
                      possession or use of illegal substances is strictly
                      prohibited on Hotel premises.
                    </p>

                    <h3>6. Property Damages</h3>
                    <p>
                      Guests are responsible for any damages caused to Hotel
                      property during their stay. The Hotel may charge for
                      repairs or replacement of damaged or missing items. By
                      signing this agreement, the Guest acknowledges financial
                      responsibility for any such damages.
                    </p>

                    <h3>7. Smoking & Vaping Policy</h3>
                    <p>
                      Smoking and vaping are prohibited in all indoor areas of
                      the Hotel. Designated smoking areas may be available. Any
                      guest found violating this policy may be subject to a
                      cleaning fee and potential eviction from the premises
                      without refund.
                    </p>

                    <h3>8. Pet Policy</h3>
                    <p>
                      Pets may be permitted in designated pet-friendly rooms
                      with prior approval. Additional fees may apply. Guests are
                      responsible for cleaning up after their pets and ensuring
                      they do not disturb others. Service animals are always
                      welcome and exempt from pet fees.
                    </p>

                    <h3>9. Liability</h3>
                    <p>
                      The Hotel is not responsible for the loss, theft, or
                      damage of personal belongings during a Guest's stay.
                      Guests are encouraged to use in-room safes or request
                      front-desk security for valuables. The Hotel is not liable
                      for injuries or accidents occurring on the premises unless
                      caused by proven negligence of the Hotel.
                    </p>

                    <h3>10. Force Majeure</h3>
                    <p>
                      The Hotel shall not be held responsible for failure to
                      fulfill its obligations due to causes beyond its
                      reasonable control, including but not limited to natural
                      disasters, strikes, government orders, or unforeseen
                      circumstances.
                    </p>

                    <h3>11. Modifications to Terms</h3>
                    <p>
                      The Hotel reserves the right to modify these Terms and
                      Conditions at any time without prior notice. All changes
                      will be made available at the front desk, on the Hotel's
                      website, or through other official communication channels.
                      By continuing to stay at the Hotel, the Guest agrees to
                      abide by the updated terms.
                    </p>

                    <h3>12. Governing Law</h3>
                    <p>
                      These Terms and Conditions shall be governed by and
                      construed in accordance with the applicable laws of the
                      state in which the Hotel is located. Any disputes arising
                      from these terms shall be resolved in the courts of the
                      respective jurisdiction.
                    </p>

                  </div>
                  <button
                    onClick={() => setShowTC(false)}
                    className="btn close-btn"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        <Toaster />
      </div>
     
    </>
  );
};

export default SignUser;