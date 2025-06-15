

// // // // // import React from "react";
// // // // // import { Home, HelpCircle, ChevronLeft, Scan } from "lucide-react";
// // // // // import "./IdVerification.css"; // Ensure the CSS file is named correctly

// // // // // export default function IdVerification() {
// // // // //   return (
// // // // //     <div className="idverification-page">
// // // // //       <div className="idverification-container">
// // // // //         <header className="idverification-header">
// // // // //           <div className="idlogo-section">
// // // // //             <div className="idhome-icon-id">
// // // // //               <img src="../src/assets/images/bookingdetails/home.png" alt="home" />
// // // // //             </div>
// // // // //             <h1 className="idverification-title">ID Verification</h1>
// // // // //           </div>

// // // // //           <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
// // // // //         </header>

// // // // //         <div className="idverification-card">
// // // // //           <button className="idback-button">
// // // // //             <ChevronLeft size={20} />
// // // // //             <span>Back</span>
// // // // //           </button>

// // // // //           <div className="idscanner-container">
// // // // //             <div className="idscanner-frame">
// // // // //               {/* Replace illustration with image */}
// // // // //               <img
// // // // //                 src="../src/assets/images/Scanidimage.png"
// // // // //                 alt="ID Card Illustration"
// // // // //                 className="idcard-image"
// // // // //               />
// // // // //               <div className="scan-line"></div>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="instructions">
// // // // //             <h2 className="instructions-title">Scan your ID / Passport using the scanner</h2>
// // // // //             <p className="instructions-text">Please scan your government issued ID using the scanner below.</p>
// // // // //           </div>

// // // // //           <button className="scan-button">
// // // // //             <Scan size={50} color="white" />
// // // // //             <span>Scan License</span>
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import React from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { ChevronLeft, Scan } from "lucide-react";
// // // // import "./IdVerification.css";

// // // // export default function IdVerification() {
// // // //   const navigate = useNavigate();

// // // //   const handleBackClick = () => {
// // // //     const isNewUser = sessionStorage.getItem("newUser");
// // // //     if (isNewUser) {
// // // //       navigate("/booking-details");
// // // //     } else {
// // // //       navigate("/");
// // // //     }
// // // //   };
// // // //   const handleHomeClick = () => {
// // // //   navigate("/");
// // // //   }

// // // //   const handleScanClick = () => {
// // // //       navigate("/verification-complete");
// // // //   }

// // // //   return (
// // // //     <div className="idverification-page">
// // // //       <div className="idverification-container">
// // // //         <header className="idverification-header">
// // // //           <div className="idlogo-section">
// // // //             <div className="idhome-icon-id">
// // // //               <img src="../../src/assets/images/bookingdetails/home.png" alt="home" onClick={handleHomeClick} />
// // // //             </div>
// // // //             <h1 className="idverification-title">ID Verification</h1>
// // // //           </div>
// // // //           <img src="../../src/assets/images/bookingdetails/help.png" alt="help" />
// // // //         </header>

// // // //         <div className="idverification-card">
// // // //           <button className="idback-button" onClick={handleBackClick}>
// // // //             <ChevronLeft size={20} />
// // // //             <span>Back</span>
// // // //           </button>

// // // //           <div className="idscanner-container">
// // // //             <div className="idscanner-frame">
// // // //               <img
// // // //                 src="../src/assets/images/Scanidimage.png"
// // // //                 alt="ID Card Illustration"
// // // //                 className="idcard-image"
// // // //               />
// // // //               <div className="scan-line"></div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="instructions">
// // // //             <h2 className="instructions-title">Scan your ID / Passport using the scanner</h2>
// // // //             <p className="instructions-text">Please scan your government issued ID using the scanner below.</p>
// // // //           </div>

// // // //           <button className="scan-button" onClick={handleScanClick}>
// // // //             <Scan size={50} color="white" />
// // // //             <span>Scan License</span>
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import React, { useEffect, useRef, useState } from "react";

// // // const WEBSOCKET_URL = "ws://127.0.0.1:90/echo"; // Update as needed
// // // const API_IMAGE_UPLOAD = "https://your-server/upload";
// // // const API_TEXTRACT_URL = "https://your-server/textract";
// // // const API_METADATA_UPLOAD = "https://your-server/save-data";

// // // export default function IdVerification() {
// // //   const ws = useRef(null);
// // //   const [status, setStatus] = useState("Disconnected");
// // //   const [image, setImage] = useState(null);
// // //   const [cardData, setCardData] = useState(null);

// // //   const reconnectTimeout = useRef(null);

// // //   useEffect(() => {
// // //     connectWebSocket();

// // //     const interval = setInterval(() => {
// // //       sendCommand("Get", "OnLineStatus");
// // //     }, 1000);

// // //     return () => {
// // //       if (ws.current) ws.current.close();
// // //       clearTimeout(reconnectTimeout.current);
// // //       clearInterval(interval);
// // //     };
// // //   }, []);

// // //   const connectWebSocket = () => {
// // //     if (ws.current) return;

// // //     ws.current = new WebSocket(WEBSOCKET_URL);

// // //     ws.current.onopen = () => {
// // //       setStatus("Connected");
// // //       sendDefaultSettings();
// // //     };

// // //     ws.current.onmessage = (e) => handleMessage(e.data);

// // //     ws.current.onclose = () => {
// // //       setStatus("Disconnected");
// // //       ws.current = null;
// // //       reconnectTimeout.current = setTimeout(connectWebSocket, 1000);
// // //     };

// // //     ws.current.onerror = () => setStatus("Error");
// // //   };

// // //   const sendCommand = (command, operand, param = null) => {
// // //     if (ws.current?.readyState === WebSocket.OPEN) {
// // //       ws.current.send(
// // //         JSON.stringify({
// // //           Type: "Request",
// // //           Commands: [{ Command: command, Operand: operand, Param: param }],
// // //         })
// // //       );
// // //     }
// // //   };

// // //   const sendDefaultSettings = () => {
// // //     sendCommand("Set", "RFID", "Y");
// // //     sendCommand("Set", "VIZ", "Y");
// // //   };

// // //   const handleMessage = (data) => {
// // //     try {
// // //       const msg = JSON.parse(data);

// // //       if (msg.Type === "Notify" && msg.Command === "CardDetected") {
// // //         console.log("Detected!");
// // //         acquireImage();
// // //       }

// // //       if (msg.Command === "Save" && msg.Operand === "Images") {
// // //         uploadImage(msg.Param.White);
// // //       }
// // //     } catch (err) {
// // //       console.error("WebSocket msg error:", err);
// // //     }
// // //   };

// // //   const acquireImage = () => {
// // //     sendCommand("Get", "ImageMessage", 2);
// // //   };

// // //   const uploadImage = async (base64Image) => {
// // //     try {
// // //       const byteString = atob(base64Image.split(",")[1]);
// // //       const mimeType = base64Image.match(/data:(.*);base64/)[1];
// // //       const ab = new ArrayBuffer(byteString.length);
// // //       const ia = new Uint8Array(ab);

// // //       for (let i = 0; i < byteString.length; i++) {
// // //         ia[i] = byteString.charCodeAt(i);
// // //       }

// // //       const file = new File([ab], `doc.${mimeType.split("/")[1]}`, {
// // //         type: mimeType,
// // //       });

// // //       const formData = new FormData();
// // //       formData.append("file", file);

// // //       const response = await fetch(API_IMAGE_UPLOAD, {
// // //         method: "POST",
// // //         body: formData,
// // //       });

// // //       const { file_name } = await response.json();
// // //       runTextract(file, file_name);
// // //     } catch (err) {
// // //       console.error("Image upload failed:", err);
// // //     }
// // //   };

// // //   const runTextract = async (file, fileName) => {
// // //     try {
// // //       const formData = new FormData();
// // //       formData.append("idImage", file);

// // //       const response = await fetch(API_TEXTRACT_URL, {
// // //         method: "POST",
// // //         body: formData,
// // //       });

// // //       const data = await response.json();
// // //       setCardData(data);

// // //       await uploadCardData(data, fileName);
// // //     } catch (err) {
// // //       console.error("Textract failed:", err);
// // //     }
// // //   };

// // //   const uploadCardData = async (data, scanId) => {
// // //     try {
// // //       const formData = new FormData();
// // //       formData.append("scan_no", scanId);
// // //       formData.append("document", JSON.stringify(data));

// // //       await fetch(API_METADATA_UPLOAD, {
// // //         method: "POST",
// // //         body: formData,
// // //       });
// // //     } catch (err) {
// // //       console.error("Card data upload failed:", err);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Status: {status}</h2>
// // //       {cardData && (
// // //         <div>
// // //           <p>Name: {cardData.FIRST_NAME} {cardData.LAST_NAME}</p>
// // //           <p>Country: {cardData.STATE_NAME}</p>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };


// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { ChevronLeft, Scan } from "lucide-react";
// import "./IdVerification.css";

// const WEBSOCKET_URL = "ws://127.0.0.1:90/echo";
// const API_IMAGE_UPLOAD = "https://hkcontroller.kiotel.co/utils/upload_file";
// const API_DATA_UPLOAD = "https://hkcontroller.kiotel.co/utils/upload_document";
// const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw";
// const BASE_API_URL = "https://kiotel-backend-middleware.onrender.com/api/v1.1";
// const API_TEXTRACT_URL =
//   "https://kiotel-backend-middleware.onrender.com/api/v1/textract/upload-id";

// export default function IdVerification() {
//   const navigate = useNavigate();
//   const [websocketStatus, setWebsocketStatus] = useState("Disconnected");
//   const [deviceStatus, setDeviceStatus] = useState("Not Connected");
//   const [deviceName, setDeviceName] = useState("");
//   const [deviceSerial, setDeviceSerial] = useState("");
//   const [passportData, setPassportData] = useState(null);
//   const [passportImages, setPassportImages] = useState({});
//   const [uploadedFileName, setUploadedFileName] = useState("");
//   const [uploadScanNo, setUploadScanNo] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const ws = useRef(null);
//   let reconnectTimeout = useRef(null);

//   const newCustomer = sessionStorage.getItem("newUser") === "true";

//   useEffect(() => {
//     connectWebSocket();

//     const statusInterval = setInterval(() => {
//       requestDeviceStatus();
//       getDeviceInfo();
//     }, 1000);

//     return () => {
//       console.log("Cleaning up WebSocket...");
//       if (ws.current) {
//         ws.current.onclose = null;
//         ws.current.close();
//         ws.current = null;
//       }
//       if (reconnectTimeout.current) {
//         clearTimeout(reconnectTimeout.current);
//       }
//       clearInterval(statusInterval);
//     };
//   }, []);

//   const setDefaultSettings = () => {
//     if (ws.current?.readyState === WebSocket.OPEN) {
//       ws.current.send(
//         JSON.stringify({
//           Type: "Request",
//           Commands: [
//             { Command: "Set", Operand: "RFID", Param: "Y" },
//             { Command: "Set", Operand: "VIZ", Param: "Y" },
//           ],
//         })
//       );
//     }
//   };

//   const connectWebSocket = () => {
//     if (ws.current) {
//       console.log(
//         "WebSocket instance already exists. Skipping new connection."
//       );
//       return;
//     }
//     ws.current = new WebSocket(WEBSOCKET_URL);

//     ws.current.onopen = () => {
//       console.log("Websocket Connected");
//       setWebsocketStatus("Connected");
//       setDefaultSettings();
//       requestDeviceStatus();
//       getDeviceInfo();
//     };

//     ws.current.onclose = () => {
//       console.log("WebSocket Disconnected, retrying in 2 seconds...");
//       setWebsocketStatus("Disconnected");
//       setDeviceStatus("Not Connected");

//       ws.current = null;
//       reconnectTimeout.current = setTimeout(connectWebSocket, 1000);
//     };

//     ws.current.onerror = () => setWebsocketStatus("Error");

//     ws.current.onmessage = (event) => handleWebSocketMessage(event.data);
//   };

//   const requestDeviceStatus = () => {
//     if (ws.current?.readyState === WebSocket.OPEN) {
//       ws.current.send(
//         JSON.stringify({
//           Type: "Request",
//           Commands: [{ Command: "Get", Operand: "OnLineStatus" }],
//         })
//       );
//     }
//   };

//   const getDeviceInfo = () => {
//     if (ws.current?.readyState === WebSocket.OPEN) {
//       ws.current.send(
//         JSON.stringify({
//           Type: "Request",
//           Commands: [
//             { Command: "Get", Operand: "DeviceName" },
//             { Command: "Get", Operand: "DeviceSerialNo" },
//           ],
//         })
//       );
//     }
//   };

//   const handleWebSocketMessage = (data) => {
//     try {
//       const message = JSON.parse(data);

//       if (message.Type === "Notify") {
//         if (message.Command === "CardDetected") {
//           console.log("📄 Document Detected!");

//           // Clear previous scan data before acquiring a new image
//           setPassportImages({});
//           setPassportData(null);
//           setUploadScanNo("");
//           setUploadedFileName("");

//           acquireImage();
//         } else if (message.Command === "Save" && message.Operand === "Images") {
//           handleReceivedImages(message.Param);
//         }
//       }

//       if (message.Type === "Response" && message.Commands) {
//         message.Commands.forEach((command) => {
//           if (command.Operand === "OnLineStatus") {
//             setDeviceStatus(
//               command.Param === "Device Connected"
//                 ? "Connected"
//                 : "Not Connected"
//             );
//           }
//           if (command.Operand === "DeviceSerialNo") {
//             setDeviceSerial(command.Param);
//           }
//           if (command.Operand === "DeviceName") {
//             setDeviceName(command.Param);
//           }
//         });
//       }
//     } catch (error) {
//       console.error("Error parsing WebSocket message:", error);
//     }
//   };

//   const handleReceivedImages = async (images) => {
//     console.log("Received Images:", images);

//     if (images.White) {
//       setPassportImages({ White: images.White });
//     }

//     await sendImageDataToAPI(images);
//   };

//   const acquireImage = () => {
//     if (ws.current?.readyState === WebSocket.OPEN) {
//       ws.current.send(
//         JSON.stringify({
//           Type: "Notify",
//           Command: "Get",
//           Operand: "ImageMessage",
//           Param: 2,
//         })
//       );
//     }
//   };

//   const sendImageDataToAPI = async (images) => {
//     setIsLoading(true);

//     if (images.hasOwnProperty("White")) {
//       const base64String = images["White"];

//       const base64Data = base64String.split(",")[1];

//       const mimeString = base64String.split(",")[0].split(":")[1].split(";")[0];

//       // Convert base64 to a binary array
//       const byteString = atob(base64Data);
//       const ab = new ArrayBuffer(byteString.length);
//       const ia = new Uint8Array(ab);

//       for (let i = 0; i < byteString.length; i++) {
//         ia[i] = byteString.charCodeAt(i);
//       }

//       // Dynamically determine the file extension from the MIME type
//       const fileExtension = mimeString.split("/")[1];
//       const fileName = `Image.${fileExtension}`;

//       // Create a File object
//       const file = new File([ab], fileName, { type: mimeString });

//       const formData = new FormData();
//       formData.append("device", "device2");
//       formData.append("scan_type", "DIRECT");
//       formData.append("file", file);

//       try {
//         const response1 = await fetch(API_IMAGE_UPLOAD, {
//           method: "POST",
//           body: formData,
//         });

//         const data1 = await response1.json();
//         console.log("Image data sent successfully:", data1);

//         setUploadedFileName(data1.file_name);
//         setUploadScanNo(data1.scan_no);

//         const textractFormData = new FormData();
//         textractFormData.append("idImage", file);

//         const response2 = await fetch(API_TEXTRACT_URL, {
//           method: "POST",
//           body: textractFormData,
//         });

//         const data2 = await response2.json();
//         console.log("Textract data sent successfully:", data2);

//         if (!response2.ok) throw new Error("Textract API failed.");

//         await sendCardContentToAPI(data1.scan_no, data2);

//         setPassportData(data2);
//         handleReceivedContent(data2);
//         setIsLoading(false);

//         if (window.chrome && window.chrome.webview) {
//           window.chrome.webview.postMessage(
//             `SCANCOMPLETE-${uploadedFileName}-device2`
//           );
//         }
//       } catch (error) {
//         console.error("Error sending image data:", error);
//         setIsLoading(false);
//         if (window.chrome && window.chrome.webview) {
//           window.chrome.webview.postMessage(`ERROR-NETWORK-${error.message}`);
//         }
//       }
//     } else {
//       console.error("White image data not found in the images object.");
//       setIsLoading(false);
//     }
//   };

//   const sendCardContentToAPI = async (scanNo, cardContent) => {
//     try {
//       if (!scanNo) {
//         console.error("Scan number is missing. Image upload may have failed.");
//         return;
//       }

//       const formData = new FormData();
//       formData.append("device", "device2");
//       formData.append("scan_no", scanNo);
//       formData.append("document", JSON.stringify(cardContent));

//       const response = await fetch(API_DATA_UPLOAD, {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.text();
//       console.log("Card content upload response:", data);
//       if (window.chrome && window.chrome.webview) {
//         window.chrome.webview.postMessage(data);
//       }
//     } catch (error) {
//       console.error("Error sending card content:", error);
//       if (window.chrome && window.chrome.webview) {
//         window.chrome.webview.postMessage(error.toString());
//       }
//     }
//   };

//   const handleReceivedContent = (cardContent) => {
//     const firstName = cardContent.FIRST_NAME || "";
//     const lastName = cardContent.LAST_NAME || "";
//     sessionStorage.setItem("guestFirstName", firstName);
//     sessionStorage.setItem("guestLastName", lastName);
//     sessionStorage.setItem("guestCountry", cardContent.STATE_NAME || "US");
//     sessionStorage.setItem("guestGender", "M");
//     sessionStorage.setItem("guestEmail", "");
//     sessionStorage.setItem("guestPhone", "");

//     setPassportData(cardContent);
//   };

//   const handleVerify = () => {
//     if (passportData) {
//       setPassportData(null);
//       navigate("/verification-complete");
//     }
//   };

//   const handleScan = () => {
//     setPassportImages({});
//     setPassportData(null);
//   };

//   const handleBackClick = () => {
//     const isNewUser = sessionStorage.getItem("newUser");
//     if (isNewUser) {
//       navigate("/booking-details");
//     } else {
//       navigate("/");
//     }
//   };

//   const handleHomeClick = () => {
//     navigate("/");
//   };

//   const getStatusColor = (status) => (status === "Connected" ? "green" : "red");
  
//   return (
//     <div className="idverification-page">
//       <div className="idverification-container">
//         <header className="idverification-header">
//           <div className="idlogo-section">
//             <div className="idhome-icon-id">
//               <img 
//                 src="../../src/assets/images/bookingdetails/home.png" 
//                 alt="home" 
//                 onClick={handleHomeClick} 
//               />
//             </div>
//             <h1 className="idverification-title">ID Verification</h1>
//           </div>
//           <img src="../../src/assets/images/bookingdetails/help.png" alt="help" />
//         </header>

//         {/* Status indicator - added to match functionality */}
//         <div style={{
//           position: 'absolute',
//           top: '20px',
//           right: '20px',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px'
//         }}>
//           <span style={{
//             display: 'inline-block',
//             width: '12px',
//             height: '12px',
//             borderRadius: '50%',
//             backgroundColor: getStatusColor(websocketStatus)
//           }}></span>
//           <span>Scanner {websocketStatus}</span>
//         </div>

//         <div className="idverification-card">
//           <button className="idback-button" onClick={handleBackClick}>
//             <ChevronLeft size={20} />
//             <span>Back</span>
//           </button>

//           <div className="idscanner-container">
//             <div className="idscanner-frame">
//               {passportImages.White ? (
//                 <img
//                   src={passportImages.White}
//                   alt="Scanned ID"
//                   className="idcard-image"
//                   style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//                 />
//               ) : (
//                 <>
//                   <img
//                     src="../src/assets/images/Scanidimage.png"
//                     alt="ID Card Illustration"
//                     className="idcard-image"
//                   />
//                   <div className="scan-line"></div>
//                 </>
//               )}
//             </div>
//           </div>

//           <div className="instructions">
//             <h2 className="instructions-title">
//               {passportImages.White ? "ID Scanned Successfully" : "Scan your ID / Passport using the scanner"}
//             </h2>
//             <p className="instructions-text">
//               {passportImages.White 
//                 ? "Please verify your information below" 
//                 : "Please scan your government issued ID using the scanner below."}
//             </p>
//           </div>
//           <button 
//             className="scan-button" 
//             onClick={passportData ? handleVerify : () => {}}
//             disabled={!passportData && !passportImages.White}
//           >
//             <Scan size={50} color="white" />
//             <span>{passportData ? "Continue" : "Scaning License"}</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




// // import React, { useState, useEffect, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { ChevronLeft, Scan } from "lucide-react";
// // import "./IdVerification.css";

// // const WEBSOCKET_URL = "ws://127.0.0.1:90/echo";
// // const API_IMAGE_UPLOAD = "https://hkcontroller.kiotel.co/utils/upload_file";
// // const API_DATA_UPLOAD = "https://hkcontroller.kiotel.co/utils/upload_document";
// // const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw";
// // const BASE_API_URL = "https://kiotel-backend-middleware.onrender.com/api/v1.1";
// // const API_TEXTRACT_URL = "https://kiotel-backend-middleware.onrender.com/api/v1/textract/upload-id";

// // export default function IdVerification() {
// //   const navigate = useNavigate();
// //   const [websocketStatus, setWebsocketStatus] = useState("Disconnected");
// //   const [deviceStatus, setDeviceStatus] = useState("Not Connected");
// //   const [deviceName, setDeviceName] = useState("");
// //   const [deviceSerial, setDeviceSerial] = useState("");
// //   const [passportData, setPassportData] = useState(null);
// //   const [passportImages, setPassportImages] = useState({});
// //   const [uploadedFileName, setUploadedFileName] = useState("");
// //   const [uploadScanNo, setUploadScanNo] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);
// //   const ws = useRef(null);
// //   let reconnectTimeout = useRef(null);

// //   const newCustomer = sessionStorage.getItem("newUser") === "true";

// //   useEffect(() => {
// //     connectWebSocket();
// //         const dummyPassport = {
// //       FIRST_NAME: "John",
// //       LAST_NAME: "Doe",
// //       STATE_NAME: "USA",
// //       DOCUMENT_NUMBER: "123456789",
// //       DOB: "1990-01-01",
// //       EXPIRY_DATE: "2030-01-01",
// //       NATIONALITY: "USA",
// //       GENDER: "M",
// //     };
// //     setPassportData(dummyPassport);

// //     const statusInterval = setInterval(() => {
// //       requestDeviceStatus();
// //       getDeviceInfo();
// //     }, 1000);

// //     return () => {
// //       if (ws.current) {
// //         ws.current.onclose = null;
// //         ws.current.close();
// //         ws.current = null;
// //       }
// //       if (reconnectTimeout.current) {
// //         clearTimeout(reconnectTimeout.current);
// //       }
// //       clearInterval(statusInterval);
// //     };
// //   }, []);

// //   const setDefaultSettings = () => {
// //     if (ws.current?.readyState === WebSocket.OPEN) {
// //       ws.current.send(
// //         JSON.stringify({
// //           Type: "Request",
// //           Commands: [
// //             { Command: "Set", Operand: "RFID", Param: "Y" },
// //             { Command: "Set", Operand: "VIZ", Param: "Y" },
// //           ],
// //         })
// //       );
// //     }
// //   };

// //   const connectWebSocket = () => {
// //     if (ws.current) return;

// //     ws.current = new WebSocket(WEBSOCKET_URL);

// //     ws.current.onopen = () => {
// //       setWebsocketStatus("Connected");
// //       setDefaultSettings();
// //       requestDeviceStatus();
// //       getDeviceInfo();
// //     };

// //     ws.current.onclose = () => {
// //       setWebsocketStatus("Disconnected");
// //       setDeviceStatus("Not Connected");
// //       ws.current = null;
// //       reconnectTimeout.current = setTimeout(connectWebSocket, 1000);
// //     };

// //     ws.current.onerror = () => setWebsocketStatus("Error");

// //     ws.current.onmessage = (event) => handleWebSocketMessage(event.data);
// //   };

// //   const requestDeviceStatus = () => {
// //     if (ws.current?.readyState === WebSocket.OPEN) {
// //       ws.current.send(
// //         JSON.stringify({
// //           Type: "Request",
// //           Commands: [{ Command: "Get", Operand: "OnLineStatus" }],
// //         })
// //       );
// //     }
// //   };

// //   const getDeviceInfo = () => {
// //     if (ws.current?.readyState === WebSocket.OPEN) {
// //       ws.current.send(
// //         JSON.stringify({
// //           Type: "Request",
// //           Commands: [
// //             { Command: "Get", Operand: "DeviceName" },
// //             { Command: "Get", Operand: "DeviceSerialNo" },
// //           ],
// //         })
// //       );
// //     }
// //   };

// //   const handleWebSocketMessage = (data) => {
// //     try {
// //       const message = JSON.parse(data);

// //       if (message.Type === "Notify") {
// //         if (message.Command === "CardDetected") {
// //           setPassportImages({});
// //           setPassportData(null);
// //           setUploadScanNo("");
// //           setUploadedFileName("");
// //           acquireImage();
// //         } else if (message.Command === "Save" && message.Operand === "Images") {
// //           handleReceivedImages(message.Param);
// //         }
// //       }

// //       if (message.Type === "Response" && message.Commands) {
// //         message.Commands.forEach((command) => {
// //           if (command.Operand === "OnLineStatus") {
// //             setDeviceStatus(command.Param === "Device Connected" ? "Connected" : "Not Connected");
// //           }
// //           if (command.Operand === "DeviceSerialNo") {
// //             setDeviceSerial(command.Param);
// //           }
// //           if (command.Operand === "DeviceName") {
// //             setDeviceName(command.Param);
// //           }
// //         });
// //       }
// //     } catch (error) {
// //       console.error("Error parsing WebSocket message:", error);
// //     }
// //   };

// //   const handleReceivedImages = async (images) => {
// //     if (images.White) {
// //       setPassportImages({ White: images.White });
// //       sessionStorage.setItem("passportPhoto", images.White); // Save photo in session
// //     }

// //     await sendImageDataToAPI(images);
// //   };

// //   const acquireImage = () => {
// //     if (ws.current?.readyState === WebSocket.OPEN) {
// //       ws.current.send(
// //         JSON.stringify({
// //           Type: "Notify",
// //           Command: "Get",
// //           Operand: "ImageMessage",
// //           Param: 2,
// //         })
// //       );
// //     }
// //   };

// //   const sendImageDataToAPI = async (images) => {
// //     setIsLoading(true);

// //     if (!images?.White) {
// //       console.error("White image data not found in the images object.");
// //       setIsLoading(false);
// //       return;
// //     }

// //     const base64String = images.White;
// //     const base64Data = base64String.split(",")[1];
// //     const mimeString = base64String.split(",")[0].split(":")[1].split(";")[0];
// //     const byteString = atob(base64Data);
// //     const ab = new ArrayBuffer(byteString.length);
// //     const ia = new Uint8Array(ab);
// //     for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

// //     const fileExtension = mimeString.split("/")[1];
// //     const fileName = `Image.${fileExtension}`;
// //     const file = new File([ab], fileName, { type: mimeString });

// //     const formData = new FormData();
// //     formData.append("device", "device2");
// //     formData.append("scan_type", "DIRECT");
// //     formData.append("file", file);

// //     try {
// //       const response1 = await fetch(API_IMAGE_UPLOAD, { method: "POST", body: formData });
// //       const data1 = await response1.json();

// //       setUploadedFileName(data1.file_name);
// //       setUploadScanNo(data1.scan_no);

// //       const textractFormData = new FormData();
// //       textractFormData.append("idImage", file);

// //       const response2 = await fetch(API_TEXTRACT_URL, { method: "POST", body: textractFormData });
// //       const data2 = await response2.json();

// //       if (!response2.ok) throw new Error("Textract API failed.");

// //       await sendCardContentToAPI(data1.scan_no, data2);
// //       setPassportData(data2);
// //       handleReceivedContent(data2);
// //     } catch (error) {
// //       console.error("Error sending image data:", error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const sendCardContentToAPI = async (scanNo, cardContent) => {
// //     if (!scanNo) return;
// //     const formData = new FormData();
// //     formData.append("device", "device2");
// //     formData.append("scan_no", scanNo);
// //     formData.append("document", JSON.stringify(cardContent));

// //     try {
// //       await fetch(API_DATA_UPLOAD, {
// //         method: "POST",
// //         body: formData,
// //       });
// //     } catch (error) {
// //       console.error("Error sending card content:", error);
// //     }
// //   };

// //   const handleReceivedContent = (cardContent) => {
// //     sessionStorage.setItem("guestFirstName", cardContent.FIRST_NAME || "");
// //     sessionStorage.setItem("guestLastName", cardContent.LAST_NAME || "");
// //     sessionStorage.setItem("guestCountry", cardContent.STATE_NAME || "US");
// //     sessionStorage.setItem("guestGender", "M");
// //     sessionStorage.setItem("guestEmail", "");
// //     sessionStorage.setItem("guestPhone", "");
// //     sessionStorage.setItem("passportData", JSON.stringify(cardContent)); // save card content
// //     setPassportData(cardContent);
// //   };

// //   const handleVerify = () => {
// //     if (passportData) {
// //       navigate("/verification-complete");
// //     }
// //   };

// //   const handleScan = () => {
// //     setPassportImages({});
// //     setPassportData(null);
// //   };

// //   const handleBackClick = () => {
// //     const isNewUser = sessionStorage.getItem("newUser");
// //     if (isNewUser) {
// //       navigate("/booking-details");
// //     } else {
// //       navigate("/");
// //     }
// //   };

// //   const handleHomeClick = () => {
// //     navigate("/");
// //   };

// //   const getStatusColor = (status) => (status === "Connected" ? "green" : "red");

// //   return (
// //       <div className="idverification-page">
// //       <div className="idverification-container">
// //          <header className="idverification-header">
// //            <div className="idlogo-section">
// //              <div className="idhome-icon-id">
// //                <img 
// //                 src="../../src/assets/images/bookingdetails/home.png" 
// //                 alt="home" 
// //                 onClick={handleHomeClick} 
// //               />
// //             </div>
// //             <h1 className="idverification-title">ID Verification</h1>
// //           </div>
// //           <img src="../../src/assets/images/bookingdetails/help.png" alt="help" />
// //         </header>

// //         <div className="idverification-card">
// //           <button className="idback-button" onClick={handleBackClick}>
// //             <ChevronLeft size={20} />
// //             <span>Back</span>
// //           </button>

// //           <div className="idscanner-container">
// //             <div className="idscanner-frame">
// //                 <>
// //                   <img
// //                     src="../src/assets/images/Scanidimage.png"
// //                     alt="ID Card Illustration"
// //                     className="idcard-image"
// //                   />
// //                   <div className="scan-line"></div>
// //                 </>
// //             </div>
// //           </div>

// //           <div className="instructions">
// //             <h2 className="instructions-title">
// //               {passportImages.White ? "ID Scanned Successfully" : "Scan your ID / Passport using the scanner"}
// //             </h2>
// //             <p className="instructions-text">
// //               {passportImages.White 
// //                 ? "Please verify your information below" 
// //                 : "Please scan your government issued ID using the scanner below."}
// //             </p>
// //           </div>

// //           {passportData && (
// //             <div style={{
// //               width: '50%',
// //               marginBottom: '20px',
// //               padding: '20px',
// //               border: '1px solid #eee',
// //               borderRadius: '8px'
// //             }}>
// //               <h3 style={{ marginBottom: '15px' }}>Extracted Information:</h3>
// //               {Object.entries(passportData).map(([key, value]) => (
// //                 <p key={key} style={{ margin: '5px 0' }}>
// //                   <strong>{key}:</strong> {value}
// //                 </p>
// //               ))}
// //             </div>
// //           )}

// //           <button 
// //             className="scan-button" 
// //             onClick={passportData ? handleVerify : () => {}}
// //             disabled={!passportData && !passportImages.White}
// //           >
// //             <Scan size={50} color="white" />
// //             <span>{passportData ? "Continue" : "Scan License"}</span>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Scan } from "lucide-react";
import "./IdVerification.css";

const WEBSOCKET_URL = "ws://127.0.0.1:90/echo";
const API_IMAGE_UPLOAD = "https://hkcontroller.kiotel.co/utils/upload_file";
const API_DATA_UPLOAD = "https://hkcontroller.kiotel.co/utils/upload_document";
const API_KEY = "cbat_XTFdMwQ28dbMZX4IahFOnmunDdoZLfFw";
const BASE_API_URL = "https://kiotel-backend-middleware.onrender.com/api/v1.1";
const API_TEXTRACT_URL =
  "https://kiotel-backend-middleware.onrender.com/api/v1/textract/upload-id";

export default function IdVerification() {
  const navigate = useNavigate();
  const [websocketStatus, setWebsocketStatus] = useState("Disconnected");
  const [deviceStatus, setDeviceStatus] = useState("Not Connected");
  const [deviceName, setDeviceName] = useState("");
  const [deviceSerial, setDeviceSerial] = useState("");
  const [passportData, setPassportData] = useState(null);
  const [passportImages, setPassportImages] = useState({});
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [uploadScanNo, setUploadScanNo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const ws = useRef(null);
  let reconnectTimeout = useRef(null);

  const newCustomer = sessionStorage.getItem("newUser") === "true";

  // Auto-redirect when both image and data are available
  useEffect(() => {
    if (passportData && passportImages.White) {
      // Set timeout to allow UI to update before redirect
      const timer = setTimeout(() => {
        navigate("/verification-complete");
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [passportData, passportImages, navigate]);




  useEffect(() => {
    setTimeout(() => {
      // setPassportData({
      //   "FIRST_NAME": "Jane",
      //   "LAST_NAME": "Smith",
      //   "STATE_NAME": "United Kingdom",
      //   "DOCUMENT_NUMBER": "X1234567",
      //   "DOB": "1985-05-15",
      //   "EXPIRY_DATE": "2035-05-15",
      //   "NATIONALITY": "British",
      //   "GENDER": "F"
      // });
      handleReceivedContent({
        "FIRST_NAME": "Jane",
        "LAST_NAME": "Smith",
        "STATE_NAME": "United Kingdom",
        "DOCUMENT_NUMBER": "X1234567",
        "DOB": "1985-05-15",
        "EXPIRY_DATE": "2035-05-15",
        "NATIONALITY": "British",
        "GENDER": "F"
      });

    // setPassportImages({
    //     White: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mP8//8/AwAI/wH+9Q4AAAAASUVORK5CYII="
    //   });
 handleReceivedImages({
        White: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mP8//8/AwAI/wH+9Q4AAAAASUVORK5CYII="})
    }, 1000);
  }, []);

  useEffect(() => {
    connectWebSocket();

    const statusInterval = setInterval(() => {
      requestDeviceStatus();
      getDeviceInfo();
    }, 1000);

    return () => {
      console.log("Cleaning up WebSocket...");
      if (ws.current) {
        ws.current.onclose = null;
        ws.current.close();
        ws.current = null;
      }
      if (reconnectTimeout.current) {
        clearTimeout(reconnectTimeout.current);
      }
      clearInterval(statusInterval);
    };
  }, []);

  const setDefaultSettings = () => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(
        JSON.stringify({
          Type: "Request",
          Commands: [
            { Command: "Set", Operand: "RFID", Param: "Y" },
            { Command: "Set", Operand: "VIZ", Param: "Y" },
          ],
        })
      );
    }
  };

  const connectWebSocket = () => {
    if (ws.current) {
      console.log(
        "WebSocket instance already exists. Skipping new connection."
      );
      return;
    }
    ws.current = new WebSocket(WEBSOCKET_URL);

    ws.current.onopen = () => {
      console.log("Websocket Connected");
      setWebsocketStatus("Connected");
      setDefaultSettings();
      requestDeviceStatus();
      getDeviceInfo();
    };

    ws.current.onclose = () => {
      console.log("WebSocket Disconnected, retrying in 2 seconds...");
      setWebsocketStatus("Disconnected");
      setDeviceStatus("Not Connected");

      ws.current = null;
      reconnectTimeout.current = setTimeout(connectWebSocket, 1000);
    };

    ws.current.onerror = () => setWebsocketStatus("Error");

    ws.current.onmessage = (event) => handleWebSocketMessage(event.data);
  };

  const requestDeviceStatus = () => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(
        JSON.stringify({
          Type: "Request",
          Commands: [{ Command: "Get", Operand: "OnLineStatus" }],
        })
      );
    }
  };

  const getDeviceInfo = () => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(
        JSON.stringify({
          Type: "Request",
          Commands: [
            { Command: "Get", Operand: "DeviceName" },
            { Command: "Get", Operand: "DeviceSerialNo" },
          ],
        })
      );
    }
  };

  const handleWebSocketMessage = (data) => {
    try {
      const message = JSON.parse(data);

      if (message.Type === "Notify") {
        if (message.Command === "CardDetected") {
          console.log("📄 Document Detected!");

          // Clear previous scan data before acquiring a new image
          setPassportImages({});
          setPassportData(null);
          setUploadScanNo("");
          setUploadedFileName("");

          acquireImage();
        } else if (message.Command === "Save" && message.Operand === "Images") {
          handleReceivedImages(message.Param);
        }
      }

      if (message.Type === "Response" && message.Commands) {
        message.Commands.forEach((command) => {
          if (command.Operand === "OnLineStatus") {
            setDeviceStatus(
              command.Param === "Device Connected"
                ? "Connected"
                : "Not Connected"
            );
          }
          if (command.Operand === "DeviceSerialNo") {
            setDeviceSerial(command.Param);
          }
          if (command.Operand === "DeviceName") {
            setDeviceName(command.Param);
          }
        });
      }
    } catch (error) {
      console.error("Error parsing WebSocket message:", error);
    }
  };

  const handleReceivedImages = async (images) => {
    console.log("Received Images:", images);

    if (images.White) {
      setPassportImages({ White: images.White });
      sessionStorage.setItem("passportPhoto", images.White); // Save photo in session
    }

    //await sendImageDataToAPI(images);
  };

  const acquireImage = () => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(
        JSON.stringify({
          Type: "Notify",
          Command: "Get",
          Operand: "ImageMessage",
          Param: 2,
        })
      );
    }
  };

  const sendImageDataToAPI = async (images) => {
    setIsLoading(true);

    if (images.hasOwnProperty("White")) {
      const base64String = images["White"];

      const base64Data = base64String.split(",")[1];

      const mimeString = base64String.split(",")[0].split(":")[1].split(";")[0];

      // Convert base64 to a binary array
      const byteString = atob(base64Data);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);

      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      // Dynamically determine the file extension from the MIME type
      const fileExtension = mimeString.split("/")[1];
      const fileName = `Image.${fileExtension}`;

      // Create a File object
      const file = new File([ab], fileName, { type: mimeString });

      const formData = new FormData();
      formData.append("device", "device2");
      formData.append("scan_type", "DIRECT");
      formData.append("file", file);

      try {
        const response1 = await fetch(API_IMAGE_UPLOAD, {
          method: "POST",
          body: formData,
        });

        const data1 = await response1.json();
        console.log("Image data sent successfully:", data1);

        setUploadedFileName(data1.file_name);
        setUploadScanNo(data1.scan_no);

        const textractFormData = new FormData();
        textractFormData.append("idImage", file);

        const response2 = await fetch(API_TEXTRACT_URL, {
          method: "POST",
          body: textractFormData,
        });

        const data2 = await response2.json();
        console.log("Textract data sent successfully:", data2);

        if (!response2.ok) throw new Error("Textract API failed.");

        await sendCardContentToAPI(data1.scan_no, data2);

        setPassportData(data2);
        handleReceivedContent(data2);
        setIsLoading(false);

        if (window.chrome && window.chrome.webview) {
          window.chrome.webview.postMessage(
            `SCANCOMPLETE-${uploadedFileName}-device2`
          );
        }
      } catch (error) {
        console.error("Error sending image data:", error);
        setIsLoading(false);
        if (window.chrome && window.chrome.webview) {
          window.chrome.webview.postMessage(`ERROR-NETWORK-${error.message}`);
        }
      }
    } else {
      console.error("White image data not found in the images object.");
      setIsLoading(false);
    }
  };

  const sendCardContentToAPI = async (scanNo, cardContent) => {
    try {
      if (!scanNo) {
        console.error("Scan number is missing. Image upload may have failed.");
        return;
      }

      const formData = new FormData();
      formData.append("device", "device2");
      formData.append("scan_no", scanNo);
      formData.append("document", JSON.stringify(cardContent));

      const response = await fetch(API_DATA_UPLOAD, {
        method: "POST",
        body: formData,
      });

      const data = await response.text();
      console.log("Card content upload response:", data);
      if (window.chrome && window.chrome.webview) {
        window.chrome.webview.postMessage(data);
      }
    } catch (error) {
      console.error("Error sending card content:", error);
      if (window.chrome && window.chrome.webview) {
        window.chrome.webview.postMessage(error.toString());
      }
    }
  };

  const handleReceivedContent = (cardContent) => {
    const firstName = cardContent.FIRST_NAME || "";
    const lastName = cardContent.LAST_NAME || "";
    sessionStorage.setItem("guestFirstName", firstName);
    sessionStorage.setItem("guestLastName", lastName);
    sessionStorage.setItem("guestCountry","US");
    sessionStorage.setItem("guestGender", "M");
    sessionStorage.setItem("guestEmail", "");
    sessionStorage.setItem("guestPhone", "");

    setPassportData(cardContent);
  };

  const handleScan = () => {
    setPassportImages({});
    setPassportData(null);
  };

  const handleBackClick = () => {
    const isNewUser = sessionStorage.getItem("newUser");
    if (isNewUser) {
      navigate("/booking-details");
    } else {
      navigate("/");
    }
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const getStatusColor = (status) => (status === "Connected" ? "green" : "red");
  
  return (
    <div className="idverification-page">
      <div className="idverification-container">
        <header className="idverification-header">
          <div className="idlogo-section">
            <div className="idhome-icon-id">
              <img 
                src="/assets/images/bookingdetails/home.png" 
                alt="home" 
                onClick={handleHomeClick} 
              />
            </div>
            <h1 className="verification-title">ID Verification</h1>
          </div>
          <img src="/assets/images/bookingdetails/help.png" alt="help" />
        </header>

        {/* Status indicator - added to match functionality */}
        {/* <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{
            display: 'inline-block',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: getStatusColor(websocketStatus)
          }}></span>
          <span>Scanner {websocketStatus}</span>
        </div> */}

        <div className="idverification-card">
          <button className="idback-button" onClick={handleBackClick}>
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>

          <div className="idscanner-container">
            <div className="idscanner-frame">
              {passportImages.White ? (
                <img
                  src={passportImages.White}
                  alt="Scanned ID"
                  className="idcard-image"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ) : (
                <>
                  <img
                    src="/assets/images/Scanidimage.png"
                    alt="ID Card Illustration"
                    className="idcard-image"
                  />
                  <div className="scan-line"></div>
                </>
              )}
            </div>
          </div>

          <div className="instructions">
            <h2 className="instructions-title">
              {passportImages.White ? "ID Scanned Successfully" : "Scan your ID / Passport using the scanner"}
            </h2>
            <p className="instructions-text">
              {passportImages.White 
                ? "Your information is being processed. You will be redirected shortly..." 
                : "Please scan your government issued ID using the scanner below."}
            </p>
          </div>
          <button 
            className="scan-button" 
            onClick={handleScan}
            disabled={isLoading}
          >
            <Scan size={50} color="white" />
            <span>{isLoading ? "Processing..." : "Scaning License"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}