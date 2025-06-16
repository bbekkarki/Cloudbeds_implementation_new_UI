// import { Home, HelpCircle, ChevronLeft, DollarSign, ChevronRight, HelpingHand } from "lucide-react"
// import "./Payment.css"
// import Header from "../../components/Header/Header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// export default function Payment() {
//   return (
//     <div className="payment-page">
//       <div className="payment-container">
        
//  <Header />
//         <div className="payment-card">
//           <button className="back-button">
//             <ChevronLeft size={20} />
//             <span>Back</span>
//           </button>

//           <div className="payment-instructions">
//             <p>Kindly insert your cash one note at a time. The blue light indicates where to insert your bills.</p>
//           </div>

//           <div className="cash-insert-area">
            
//             {/* This is the area where cash would be inserted */}
//             <video className="payment-video" autoPlay loop muted>
//             <source src="../../src/assets/videos/InsertBillVideo.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video></div>
          
//           <button className="insert-cash-button">
//             <img src="../../src/assets/images/cash-icon.png" />
//             <span>Insert Cash</span>
//           </button>
//         </div>
//          <HelpFooter />
//       </div>
//     </div>
//   )
// }

import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import "./Payment.css";
import Header from "../../components/Header/header";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_KEY, BASE_API_URL } from "../../components/constants/constants";

export default function Payment() {
  const [totalCharge, setTotalCharge] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [balanceAmount, setBalanceAmount] = useState(0);
  const [collectedAmount, setCollectedAmount] = useState(0);
  const [refundedAmount, setRefundedAmount] = useState(0);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const reservationID = sessionStorage.getItem("reservationID");
  const propertyID = "317150";
const checkout = sessionStorage.getItem("checkout");
//for testing flow 

useEffect(() => {
  const testAutoPayment = async () => {
    if (!reservationID || !balanceAmount || balanceAmount <= 0) return;

    toast("Test: Auto payment test...", { icon: "🧪" });

    const timer = setTimeout(() => {
      postPayment(balanceAmount);
      setCollectedAmount(balanceAmount); // Pay full balance
    }, 5000);

    return () => clearTimeout(timer);
  };

  testAutoPayment();
}, [reservationID, balanceAmount]);



  // Fetch reservation details on component mount
  useEffect(() => {
    const fetchReservationDetails = async () => {
      try {
        if (!reservationID) {
          toast.error("No reservation found");
          return;
        }

        const response = await axios.get(
          `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
          {
            headers: {
              accept: "application/json",
              authorization: `Bearer ${API_KEY}`,
              "x-api-key": `${API_KEY}`,
            },
          }
        );

        if (response.data.success) {
          const { balanceDetailed } = response.data.data;
          const grandTotal = balanceDetailed.grandTotal || 0;
          const paid = balanceDetailed.paid || 0;
          const remaining = grandTotal - paid;

          setTotalCharge(grandTotal);
          setPaidAmount(paid);
          setBalanceAmount(remaining.toFixed(2));
          
          // Store in session for persistence
          sessionStorage.setItem("grandTotal", grandTotal);
          sessionStorage.setItem("paidAmount", paid);
          sessionStorage.setItem("remainingBalance", remaining);
        }
      } catch (error) {
        toast.error("Failed to load reservation details");
        console.error("Reservation fetch error:", error);
      }
    };

    fetchReservationDetails();
  }, [reservationID]);

  // Handle payment submission
  const postPayment = async (amount) => {
    try {
      const formData = new URLSearchParams({
        reservationID: reservationID,
        propertyID: propertyID,
        type: "cash",
        amount: amount || balanceAmount,
      });

      const response = await axios.post(
        `${BASE_API_URL}/cashpay/postPayment`,
        formData,
        {
          headers: {
            accept: "application/json",
            authorization: `Bearer ${API_KEY}`,
            "x-api-key": `${API_KEY}`,
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data.success) {
        toast.success("Payment processed successfully");
        if (checkout) {
          navigate("/check-out");
        }
        navigate("/assign-room");
      } else {
        throw new Error("Payment failed");
      }
    } catch (error) {
      toast.error("Payment processing failed");
      console.error("Payment error:", error);
    }
  };

  // Handle cash insertion message to WebView
  const handleInsertCash = () => {
    if (window.chrome?.webview) {
      window.chrome.webview.postMessage(
        JSON.stringify({ command: "initiate-cash-payment" })
      );
      toast("Inserting cash...", { icon: "💵" });
    } else {
      toast("WebView not detected. Using test mode.");
      // Simulate payment for development
      setTimeout(() => {
        const testAmount = 20;
        setCollectedAmount(prev => prev + testAmount);
        setMessages(prev => [...prev, `Bill Collected - $${testAmount}`]);
      }, 1000);
    }
  };

  // Handle messages from WebView (cash dispenser)
  useEffect(() => {
    const handleHostMessage = (event) => {
      const message = event.data;
      setMessages(prev => [...prev, message]);

      if (message.startsWith("Bill Collected")) {
        const amount = parseFloat(message.split("-")[1]);
        if (!isNaN(amount)) {
          setCollectedAmount(prev => {
            const newAmount = prev + amount;
            if (totalCharge > 0 && newAmount >= totalCharge) {
              toast.success("Payment complete!");
              postPayment(newAmount);
            }
            return newAmount;
          });
        }
      } else if (message.startsWith("Bill Refunded")) {
        const amount = parseFloat(message.split("-")[1]);
        if (!isNaN(amount)) {
          setRefundedAmount(prev => prev + amount);
        }
      } else if (message === "PAYMENT-COMPLETE") {
        postPayment();
      }
    };

    if (window.chrome?.webview) {
      window.chrome.webview.addEventListener("message", handleHostMessage);
    }

    return () => {
      if (window.chrome?.webview) {
        window.chrome.webview.removeEventListener("message", handleHostMessage);
      }
    };
  }, [totalCharge]);

  return (
    <div className="payment-page">
      <Toaster position="top-center" />
      <div className="payment-container">
        <Header  value="Payment"/>
        <div className="payment-card">
          <button 
            className="back-button"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>

          {/* Payment summary */}
       

          <div className="payment-instructions">
            <p>Kindly insert your cash one note at a time. The blue light indicates where to insert your bills.</p>
          </div>

          <div className="cash-insert-area">
            <video className="payment-video" autoPlay loop muted playsInline>
              <source src="/assets/videos/InsertBillVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
             <div className="payment-summary">
            <div className="summary-item">
              <span>Total Charges:</span>
              <span>${totalCharge.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Amount Paid:</span>
              <span>${paidAmount.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Amount Due:</span>
              <span>${balanceAmount}</span>
            </div>
            <div className="summary-item">
              <span>Collected Cash:</span>
              <span>${collectedAmount}</span>
            </div>
          </div>
          <button 
            className="insert-cash-button"
            onClick={handleInsertCash}
          >
            <img src="/assets/images/cash-icon.png" alt="Cash icon" />
            <span>Insert Cash</span>
          </button>

          {/* Transaction history */}
          {messages.length > 0 && (
            <div className="transaction-history">
              <h3>Transaction Log</h3>
              <div className="transaction-list">
                {messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`transaction-item ${
                      msg.startsWith("Bill Collected") ? "collected" : "refunded"
                    }`}
                  >
                    {msg}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <HelpFooter />
      </div>
    </div>
  )
}