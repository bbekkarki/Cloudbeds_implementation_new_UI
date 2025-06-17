// // // // import { useState, useEffect } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { Check, Printer, LogOut, Clock } from "lucide-react";
// // // // import "./CheckOut.css";
// // // // import Header from "../../components/Header/header";
// // // // import HelpFooter from "../../components/HelpFooter/HelpFooter";
// // // // import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";
// // // // import axios from "axios";

// // // // export default function CheckOut() {
// // // //   const [roomNames, setRoomNames] = useState([]);
// // // //   const [checkoutDate, setCheckoutDate] = useState("");
// // // //   const [isPrinting, setIsPrinting] = useState(false);
// // // //   const [isCheckingOut, setIsCheckingOut] = useState(false);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [errorMessage, setErrorMessage] = useState("");
// // // //   const [successRoomNames, setSuccessRoomNames] = useState([]);
// // // //   const [failedRoomNames, setFailedRoomNames] = useState([]);

// // // //   const navigate = useNavigate();
// // // //   const reservationID = sessionStorage.getItem("reservationID");

// // // //   useEffect(() => {
// // // //     let tempSuccess = [];
// // // //     let tempFailed = [];

// // // //     const checkOutRoom = async (roomName, subReservationID) => {
// // // //       try {
// // // //         const response = await axios.post(
// // // //           `${BASE_API_URL}/postRoomCheckOut`,
// // // //           new URLSearchParams({
// // // //             reservationID,
// // // //             subReservationID
// // // //           }),
// // // //           {
// // // //             headers: {
// // // //               accept: "application/json",
// // // //               authorization: `Bearer ${API_KEY}`,
// // // //               "content-type": "application/x-www-form-urlencoded",
// // // //               "x-api-key": API_KEY,
// // // //             },
// // // //           }
// // // //         );

// // // //         if (response.data.success || response.data.message?.includes("already checked out")) {
// // // //           console.log(`✅ Room ${roomName} checked out`);
// // // //           tempSuccess.push(roomName);
// // // //         } else {
// // // //           console.log(`❌ Failed to check out room ${roomName}:`, response.data.message);
// // // //           tempFailed.push(roomName);
// // // //         }
// // // //       } catch (err) {
// // // //         console.error("Check-out error:", err);
// // // //         tempFailed.push(roomName);
// // // //       }
// // // //     };

// // // //     const fetchReservationDetails = async () => {
// // // //       try {
// // // //         const response = await axios.get(
// // // //           `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
// // // //           {
// // // //             headers: {
// // // //               accept: "application/json",
// // // //               authorization: `Bearer ${API_KEY}`,
// // // //               "x-api-key": API_KEY,
// // // //             },
// // // //           }
// // // //         );

// // // //         const reservationData = response.data.data;

// // // //         if (reservationData.assigned && reservationData.assigned.length > 0) {
// // // //           const assignedRooms = reservationData.assigned.slice(0, 10); // max 10
// // // //           for (let room of assignedRooms) {
// // // //             await checkOutRoom(room.roomName, room.subReservationID);
// // // //           }

// // // //           setRoomNames(tempSuccess);
// // // //           setSuccessRoomNames(tempSuccess);
// // // //           setFailedRoomNames(tempFailed);
// // // //         } else {
// // // //           setErrorMessage("No rooms assigned for check-out.");
// // // //         }

// // // //         if (reservationData.endDate) {
// // // //           setCheckoutDate(reservationData.endDate);
// // // //           sessionStorage.setItem("checkoutDate", reservationData.endDate);
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("Reservation fetch error:", error);
// // // //         setErrorMessage("Failed to fetch reservation details.");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchReservationDetails();
// // // //   }, [reservationID]);

// // // //   const handlePrintReceipt = () => {
// // // //     setIsPrinting(true);
// // // //     console.log("Printing receipt...");

// // // //     setTimeout(() => {
// // // //       setIsPrinting(false);
// // // //       console.log("Receipt printed.");
// // // //     }, 1500);
// // // //   };

// // // //   const handleManualCheckout = () => {
// // // //     setIsCheckingOut(true);
// // // //     console.log("Retrying checkout...");

// // // //     setTimeout(() => {
// // // //       setIsCheckingOut(false);
// // // //       window.location.reload();
// // // //     }, 2000);
// // // //   };

// // // //   return (
// // // //     <div className="checkin-page">
// // // //       <div className="checkin-container">
// // // //         <Header value="CheckOut" />
// // // //         <div className="checkin-card">
// // // //           {loading ? (
// // // //             <p className="loading-text">Processing check-out...</p>
// // // //           ) : errorMessage ? (
// // // //             <div className="checkin-failed">
// // // //               <h3>{errorMessage}</h3>
// // // //               <div className="error-options">
// // // //                 <button className="checkin-button" onClick={() => navigate("/")}>
// // // //                   Go Home
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           ) : (
// // // //             <>
// // // //               <h2 className="success-heading">Check-Out Success!</h2>
// // // //               <p className="welcome-message">Thanks for staying with us!</p>

// // // //               <div className="success-icon-container">
// // // //                 <div className="success-icon">
// // // //                   <Check color="white" size={32} />
// // // //                 </div>
// // // //               </div>

// // // //               <div className="room-info">
// // // //                 {successRoomNames.length > 0 ? (
// // // //                   <h3 className="room-number">
// // // //                     {successRoomNames.length === 1
// // // //                       ? `Room ${successRoomNames[0]}`
// // // //                       : `Rooms: ${successRoomNames.join(", ")}`}
// // // //                   </h3>
// // // //                 ) : (
// // // //                   <h3 className="room-number">No rooms checked out</h3>
// // // //                 )}
// // // //                 {failedRoomNames.length > 0 && (
// // // //                   <p className="room-number">
// // // //                     Failed: {failedRoomNames.join(", ")}
// // // //                   </p>
// // // //                 )}
// // // //               </div>

// // // //               <div className="details-container">
// // // //                 <div className="detail-row">
// // // //                   <div className="detail-icon">
// // // //                     <Clock size={20} />
// // // //                   </div>
// // // //                   <div className="checkin-detail-label">Checked Out</div>
// // // //                   <div className="checkin-detail-value">
// // // //                     {checkoutDate || "Loading..."}
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="checkin-action-buttons">
// // // //                 <button
// // // //                   className={`receipt-print-button ${isPrinting ? "printing" : ""}`}
// // // //                   onClick={handlePrintReceipt}
// // // //                   disabled={isPrinting}
// // // //                 >
// // // //                   <Printer size={20} />
// // // //                   <span>{isPrinting ? "Printing..." : "Print Receipt"}</span>
// // // //                 </button>

// // // //                 {failedRoomNames.length > 0 && (
// // // //                   <button
// // // //                     className={`checkin-button ${isCheckingOut ? "dispensing" : ""}`}
// // // //                     onClick={handleManualCheckout}
// // // //                     disabled={isCheckingOut}
// // // //                   >
// // // //                     <LogOut size={20} />
// // // //                     <span>{isCheckingOut ? "Retrying..." : "Try Again"}</span>
// // // //                   </button>
// // // //                 )}
// // // //               </div>
// // // //             </>
// // // //           )}
// // // //         </div>
// // // //         <HelpFooter />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }




// // // import { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Check, Printer, LogOut, Clock } from "lucide-react";
// // // import "./CheckOut.css";
// // // import Header from "../../components/Header/header";
// // // import HelpFooter from "../../components/HelpFooter/HelpFooter";
// // // import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";
// // // import axios from "axios";

// // // export default function CheckOut() {
// // //   const [roomNames, setRoomNames] = useState([]);
// // //   const [checkoutDate, setCheckoutDate] = useState("");
// // //   const [isPrinting, setIsPrinting] = useState(false);
// // //   const [isCheckingOut, setIsCheckingOut] = useState(false);
// // //   const [loading, setLoading] = useState(true);
// // //   const [errorMessage, setErrorMessage] = useState("");
// // //   const [successRoomNames, setSuccessRoomNames] = useState([]);
// // //   const [failedRoomNames, setFailedRoomNames] = useState([]);

// // //   const navigate = useNavigate();
// // //   const reservationID = sessionStorage.getItem("reservationID");

// // //   useEffect(() => {
// // //     let tempSuccess = [];
// // //     let tempFailed = [];

// // //     const checkOutRoom = async (roomName, subReservationID) => {
// // //       try {
// // //         const response = await axios.post(
// // //           `https://check-out-server-cloudbeds.onrender.com/api/checkout`,
// // //           new URLSearchParams({
// // //             reservationID,
// // //             subReservationID
// // //           }),
// // //           {
// // //             headers: {
// // //               accept: "application/json",
// // //               authorization: `Bearer ${API_KEY}`,
// // //               "content-type": "application/x-www-form-urlencoded",
// // //               "x-api-key": API_KEY,
// // //             },
// // //           }
// // //         );

// // //         if (response.data.success || response.data.message?.includes("already checked out")) {
// // //           console.log(`✅ Room ${roomName} checked out`);
// // //           tempSuccess.push(roomName);
// // //         } else {
// // //           console.log(`❌ Failed to check out room ${roomName}:`, response.data.message);
// // //           tempFailed.push(roomName);
// // //         }
// // //       } catch (err) {
// // //         console.error("Check-out error:", err);
// // //         tempFailed.push(roomName);
// // //       }
// // //     };

// // //     const fetchReservationDetails = async () => {
// // //       try {
// // //         const response = await axios.get(
// // //           `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
// // //           {
// // //             headers: {
// // //               accept: "application/json",
// // //               authorization: `Bearer ${API_KEY}`,
// // //               "x-api-key": API_KEY,
// // //             },
// // //           }
// // //         );

// // //         const reservationData = response.data.data;

// // //         if (reservationData.assigned && reservationData.assigned.length > 0) {
// // //           const assignedRooms = reservationData.assigned.slice(0, 10); // max 10
// // //           for (let room of assignedRooms) {
// // //             await checkOutRoom(room.roomName, room.subReservationID);
// // //           }

// // //           setRoomNames(tempSuccess);
// // //           setSuccessRoomNames(tempSuccess);
// // //           setFailedRoomNames(tempFailed);
// // //         } else {
// // //           setErrorMessage("No rooms assigned for check-out.");
// // //         }

// // //         if (reservationData.endDate) {
// // //           setCheckoutDate(reservationData.endDate);
// // //           sessionStorage.setItem("checkoutDate", reservationData.endDate);
// // //         }
// // //       } catch (error) {
// // //         console.error("Reservation fetch error:", error);
// // //         setErrorMessage("Failed to fetch reservation details.");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchReservationDetails();
// // //   }, [reservationID]);

// // //   const handlePrintReceipt = () => {
// // //     setIsPrinting(true);
// // //     console.log("Printing receipt...");

// // //     setTimeout(() => {
// // //       setIsPrinting(false);
// // //       console.log("Receipt printed.");
// // //     }, 1500);
// // //   };

// // //   const handleManualCheckout = () => {
// // //     setIsCheckingOut(true);
// // //     console.log("Retrying checkout...");

// // //     setTimeout(() => {
// // //       setIsCheckingOut(false);
// // //       window.location.reload();
// // //     }, 2000);
// // //   };

// // //   return (
// // //     <div className="checkin-page">
// // //       <div className="checkin-container">
// // //         <Header value="CheckOut" />
// // //         <div className="checkin-card">
// // //           {loading ? (
// // //             <p className="loading-text">Processing check-out...</p>
// // //           ) : errorMessage ? (
// // //             <div className="checkin-failed">
// // //               <h3>{errorMessage}</h3>
// // //               <div className="error-options">
// // //                 <button className="checkin-button" onClick={() => navigate("/")}>
// // //                   Go Home
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ) : (
// // //             <>
// // //               <h2 className="success-heading">Check-Out Success!</h2>
// // //               <p className="welcome-message">Thanks for staying with us!</p>

// // //               <div className="success-icon-container">
// // //                 <div className="success-icon">
// // //                   <Check color="white" size={32} />
// // //                 </div>
// // //               </div>

// // //               <div className="room-info">
// // //                 {successRoomNames.length > 0 ? (
// // //                   <h3 className="room-number">
// // //                     {successRoomNames.length === 1
// // //                       ? `Room ${successRoomNames[0]}`
// // //                       : `Rooms: ${successRoomNames.join(", ")}`}
// // //                   </h3>
// // //                 ) : (
// // //                   <h3 className="room-number">No rooms checked out</h3>
// // //                 )}
// // //                 {failedRoomNames.length > 0 && (
// // //                   <p className="room-number">
// // //                     Failed: {failedRoomNames.join(", ")}
// // //                   </p>
// // //                 )}
// // //               </div>

// // //               <div className="details-container">
// // //                 <div className="detail-row">
// // //                   <div className="detail-icon">
// // //                     <Clock size={20} />
// // //                   </div>
// // //                   <div className="checkin-detail-label">Checked Out</div>
// // //                   <div className="checkin-detail-value">
// // //                     {checkoutDate || "Loading..."}
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="checkin-action-buttons">
// // //                 <button
// // //                   className={`receipt-print-button ${isPrinting ? "printing" : ""}`}
// // //                   onClick={handlePrintReceipt}
// // //                   disabled={isPrinting}
// // //                 >
// // //                   <Printer size={20} />
// // //                   <span>{isPrinting ? "Printing..." : "Print Receipt"}</span>
// // //                 </button>

// // //                 {failedRoomNames.length > 0 && (
// // //                   <button
// // //                     className={`checkin-button ${isCheckingOut ? "dispensing" : ""}`}
// // //                     onClick={handleManualCheckout}
// // //                     disabled={isCheckingOut}
// // //                   >
// // //                     <LogOut size={20} />
// // //                     <span>{isCheckingOut ? "Retrying..." : "Try Again"}</span>
// // //                   </button>
// // //                 )}
// // //               </div>
// // //             </>
// // //           )}
// // //         </div>
// // //         <HelpFooter />
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Check, Printer, LogOut, Clock } from "lucide-react";
// // import "./CheckOut.css";
// // import Header from "../../components/Header/header";
// // import HelpFooter from "../../components/HelpFooter/HelpFooter";
// // import { API_KEY, BASE_API_URL } from "../../components/constants/constants";
// // import axios from "axios";

// // export default function CheckOut() {
// //   const [roomNames, setRoomNames] = useState([]);
// //   const [checkoutDate, setCheckoutDate] = useState("");
// //   const [isPrinting, setIsPrinting] = useState(false);
// //   const [isCheckingOut, setIsCheckingOut] = useState(false);
// //   const [loading, setLoading] = useState(true);
// //   const [errorMessage, setErrorMessage] = useState("");
// //   const [successRoomNames, setSuccessRoomNames] = useState([]);
// //   const [failedRoomNames, setFailedRoomNames] = useState([]);

// //   const navigate = useNavigate();
// //   const reservationID = sessionStorage.getItem("reservationID");

// //   useEffect(() => {
// //     let tempSuccess = [];
// //     let tempFailed = [];

// //     const checkOutRoom = async (roomName, subReservationID) => {
// //       try {
// //         const response = await axios.post(
// //           `https://check-out-server-cloudbeds.onrender.com/api/checkout`,
// //           new URLSearchParams({
// //             reservationID,
// //             subReservationID,
// //           }),
// //           {
// //             headers: {
// //               accept: "application/json",
// //               authorization: `Bearer ${API_KEY}`,
// //               "content-type": "application/x-www-form-urlencoded",
// //               "x-api-key": API_KEY,
// //             },
// //           }
// //         );

// //         const message = response.data?.message || "";
// //         const isSuccess = response.data.success;

// //         if (isSuccess) {
// //           tempSuccess.push(roomName);
// //         } else if (message.includes("already checked-out")) {
// //           tempFailed.push(`${roomName} (Already checked out)`);
// //         } else {
// //           tempFailed.push(`${roomName} (Failed: ${message || "Unknown error"})`);
// //         }
// //       } catch (err) {
// //         console.error("Checkout error:", err);
// //         tempFailed.push(`${roomName} (Error during checkout)`);
// //       }
// //     };

// //     const fetchReservationDetails = async () => {
// //       try {
// //         const response = await axios.get(
// //           `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
// //           {
// //             headers: {
// //               accept: "application/json",
// //               authorization: `Bearer ${API_KEY}`,
// //               "x-api-key": API_KEY,
// //             },
// //           }
// //         );

// //         const reservationData = response.data.data;
// //         const status = reservationData.status?.toLowerCase();

// //         if (status === "checked_out") {
// //           setErrorMessage("You are already checked out.");
// //           setLoading(false);
// //           return;
// //         } else if (status === "confirmed") {
// //           setErrorMessage("You are currently confirmed. Please check in first.");
// //           setLoading(false);
// //           return;
// //         } else if (status !== "checked_in") {
// //           setErrorMessage(`Your status is '${reservationData.status}'. You must be checked in to proceed.`);
// //           setLoading(false);
// //           return;
// //         }

// //         if (reservationData.assigned && reservationData.assigned.length > 0) {
// //           const assignedRooms = reservationData.assigned.slice(0, 10); // max 10
// //           for (let room of assignedRooms) {
// //             await checkOutRoom(room.roomName, room.subReservationID);
// //           }

// //           setRoomNames(tempSuccess);
// //           setSuccessRoomNames(tempSuccess);
// //           setFailedRoomNames(tempFailed);
// //         } else {
// //           setErrorMessage("No rooms assigned for check-out.");
// //         }

// //         if (reservationData.endDate) {
// //           setCheckoutDate(reservationData.endDate);
// //           sessionStorage.setItem("checkoutDate", reservationData.endDate);
// //         }
// //       } catch (error) {
// //         console.error("Reservation fetch error:", error);
// //         setErrorMessage("Failed to fetch reservation details.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchReservationDetails();
// //   }, [reservationID]);

// //   const handlePrintReceipt = () => {
// //     setIsPrinting(true);
// //     console.log("Printing receipt...");

// //     setTimeout(() => {
// //       setIsPrinting(false);
// //       console.log("Receipt printed.");
// //     }, 1500);
// //   };

// //   const handleManualCheckout = () => {
// //     setIsCheckingOut(true);
// //     console.log("Retrying checkout...");

// //     setTimeout(() => {
// //       setIsCheckingOut(false);
// //       window.location.reload();
// //     }, 2000);
// //   };

// //   return (
// //     <div className="checkin-page">
// //       <div className="checkin-container">
// //         <Header value="CheckOut" />
// //         <div className="checkin-card">
// //           {loading ? (
// //             <p className="loading-text">Processing check-out...</p>
// //           ) : errorMessage ? (
// //             <div className="checkin-failed">
// //               <h3>{errorMessage}</h3>
// //               <div className="error-options">
// //                 <button className="checkin-button" onClick={() => navigate("/")}>
// //                   Go Home
// //                 </button>
// //               </div>
// //             </div>
// //           ) : (
// //             <>
// //               <h2 className="success-heading">Check-Out Success!</h2>
// //               <p className="welcome-message">Thanks for staying with us!</p>

// //               <div className="success-icon-container">
// //                 <div className="success-icon">
// //                   <Check color="white" size={32} />
// //                 </div>
// //               </div>

// //               <div className="room-info">
// //                 {successRoomNames.length > 0 ? (
// //                   <h3 className="room-number">
// //                     {successRoomNames.length === 1
// //                       ? `Room ${successRoomNames[0]}`
// //                       : `Rooms: ${successRoomNames.join(", ")}`}
// //                   </h3>
// //                 ) : (
// //                   <h3 className="room-number">No rooms checked out</h3>
// //                 )}
// //                 {failedRoomNames.length > 0 && (
// //                   <p className="room-number">
// //                     Failed: {failedRoomNames.join(", ")}
// //                   </p>
// //                 )}
// //               </div>

// //               <div className="details-container">
// //                 <div className="detail-row">
// //                   <div className="detail-icon">
// //                     <Clock size={20} />
// //                   </div>
// //                   <div className="checkin-detail-label">Checked Out</div>
// //                   <div className="checkin-detail-value">
// //                     {checkoutDate || "Loading..."}
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="checkin-action-buttons">
// //                 <button
// //                   className={`receipt-print-button ${isPrinting ? "printing" : ""}`}
// //                   onClick={handlePrintReceipt}
// //                   disabled={isPrinting}
// //                 >
// //                   <Printer size={20} />
// //                   <span>{isPrinting ? "Printing..." : "Print Receipt"}</span>
// //                 </button>

// //                 {failedRoomNames.length > 0 && (
// //                   <button
// //                     className={`checkin-button ${isCheckingOut ? "dispensing" : ""}`}
// //                     onClick={handleManualCheckout}
// //                     disabled={isCheckingOut}
// //                   >
// //                     <LogOut size={20} />
// //                     <span>{isCheckingOut ? "Retrying..." : "Try Again"}</span>
// //                   </button>
// //                 )}
// //               </div>
// //             </>
// //           )}
// //         </div>
// //         <HelpFooter />
// //       </div>
// //     </div>
// //   );
// // }


// // No style/layout changes – just saying/message logic

// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Check, Printer, LogOut, Clock } from "lucide-react";
// // import "./CheckOut.css";
// // import Header from "../../components/Header/header";
// // import HelpFooter from "../../components/HelpFooter/HelpFooter";
// // import { API_KEY, BASE_API_URL } from "../../components/constants/constants";
// // import axios from "axios";

// // export default function CheckOut() {
// //   const [roomNames, setRoomNames] = useState([]);
// //   const [checkoutDate, setCheckoutDate] = useState("");
// //   const [isPrinting, setIsPrinting] = useState(false);
// //   const [isCheckingOut, setIsCheckingOut] = useState(false);
// //   const [loading, setLoading] = useState(true);
// //   const [errorMessage, setErrorMessage] = useState("");
// //   const [successRoomNames, setSuccessRoomNames] = useState([]);
// //   const [failedRoomNames, setFailedRoomNames] = useState([]);

// //   const navigate = useNavigate();
// //   const reservationID = sessionStorage.getItem("reservationID");

// //   useEffect(() => {
// //     let tempSuccess = [];
// //     let tempFailed = [];

// //     const checkOutRoom = async (roomName, subReservationID) => {
// //       try {
// //         const response = await axios.post(
// //           `https://check-out-server-cloudbeds.onrender.com/api/checkout`,
// //           new URLSearchParams({
// //             reservationID,
// //             subReservationID,
// //           }),
// //           {
// //             headers: {
// //               accept: "application/json",
// //               authorization: `Bearer ${API_KEY}`,
// //               "content-type": "application/x-www-form-urlencoded",
// //               "x-api-key": API_KEY,
// //             },
// //           }
// //         );

// //         const message = response.data?.message || "";
// //         const isSuccess = response.data.success;

// //         if (isSuccess) {
// //           tempSuccess.push(roomName);
// //         } else if (message.includes("already checked-out")) {
// //           tempFailed.push(`${roomName} (You are already checked out)`);
// //         } else {
// //           tempFailed.push(`${roomName} (Something went wrong)`);
// //         }
// //       } catch (err) {
// //         console.error("Checkout error:", err);
// //         tempFailed.push(`${roomName} (Something went wrong)`);
// //       }
// //     };

// //     const fetchReservationDetails = async () => {
// //       try {
// //         const response = await axios.get(
// //           `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
// //           {
// //             headers: {
// //               accept: "application/json",
// //               authorization: `Bearer ${API_KEY}`,
// //               "x-api-key": API_KEY,
// //             },
// //           }
// //         );

// //         const reservationData = response.data.data;
// //         const status = reservationData.status?.toLowerCase();

// //         if (status === "checked_out") {
// //           setErrorMessage("You are already checked out.");
// //           setLoading(false);
// //           return;
// //         } else if (status === "confirmed") {
// //           setErrorMessage("You are currently confirmed. Please check in first.");
// //           setLoading(false);
// //           return;
// //         } else if (status !== "checked_in") {
// //           setErrorMessage(`You are currently ${status}. Please check in before checking out.`);
// //           setLoading(false);
// //           return;
// //         }

// //         if (reservationData.assigned && reservationData.assigned.length > 0) {
// //           const assignedRooms = reservationData.assigned.slice(0, 10); // max 10
// //           for (let room of assignedRooms) {
// //             await checkOutRoom(room.roomName, room.subReservationID);
// //           }

// //           setRoomNames(tempSuccess);
// //           setSuccessRoomNames(tempSuccess);
// //           setFailedRoomNames(tempFailed);
// //         } else {
// //           setErrorMessage("No rooms assigned for check-out.");
// //         }

// //         if (reservationData.endDate) {
// //           setCheckoutDate(reservationData.endDate);
// //           sessionStorage.setItem("checkoutDate", reservationData.endDate);
// //         }
// //       } catch (error) {
// //         console.error("Reservation fetch error:", error);
// //         setErrorMessage("Failed to fetch reservation details.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchReservationDetails();
// //   }, [reservationID]);

// //   const handlePrintReceipt = () => {
// //     setIsPrinting(true);
// //     setTimeout(() => setIsPrinting(false), 1500);
// //   };

// //   const handleManualCheckout = () => {
// //     setIsCheckingOut(true);
// //     setTimeout(() => {
// //       setIsCheckingOut(false);
// //       window.location.reload();
// //     }, 2000);
// //   };

// //   return (
// //     <div className="checkin-page">
// //       <div className="checkin-container">
// //         <Header value="CheckOut" />
// //         <div className="checkin-card">
// //           {loading ? (
// //             <p className="loading-text">Processing check-out...</p>
// //           ) : errorMessage ? (
// //             <div className="checkin-failed">
// //               <h3>{errorMessage}</h3>
// //               <div className="error-options">
// //                 <button className="checkin-button" onClick={() => navigate("/")}>
// //                   Go Home
// //                 </button>
// //               </div>
// //             </div>
// //           ) : (
// //             <>
// //               <h2 className="success-heading">Check-Out Success!</h2>
// //               <p className="welcome-message">Thanks for staying with us!</p>

// //               <div className="success-icon-container">
// //                 <div className="success-icon">
// //                   <Check color="white" size={32} />
// //                 </div>
// //               </div>

// //               <div className="room-info">
// //                 {successRoomNames.length > 0 ? (
// //                   <h3 className="room-number">
// //                     {successRoomNames.length === 1
// //                       ? `Room ${successRoomNames[0]}`
// //                       : `Rooms: ${successRoomNames.join(", ")}`}
// //                   </h3>
// //                 ) : (
// //                   <h3 className="room-number">No rooms checked out</h3>
// //                 )}
// //                 {failedRoomNames.length > 0 && (
// //                   <p className="room-number">
// //                     Failed: {failedRoomNames.join(", ")}
// //                   </p>
// //                 )}
// //               </div>

// //               <div className="details-container">
// //                 <div className="detail-row">
// //                   <div className="detail-icon">
// //                     <Clock size={20} />
// //                   </div>
// //                   <div className="checkin-detail-label">Checked Out</div>
// //                   <div className="checkin-detail-value">
// //                     {checkoutDate || "Loading..."}
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="checkin-action-buttons">
// //                 <button
// //                   className={`receipt-print-button ${isPrinting ? "printing" : ""}`}
// //                   onClick={handlePrintReceipt}
// //                   disabled={isPrinting}
// //                 >
// //                   <Printer size={20} />
// //                   <span>{isPrinting ? "Printing..." : "Print Receipt"}</span>
// //                 </button>

// //                 {failedRoomNames.length > 0 && (
// //                   <button
// //                     className={`checkin-button ${isCheckingOut ? "dispensing" : ""}`}
// //                     onClick={handleManualCheckout}
// //                     disabled={isCheckingOut}
// //                   >
// //                     <LogOut size={20} />
// //                     <span>{isCheckingOut ? "Retrying..." : "Try Again"}</span>
// //                   </button>
// //                 )}
// //               </div>
// //             </>
// //           )}
// //         </div>
// //         <HelpFooter />
// //       </div>
// //     </div>
// //   );
// // }



// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Check, Printer, LogOut, Clock } from "lucide-react";
// import "./CheckOut.css";
// import Header from "../../components/Header/header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// import { API_KEY, BASE_API_URL } from "../../components/constants/constants";
// import axios from "axios";

// export default function CheckOut() {
//   const [roomNames, setRoomNames] = useState([]);
//   const [checkoutDate, setCheckoutDate] = useState("");
//   const [isPrinting, setIsPrinting] = useState(false);
//   const [isCheckingOut, setIsCheckingOut] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successRoomNames, setSuccessRoomNames] = useState([]);
//   const [failedRoomNames, setFailedRoomNames] = useState([]);

//   const navigate = useNavigate();
//   const reservationID = sessionStorage.getItem("reservationID");

//   useEffect(() => {
//     let tempSuccess = [];
//     let tempFailed = [];

//     const checkOutRoom = async (roomName, subReservationID) => {
//       try {
//         const response = await axios.post(
//           `https://check-out-server-cloudbeds.onrender.com/api/checkout`,
//           new URLSearchParams({
//             reservationID,
//             subReservationID,
//           }),
//           {
//             headers: {
//               accept: "application/json",
//               authorization: `Bearer ${API_KEY}`,
//               "content-type": "application/x-www-form-urlencoded",
//               "x-api-key": API_KEY,
//             },
//           }
//         );

//         const message = response.data?.message || "";
//         const isSuccess = response.data.success;

//         if (isSuccess) {
//           tempSuccess.push(roomName);
//         } else if (message.includes("already checked-out")) {
//           tempFailed.push(`${roomName} (You are already checked out)`);
//         } else {
//           tempFailed.push(`${roomName} (Something went wrong)`);
//         }
//       } catch (err) {
//         console.error("Checkout error:", err);
//         tempFailed.push(`${roomName} (Something went wrong)`);
//       }
//     };

//     const fetchReservationDetails = async () => {
//       try {
//         const response = await axios.get(
//           `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
//           {
//             headers: {
//               accept: "application/json",
//               authorization: `Bearer ${API_KEY}`,
//               "x-api-key": API_KEY,
//             },
//           }
//         );

//         const reservationData = response.data.data;
//         const status = reservationData.status?.toLowerCase();

//         if (status === "checked_out") {
//           setErrorMessage("You are already checked out.");
//           setLoading(false);
//           return;
//         } else if (status === "confirmed") {
//           setErrorMessage("You are currently confirmed. Please check in first.");
//           setLoading(false);
//           return;
//         } else if (status !== "checked_in") {
//           setErrorMessage(`You are currently ${status}. Please check in before checking out.`);
//           setLoading(false);
//           return;
//         }

//         if (reservationData.assigned && reservationData.assigned.length > 0) {
//           const assignedRooms = reservationData.assigned.slice(0, 10); // max 10
//           for (let room of assignedRooms) {
//             await checkOutRoom(room.roomName, room.subReservationID);
//           }

//           setRoomNames(tempSuccess);
//           setSuccessRoomNames(tempSuccess);
//           setFailedRoomNames(tempFailed);
//         } else {
//           setErrorMessage("No rooms assigned for check-out.");
//         }

//         if (reservationData.endDate) {
//           setCheckoutDate(reservationData.endDate);
//           sessionStorage.setItem("checkoutDate", reservationData.endDate);
//         }
//       } catch (error) {
//         console.error("Reservation fetch error:", error);
//         setErrorMessage("Failed to fetch reservation details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReservationDetails();
//   }, [reservationID]);

//   // Redirect to home after 3 seconds if there is an error
//   useEffect(() => {
//     if (errorMessage) {
//       const timeout = setTimeout(() => {
//         navigate("/");
//       }, 3000);
//       return () => clearTimeout(timeout);
//     }
//   }, [errorMessage, navigate]);

//   const handlePrintReceipt = () => {
//     setIsPrinting(true);
//     setTimeout(() => setIsPrinting(false), 1500);
//   };

//   const handleManualCheckout = () => {
//     setIsCheckingOut(true);
//     setTimeout(() => {
//       setIsCheckingOut(false);
//       window.location.reload();
//     }, 2000);
//   };

//   return (
//     <div className="checkin-page">
//       <div className="checkin-container">
//         <Header value="CheckOut" />
//         <div className="checkin-card">
//           {loading ? (
//             <p className="loading-text">Processing check-out...</p>
//           ) : errorMessage ? (
//             <div className="checkin-failed">
//               <h3>{errorMessage}</h3>
//               <p className="loading-text">Redirecting to home...</p>
//             </div>
//           ) : (
//             <>
//               <h2 className="success-heading">Check-Out Success!</h2>
//               <p className="welcome-message">Thanks for staying with us!</p>

//               <div className="success-icon-container">
//                 <div className="success-icon">
//                   <Check color="white" size={32} />
//                 </div>
//               </div>

//               <div className="room-info">
//                 {successRoomNames.length > 0 ? (
//                   <h3 className="room-number">
//                     {successRoomNames.length === 1
//                       ? `Room ${successRoomNames[0]}`
//                       : `Rooms: ${successRoomNames.join(", ")}`}
//                   </h3>
//                 ) : (
//                   <h3 className="room-number">No rooms checked out</h3>
//                 )}
//                 {failedRoomNames.length > 0 && (
//                   <p className="room-number">
//                     Failed: {failedRoomNames.join(", ")}
//                   </p>
//                 )}
//               </div>

//               <div className="details-container">
//                 <div className="detail-row">
//                   <div className="detail-icon">
//                     <Clock size={20} />
//                   </div>
//                   <div className="checkin-detail-label">Checked Out</div>
//                   <div className="checkin-detail-value">
//                     {checkoutDate || "Loading..."}
//                   </div>
//                 </div>
//               </div>

//               <div className="checkin-action-buttons">
//                 <button
//                   className={`receipt-print-button ${isPrinting ? "printing" : ""}`}
//                   onClick={handlePrintReceipt}
//                   disabled={isPrinting}
//                 >
//                   <Printer size={20} />
//                   <span>{isPrinting ? "Printing..." : "Print Receipt"}</span>
//                 </button>

//                 {failedRoomNames.length > 0 && (
//                   <button
//                     className={`checkin-button ${isCheckingOut ? "dispensing" : ""}`}
//                     onClick={handleManualCheckout}
//                     disabled={isCheckingOut}
//                   >
//                     <LogOut size={20} />
//                     <span>{isCheckingOut ? "Retrying..." : "Try Again"}</span>
//                   </button>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//         <HelpFooter />
//       </div>
//     </div>
//   );
// }




import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Printer, LogOut, Clock,MessageSquare  } from "lucide-react";
import "./CheckOut.css";
import Header from "../../components/Header/header";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import { API_KEY, BASE_API_URL } from "../../components/constants/constants";
import axios from "axios";

export default function CheckOut() {
  const [roomNames, setRoomNames] = useState([]);
  const [checkoutDate, setCheckoutDate] = useState("");
  const [isPrinting, setIsPrinting] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successRoomNames, setSuccessRoomNames] = useState([]);
  const [failedRoomNames, setFailedRoomNames] = useState([]);

  const navigate = useNavigate();
  const reservationID = sessionStorage.getItem("reservationID");

  useEffect(() => {
    let tempSuccess = [];
    let tempFailed = [];

    const checkOutRoom = async (roomName, subReservationID) => {
      try {
        const response = await axios.post(
          `https://check-out-server-cloudbeds.onrender.com/api/checkout`,
          new URLSearchParams({
            reservationID,
            subReservationID,
          }),
          {
            headers: {
              accept: "application/json",
              authorization: `Bearer ${API_KEY}`,
              "content-type": "application/x-www-form-urlencoded",
              "x-api-key": API_KEY,
            },
          }
        );

        const message = response.data?.message || "";
        const isSuccess = response.data.success;

        if (isSuccess) {
          tempSuccess.push(roomName);
        } else if (message.includes("already checked-out")) {
          tempFailed.push(`${roomName} (You are already checked out)`);
        } else if (
          message.includes("End date should be today or earlier")
        ) {
          setErrorMessage(
            "Your check-out date is not today."
          );
        } else {
          tempFailed.push(`${roomName} (Something went wrong)`);
        }
      } catch (err) {
        console.error("Checkout error:", err);
        tempFailed.push(`${roomName} (Something went wrong)`);
      }
    };

    const fetchReservationDetails = async () => {
      try {
        const response = await axios.get(
          `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
          {
            headers: {
              accept: "application/json",
              authorization: `Bearer ${API_KEY}`,
              "x-api-key": API_KEY,
            },
          }
        );

        const reservationData = response.data.data;
        const status = reservationData.status?.toLowerCase();

        if (status === "checked_out") {
          setErrorMessage("You are already checked out.");
          setLoading(false);
          return;
        } else if (status === "confirmed") {
          setErrorMessage("You are currently confirmed. Please check in first.");
          setLoading(false);
          return;
        } else if (status !== "checked_in") {
          setErrorMessage(`You are currently ${status}. Please check in before checking out.`);
          setLoading(false);
          return;
        }

        if (reservationData.assigned && reservationData.assigned.length > 0) {
          const assignedRooms = reservationData.assigned.slice(0, 10);
          for (let room of assignedRooms) {
            await checkOutRoom(room.roomName, room.subReservationID);
          }

          setRoomNames(tempSuccess);
          setSuccessRoomNames(tempSuccess);
          setFailedRoomNames(tempFailed);
        } else {
          setErrorMessage("No rooms assigned for check-out.");
        }

        if (reservationData.endDate) {
          setCheckoutDate(reservationData.endDate);
          sessionStorage.setItem("checkoutDate", reservationData.endDate);
        }
      } catch (error) {
        console.error("Reservation fetch error:", error);
        setErrorMessage("Failed to fetch reservation details.");
      } finally {
        setLoading(false);
      }
    };

    fetchReservationDetails();
  }, [reservationID]);

  useEffect(() => {
    if (errorMessage) {
      const timeout = setTimeout(() => {
        navigate("/");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [errorMessage, navigate]);

  const handlePrintReceipt = () => {
    setIsPrinting(true);
    setTimeout(() => setIsPrinting(false), 1500);
  };

  const handleManualCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="checkin-page">
      <div className="checkin-container">
        <Header value="CheckOut" />
        <div className="checkin-card">
          {loading ? (
            <p className="loading-text">Processing check-out...</p>
          ) : errorMessage ? (
            <div className="checkin-failed">
              <h3>{errorMessage}</h3>
              <p className="loading-text">Redirecting to home...</p>
            </div>
          ) : (
            <>
              <h2 className="success-heading">Check-Out Success!</h2>
              <p className="welcome-message">Thanks for staying with us!</p>

              <div className="success-icon-container">
                <div className="success-icon">
                  <Check color="white" size={32} />
                </div>
              </div>

              <div className="room-info">
                {successRoomNames.length > 0 ? (
                  <h3 className="room-number">
                    {successRoomNames.length === 1
                      ? `Room ${successRoomNames[0]}`
                      : `Rooms: ${successRoomNames.join(", ")}`}
                  </h3>
                ) : (
                  <h3 className="room-number">No rooms checked out</h3>
                )}
                {failedRoomNames.length > 0 && (
                  <p className="room-number">
                    Failed: {failedRoomNames.join(", ")}
                  </p>
                )}
              </div>

              <div className="details-container">
                <div className="detail-row">
                  <div className="detail-icon">
                    <Clock size={20} />
                  </div>
                  <div className="checkin-detail-label">Checked Out</div>
                  <div className="checkin-detail-value">
                    {checkoutDate || "Loading..."}
                  </div>
                </div>
              </div>

              <div className="checkin-action-buttons">
                <button
                  className={`receipt-print-button ${isPrinting ? "printing" : ""}`}
                  onClick={handlePrintReceipt}
                  disabled={isPrinting}
                >
                  <Printer size={20} />
                  <span>{isPrinting ? "Printing..." : "Print Receipt"}</span>
                </button>
    <button
  className="checkin-button"
  onClick={() => navigate("/feedback")}
>
  <MessageSquare size={20} />
  <span>Give Feedback</span>
</button>
                {failedRoomNames.length > 0 && (
                  <>
                  <button
                    className={`checkin-button ${isCheckingOut ? "dispensing" : ""}`}
                    onClick={handleManualCheckout}
                    disabled={isCheckingOut}
                  >
                    <LogOut size={20} />
                    <span>{isCheckingOut ? "Retrying..." : "Try Again"}</span>
                  </button>
              
                  </>
                )}
              </div>
            </>
          )}
        </div>
        <HelpFooter />
      </div>
    </div>
  );
}
