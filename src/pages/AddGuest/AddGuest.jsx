// // import React, { useState, useEffect, useRef } from "react";
// // import axios from "axios";
// // import { Toaster, toast } from "react-hot-toast";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   ChevronLeft,
// //   ChevronRight,
// // } from "lucide-react";
// // import "../ConfirmReservation/ConfirmReservation.css";
// // import "./AddGuest.css";
// // import Header from "../../components/Header/header";
// // import HelpFooter from "../../components/HelpFooter/HelpFooter";
// // import VirtualKeyboard from "../../components/KeyBoard/KeyBoard";
// // import { API_KEY, BASE_API_URL } from "../../components/constants/constants";

// // const AddGuest = () => {
// //   const navigate = useNavigate();
// //   const [reservationID, setReservationID] = useState(null);
// //   const [guestData, setGuestData] = useState({
// //     guestFirstName: "",
// //     guestLastName: "",
// //     guestGender: "M",
// //     guestEmail: "",
// //     guestPhone: "",
// //     guestCountry: "US",
// //   });
// //   const [loading, setLoading] = useState(false);

// //   // Keyboard state
// //   const [keyboardState, setKeyboardState] = useState({
// //     isVisible: false,
// //     activeField: null,
// //     inputType: "text",
// //   });

// //   const inputRefs = useRef({});

// //   useEffect(() => {
// //     const storedReservationID = sessionStorage.getItem("reservationID");
// //     if (!storedReservationID) {
// //       toast.error("No reservation found!");
// //       navigate("/dashboard");
// //     } else {
// //       setReservationID(storedReservationID);
// //     }
// //   }, [navigate]);

// //   // Keyboard handlers
// //   const handleInputFocus = (fieldName, inputType = "text") => {
// //     setKeyboardState({
// //       isVisible: true,
// //       activeField: fieldName,
// //       inputType,
// //     });
// //   };

// //   const handleKeyboardKeyPress = (key) => {
// //     if (keyboardState.activeField) {
// //       setGuestData(prev => ({
// //         ...prev,
// //         [keyboardState.activeField]: prev[keyboardState.activeField] + key
// //       }));
// //     }
// //   };

// //   const handleKeyboardBackspace = () => {
// //     if (keyboardState.activeField) {
// //       setGuestData(prev => ({
// //         ...prev,
// //         [keyboardState.activeField]: prev[keyboardState.activeField].slice(0, -1)
// //       }));
// //     }
// //   };

// //   const handleKeyboardEnter = () => {
// //     setKeyboardState(prev => ({ 
// //       ...prev, 
// //       isVisible: false,
// //       activeField: null 
// //     }));
// //   };

// //   const handleKeyboardClose = () => {
// //     setKeyboardState(prev => ({ 
// //       ...prev, 
// //       isVisible: false,
// //       activeField: null 
// //     }));
// //   };

// //   const handleChange = (field, value) => {
// //     setGuestData(prev => ({ ...prev, [field]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     const requiredFields = ["guestFirstName", "guestLastName", "guestEmail", "guestPhone"];
// //     const missingField = requiredFields.find(field => !guestData[field]);

// //     if (missingField) {
// //       toast.error("All fields are required!");
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       const response = await axios.post(
// //         `${BASE_API_URL}/guest/add`,
// //         new URLSearchParams({
// //           reservationID,
// //           ...guestData
// //         }),
// //         {
// //           headers: {
// //             accept: "application/json",
// //             authorization: `Bearer ${API_KEY}`,
// //             "content-type": "application/x-www-form-urlencoded",
// //             "x-api-key": API_KEY,
// //           },
// //         }
// //       );

// //       if (response.data.success) {
// //         toast.success("Guest added successfully!");
// //         setTimeout(() => navigate("/key-dispense"), 2000);
// //       } else {
// //         toast.error("Failed to add guest. Accommodation might be full!");
// //       }
// //     } catch (error) {
// //       toast.error("Failed to add guest. Accommodation might be full!");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleBack = () => {
// //     navigate(-1);
// //   };

// //   return (
// //     <div className="review-page">
// //       <div className="review-container">
// //         <Toaster position="top-center" />
// //         <Header value="Add Guest" />
// //         <div className="review-card">
// //           <button className="back-button" onClick={handleBack}>
// //             <ChevronLeft size={20} />
// //             <span>Back</span>
// //           </button>

// //           <section className={`details-section ${keyboardState.isVisible ? 'keyboard-active' : ''}`}>
// //             <h3 className="section-title">Guest Information</h3>
// //             <form onSubmit={handleSubmit} className="details-content">
// //               {/* First Name */}
// //               <div className="detail-row">
// //                 <span className="detail-label">First Name</span>
// //                 <input
// //                   ref={el => inputRefs.current.guestFirstName = el}
// //                   type="text"
// //                   className="cr-guestdetail-value"
// //                   value={guestData.guestFirstName}
// //                   onChange={(e) => handleChange("guestFirstName", e.target.value)}
// //                   onFocus={() => handleInputFocus("guestFirstName", "text")}
// //                   required
// //                 />
// //               </div>
              
// //               {/* Last Name */}
// //               <div className="detail-row">
// //                 <span className="detail-label">Last Name</span>
// //                 <input
// //                   ref={el => inputRefs.current.guestLastName = el}
// //                   type="text"
// //                   className="cr-guestdetail-value"
// //                   value={guestData.guestLastName}
// //                   onChange={(e) => handleChange("guestLastName", e.target.value)}
// //                   onFocus={() => handleInputFocus("guestLastName", "text")}
// //                   required
// //                 />
// //               </div>
              
// //               {/* Email */}
// //               <div className="detail-row">
// //                 <span className="detail-label">Email</span>
// //                 <input
// //                   ref={el => inputRefs.current.guestEmail = el}
// //                   type="email"
// //                   className="cr-guestdetail-value ag-input-box"
// //                   value={guestData.guestEmail}
// //                   onChange={(e) => handleChange("guestEmail", e.target.value)}
// //                   onFocus={() => handleInputFocus("guestEmail", "email")}
// //                   required
// //                 />
// //               </div>
              
// //               {/* Phone */}
// //               <div className="detail-row">
// //                 <span className="detail-label">Phone</span>
// //                 <input
// //                   ref={el => inputRefs.current.guestPhone = el}
// //                   type="tel"
// //                   className="cr-guestdetail-value"
// //                   value={guestData.guestPhone}
// //                   onChange={(e) => handleChange("guestPhone", e.target.value)}
// //                   onFocus={() => handleInputFocus("guestPhone", "tel")}
// //                   required
// //                 />
// //               </div>
              
// //               {/* Country */}
// //               <div className="detail-row">
// //                 <span className="detail-label">Country</span>
// //                 <input
// //                   ref={el => inputRefs.current.guestCountry = el}
// //                   type="text"
// //                   className="cr-guestdetail-value"
// //                   value={guestData.guestCountry}
// //                   onChange={(e) => handleChange("guestCountry", e.target.value)}
// //                   onFocus={() => handleInputFocus("guestCountry", "text")}
// //                   required
// //                 />
// //               </div>
              
// //               {/* Gender */}
// //               <div className="detail-row">
// //                 <span className="detail-label">Gender</span>
// //                 <select
// //                   className="cr-guestdetail-value"
// //                   value={guestData.guestGender}
// //                   onChange={(e) => handleChange("guestGender", e.target.value)}
// //                 >
// //                   <option value="M">Male</option>
// //                   <option value="F">Female</option>
// //                   <option value="O">Other</option>
// //                 </select>
// //               </div>

// //               <button
// //                 type="submit"
// //                 className="confirm-button"
// //                 disabled={loading}
// //               >
// //                 {loading ? (
// //                   <span>Adding Guest...</span>
// //                 ) : (
// //                   <>
// //                     <span>Add Guest</span>
// //                     <ChevronRight size={20} />
// //                   </>
// //                 )}
// //               </button>
// //             </form>
// //           </section>
// //         </div>
// //         <HelpFooter />
// //       </div>

// //       <VirtualKeyboard
// //         isVisible={keyboardState.isVisible}
// //         onKeyPress={handleKeyboardKeyPress}
// //         onBackspace={handleKeyboardBackspace}
// //         onEnter={handleKeyboardEnter}
// //         onClose={handleKeyboardClose}
// //         inputType={keyboardState.inputType}
// //       />
// //     </div>
// //   );
// // };

// // export default AddGuest;




// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { Toaster, toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import {
//   ChevronLeft,
//   ChevronRight,
//   User,
//   Mail,
//   Phone,
//   Globe,
//   Users,
// } from "lucide-react";
// import "./AddGuest.css";
// import Header from "../../components/Header/header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// import VirtualKeyboard from "../../components/KeyBoard/KeyBoard";
// import { API_KEY, BASE_API_URL } from "../../components/constants/constants";

// const AddGuest = () => {
//   const navigate = useNavigate();
//   const [reservationID, setReservationID] = useState(null);
//   const [guestData, setGuestData] = useState({
//     guestFirstName: "",
//     guestLastName: "",
//     guestGender: "M",
//     guestEmail: "",
//     guestPhone: "",
//     guestCountry: "US",
//   });
//   const [loading, setLoading] = useState(false);

//   // Keyboard state
//   const [keyboardState, setKeyboardState] = useState({
//     isVisible: false,
//     activeField: null,
//     inputType: "text",
//   });

//   const inputRefs = useRef({});

//   useEffect(() => {
//     const storedReservationID = sessionStorage.getItem("reservationID");
//     if (!storedReservationID) {
//       toast.error("No reservation found!");
//       navigate("/dashboard");
//     } else {
//       setReservationID(storedReservationID);
//     }
//   }, [navigate]);

//   // Keyboard handlers
//   const handleInputFocus = (fieldName, inputType = "text") => {
//     setKeyboardState({
//       isVisible: true,
//       activeField: fieldName,
//       inputType,
//     });
//   };

//   const handleKeyboardKeyPress = (key) => {
//     if (keyboardState.activeField) {
//       setGuestData((prev) => ({
//         ...prev,
//         [keyboardState.activeField]: prev[keyboardState.activeField] + key,
//       }));
//     }
//   };

//   const handleKeyboardBackspace = () => {
//     if (keyboardState.activeField) {
//       setGuestData((prev) => ({
//         ...prev,
//         [keyboardState.activeField]: prev[keyboardState.activeField].slice(0, -1),
//       }));
//     }
//   };

//   const handleKeyboardEnter = () => {
//     setKeyboardState((prev) => ({
//       ...prev,
//       isVisible: false,
//       activeField: null,
//     }));
//   };

//   const handleKeyboardClose = () => {
//     setKeyboardState((prev) => ({
//       ...prev,
//       isVisible: false,
//       activeField: null,
//     }));
//   };

//   const handleChange = (field, value) => {
//     setGuestData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const requiredFields = ["guestFirstName", "guestLastName", "guestEmail", "guestPhone"];
//     const missingField = requiredFields.find((field) => !guestData[field]);

//     if (missingField) {
//       toast.error("All fields are required!");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${BASE_API_URL}/guest/add`,
//         new URLSearchParams({
//           reservationID,
//           ...guestData,
//         }),
//         {
//           headers: {
//             accept: "application/json",
//             authorization: `Bearer ${API_KEY}`,
//             "content-type": "application/x-www-form-urlencoded",
//             "x-api-key": API_KEY,
//           },
//         }
//       );

//       if (response.data.success) {
//         toast.success("Guest added successfully!");
//         setTimeout(() => navigate("/key-dispense"), 2000);
//       } else {
//         toast.error("Failed to add guest. Accommodation might be full!");
//       }
//     } catch (error) {
//       toast.error("Failed to add guest. Accommodation might be full!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="add-guest-page">
//       <div className="add-guest-container">
//         <Toaster position="top-center" />
//         <Header value="Add Guest" />

//         {/* Main Card */}
//         <div className="add-guest-card">
//           <button className="back-button" onClick={handleBack}>
//             <ChevronLeft />
//             Back
//           </button>

//           <div className={`form-section ${keyboardState.isVisible ? "keyboard-active" : ""}`}>
//             <h2 className="section-title">Guest Information</h2>

//             <form onSubmit={handleSubmit} className="guest-form">
//               <div className="form-grid-2">
//                 <div className="input-group">
//                   <label htmlFor="firstName" className="input-label">
//                     <User />
//                     First Name
//                   </label>
//                   <input
//                     id="firstName"
//                     ref={(el) => (inputRefs.current.guestFirstName = el)}
//                     type="text"
//                     className="form-input"
//                     value={guestData.guestFirstName}
//                     onChange={(e) => handleChange("guestFirstName", e.target.value)}
//                     onFocus={() => handleInputFocus("guestFirstName", "text")}
//                     placeholder="Enter first name"
//                     required
//                   />
//                 </div>

//                 <div className="input-group">
//                   <label htmlFor="lastName" className="input-label">
//                     <User />
//                     Last Name
//                   </label>
//                   <input
//                     id="lastName"
//                     ref={(el) => (inputRefs.current.guestLastName = el)}
//                     type="text"
//                     className="form-input"
//                     value={guestData.guestLastName}
//                     onChange={(e) => handleChange("guestLastName", e.target.value)}
//                     onFocus={() => handleInputFocus("guestLastName", "text")}
//                     placeholder="Enter last name"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="input-group">
//                 <label htmlFor="email" className="input-label">
//                   <Mail />
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   ref={(el) => (inputRefs.current.guestEmail = el)}
//                   type="email"
//                   className="form-input"
//                   value={guestData.guestEmail}
//                   onChange={(e) => handleChange("guestEmail", e.target.value)}
//                   onFocus={() => handleInputFocus("guestEmail", "email")}
//                   placeholder="Enter email address"
//                   required
//                 />
//               </div>

//               <div className="input-group">
//                 <label htmlFor="phone" className="input-label">
//                   <Phone />
//                   Phone Number
//                 </label>
//                 <input
//                   id="phone"
//                   ref={(el) => (inputRefs.current.guestPhone = el)}
//                   type="tel"
//                   className="form-input"
//                   value={guestData.guestPhone}
//                   onChange={(e) => handleChange("guestPhone", e.target.value)}
//                   onFocus={() => handleInputFocus("guestPhone", "tel")}
//                   placeholder="Enter phone number"
//                   required
//                 />
//               </div>

//               <div className="form-grid-2">
//                 <div className="input-group">
//                   <label htmlFor="country" className="input-label">
//                     <Globe />
//                     Country
//                   </label>
//                   <input
//                     id="country"
//                     ref={(el) => (inputRefs.current.guestCountry = el)}
//                     type="text"
//                     className="form-input"
//                     value={guestData.guestCountry}
//                     onChange={(e) => handleChange("guestCountry", e.target.value)}
//                     onFocus={() => handleInputFocus("guestCountry", "text")}
//                     placeholder="Enter country"
//                     required
//                   />
//                 </div>

//                 <div className="input-group">
//                   <label htmlFor="gender" className="input-label">
//                     <Users />
//                     Gender
//                   </label>
//                   <select
//                     id="gender"
//                     className="form-select"
//                     value={guestData.guestGender}
//                     onChange={(e) => handleChange("guestGender", e.target.value)}
//                   >
//                     <option value="M">Male</option>
//                     <option value="F">Female</option>
//                     <option value="O">Other</option>
//                   </select>
//                 </div>
//               </div>

//               <button type="submit" className="submit-button" disabled={loading}>
//                 {loading ? (
//                   <>
//                     <div className="loading-spinner"></div>
//                     Adding Guest...
//                   </>
//                 ) : (
//                   <>
//                     Add Guest
//                     <ChevronRight />
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>

//         <HelpFooter />

//         <VirtualKeyboard
//           isVisible={keyboardState.isVisible}
//           onKeyPress={handleKeyboardKeyPress}
//           onBackspace={handleKeyboardBackspace}
//           onEnter={handleKeyboardEnter}
//           onClose={handleKeyboardClose}
//           inputType={keyboardState.inputType}
//         />
//       </div>
//     </div>
//   );
// };

// export default AddGuest;





import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Mail,
  Phone,
  Globe,
  Users,
} from "lucide-react";
import "./AddGuest.css";
import Header from "../../components/Header/header";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import VirtualKeyboard from "../../components/KeyBoard/KeyBoard";
import { API_KEY, BASE_API_URL } from "../../components/constants/constants";

const AddGuest = () => {
  const navigate = useNavigate();
  const [reservationID, setReservationID] = useState(null);
  const [guestData, setGuestData] = useState({
    guestFirstName: "",
    guestLastName: "",
    guestGender: "M",
    guestEmail: "",
    guestPhone: "",
    guestCountry: "US",
  });
  const [loading, setLoading] = useState(false);
  const [keyboardState, setKeyboardState] = useState({
    isVisible: false,
    activeField: null,
    inputType: "text",
  });

  const inputRefs = useRef({});

  useEffect(() => {
    const storedReservationID = sessionStorage.getItem("reservationID");
    if (!storedReservationID) {
      toast.error("No reservation found!");
      navigate("/dashboard");
    } else {
      setReservationID(storedReservationID);
    }
  }, [navigate]);

  const handleInputFocus = (fieldName, inputType = "text") => {
    setKeyboardState({
      isVisible: true,
      activeField: fieldName,
      inputType,
    });
  };

  const handleKeyboardKeyPress = (key) => {
    if (keyboardState.activeField) {
      setGuestData((prev) => ({
        ...prev,
        [keyboardState.activeField]: prev[keyboardState.activeField] + key,
      }));
    }
  };

  const handleKeyboardBackspace = () => {
    if (keyboardState.activeField) {
      setGuestData((prev) => ({
        ...prev,
        [keyboardState.activeField]: prev[keyboardState.activeField].slice(0, -1),
      }));
    }
  };

  const handleKeyboardEnter = () => {
    setKeyboardState((prev) => ({
      ...prev,
      isVisible: false,
      activeField: null,
    }));
  };

  const handleKeyboardClose = () => {
    setKeyboardState((prev) => ({
      ...prev,
      isVisible: false,
      activeField: null,
    }));
  };

  const handleChange = (field, value) => {
    setGuestData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const requiredFields = ["guestFirstName", "guestLastName", "guestEmail", "guestPhone"];
    const missingField = requiredFields.find((field) => !guestData[field]);

    if (missingField) {
      toast.error("All fields are required!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_API_URL}/guest/add`,
        new URLSearchParams({
          reservationID,
          ...guestData,
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

      if (response.data.success) {
        toast.success("Guest added successfully!");
        setTimeout(() => navigate("/check-in-success"), 2000);
      } else {
        toast.error("Failed to add guest. Accommodation might be full!");
      }
    } catch (error) {
      toast.error("Failed to add guest. Accommodation might be full!");
    } finally {
      setLoading(false);
      setTimeout(() => navigate("/check-in-success"), 2000);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="ag-page">
      <div className="ag-container">
        <Toaster position="top-center" />
        <Header value="Add Guest" />

        <div className="ag-card">
          <button className="back-button" onClick={handleBack}>
            <ChevronLeft />
            Back
          </button>

          <div className={`ag-form-section ${keyboardState.isVisible ? "keyboard-active" : ""}`}>
            <h2 className="ag-title">Guest Information</h2>

            <form onSubmit={handleSubmit} className="ag-form">
              <div className="ag-form-grid-2">
                <div className="ag-input-group">
                  <label htmlFor="firstName" className="ag-label">
                    <User /> First Name
                  </label>
                  <input
                    id="firstName"
                    ref={(el) => (inputRefs.current.guestFirstName = el)}
                    type="text"
                    className="ag-input"
                    value={guestData.guestFirstName}
                    onChange={(e) => handleChange("guestFirstName", e.target.value)}
                    onFocus={() => handleInputFocus("guestFirstName", "text")}
                    placeholder="Enter first name"
                    required
                  />
                </div>

                <div className="ag-input-group">
                  <label htmlFor="lastName" className="ag-label">
                    <User /> Last Name
                  </label>
                  <input
                    id="lastName"
                    ref={(el) => (inputRefs.current.guestLastName = el)}
                    type="text"
                    className="ag-input"
                    value={guestData.guestLastName}
                    onChange={(e) => handleChange("guestLastName", e.target.value)}
                    onFocus={() => handleInputFocus("guestLastName", "text")}
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>

              <div className="ag-input-group">
                <label htmlFor="email" className="ag-label">
                  <Mail /> Email Address
                </label>
                <input
                  id="email"
                  ref={(el) => (inputRefs.current.guestEmail = el)}
                  type="email"
                  className="ag-input"
                  value={guestData.guestEmail}
                  onChange={(e) => handleChange("guestEmail", e.target.value)}
                  onFocus={() => handleInputFocus("guestEmail", "email")}
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className="ag-input-group">
                <label htmlFor="phone" className="ag-label">
                  <Phone /> Phone Number
                </label>
                <input
                  id="phone"
                  ref={(el) => (inputRefs.current.guestPhone = el)}
                  type="tel"
                  className="ag-input"
                  value={guestData.guestPhone}
                  onChange={(e) => handleChange("guestPhone", e.target.value)}
                  onFocus={() => handleInputFocus("guestPhone", "tel")}
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="ag-form-grid-2">
                <div className="ag-input-group">
                  <label htmlFor="country" className="ag-label">
                    <Globe /> Country
                  </label>
                  <input
                    id="country"
                    ref={(el) => (inputRefs.current.guestCountry = el)}
                    type="text"
                    className="ag-input"
                    value={guestData.guestCountry}
                    onChange={(e) => handleChange("guestCountry", e.target.value)}
                    onFocus={() => handleInputFocus("guestCountry", "text")}
                    placeholder="Enter country"
                    required
                  />
                </div>

                <div className="ag-input-group">
                  <label htmlFor="gender" className="ag-label">
                    <Users /> Gender
                  </label>
                  <select
                    id="gender"
                    className="ag-select"
                    value={guestData.guestGender}
                    onChange={(e) => handleChange("guestGender", e.target.value)}
                  >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="ag-submit" disabled={loading}>
                {loading ? (
                  <>
                    <div className="ag-spinner"></div>
                    Adding Guest...
                  </>
                ) : (
                  <>
                    Add Guest
                    <ChevronRight />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <HelpFooter />

        <VirtualKeyboard
          isVisible={keyboardState.isVisible}
          onKeyPress={handleKeyboardKeyPress}
          onBackspace={handleKeyboardBackspace}
          onEnter={handleKeyboardEnter}
          onClose={handleKeyboardClose}
          inputType={keyboardState.inputType}
        />
      </div>
    </div>
  );
};

export default AddGuest;
