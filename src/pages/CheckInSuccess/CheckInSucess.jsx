// import { Home, HelpCircle, Check, Printer, Key, Wifi, Clock, ChevronRight, HelpingHand } from "lucide-react"
// import "./CheckInSuccess.css"
// import Header from "../../components/Header/Header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// export default function CheckInSuccess() {
//   return (
//     <div className="checkin-page">
      
//       <div className="checkin-container">
//         {/* <header className="checkin-header">
//           <div className="logo-section">
//             <div className="home-icon">
//               <Home color="white" size={32} />
//             </div>
//             <h1 className="checkin-title">Check-In</h1>
//           </div>
//           <button className="help-button">
//             Help? <HelpCircle color="white" size={24} />
//           </button>
//         </header> */}
//  <Header />
//         <div className="checkin-card">
//           {/* <div className="key-dispensed-notification">
//             <Check size={16} color="white" />
//             <span>Room key Dispensed Success</span>
//           </div> */}

//           <h2 className="success-heading">Check-In Success!</h2>
//           <p className="welcome-message">Welcome to Grand Luxury Hotel</p>

//           <div className="success-icon-container">
//             <div className="success-icon">
//               <Check color="white" size={32} />
//             </div>
//           </div>

//           <div className="room-info">
//             <h3 className="room-number">Room 101</h3>
//             <p className="room-location">3rd Floor, Ocean View</p>
//           </div>

//           <div className="details-container">
//             <div className="detail-row">
//               <div className="detail-icon">
//                 <Wifi size={20} />
//               </div>
//               <div className="checkin-detail-label">Wi-Fi Password</div>
//               <div className="checkin-detail-value">0004565643K</div>
//             </div>
//             <div className="detail-row">
//               <div className="detail-icon">
//                 <Clock size={20} />
//               </div>
//               <div className="checkin-detail-label">Check-Out</div>
//               <div className="checkin-detail-value">29-03-2025</div>
//             </div>
//           </div>

//           <div className="checkin-action-buttons">
//             <button className="receipt-print-button">
//               <Printer size={20} />
//               <span>Print</span>
//             </button>
//             <button className="checkin-button">
//               <Key size={20} />
//               <span>Dispense key Again</span>
//             </button>
//           </div>
//         </div>
// {/* 
//         <div className="help-section">
//           <div className="help-content">
//             <HelpingHand size={24} className="help-icon" />
//             <div className="help-text">
//               <h3 className="help-title">Need some help?</h3>
//               <p className="help-description">
//                 Contact our front desk at extension 0 or visit the concierge desk in the lobby.
//               </p>
//             </div>
//             <ChevronRight size={20} className="help-arrow" />
//           </div>
//         </div> */}

//         <HelpFooter />
//       </div>
//     </div>
//   )
// }


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Check, Printer, Key, Wifi, Clock } from "lucide-react";
// import "./CheckInSuccess.css";
// import Header from "../../components/Header/Header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// import { API_KEY, BASE_API_URL } from "../../components/constants/constants";
// import axios from "axios";

// export default function CheckInSuccess() {
//   const [roomNames, setRoomNames] = useState([]);
//   const [checkoutDate, setCheckoutDate] = useState("");
//   const [wifiPassword, setWifiPassword] = useState("");
//   const [isPrinting, setIsPrinting] = useState(false);
//   const [isDispensing, setIsDispensing] = useState(false);
//   const navigate = useNavigate();
//   const reservationID = sessionStorage.getItem("reservationID");

//   // Fetch reservation details on component mount
//   useEffect(() => {
//     const fetchReservationDetails = async () => {
//       try {
//         // Get room names from sessionStorage
//         const successRoomNames = JSON.parse(
//           sessionStorage.getItem("SuccessRoomNames") || "[]"
//         );
        
//         if (successRoomNames.length > 0) {
//           setRoomNames(successRoomNames);
//         } else {
//           // Fallback: fetch from API if not in session
//           const response = await axios.get(
//             `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
//             {
//               headers: {
//                 accept: "application/json",
//                 authorization: `Bearer ${API_KEY}`,
//                 "x-api-key": API_KEY,
//               },
//             }
//           );
          
//           const reservationData = response.data.data;
//           if (reservationData.assigned) {
//             const names = reservationData.assigned.map(
//               (room) => room.roomName
//             );
//             setRoomNames(names);
//             sessionStorage.setItem("SuccessRoomNames", JSON.stringify(names));
//           }
//         }

//         // Get checkout date
//         const storedCheckout = sessionStorage.getItem("checkoutDate");
//         if (storedCheckout) {
//           setCheckoutDate(storedCheckout);
//         } else {
//           // Fetch checkout date if not stored
//           const response = await axios.get(
//             `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
//             {
//               headers: {
//                 accept: "application/json",
//                 authorization: `Bearer ${API_KEY}`,
//                 "x-api-key": API_KEY,
//               },
//             }
//           );
          
//           const reservationData = response.data;
//           console.log("Reservation Data:", reservationData);
//           console.log("Checkout Date:", reservationData.data?.endDate);
//           if (reservationData.data) {
//             // const date = new Date(reservationData.dateDeparture);
//             // const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
//             setCheckoutDate(reservationData.data.endDate);
//             sessionStorage.setItem("checkoutDate", reservationData.data.endDate);
//           }
//         }

//         // Generate wifi password (this would typically come from API)
//         const randomPassword = Math.random().toString(36).slice(2, 10).toUpperCase();
//         setWifiPassword(randomPassword);
//         sessionStorage.setItem("wifiPassword", randomPassword);

//       } catch (error) {
//         console.error("Error fetching reservation details:", error);
//       }
//     };

//     fetchReservationDetails();
//   }, [reservationID]);

//   const handlePrintReceipt = () => {
//     setIsPrinting(true);
//     console.log("Printing receipt...");
    
//     // In a real implementation, this would trigger a print dialog
//     // window.print();
    
//     // Simulate print delay
//     setTimeout(() => {
//       setIsPrinting(false);
//       console.log("Receipt printed");
//     }, 1500);
//   };

//   const handleDispenseKey = () => {
//     setIsDispensing(true);
//     console.log("Dispensing key...");
    
//     // Send message to WebView to dispense key
//     if (window.chrome?.webview) {
//       window.chrome.webview.postMessage(
//         JSON.stringify({ 
//           command: "dispense-key", 
//           rooms: roomNames 
//         })
//       );
//     }
    
//     // Simulate dispensing delay
//     setTimeout(() => {
//       setIsDispensing(false);
//       console.log("Key dispensed");
//     }, 2000);
//   };

//   return (
//     <div className="checkin-page">
//       <div className="checkin-container">
//         <Header value="CheckIn" />
//         <div className="checkin-card">
//           <h2 className="success-heading">Check-In Success!</h2>
//           <p className="welcome-message">Welcome to Grand Luxury Hotel</p>

//           <div className="success-icon-container">
//             <div className="success-icon">
//               <Check color="white" size={32} />
//             </div>
//           </div>

//           <div className="room-info">
//             {roomNames.length > 0 ? (
//               <>
//                 <h3 className="room-number">
//                   {roomNames.length === 1 
//                     ? `Room ${roomNames[0]}` 
//                     : `Rooms: ${roomNames.join(", ")}`}
//                 </h3>
//                 <p className="room-location">
//                   {roomNames.length === 1 ? "3rd Floor, Ocean View" : "Multiple Rooms"}
//                 </p>
//               </>
//             ) : (
//               <h3 className="room-number">Loading room information...</h3>
//             )}
//           </div>

//           <div className="details-container">
//             <div className="detail-row">
//               <div className="detail-icon">
//                 <Wifi size={20} />
//               </div>
//               <div className="checkin-detail-label">Wi-Fi Password</div>
//               <div className="checkin-detail-value">
//                 {wifiPassword || "Generating..."}
//               </div>
//             </div>
//             <div className="detail-row">
//               <div className="detail-icon">
//                 <Clock size={20} />
//               </div>
//               <div className="checkin-detail-label">Check-Out</div>
//               <div className="checkin-detail-value">
//                 {checkoutDate || "Loading..."}
//               </div>
//             </div>
//           </div>

//           <div className="checkin-action-buttons">
//             <button 
//               className={`receipt-print-button ${isPrinting ? "printing" : ""}`}
//               onClick={handlePrintReceipt}
//               disabled={isPrinting}
//             >
//               <Printer size={20} />
//               <span>{isPrinting ? "Printing..." : "Print"}</span>
//             </button>
//             <button 
//               className={`checkin-button ${isDispensing ? "dispensing" : ""}`}
//               onClick={handleDispenseKey}
//               disabled={isDispensing}
//             >
//               <Key size={20} />
//               <span>
//                 {isDispensing ? "Dispensing..." : "Dispense Key Again"}
//               </span>
//             </button>
//           </div>
//         </div>
//         <HelpFooter />
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Printer, Key, Wifi, Clock } from "lucide-react";
import "./CheckInSuccess.css";
import Header from "../../components/Header/header";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";
import axios from "axios";

export default function CheckInSuccess() {
  const [roomNames, setRoomNames] = useState([]);
  const [checkoutDate, setCheckoutDate] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [isPrinting, setIsPrinting] = useState(false);
  const [isDispensing, setIsDispensing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successfulCheckin, setSuccessfulCheckin] = useState(false);
  const [roomOccupied, setRoomOccupied] = useState([]);
  const [failedRoomNames, setFailedRoomNames] = useState([]);
  const [successRoomNames, setSuccessRoomNames] = useState([]);

  const navigate = useNavigate();
  const reservationID = sessionStorage.getItem("reservationID");

  useEffect(() => {
    const occupiedRooms = [];
    let tempCheckedInRooms = [];
    let tempFailedRoomNames = [];
    let tempSuccessRoomNames = [];

    const checkInUser = async (roomName, roomID, subReservationID) => {
      try {
        const response = await axios.post(
          `${BASE_API_URL}/room/checkin`,
          new URLSearchParams({
            reservationID,
            subReservationID,
            propertyID,
            roomID,
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

        if (response.data.success || response.data.message === "Room already in-house. Nothing was done.") {
          console.log(`Room ${roomName} checked in successfully`);
          tempCheckedInRooms.push(roomID);
          tempSuccessRoomNames.push(roomName);
        } else if (response.data.message.includes("You cannot check this reservation in until the reservation currently assigned to this room is checked out")) {
          occupiedRooms.push(roomID);
          tempFailedRoomNames.push(roomName);
        } else {
          tempFailedRoomNames.push(roomName);
        }
      } catch (error) {
        console.error("Check-in error:", error);
        tempFailedRoomNames.push(roomName);
      }
    };

    const fetchReservationDetails = async () => {
      try {
        // First, attempt check-in
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

        if (reservationData.assigned && reservationData.assigned.length > 0) {
          for (let i = 0; i < Math.min(10, reservationData.assigned.length); i++) {
            await checkInUser(
              reservationData.assigned[i].roomName,
              reservationData.assigned[i].roomID,
              reservationData.assigned[i].subReservationID
            );
          }

          if (occupiedRooms.length > 0) {
            sessionStorage.setItem("occupiedRooms", JSON.stringify(occupiedRooms));
            sessionStorage.setItem("SuccessRoomNames", JSON.stringify(tempSuccessRoomNames));
            sessionStorage.setItem("FailedRoomNames", JSON.stringify(tempFailedRoomNames));
            setRoomOccupied([...occupiedRooms]);
            setSuccessRoomNames([...tempSuccessRoomNames]);
            setFailedRoomNames([...tempFailedRoomNames]);
            setRoomNames([...tempSuccessRoomNames]);
          } else {
            sessionStorage.setItem("SuccessRoomNames", JSON.stringify(tempSuccessRoomNames));
            sessionStorage.setItem("FailedRoomNames", JSON.stringify(tempFailedRoomNames));
            setSuccessRoomNames([...tempSuccessRoomNames]);
            setFailedRoomNames([...tempFailedRoomNames]);
            setRoomNames([...tempSuccessRoomNames]);
            if (tempCheckedInRooms.length > 0) {
              setSuccessfulCheckin(true);
            }
          }
        } else {
          setErrorMessage("No rooms assigned for check-in.");
        }

        // Get checkout date
        const storedCheckout = sessionStorage.getItem("checkoutDate");
        if (storedCheckout) {
          setCheckoutDate(storedCheckout);
        } else if (reservationData.endDate) {
          setCheckoutDate(reservationData.endDate);
          sessionStorage.setItem("checkoutDate", reservationData.endDate);
        }

        // Generate wifi password
        const randomPassword = Math.random().toString(36).slice(2, 10).toUpperCase();
        setWifiPassword(randomPassword);
        sessionStorage.setItem("wifiPassword", randomPassword);

      } catch (error) {
        console.error("Error fetching reservation details:", error);
        setErrorMessage("Failed to fetch reservation details.");
      } finally {
        setLoading(false);
      }
    };

    fetchReservationDetails();
  }, [reservationID, navigate]);

  const handlePrintReceipt = () => {
    setIsPrinting(true);
    console.log("Printing receipt...");
    
    setTimeout(() => {
      setIsPrinting(false);
      console.log("Receipt printed");
    }, 1500);
  };

  const handleDispenseKey = () => {
    setIsDispensing(true);
    console.log("Dispensing key...");
    
    if (window.chrome?.webview) {
      window.chrome.webview.postMessage(
        JSON.stringify({ 
          command: "dispense-key", 
          rooms: roomNames 
        })
      );
    }
    
    setTimeout(() => {
      setIsDispensing(false);
      console.log("Key dispensed");
    }, 2000);
  };

  return (
    <div className="checkin-page">
      <div className="checkin-container">
        <Header value="CheckIn" />
        <div className="checkin-card">
          {loading ? (
            <p className="loading-text">Processing check-in...</p>
          ) : errorMessage ? (
            <div className="checkin-failed">
              <h3>{errorMessage}</h3>
              <div className="error-options">
                <button className="checkin-button" onClick={() => navigate("/reassign-room")}>
                  Change Room
                </button>
                <button className="checkin-button" onClick={() => navigate("/")}>
                  Wait
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="success-heading">Check-In {successfulCheckin ? "Success!" : "Status"}</h2>
              <p className="welcome-message">Welcome to Kiotel</p>

              <div className="success-icon-container">
                <div className="success-icon">
                  <Check color="white" size={32} />
                </div>
              </div>

              <div className="room-info">
                {roomNames.length > 0 ? (
                  <>
                    <h3 className="room-number">
                      {roomNames.length === 1 
                        ? `Room ${roomNames[0]}` 
                        : `Rooms: ${roomNames.join(", ")}`}
                    </h3>
                    <p className="room-location">
                      {roomNames.length === 1 ? "3rd Floor, Ocean View" : "Multiple Rooms"}
                    </p>
                  </>
                ) : (
                  <h3 className="room-number">No rooms assigned</h3>
                )}
                {failedRoomNames.length > 0 && (
                  <p className="room-number">
                    Failed to check-in: {failedRoomNames.join(", ")}
                  </p>
                )}
                {roomOccupied.length > 0 && (
                  <p className="room-number">
                    Occupied rooms: {roomOccupied.join(", ")}
                  </p>
                )}
              </div>

              <div className="details-container">
                <div className="detail-row">
                  <div className="detail-icon">
                    <Wifi size={20} />
                  </div>
                  <div className="checkin-detail-label">Wi-Fi Password</div>
                  <div className="checkin-detail-value">
                    {wifiPassword || "Generating..."}
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-icon">
                    <Clock size={20} />
                  </div>
                  <div className="checkin-detail-label">Check-Out</div>
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
                  <span>{isPrinting ? "Printing..." : "Print"}</span>
                </button>
                <button 
                  className={`checkin-button ${isDispensing ? "dispensing" : ""}`}
                  onClick={handleDispenseKey}
                  disabled={isDispensing}
                >
                  <Key size={20} />
                  <span>
                    {isDispensing ? "Dispensing..." : "Dispense Key Again"}
                  </span>
                </button>
                {roomOccupied.length > 0 && (
                  <button 
                    className="checkin-button"
                    onClick={() => navigate("/reassign-room")}
                  >
                    Change Room
                  </button>
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