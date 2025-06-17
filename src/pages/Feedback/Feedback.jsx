// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Smile, Star } from "lucide-react";
// import Header from "../../components/Header/header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// import "../CheckOut/CheckOut.css"; // Use the same styles from CheckOut to stay consistent
// import "./Feedback.css"; // Custom styles for Feedback page
// export default function Feedback() {
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [feedback, setFeedback] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const navigate = useNavigate();
//   const guestFirstName = localStorage.getItem("guestFirstName");
//   const guestLastName = localStorage.getItem("guestLastName");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!rating) {
//       alert("Please provide a rating.");
//       return;
//     }

//     console.log("Feedback submitted:", {
//       name: `${guestFirstName} ${guestLastName}`,
//       rating,
//       feedback,
//     });

//     setSubmitted(true);
//   };

//   const handleStarClick = (value) => setRating(value);
//   const handleStarHover = (value) => setHoverRating(value);
//   const handleStarLeave = () => setHoverRating(0);

//   return (
//     <div className="checkin-page">
//       <div className="checkin-container">
//         <Header value="Feedback" />
//         <div className="checkin-card">
//           {submitted ? (
//             <div className="checkin-success">
//               <h2 className="success-heading">Thank You!</h2>
//               <p className="welcome-message">We appreciate your feedback. Enjoy your stay!</p>
//               <div className="success-icon-container">
//                 <div className="success-icon">
//                   <Smile color="white" size={32} />
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <>
//               <h2 className="success-heading">Rate Your Check-In Experience</h2>

//               <form onSubmit={handleSubmit}>
//                 <div className="rating-container">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <span
//                       key={star}
//                       className={`star-icon ${((hoverRating || rating) >= star) ? "filled" : ""}`}
//                       onClick={() => handleStarClick(star)}
//                       onMouseEnter={() => handleStarHover(star)}
//                       onMouseLeave={handleStarLeave}
//                     >
//                       <Star size={28} fill={(hoverRating || rating) >= star ? "#facc15" : "none"} stroke="#facc15" />
//                     </span>
//                   ))}
//                 </div>

//                 <textarea
//                   className="feedback-textarea"
//                   placeholder="Leave your feedback..."
//                   value={feedback}
//                   onChange={(e) => setFeedback(e.target.value)}
//                 />

//                 <div className="checkin-action-buttons">
//                   <button type="submit" className="checkin-button">
//                     <Smile size={20} />
//                     <span>Submit Feedback</span>
//                   </button>
//                 </div>
//               </form>
//             </>
//           )}
//         </div>
//         <HelpFooter />
//       </div>
//     </div>
//   );
// }



import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Smile, Star } from "lucide-react";
import Header from "../../components/Header/header";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import VirtualKeyboard from "../../components/KeyBoard/KeyBoard"; // <-- Keyboard import
import "../CheckOut/CheckOut.css";
import "./Feedback.css";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [keyboardState, setKeyboardState] = useState({
    isVisible: false,
    activeField: null,
    inputType: "text",
  });

  const textareaRef = useRef(null);
  const navigate = useNavigate();

  const guestFirstName = localStorage.getItem("guestFirstName");
  const guestLastName = localStorage.getItem("guestLastName");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) {
      alert("Please provide a rating.");
      return;
    }

    console.log("Feedback submitted:", {
      name: `${guestFirstName} ${guestLastName}`,
      rating,
      feedback,
    });

    setSubmitted(true);
  setTimeout(() => {
  navigate("/");
}, 3000);

  };

  const handleStarClick = (value) => setRating(value);
  const handleStarHover = (value) => setHoverRating(value);
  const handleStarLeave = () => setHoverRating(0);

  const handleInputFocus = (fieldName, inputType = "text") => {
    setKeyboardState({
      isVisible: true,
      activeField: fieldName,
      inputType,
    });
  };

  const handleKeyboardKeyPress = (key) => {
    if (keyboardState.activeField === "feedback") {
      setFeedback((prev) => prev + key);
    }
  };

  const handleKeyboardBackspace = () => {
    if (keyboardState.activeField === "feedback") {
      setFeedback((prev) => prev.slice(0, -1));
    }
  };

  const handleKeyboardEnter = () => {
    setKeyboardState({ isVisible: false, activeField: null, inputType: "text" });
  };

  const handleKeyboardClose = () => {
    setKeyboardState({ isVisible: false, activeField: null, inputType: "text" });
  };

  return (
    <div className="checkin-page">
      <div className="checkin-container">
        <Header value="Feedback" />
        <div className="checkin-card" style={{ marginTop: "6rem" }}>
          {submitted ? (
            <div className="checkin-success">
                 <div className="feedback-icon-container" style={{ margin: "2rem auto"}}>
                <div className="feedback-icon">
                  <Smile color="white" size={150} />
                </div>
              </div>
              <h2 className="success-heading">Thank You!</h2>
              <p className="welcome-message">
                We appreciate your feedback.
              </p>
             
            </div>
          ) : (
            <>
              <h2 className="success-heading" style={{ fontSize: "3rem" }}>Rate Your Experience</h2>

              <form onSubmit={handleSubmit}>
                <div className="rating-container">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star-icon ${((hoverRating || rating) >= star) ? "filled" : ""}`}
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => handleStarHover(star)}
                      onMouseLeave={handleStarLeave}
                    >
                      <Star
                        size={48}
                        fill={(hoverRating || rating) >= star ? "#facc15" : "none"}
                        stroke="#facc15"
                      />
                    </span>
                  ))}
                </div>

              <textarea
  ref={textareaRef}
  className="feedback-textarea"
  placeholder="Leave your feedback..."
  value={feedback}
  onChange={(e) => setFeedback(e.target.value)}
  onFocus={() => handleInputFocus("feedback", "text")}
  onBlur={handleKeyboardClose} // <-- This line closes the keyboard when textarea loses focus
/>

                <div className="checkin-action-buttons">
                  <button type="submit" className="checkin-button">
                    <Smile size={40} />
                    <span>Submit Feedback</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
        <HelpFooter />
      </div>

      {/* Virtual Keyboard */}
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
