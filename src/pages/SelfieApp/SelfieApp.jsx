// import React, { useEffect, useRef, useState } from "react";
// import Lottie from "lottie-react"; // Import Lottie
// import animationData from "../../assets/success.json"; // Import JSON animation
// import "./SelfieApp.css";
// import { Toaster, toast } from "react-hot-toast";
// import Header from "../../components/Header/Header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// import { useNavigate } from "react-router-dom";

// const SelfieApp = () => {
//   const lottieRef = useRef(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const streamRef = useRef(null); // Store stream here

//   const [animationCount, setAnimationCount] = useState(0);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [message, setMessage] = useState(
//     "Please keep your face inside the circle."
//   );
//   const [countdown, setCountdown] = useState(null);
//   const [cameraMinimized, setCameraMinimized] = useState(false);
//   const newCustomer = sessionStorage.getItem("newCustomer");
//   const guestFirstName = sessionStorage.getItem("guestFirstName") || "unknown";
//   const guestLastName = sessionStorage.getItem("guestLastName") || "unknown";
//   const navigate = useNavigate();

//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//         });
//         streamRef.current = stream; // Store the stream

//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }

//         setTimeout(() => {
//           setMessage("Capturing Image");
//           setTimeout(() => {
//             setMessage(null);
//             startCountdown();
//           }, 1000);
//         }, 3000);
//       } catch (error) {
//         console.error("Error accessing webcam: ", error);
//         alert("Please allow camera access.");
//       }
//     };

//     startCamera();

//     return () => {
//       stopCamera();
//     };
//   }, []);

//   const stopCamera = () => {
//     if (streamRef.current) {
//       streamRef.current.getTracks().forEach((track) => track.stop());
//       streamRef.current = null;
//     }
//     if (videoRef.current) {
//       videoRef.current.srcObject = null;
//     }
//   };

//   const startCountdown = () => {
//     let timeLeft = 3;
//     setCountdown(timeLeft);

//     const interval = setInterval(() => {
//       timeLeft -= 1;
//       setCountdown(timeLeft);
//       if (timeLeft === 0) {
//         clearInterval(interval);
//         setCountdown(null);
//         captureImage();
//       }
//     }, 1000);
//   };

//   const captureImage = () => {
//     if (canvasRef.current && videoRef.current) {
//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       const context = canvas.getContext("2d");

//       // Set canvas dimensions to match video dimensions
//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;

//       // Draw the full video frame
//       context.drawImage(video, 0, 0, canvas.width, canvas.height);
//       setCapturedImage(canvasRef.current.toDataURL("image/png"));
//       setCameraMinimized(true);
//       toast.success("Captured successfully!");
//     }
//   };

//   const handleRecapture = () => {
//     setCapturedImage(null);
//     setCameraMinimized(false);
//     startCountdown();
//   };

//   const uploadImage = async () => {
//     if (!capturedImage) {
//       toast.error("No image to upload!");
//       return;
//     }

//     stopCamera();

//     // Convert base64 image to Blob
//     const blob = await fetch(capturedImage).then((res) => res.blob());
//     const file = new File(
//       [blob],
//       `${guestFirstName}_${guestLastName}_Selfie.png`,
//       { type: "image/png" }
//     );

//     // Create FormData
//     const formData = new FormData();
//     formData.append("name", `${guestFirstName}_${guestLastName}_Selfie`); // You can replace this with dynamic user input
//     formData.append("avatar", file);

//     try {
//       const response = await fetch(
//         "https://kiotel-backend-middleware.onrender.com/api/v1/user/upload-photo",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const result = await response.json();

//       if (response.ok) {
//         toast.success("Image uploaded successfully!");
//         console.log(result);
//         {
         
//         navigate("/check-in-success");
//         }
//       } else {
//         toast.error(result.message || "Upload failed.");
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <>
   
//       <div className="selfie-container">
//           <header className="selfie-header">
//           <div className="logo-section">
//             <div className="home-icon-id">
//               <img
//                 src="../src/assets/images/bookingdetails/home.png"
//                 alt="home"
//                 onClick={() => navigate("/")}
//               />
//             </div>
//             <h1 className="selfie-title">Identity Confirmation</h1>
//           </div>
//           <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
//         </header>
//         <div className={`camera-box ${cameraMinimized ? "minimized" : ""}`}>
//           <video
//             className="selfie-video"
//             ref={videoRef}
//             autoPlay
//             playsInline
//           ></video>

//           {(message || countdown !== null) && (
//             <div className="overlay-text">
//               {message && <p className="message">{message}</p>}
//               {countdown !== null && <p className="countdown">{countdown}</p>}
//             </div>
//           )}
//           {/* <svg className="face-overlay" viewBox="0 0 200 200">
//             <ellipse
//               cx="100"
//               cy="80"
//               rx="50"
//               ry="60"
//               stroke="red"
//               fill="none"
//               strokeWidth="2"
//             />
//             <line
//               x1="10"
//               y1="10"
//               x2="30"
//               y2="10"
//               stroke="red"
//               strokeWidth="3"
//             />
//             <line
//               x1="10"
//               y1="10"
//               x2="10"
//               y2="30"
//               stroke="red"
//               strokeWidth="3"
//             />
//             <line
//               x1="190"
//               y1="10"
//               x2="170"
//               y2="10"
//               stroke="red"
//               strokeWidth="3"
//             />
//             <line
//               x1="190"
//               y1="10"
//               x2="190"
//               y2="30"
//               stroke="red"
//               strokeWidth="3"
//             />
//             <line
//               x1="10"
//               y1="190"
//               x2="30"
//               y2="190"
//               stroke="red"
//               strokeWidth="3"
//             />
//             <line
//               x1="10"
//               y1="190"
//               x2="10"
//               y2="170"
//               stroke="red"
//               strokeWidth="3"
//             />
//             <line
//               x1="190"
//               y1="190"
//               x2="170"
//               y2="190"
//               stroke="red"
//               strokeWidth="3"
//             />
//             <line
//               x1="190"
//               y1="190"
//               x2="190"
//               y2="170"
//               stroke="red"
//               strokeWidth="3"
//             />
//           </svg> */}

//           <svg className="face-overlay" viewBox="0 0 300 600" xmlns="http://www.w3.org/2000/svg">
//   <ellipse
//     cx="150"
//     cy="200"
//     rx="105"
//     ry="140"
//     stroke="red"
//     fill="none"
//     strokeWidth="3"
//   />
//   {/* Corner lines */}
//   <line x1="10" y1="10" x2="40" y2="10" stroke="red" strokeWidth="3" />
//   <line x1="10" y1="10" x2="10" y2="40" stroke="red" strokeWidth="3" />
  
//   <line x1="290" y1="10" x2="260" y2="10" stroke="red" strokeWidth="3" />
//   <line x1="290" y1="10" x2="290" y2="40" stroke="red" strokeWidth="3" />
  
//   <line x1="10" y1="390" x2="40" y2="390" stroke="red" strokeWidth="3" />
//   <line x1="10" y1="390" x2="10" y2="360" stroke="red" strokeWidth="3" />
  
//   <line x1="290" y1="390" x2="260" y2="390" stroke="red" strokeWidth="3" />
//   <line x1="290" y1="390" x2="290" y2="360" stroke="red" strokeWidth="3" />
// </svg>
//         </div>

//         <div className="captured-image-container-container">
//           {capturedImage ? (
//             <>
//               <div className="captured-image-container">
//                 <img
//                   src={capturedImage}
//                   alt="Captured Selfie"
//                   className="captured-image"
//                 />
//                 {/* JSON Animation */}
//                 <Lottie
//                   animationData={animationData}
//                   loop={false}
//                   autoplay={true}
//                   style={{ width: 500, height: 500 }}
//                   lottieRef={lottieRef}
//                   onComplete={() => {
//                     if (animationCount < 1) {
//                       setAnimationCount((prev) => prev + 1);
//                       lottieRef.current?.goToAndPlay(0, true); // Restart animation
//                     }
//                   }}
//                 />
//               </div>
//               <div className="selfie-buttons">
//                 <button
//                   className="receipt-print-button"
//                   onClick={handleRecapture}
//                   style={{ fontSize: "40px", fontWeight: "bold" }}
//                 >
//                   Recapture
//                 </button>
//                 <button className="checkin-button" onClick={uploadImage} style={{ fontSize: "40px", fontWeight: "bold" }}>
//                   Proceed
//                 </button>
//               </div>
//             </>
//           ) : (
//             <>
//               <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
//             </>
//           )}
//         </div>
//       </div>
//       <Toaster />
//  <HelpFooter />
//     </>
//   );
// };

// export default SelfieApp;




import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import animationData from "./success.json";
import "./SelfieApp.css";
import { Toaster, toast } from "react-hot-toast";
import Header from "../../components/Header/header";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const SelfieApp = () => {
  const lottieRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const [animationCount, setAnimationCount] = useState(0);
  const [capturedImage, setCapturedImage] = useState(null);
  const [message, setMessage] = useState(
    "Please keep your face inside the circle."
  );
  const [countdown, setCountdown] = useState(null);
  const [cameraMinimized, setCameraMinimized] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
  const newCustomer = sessionStorage.getItem("newCustomer");
  const guestFirstName = sessionStorage.getItem("guestFirstName") || "unknown";
  const guestLastName = sessionStorage.getItem("guestLastName") || "unknown";
  
  const navigate = useNavigate();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        setTimeout(() => {
          setMessage("Capturing Image");
          setTimeout(() => {
            setMessage(null);
            startCountdown();
          }, 1000);
        }, 3000);
      } catch (error) {
        console.error("Error accessing webcam: ", error);
        alert("Please allow camera access.");
      }
    };

    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const startCountdown = () => {
    let timeLeft = 3;
    setCountdown(timeLeft);

    const interval = setInterval(() => {
      timeLeft -= 1;
      setCountdown(timeLeft);
      if (timeLeft === 0) {
        clearInterval(interval);
        setCountdown(null);
        captureImage();
      }
    }, 1000);
  };

  const captureImage = () => {
    if (canvasRef.current && videoRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setCapturedImage(canvasRef.current.toDataURL("image/png"));
      setCameraMinimized(true);
      toast.success("Captured successfully!");
    }
  };

  const handleRecapture = () => {
    setCapturedImage(null);
    setCameraMinimized(false);
    startCountdown();
  };

  const uploadImage = async () => {
    setLoading(true); // Start loading

    if (!capturedImage) {
      toast.error("No image to upload!");
      setLoading(false); // Stop loading on error
      return;
    }

    stopCamera();

    const blob = await fetch(capturedImage).then((res) => res.blob());
    const file = new File(
      [blob],
      `${guestFirstName}_${guestLastName}_Selfie.png`,
      { type: "image/png" }
    );

    const formData = new FormData();
    formData.append("name", `${guestFirstName}_${guestLastName}_Selfie`);
    formData.append("avatar", file);

    try {
      const response = await fetch(
        "https://kiotel-backend-middleware.onrender.com/api/v1/user/upload-photo",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("Image uploaded successfully!");
        navigate("/check-in-success");
      } else {
        toast.error(result.message || "Upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Render only Loading component when loading is true
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="selfie-container">
      <Toaster />
      <header className="selfie-header">
        <div className="logo-section">
          <div className="home-icon-id">
            <img
              src="/assets/images/bookingdetails/home.png"
              alt="home"
              onClick={() => navigate("/")}
            />
          </div>
          <h1 className="selfie-title">Identity Confirmation</h1>
        </div>
        <img src="/assets/images/bookingdetails/help.png" alt="help" />
      </header>
      <div className={`camera-box ${cameraMinimized ? "minimized" : ""}`}>
        <video
          className="selfie-video"
          ref={videoRef}
          autoPlay
          playsInline
        ></video>

        {(message || countdown !== null) && (
          <div className="overlay-text">
            {message && <p className="message">{message}</p>}
            {countdown !== null && <p className="countdown">{countdown}</p>}
          </div>
        )}
        <svg className="face-overlay" viewBox="0 0 300 600" xmlns="http://www.w3.org/2000/svg">
          <ellipse
            cx="150"
            cy="200"
            rx="105"
            ry="140"
            stroke="red"
            fill="none"
            strokeWidth="3"
          />
          <line x1="10" y1="10" x2="40" y2="10" stroke="red" strokeWidth="3" />
          <line x1="10" y1="10" x2="10" y2="40" stroke="red" strokeWidth="3" />
          <line x1="290" y1="10" x2="260" y2="10" stroke="red" strokeWidth="3" />
          <line x1="290" y1="10" x2="290" y2="40" stroke="red" strokeWidth="3" />
          <line x1="10" y1="390" x2="40" y2="390" stroke="red" strokeWidth="3" />
          <line x1="10" y1="390" x2="10" y2="360" stroke="red" strokeWidth="3" />
          <line x1="290" y1="390" x2="260" y2="390" stroke="red" strokeWidth="3" />
          <line x1="290" y1="390" x2="290" y2="360" stroke="red" strokeWidth="3" />
        </svg>
      </div>

      <div className="captured-image-container-container">
        {capturedImage ? (
          <>
            <div className="captured-image-container">
              <img
                src={capturedImage}
                alt="Captured Selfie"
                className="captured-image"
              />
              <Lottie
                animationData={animationData}
                loop={false}
                autoplay={true}
                style={{ width: 500, height: 500 }}
                lottieRef={lottieRef}
                onComplete={() => {
                  if (animationCount < 1) {
                    setAnimationCount((prev) => prev + 1);
                    lottieRef.current?.goToAndPlay(0, true);
                  }
                }}
              />
            </div>
            <div className="selfie-buttons">
              <button
                className="receipt-print-button"
                onClick={handleRecapture}
                style={{ fontSize: "40px", fontWeight: "bold" }}
              >
                Recapture
              </button>
              <button
                className="checkin-button"
                onClick={uploadImage}
                style={{ fontSize: "40px", fontWeight: "bold" }}
              >
                Proceed
              </button>
            </div>
          </>
        ) : (
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        )}
      </div>
      <HelpFooter />
    </div>
  );
};

export default SelfieApp;