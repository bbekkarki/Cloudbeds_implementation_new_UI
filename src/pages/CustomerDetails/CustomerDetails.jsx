// // // // // import {
// // // // //   Home,
// // // // //   HelpCircle,
// // // // //   ChevronLeft,
// // // // //   Calendar,
// // // // //   ChevronRight,
// // // // //   ChevronDown,
// // // // //   HandHelpingIcon as HelpIcon,
// // // // // } from "lucide-react"
// // // // // import "./CustomerDetails.css"

// // // // // export default function CustomerDetails() {
// // // // //   return (
// // // // //     <div className="customer-page">
// // // // //       <div className="customer-container">
// // // // //         <header className="customer-header">
// // // // //           <div className="logo-section">
// // // // //             <div className="home-icon">
// // // // //               <Home color="white" size={32} />
// // // // //             </div>
// // // // //             <h1 className="customer-title">Customer Details</h1>
// // // // //           </div>
// // // // //           <button className="help-button">
// // // // //             Help? <HelpCircle color="white" size={24} />
// // // // //           </button>
// // // // //         </header>

// // // // //         <div className="customer-card">
// // // // //           <button className="customer-back-button">
// // // // //             <ChevronLeft size={20} />
// // // // //             <span>Back</span>
// // // // //           </button>

// // // // //           <form className="customer-form">
// // // // //             <div className="form-group">
// // // // //               <label htmlFor="fullName" className="form-label">
// // // // //                 Full name
// // // // //               </label>
// // // // //               <input type="text" id="fullName" className="form-input" value="Siemantel Donovan" readOnly />
// // // // //             </div>

// // // // //             <div className="form-group">
// // // // //               <label className="form-label">Gender</label>
// // // // //               <div className="radio-group">
// // // // //                 <label className="radio-label">
// // // // //                   <input type="radio" name="gender" checked className="radio-input" />
// // // // //                   <span className="radio-text">Male</span>
// // // // //                 </label>
// // // // //                 <label className="radio-label">
// // // // //                   <input type="radio" name="gender" className="radio-input" />
// // // // //                   <span className="radio-text">Female</span>
// // // // //                 </label>
// // // // //                 <label className="radio-label">
// // // // //                   <input type="radio" name="gender" className="radio-input" />
// // // // //                   <span className="radio-text">Other</span>
// // // // //                 </label>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="form-group">
// // // // //               <label htmlFor="email" className="form-label">
// // // // //                 Email
// // // // //               </label>
// // // // //               <div className="email-container">
// // // // //                 <div className="checkbox-container">
// // // // //                   <input type="checkbox" id="emailConfirm" className="checkbox-input" checked readOnly />
// // // // //                   <span className="checkbox-custom"></span>
// // // // //                 </div>
// // // // //                 <input type="email" id="email" className="form-input" value="donovansiemantel@outlook.com" readOnly />
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="form-group">
// // // // //               <label htmlFor="phone" className="form-label">
// // // // //                 Phone number
// // // // //               </label>
// // // // //               <input type="tel" id="phone" className="form-input" value="+1-212-456-7890" readOnly />
// // // // //             </div>

// // // // //             <div className="form-group">
// // // // //               <label htmlFor="checkOut" className="form-label">
// // // // //                 Check-Out
// // // // //               </label>
// // // // //               <div className="date-input-container">
// // // // //                 <input type="text" id="checkOut" className="form-input" value="Thursday 28 March" readOnly />
// // // // //                 <Calendar className="date-icon" size={20} color="#1E88E5" />
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="form-row">
// // // // //               <div className="form-group half">
// // // // //                 <label htmlFor="country" className="form-label">
// // // // //                   Country
// // // // //                 </label>
// // // // //                 <div className="select-container">
// // // // //                   <div className="country-select">
// // // // //                     <span className="flag">🇺🇸</span>
// // // // //                     <span className="country-name">US</span>
// // // // //                     <ChevronDown size={16} />
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="form-group half">
// // // // //                 <label htmlFor="postalCode" className="form-label">
// // // // //                   Postal code*
// // // // //                 </label>
// // // // //                 <input type="text" id="postalCode" className="form-input" value="78602" readOnly />
// // // // //               </div>
// // // // //             </div>

// // // // //             <h2 className="section-title">Select a Payment Method</h2>

// // // // //             <div className="payment-option">
// // // // //               <div className="payment-option-left">
// // // // //                 <div className="checkbox-container blue">
// // // // //                   <input type="checkbox" id="cashPayment" className="checkbox-input" readOnly />
// // // // //                   <span className="checkbox-custom"></span>
// // // // //                 </div>
// // // // //                 <span className="payment-option-text">Insert Cash</span>
// // // // //               </div>
// // // // //               <div className="radio-circle"></div>
// // // // //             </div>

// // // // //             <div className="card-section">
// // // // //               <h3 className="card-section-title">Debit/Credit Card</h3>
// // // // //               <div className="card-options">
// // // // //                 <div className="card-option">
// // // // //                   <div className="card-option-left">
// // // // //                     <img src="/placeholder.svg?height=24&width=40" alt="Visa" className="card-logo" />
// // // // //                     <span className="card-name">Visa</span>
// // // // //                   </div>
// // // // //                   <div className="radio-circle selected"></div>
// // // // //                 </div>
// // // // //                 <div className="card-option">
// // // // //                   <div className="card-option-left">
// // // // //                     <img src="/placeholder.svg?height=24&width=40" alt="Mastercard" className="card-logo" />
// // // // //                     <span className="card-name">Mastercard</span>
// // // // //                   </div>
// // // // //                   <div className="radio-circle"></div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </form>

// // // // //           <div className="price-section">
// // // // //             <div className="price-container">
// // // // //               <span className="price-amount">$429.9</span>
// // // // //               <span className="price-details">/ Night • Includes taxes and other fees.</span>
// // // // //             </div>
// // // // //           </div>

// // // // //           <button className="proceed-button">
// // // // //             <span>Proceed to Confirmation</span>
// // // // //             <ChevronRight size={20} />
// // // // //           </button>
// // // // //         </div>

// // // // //         <div className="help-section">
// // // // //           <div className="help-content">
// // // // //             <HelpIcon size={24} className="help-icon" />
// // // // //             <div className="help-text">
// // // // //               <h3 className="help-title">Need some help?</h3>
// // // // //               <p className="help-description">
// // // // //                 Contact our front desk at extension 0 or visit the concierge desk in the lobby.
// // // // //               </p>
// // // // //             </div>
// // // // //             <ChevronRight size={20} className="help-arrow" />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }





// // // // import {
// // // //   Home,
// // // //   HelpCircle,
// // // //   ChevronLeft,
// // // //   Calendar,
// // // //   ChevronRight,
// // // //   ChevronDown,
// // // //   HandHelpingIcon as HelpIcon,
// // // //   Mail,
// // // //   Banknote,
// // // //   CreditCard
// // // // } from "lucide-react"
// // // // import "./CustomerDetails.css"

// // // // export default function CustomerDetails() {
// // // //   return (
// // // //     <div className="customer-page">
// // // //       <div className="customer-container">
// // // //         <header className="customer-header">
// // // //           <div className="logo-section">
// // // //             <div className="home-icon">
// // // //               <Home color="white" size={32} />
// // // //             </div>
// // // //             <h1 className="customer-title">Customer Details</h1>
// // // //           </div>
// // // //           <button className="help-button">
// // // //             Help? <HelpCircle color="white" size={24} />
// // // //           </button>
// // // //         </header>

// // // //         <div className="customer-card">
// // // //           <button className="customer-back-button">
// // // //             <ChevronLeft size={20} />
// // // //             <span>Back</span>
// // // //           </button>

// // // //           <form className="customer-form">
// // // //             <div className="form-group">
// // // //               <label htmlFor="fullName" className="form-label">
// // // //                 Full name
// // // //               </label>
// // // //               <input type="text" id="fullName" className="form-input" value="Siemantel Donovan" readOnly />
// // // //             </div>

// // // //             <div className="form-group">
// // // //               <label className="form-label">Gender</label>
// // // //               <div className="radio-group">
// // // //                 <label className="radio-label">
// // // //                   <input type="radio" name="gender" checked className="radio-input" />
// // // //                   <span className="radio-text">Male</span>
// // // //                 </label>
// // // //                 <label className="radio-label">
// // // //                   <input type="radio" name="gender" className="radio-input" />
// // // //                   <span className="radio-text">Female</span>
// // // //                 </label>
// // // //                 <label className="radio-label">
// // // //                   <input type="radio" name="gender" className="radio-input" />
// // // //                   <span className="radio-text">Other</span>
// // // //                 </label>
// // // //               </div>
// // // //             </div>

// // // //             <div className="form-group">
// // // //               <label htmlFor="email" className="form-label">
// // // //                 Email
// // // //               </label>
// // // //               <div className="email-container">
// // // //                 <img src="../src/assets/images/mail-fill.png" className="card-icon" />
// // // //                 {/* <Mail size={20} className="form-icon" /> */}
// // // //                 <input type="email" id="email" className="form-input" value="donovansiemantel@outlook.com" readOnly />
// // // //               </div>
// // // //             </div>

// // // //             <div className="form-group">
// // // //               <label htmlFor="phone" className="form-label">
// // // //                 Phone number
// // // //               </label>
// // // //               <input type="tel" id="phone" className="form-input" value="+1-212-456-7890" readOnly />
// // // //             </div>

// // // //             <div className="form-group">
// // // //               <label htmlFor="checkOut" className="form-label">
// // // //                 Check-Out
// // // //               </label>
// // // //               <div className="date-input-container">
// // // //                 <input type="text" id="checkOut" className="form-input" value="Thursday 28 March" readOnly />
// // // //                 <Calendar className="date-icon" size={20} color="#1E88E5" />
                
// // // //               </div>
// // // //             </div>

// // // //             <div className="form-row">
// // // //               <div className="form-group half">
// // // //                 <label htmlFor="country" className="form-label">
// // // //                   Country
// // // //                 </label>
// // // //                 <div className="select-container">
// // // //                   <div className="country-select">
// // // //                     <span className="flag">🇺🇸</span>
// // // //                     <span className="country-name">US</span>
// // // //                     <ChevronDown size={16} />
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="form-group half">
// // // //                 <label htmlFor="postalCode" className="form-label">
// // // //                   Postal code*
// // // //                 </label>
// // // //                 <input type="text" id="postalCode" className="form-input" value="78602" readOnly />
// // // //               </div>
// // // //             </div>

// // // //             <h2 className="section-title">Select a Payment Method</h2>

// // // //             <div className="payment-option">
// // // //               <div className="payment-option-left">
              
// // // //             <input type="checkbox" id="cashPayment" className="checkbox-input" readOnly />
              
// // // //               <img src="../src/assets/images/cash-in.png" className="card-icon" />
// // // //                 <span className="payment-option-text">Insert Cash</span>
// // // //               </div>
// // // //               <div className="radio-circle"></div>
// // // //             </div>

// // // //             <div className="card-section">
// // // //               <h3 className="card-section-title">Debit/Credit Card</h3>
// // // //               <div className="card-options">
// // // //                 <div className="card-option">
// // // //                   <div className="card-option-left">
// // // //                     {/* <CreditCard size={20} style={{ marginRight: "8px" }} /> */}
// // // //                     <img src="../src/assets/images/visa-fill.png" className="card-icon" />
// // // //                     <span className="card-name">Visa</span>
// // // //                   </div>
// // // //                   <div className="radio-circle selected"></div>
// // // //                 </div>
// // // //                 <div className="card-option">
// // // //                   <div className="card-option-left">
// // // //                     {/* <CreditCard size={20} style={{ marginRight: "8px" }} /> */}
// // // //                     <img src="../src/assets/images/mastercard-fill.png" className="card-icon" />
// // // //                     <span className="card-name">Mastercard</span>
// // // //                   </div>
// // // //                   <div className="radio-circle"></div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </form>

// // // //           <div className="price-section">
// // // //             <div className="price-container">
// // // //               <span className="price-amount">$429.9</span>
// // // //               <span className="price-details">/ Night • Includes taxes and other fees.</span>
// // // //             </div>
// // // //           </div>

// // // //           <button className="proceed-button">
// // // //             <span>Proceed to Confirmation</span>
// // // //             <ChevronRight size={20} />
// // // //           </button>
// // // //         </div>

// // // //         <div className="help-section">
// // // //           <div className="help-content">
// // // //             <HelpIcon size={24} className="help-icon" />
// // // //             <div className="help-text">
// // // //               <h3 className="help-title">Need some help?</h3>
// // // //               <p className="help-description">
// // // //                 Contact our front desk at extension 0 or visit the concierge desk in the lobby.
// // // //               </p>
// // // //             </div>
// // // //             <ChevronRight size={20} className="help-arrow" />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }
// // // import {
// // //   Home,
// // //   HelpCircle,
// // //   ChevronLeft,
// // //   Calendar,
// // //   ChevronRight,
// // //   ChevronDown,
// // //   HandHelpingIcon as HelpIcon,
// // // } from "lucide-react";
// // // import { useState } from "react";
// // // import "./CustomerDetails.css";

// // // export default function CustomerDetails() {
// // //   const countryCode = "US"; // dynamically you can replace this with props or state
// // //   const [flagUrl, setFlagUrl] = useState(`https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`);

// // //   return (
// // //     <div className="customer-page">
// // //       <div className="customer-container">
// // //         <header className="customer-header">
// // //           <div className="logo-section">
// // //             <div className="home-icon">
// // //               <Home color="white" size={32} />
// // //             </div>
// // //             <h1 className="customer-title">Customer Details</h1>
// // //           </div>
// // //           <button className="help-button">
// // //             Help? <HelpCircle color="white" size={24} />
// // //           </button>
// // //         </header>

// // //         <div className="customer-card">
// // //           <button className="customer-back-button">
// // //             <ChevronLeft size={20} />
// // //             <span>Back</span>
// // //           </button>

// // //           <form className="customer-form">
// // //             {/* Full Name */}
// // //             <div className="form-group">
// // //               <label htmlFor="fullName" className="form-label">Full name</label>
// // //               <input type="text" id="fullName" className="form-input" value="Siemantel Donovan" readOnly />
// // //             </div>

// // //             {/* Gender */}
// // //             <div className="form-group">
// // //               <label className="form-label">Gender</label>
// // //               <div className="radio-group">
// // //                 <label className="radio-label">
// // //                   <input type="radio" name="gender" checked className="radio-input" readOnly />
// // //                   <span className="radio-text">Male</span>
// // //                 </label>
// // //                 <label className="radio-label">
// // //                   <input type="radio" name="gender" className="radio-input" readOnly />
// // //                   <span className="radio-text">Female</span>
// // //                 </label>
// // //                 <label className="radio-label">
// // //                   <input type="radio" name="gender" className="radio-input" readOnly />
// // //                   <span className="radio-text">Other</span>
// // //                 </label>
// // //               </div>
// // //             </div>

// // //             {/* Email */}
// // //             <div className="form-group">
// // //               <label htmlFor="email" className="form-label">Email</label>
// // //               <div className="email-container">
// // //                 <img src="../src/assets/images/mail-fill.png" className="card-icon" />
// // //                 <input type="email" id="email" className="form-input" value="donovansiemantel@outlook.com" readOnly />
// // //               </div>
// // //             </div>

// // //             {/* Phone */}
// // //             <div className="form-group">
// // //               <label htmlFor="phone" className="form-label">Phone number</label>
// // //               <input type="tel" id="phone" className="form-input" value="+1-212-456-7890" readOnly />
// // //             </div>

// // //             {/* Check-Out */}
// // //             <div className="form-group">
// // //               <label htmlFor="checkOut" className="form-label">Check-Out</label>
// // //               <div className="date-input-container">
// // //                 <input type="text" id="checkOut" className="form-input" value="Thursday 28 March" readOnly />
// // //                 <Calendar className="date-icon" size={20} color="#1E88E5" />
// // //               </div>
// // //             </div>

// // //             {/* Country and Postal Code */}
// // //             <div className="form-row">
// // //               <div className="form-group half">
// // //                 <label htmlFor="country" className="form-label">Country</label>
// // //                 <div className="select-container">
// // //                   <div className="country-select">
// // //                     <img
// // //                       src={flagUrl}
// // //                       alt={`${countryCode} flag`}
// // //                       className="flag"
// // //                       onError={() =>
// // //                         setFlagUrl("../src/assets/images/default-flag.png")
// // //                       }
// // //                       style={{ width: "24px", height: "18px", marginRight: "8px" }}
// // //                     />
// // //                     <span className="country-name">{countryCode}</span>
// // //                     <ChevronDown size={16} />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="form-group half">
// // //                 <label htmlFor="postalCode" className="form-label">Postal code*</label>
// // //                 <input type="text" id="postalCode" className="form-input" value="78602" readOnly />
// // //               </div>
// // //             </div>

// // //             {/* Payment Section */}
// // //             <h2 className="section-title">Select a Payment Method</h2>

// // //             <div className="payment-option">
// // //               <div className="payment-option-left">
// // //                 <input type="checkbox" id="cashPayment" className="checkbox-input" readOnly />
// // //                 <img src="../src/assets/images/cash-in.png" className="card-icon" />
// // //                 <span className="payment-option-text">Insert Cash</span>
// // //               </div>
// // //               <div className="radio-circle"></div>
// // //             </div>

// // //             <div className="card-section">
// // //               <h3 className="card-section-title">Debit/Credit Card</h3>
// // //               <div className="card-options">
// // //                 <div className="card-option">
// // //                   <div className="card-option-left">
// // //                     <img src="../src/assets/images/visa-fill.png" className="card-icon" />
// // //                     <span className="card-name">Visa</span>
// // //                   </div>
// // //                   <div className="radio-circle selected"></div>
// // //                 </div>
// // //                 <div className="card-option">
// // //                   <div className="card-option-left">
// // //                     <img src="../src/assets/images/mastercard-fill.png" className="card-icon" />
// // //                     <span className="card-name">Mastercard</span>
// // //                   </div>
// // //                   <div className="radio-circle"></div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </form>

// // //           {/* Price */}
// // //           <div className="price-section">
// // //             <div className="price-container">
// // //               <span className="price-amount">$429.9</span>
// // //               <span className="price-details">/ Night • Includes taxes and other fees.</span>
// // //             </div>
// // //           </div>

// // //           {/* Proceed */}
// // //           <button className="proceed-button">
// // //             <span>Proceed to Confirmation</span>
// // //             <ChevronRight size={20} />
// // //           </button>
// // //         </div>

// // //         {/* Help Section */}
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
// // //   );
// // // }


// // // import {
// // //   Home,
// // //   HelpCircle,
// // //   ChevronLeft,
// // //   Calendar,
// // //   ChevronRight,
// // //   ChevronDown,
// // //   HandHelpingIcon as HelpIcon,
// // // } from "lucide-react";
// // // import { useState } from "react";
// // // import "./CustomerDetails.css";

// // // const countryList = [
// // //   { code: "US", name: "United States" },
// // //   { code: "IN", name: "India" },
// // //   { code: "FR", name: "France" },
// // //   { code: "AU", name: "Australia" },
// // // ];

// // // export default function CustomerDetails() {
// // //   const [countryCode, setCountryCode] = useState("US");
// // //   const [flagUrl, setFlagUrl] = useState(`https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`);
// // //   const [email, setEmail] = useState("donovansiemantel@outlook.com");
// // //   const [phone, setPhone] = useState("+1-212-456-7890");
// // //   const [postalCode, setPostalCode] = useState("78602");
// // //   const [paymentMethod, setPaymentMethod] = useState("visa");
// // //   const [customerType, setCustomerType] = useState("Regular");

// // //   const handleCountryChange = (e) => {
// // //     const selectedCode = e.target.value;
// // //     setCountryCode(selectedCode);
// // //     setFlagUrl(`https://flagcdn.com/24x18/${selectedCode.toLowerCase()}.png`);
// // //   };

// // //   return (
// // //     <div className="customer-page">
// // //       <div className="customer-container">
// // //         <header className="customer-header">
// // //           <div className="logo-section">
// // //             <div className="home-icon">
// // //               <Home color="white" size={32} />
// // //             </div>
// // //             <h1 className="customer-title">Customer Details</h1>
// // //           </div>
// // //           <button className="help-button">
// // //             Help? <HelpCircle color="white" size={24} />
// // //           </button>
// // //         </header>

// // //         <div className="customer-card">
// // //           <button className="customer-back-button">
// // //             <ChevronLeft size={20} />
// // //             <span>Back</span>
// // //           </button>

// // //           <form className="customer-form">
// // //             {/* Full Name */}
// // //             <div className="form-group">
// // //               <label htmlFor="fullName" className="form-label">Full name</label>
// // //               <input type="text" id="fullName" className="form-input" value="Siemantel Donovan" readOnly />
// // //             </div>

// // //             {/* Customer Type */}
// // //             <div className="form-group">
// // //               <label className="form-label">Customer Type</label>
// // //               <select className="form-input" value={customerType} onChange={(e) => setCustomerType(e.target.value)}>
// // //                 <option value="Regular">Regular</option>
// // //                 <option value="VIP">VIP</option>
// // //                 <option value="Business">Business</option>
// // //               </select>
// // //             </div>

// // //             {/* Email */}
// // //             <div className="form-group">
// // //               <label htmlFor="email" className="form-label">Email</label>
// // //               <input
// // //                 type="email"
// // //                 id="email"
// // //                 className="form-input"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //               />
// // //             </div>

// // //             {/* Phone */}
// // //             <div className="form-group">
// // //               <label htmlFor="phone" className="form-label">Phone number</label>
// // //               <input
// // //                 type="tel"
// // //                 id="phone"
// // //                 className="form-input"
// // //                 value={phone}
// // //                 onChange={(e) => setPhone(e.target.value)}
// // //               />
// // //             </div>

// // //             {/* Country and Postal Code */}
// // //             <div className="form-row">
// // //               <div className="form-group half">
// // //                 <label htmlFor="country" className="form-label">Country</label>
// // //                 <div className="select-container">
// // //                   <select
// // //                     id="country"
// // //                     className="form-input"
// // //                     value={countryCode}
// // //                     onChange={handleCountryChange}
// // //                   >
// // //                     {countryList.map((country) => (
// // //                       <option key={country.code} value={country.code}>
// // //                         {country.name}
// // //                       </option>
// // //                     ))}
// // //                   </select>
// // //                 </div>
// // //               </div>

// // //               <div className="form-group half">
// // //                 <label htmlFor="postalCode" className="form-label">Postal code*</label>
// // //                 <input
// // //                   type="text"
// // //                   id="postalCode"
// // //                   className="form-input"
// // //                   value={postalCode}
// // //                   onChange={(e) => setPostalCode(e.target.value)}
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Flag */}
// // //             <div className="form-group">
// // //               <img
// // //                 src={flagUrl}
// // //                 alt={`${countryCode} flag`}
// // //                 className="flag"
// // //                 onError={() => setFlagUrl("../src/assets/images/default-flag.png")}
// // //               />
// // //             </div>

// // //             {/* Payment Method */}
// // //             <h2 className="section-title">Select a Payment Method</h2>
// // //             <div className="payment-methods">
// // //               <label className="card-option">
// // //                 <input
// // //                   type="radio"
// // //                   name="payment"
// // //                   value="cash"
// // //                   checked={paymentMethod === "cash"}
// // //                   onChange={(e) => setPaymentMethod(e.target.value)}
// // //                 />
// // //                 <img src="../src/assets/images/cash-in.png" className="card-icon" />
// // //                 Cash
// // //               </label>
// // //               <label className="card-option">
// // //                 <input
// // //                   type="radio"
// // //                   name="payment"
// // //                   value="visa"
// // //                   checked={paymentMethod === "visa"}
// // //                   onChange={(e) => setPaymentMethod(e.target.value)}
// // //                 />
// // //                 <img src="../src/assets/images/visa-fill.png" className="card-icon" />
// // //                 Visa
// // //               </label>
// // //               <label className="card-option">
// // //                 <input
// // //                   type="radio"
// // //                   name="payment"
// // //                   value="mastercard"
// // //                   checked={paymentMethod === "mastercard"}
// // //                   onChange={(e) => setPaymentMethod(e.target.value)}
// // //                 />
// // //                 <img src="../src/assets/images/mastercard-fill.png" className="card-icon" />
// // //                 Mastercard
// // //               </label>
// // //             </div>
// // //           </form>

// // //           {/* Price Section */}
// // //           <div className="price-section">
// // //             <div className="price-container">
// // //               <span className="price-amount">$429.9</span>
// // //               <span className="price-details">/ Night • Includes taxes and other fees.</span>
// // //             </div>
// // //           </div>

// // //           {/* Proceed */}
// // //           <button className="proceed-button">
// // //             <span>Proceed to Confirmation</span>
// // //             <ChevronRight size={20} />
// // //           </button>
// // //         </div>

// // //         {/* Help Section */}
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
// // //   );
// // // }




// // // import {
// // //   Home,
// // //   HelpCircle,
// // //   ChevronLeft,
// // //   Calendar,
// // //   ChevronRight,
// // //   ChevronDown,
// // //   HandHelpingIcon as HelpIcon,
// // // } from "lucide-react";
// // // import { useState } from "react";
// // // import "./CustomerDetails.css";

// // // const countries = [
// // //   { code: "US", name: "United States" },
// // //   { code: "GB", name: "United Kingdom" },
// // //   { code: "CA", name: "Canada" },
// // //   { code: "AU", name: "Australia" },
// // // ];

// // // export default function CustomerDetails() {
// // //   const [countryCode, setCountryCode] = useState("US");
// // //   const [flagUrl, setFlagUrl] = useState(`https://flagcdn.com/24x18/us.png`);
// // //   const [email, setEmail] = useState("donovansiemantel@outlook.com");
// // //   const [phone, setPhone] = useState("+1-212-456-7890");
// // //   const [postalCode, setPostalCode] = useState("78602");
// // //   const [gender, setGender] = useState("Male");
// // //   const [selectedPayment, setSelectedPayment] = useState("Visa");

// // //   const handleCountryChange = (e) => {
// // //     const newCode = e.target.value;
// // //     setCountryCode(newCode);
// // //     setFlagUrl(`https://flagcdn.com/24x18/${newCode.toLowerCase()}.png`);
// // //   };

// // //   return (
// // //     <div className="customer-page">
// // //       <div className="customer-container">
// // //         <header className="customer-header">
// // //           <div className="logo-section">
// // //             <div className="home-icon">
// // //               <Home color="white" size={32} />
// // //             </div>
// // //             <h1 className="customer-title">Customer Details</h1>
// // //           </div>
// // //           <button className="help-button">
// // //             Help? <HelpCircle color="white" size={24} />
// // //           </button>
// // //         </header>

// // //         <div className="customer-card">
// // //           <button className="customer-back-button">
// // //             <ChevronLeft size={20} />
// // //             <span>Back</span>
// // //           </button>

// // //           <form className="customer-form">
// // //             {/* Full Name */}
// // //             <div className="form-group">
// // //               <label htmlFor="fullName" className="form-label">Full name</label>
// // //               <input type="text" id="fullName" className="form-input" value="Siemantel Donovan" readOnly />
// // //             </div>

// // //             {/* Gender */}
// // //             <div className="form-group">
// // //               <label className="form-label">Gender</label>
// // //               <div className="radio-group">
// // //                 {["Male", "Female", "Other"].map((g) => (
// // //                   <label key={g} className="radio-label">
// // //                     <input
// // //                       type="radio"
// // //                       name="gender"
// // //                       className="radio-input"
// // //                       checked={gender === g}
// // //                       onChange={() => setGender(g)}
// // //                     />
// // //                     <span className="radio-text">{g}</span>
// // //                   </label>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Email */}
// // //             <div className="form-group">
// // //               <label htmlFor="email" className="form-label">Email</label>
// // //               <div className="email-container">
// // //                 <img src="../src/assets/images/mail-fill.png" className="card-icon" />
// // //                 <input
// // //                   type="email"
// // //                   id="email"
// // //                   className="form-input"
// // //                   value={email}
// // //                   onChange={(e) => setEmail(e.target.value)}
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Phone */}
// // //             <div className="form-group">
// // //               <label htmlFor="phone" className="form-label">Phone number</label>
// // //               <input
// // //                 type="tel"
// // //                 id="phone"
// // //                 className="form-input"
// // //                 value={phone}
// // //                 onChange={(e) => setPhone(e.target.value)}
// // //               />
// // //             </div>

// // //             {/* Check-Out */}
// // //             <div className="form-group">
// // //               <label htmlFor="checkOut" className="form-label">Check-Out</label>
// // //               <div className="date-input-container">
// // //                 <input type="text" id="checkOut" className="form-input" value="Thursday 28 March" readOnly />
// // //                 <Calendar className="date-icon" size={20} color="#1E88E5" />
// // //               </div>
// // //             </div>

// // //             {/* Country and Postal Code */}
// // //             <div className="form-row">
// // //               <div className="form-group half">
// // //                 <label htmlFor="country" className="form-label">Country</label>
// // //                 <div className="select-container">
// // //                   <div className="country-select">
// // //                     <img
// // //                       src={flagUrl}
// // //                       alt={`${countryCode} flag`}
// // //                       className="flag"
// // //                       onError={() => setFlagUrl("../src/assets/images/default-flag.png")}
// // //                       style={{ width: "24px", height: "18px", marginRight: "8px" }}
// // //                     />
// // //                     <select value={countryCode} onChange={handleCountryChange} className="country-name" style={{ border: "none", background: "transparent" }}>
// // //                       {countries.map((c) => (
// // //                         <option key={c.code} value={c.code}>{c.name}</option>
// // //                       ))}
// // //                     </select>
// // //                     <ChevronDown size={16} />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="form-group half">
// // //                 <label htmlFor="postalCode" className="form-label">Postal code*</label>
// // //                 <input
// // //                   type="text"
// // //                   id="postalCode"
// // //                   className="form-input"
// // //                   value={postalCode}
// // //                   onChange={(e) => setPostalCode(e.target.value)}
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Payment Section */}
// // //             <h2 className="section-title">Select a Payment Method</h2>

// // //             <div
// // //               className="payment-option"
// // //               onClick={() => setSelectedPayment("Cash")}
// // //               style={{ cursor: "pointer" }}
// // //             >
// // //               <div className="payment-option-left">
// // //                 <input type="checkbox" id="cashPayment" className="checkbox-input" checked={selectedPayment === "Cash"} readOnly />
// // //                 <img src="../src/assets/images/cash-in.png" className="card-icon" />
// // //                 <span className="payment-option-text">Insert Cash</span>
// // //               </div>
// // //               <div className={`radio-circle ${selectedPayment === "Cash" ? "selected" : ""}`}></div>
// // //             </div>

// // //             <div className="card-section">
// // //               <h3 className="card-section-title">Debit/Credit Card</h3>
// // //               <div className="card-options">
// // //                 {["Visa", "Mastercard"].map((card) => (
// // //                   <div
// // //                     key={card}
// // //                     className="card-option"
// // //                     onClick={() => setSelectedPayment(card)}
// // //                     style={{ cursor: "pointer" }}
// // //                   >
// // //                     <div className="card-option-left">
// // //                       <img
// // //                         src={`../src/assets/images/${card.toLowerCase()}-fill.png`}
// // //                         className="card-icon"
// // //                       />
// // //                       <span className="card-name">{card}</span>
// // //                     </div>
// // //                     <div className={`radio-circle ${selectedPayment === card ? "selected" : ""}`}></div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </form>

// // //           {/* Price */}
// // //           <div className="price-section">
// // //             <div className="price-container">
// // //               <span className="price-amount">$429.9</span>
// // //               <span className="price-details">/ Night • Includes taxes and other fees.</span>
// // //             </div>
// // //           </div>

// // //           {/* Proceed */}
// // //           <button className="proceed-button">
// // //             <span>Proceed to Confirmation</span>
// // //             <ChevronRight size={20} />
// // //           </button>
// // //         </div>

// // //         {/* Help Section */}
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
// // //   );
// // //}


// // import {
// //   Home,
// //   HelpCircle,
// //   ChevronLeft,
// //   Calendar,
// //   ChevronRight,
// //   ChevronDown,
// //   HandHelpingIcon as HelpIcon,
// // } from "lucide-react";
// // import { useState } from "react";
// // import "./CustomerDetails.css";

// // const countries = [
// //   { code: "US", name: "United States" },
// //   { code: "GB", name: "United Kingdom" },
// //   { code: "CA", name: "Canada" },
// //   { code: "AU", name: "Australia" },
// // ];

// // export default function CustomerDetails() {
// //   const [countryCode, setCountryCode] = useState("US");
// //   const [flagUrl, setFlagUrl] = useState(`https://flagcdn.com/24x18/us.png`);
// //   const [fullName, setFullName] = useState("Siemantel Donovan");
// //   const [email, setEmail] = useState("donovansiemantel@outlook.com");
// //   const [phone, setPhone] = useState("+1-212-456-7890");
// //   const [postalCode, setPostalCode] = useState("78602");
// //   const [gender, setGender] = useState("Male");
// //   const [checkOutDate, setCheckOutDate] = useState("2024-03-28");
// //   const [selectedPayment, setSelectedPayment] = useState("Visa");

// //   const handleCountryChange = (e) => {
// //     const newCode = e.target.value;
// //     setCountryCode(newCode);
// //     setFlagUrl(`https://flagcdn.com/24x18/${newCode.toLowerCase()}.png`);
// //   };

// //   return (
// //     <div className="customer-page">
// //       <div className="customer-container">
// //         <header className="customer-header">
// //           <div className="logo-section">
// //             <div className="home-icon">
// //               <Home color="white" size={32} />
// //             </div>
// //             <h1 className="customer-title">Customer Details</h1>
// //           </div>
// //           <button className="help-button">
// //             Help? <HelpCircle color="white" size={24} />
// //           </button>
// //         </header>

// //         <div className="customer-card">
// //           <button className="customer-back-button">
// //             <ChevronLeft size={20} />
// //             <span>Back</span>
// //           </button>

// //           <form className="customer-form">
// //             {/* Full Name */}
// //             <div className="form-group">
// //               <label htmlFor="fullName" className="form-label">Full name</label>
// //               <input
// //                 type="text"
// //                 id="fullName"
// //                 className="form-input"
// //                 value={fullName}
// //                 onChange={(e) => setFullName(e.target.value)}
// //               />
// //             </div>

// //             {/* Gender */}
// //             <div className="form-group">
// //               <label className="form-label">Gender</label>
// //               <div className="radio-group">
// //                 {["Male", "Female", "Other"].map((g) => (
// //                   <label key={g} className="radio-label">
// //                     <input
// //                       type="radio"
// //                       name="gender"
// //                       className="radio-input"
// //                       checked={gender === g}
// //                       onChange={() => setGender(g)}
// //                     />
// //                     <span className="radio-text">{g}</span>
// //                   </label>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Email */}
// //             <div className="form-group">
// //               <label htmlFor="email" className="form-label">Email</label>
// //               <div className="email-container">
// //                 <img src="../src/assets/images/mail-fill.png" className="card-icon" alt="mail" />
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   className="form-input"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             {/* Phone */}
// //             <div className="form-group">
// //               <label htmlFor="phone" className="form-label">Phone number</label>
// //               <input
// //                 type="tel"
// //                 id="phone"
// //                 className="form-input"
// //                 value={phone}
// //                 onChange={(e) => setPhone(e.target.value)}
// //               />
// //             </div>

// //             {/* Check-Out */}
// //             <div className="form-group">
// //               <label htmlFor="checkOut" className="form-label">Check-Out</label>
// //               <div className="date-input-container">
// //                 <input
// //                   type="date"
// //                   id="checkOut"
// //                   className="form-input"
// //                   value={checkOutDate}
// //                   onChange={(e) => setCheckOutDate(e.target.value)}
// //                 />
// //                 <Calendar className="date-icon" size={20} color="#1E88E5" />
// //               </div>
// //             </div>

// //             {/* Country and Postal Code */}
// //             <div className="form-row">
// //               <div className="form-group half">
// //                 <label htmlFor="country" className="form-label">Country</label>
// //                 <div className="select-container">
// //                   <div className="country-select">
// //                     <img
// //                       src={flagUrl}
// //                       alt={`${countryCode} flag`}
// //                       className="flag"
// //                       onError={() => setFlagUrl("../src/assets/images/default-flag.png")}
// //                       style={{ width: "24px", height: "18px", marginRight: "8px" }}
// //                     />
// //                     <select
// //                       value={countryCode}
// //                       onChange={handleCountryChange}
// //                       className="country-name"
// //                       style={{ border: "none", background: "transparent" }}
// //                     >
// //                       {countries.map((c) => (
// //                         <option key={c.code} value={c.code}>{c.name}</option>
// //                       ))}
// //                     </select>
// //                     <ChevronDown size={16} />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="form-group half">
// //                 <label htmlFor="postalCode" className="form-label">Postal code*</label>
// //                 <input
// //                   type="text"
// //                   id="postalCode"
// //                   className="form-input"
// //                   value={postalCode}
// //                   onChange={(e) => setPostalCode(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             {/* Payment Section */}
// //             <h2 className="section-title">Select a Payment Method</h2>

// //             <div
// //               className="payment-option"
// //               onClick={() => setSelectedPayment("Cash")}
// //               style={{ cursor: "pointer" }}
// //             >
// //               <div className="payment-option-left">
// //                 <input
// //                   type="checkbox"
// //                   id="cashPayment"
// //                   className="checkbox-input"
// //                   checked={selectedPayment === "Cash"}
// //                   readOnly
// //                 />
// //                 <img src="../src/assets/images/cash-in.png" className="card-icon" alt="cash" />
// //                 <span className="payment-option-text">Insert Cash</span>
// //               </div>
// //               <div className={`radio-circle ${selectedPayment === "Cash" ? "selected" : ""}`}></div>
// //             </div>

// //             <div className="card-section">
// //               <h3 className="card-section-title">Debit/Credit Card</h3>
// //               <div className="card-options">
// //                 {["Visa", "Mastercard"].map((card) => (
// //                   <div
// //                     key={card}
// //                     className="card-option"
// //                     onClick={() => setSelectedPayment(card)}
// //                     style={{ cursor: "pointer" }}
// //                   >
// //                     <div className="card-option-left">
// //                       <img
// //                         src={`../src/assets/images/${card.toLowerCase()}-fill.png`}
// //                         className="card-icon"
// //                         alt={card}
// //                       />
// //                       <span className="card-name">{card}</span>
// //                     </div>
// //                     <div className={`radio-circle ${selectedPayment === card ? "selected" : ""}`}></div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </form>

// //           {/* Price */}
// //           <div className="price-section">
// //             <div className="price-container">
// //               <span className="price-amount">$429.9</span>
// //               <span className="price-details">/ Night • Includes taxes and other fees.</span>
// //             </div>
// //           </div>

// //           {/* Proceed */}
// //           <button className="proceed-button">
// //             <span>Proceed to Confirmation</span>
// //             <ChevronRight size={20} />
// //           </button>
// //         </div>

// //         {/* Help Section */}
// //         <div className="help-section">
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
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// // import {
// //   Home,
// //   HelpCircle,
// //   ChevronLeft,
// //   Calendar,
// //   ChevronRight,
// //   ChevronDown,
// //   HandHelpingIcon as HelpIcon,
// // } from "lucide-react";
// // import { useState } from "react";
// // import "./CustomerDetails.css";

// // const countries = [
// //   { code: "US", name: "United States" },
// //   { code: "GB", name: "United Kingdom" },
// //   { code: "CA", name: "Canada" },
// //   { code: "AU", name: "Australia" },
// // ];

// // export default function CustomerDetails() {
// //   const [countryCode, setCountryCode] = useState("US");
// //   const [flagUrl, setFlagUrl] = useState(`https://flagcdn.com/24x18/us.png`);
// //   const [fullName, setFullName] = useState("Siemantel Donovan");
// //   const [email, setEmail] = useState("donovansiemantel@outlook.com");
// //   const [phone, setPhone] = useState("+1-212-456-7890");
// //   const [postalCode, setPostalCode] = useState("78602");
// //   const [gender, setGender] = useState("Male");
// //   const [checkOutDate, setCheckOutDate] = useState("2024-03-28");
// //   const [selectedPayment, setSelectedPayment] = useState("Visa");

// //   const handleCountryChange = (e) => {
// //     const newCode = e.target.value;
// //     setCountryCode(newCode);
// //     setFlagUrl(`https://flagcdn.com/24x18/${newCode.toLowerCase()}.png`);
// //   };

// //   return (
// //     <div className="customer-page">
// //       <div className="customer-container">
// //         <header className="customer-header">
// //           <div className="logo-section">
// //             <div className="home-icon">
// //               <Home color="white" size={32} />
// //             </div>
// //             <h1 className="customer-title">Customer Details</h1>
// //           </div>
// //           <button className="help-button">
// //             Help? <HelpCircle color="white" size={24} />
// //           </button>
// //         </header>

// //         <div className="customer-card">
// //           <button className="customer-back-button">
// //             <ChevronLeft size={20} />
// //             <span>Back</span>
// //           </button>

// //           <form className="customer-form">
// //             {/* Full Name */}
// //             <div className="form-group">
// //               <label htmlFor="fullName" className="form-label">Full name</label>
// //               <input
// //                 type="text"
// //                 id="fullName"
// //                 className="form-input"
// //                 value={fullName}
// //                 onChange={(e) => setFullName(e.target.value)}
// //               />
// //             </div>

// //             {/* Gender */}
// //             <div className="form-group">
// //               <label className="form-label">Gender</label>
// //               <div className="radio-group">
// //                 {["Male", "Female", "Other"].map((g) => (
// //                   <label key={g} className="radio-label">
// //                     <input
// //                       type="radio"
// //                       name="gender"
// //                       className="radio-input"
// //                       checked={gender === g}
// //                       onChange={() => setGender(g)}
// //                     />
// //                     <span className="radio-text">{g}</span>
// //                   </label>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Email */}
// //             <div className="form-group">
// //               <label htmlFor="email" className="form-label">Email</label>
// //               <div className="input-icon-container">
// //                 <img
// //                   src="../src/assets/images/mail-fill.png"
// //                   className="input-icon"
// //                   alt="mail"
// //                 />
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   className="form-input with-icon"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             {/* Phone */}
// //             <div className="form-group">
// //               <label htmlFor="phone" className="form-label">Phone number</label>
// //               <input
// //                 type="tel"
// //                 id="phone"
// //                 className="form-input"
// //                 value={phone}
// //                 onChange={(e) => setPhone(e.target.value)}
// //               />
// //             </div>

// //             {/* Check-Out */}
// //             <div className="form-group">
// //               <label htmlFor="checkOut" className="form-label">Check-Out</label>
// //               <div className="input-icon-container">
// //                 <input
// //                   type="date"
// //                   id="checkOut"
// //                   className="form-input with-icon"
// //                   value={checkOutDate}
// //                   onChange={(e) => setCheckOutDate(e.target.value)}
// //                 />
// //                 {/* <Calendar className="input-icon right" size={20} color="#1E88E5" /> */}
// //               </div>
// //             </div>

// //             {/* Country and Postal Code */}
// //             <div className="form-row">
// //               <div className="form-group half">
// //                 <label htmlFor="country" className="form-label">Country</label>
// //                 <div className="select-container">
// //                   <div className="country-select">
// //                     <img
// //                       src={flagUrl}
// //                       alt={`${countryCode} flag`}
// //                       className="flag"
// //                       onError={() => setFlagUrl("../src/assets/images/default-flag.png")}
// //                     />
// //                     <select
// //                       value={countryCode}
// //                       onChange={handleCountryChange}
// //                       className="country-name"
// //                     >
// //                       {countries.map((c) => (
// //                         <option key={c.code} value={c.code}>{c.name}</option>
// //                       ))}
// //                     </select>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="form-group half">
// //                 <label htmlFor="postalCode" className="form-label">Postal code*</label>
// //                 <input
// //                   type="text"
// //                   id="postalCode"
// //                   className="form-input"
// //                   value={postalCode}
// //                   onChange={(e) => setPostalCode(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             {/* Payment Section */}
// //             <h2 className="section-title">Select a Payment Method</h2>

// //             <div
// //               className="payment-option"
// //               onClick={() => setSelectedPayment("Cash")}
// //               style={{ cursor: "pointer" }}
// //             >
// //               <div className="payment-option-left">
// //                 <input
// //                   type="checkbox"
// //                   id="cashPayment"
// //                   className="checkbox-input"
// //                   checked={selectedPayment === "Cash"}
// //                   readOnly
// //                 />
// //                 <img src="../src/assets/images/cash-in.png" className="card-icon" alt="cash" />
// //                 <span className="payment-option-text">Insert Cash</span>
// //               </div>
// //               <div className={`radio-circle ${selectedPayment === "Cash" ? "selected" : ""}`}></div>
// //             </div>

// //             <div className="card-section">
// //               <h3 className="card-section-title">Debit/Credit Card</h3>
// //               <div className="card-options">
// //                 {["Visa", "Mastercard"].map((card) => (
// //                   <div
// //                     key={card}
// //                     className="card-option"
// //                     onClick={() => setSelectedPayment(card)}
// //                     style={{ cursor: "pointer" }}
// //                   >
// //                     <div className="card-option-left">
// //                       <img
// //                         src={`../src/assets/images/${card.toLowerCase()}-fill.png`}
// //                         className="card-icon"
// //                         alt={card}
// //                       />
// //                       <span className="card-name">{card}</span>
// //                     </div>
// //                     <div className={`radio-circle ${selectedPayment === card ? "selected" : ""}`}></div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </form>

// //           {/* Price */}
// //           <div className="price-section">
// //             <div className="price-container">
// //               <span className="price-amount">$429.9</span>
// //               <span className="price-details">/ Night • Includes taxes and other fees.</span>
// //             </div>
// //           </div>

// //           {/* Proceed */}
// //           <button className="proceed-button">
// //             <span>Proceed to Confirmation</span>
// //             <ChevronRight size={20} />
// //           </button>
// //         </div>

// //         {/* Help Section */}
// //         <div className="help-section">
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
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// // // other imports remain same
// // import {
// //   Home,
// //   HelpCircle,
// //   ChevronLeft,
// //   Calendar,
// //   ChevronRight,
// //   ChevronDown,
// //   HandHelpingIcon as HelpIcon,
// // } from "lucide-react";
// // import { useState } from "react";
// // import "./CustomerDetails.css";
// // import Header from "../../components/Header/Header";
// // import HelpFooter from "../../components/HelpFooter/HelpFooter";
// // const countries = [
// //   { code: "US", name: "United States" },
// //   { code: "GB", name: "United Kingdom" },
// //   { code: "CA", name: "Canada" },
// //   { code: "AU", name: "Australia" },
// // ];

// // function formatDateLong(dateStr) {
// //   const options = { weekday: "long", day: "numeric", month: "long" };
// //   const date = new Date(dateStr);
// //   return date.toLocaleDateString("en-US", options);
// // }

// // export default function CustomerDetails() {
// //   const [countryCode, setCountryCode] = useState("US");
// //   const [flagUrl, setFlagUrl] = useState(`https://flagcdn.com/24x18/us.png`);
// //   const [fullName, setFullName] = useState("Siemantel Donovan");
// //   const [email, setEmail] = useState("donovansiemantel@outlook.com");
// //   const [phone, setPhone] = useState("+1-212-456-7890");
// //   const [postalCode, setPostalCode] = useState("78602");
// //   const [gender, setGender] = useState("Male");
// //   const [checkOutDate, setCheckOutDate] = useState("2024-03-28");
// //   const [selectedPayment, setSelectedPayment] = useState("Visa");

// //   const handleCountryChange = (e) => {
// //     const newCode = e.target.value;
// //     setCountryCode(newCode);
// //     setFlagUrl(`https://flagcdn.com/24x18/${newCode.toLowerCase()}.png`);
// //   };

// //   return (
// //     <div className="customer-page">
// //       <div className="customer-container">
// //         {/* <header className="customer-header">
// //           <div className="logo-section">
// //             <div className="home-icon">
// //           <img src="../src/assets/images/bookingdetails/home.png" alt="home" />
// //             </div>
// //             <h1 className="customer-title">Customer Details</h1>
// //           </div>
// //             <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
// //         </header> */}
// // <Header />
// //         <div className="customer-card">
// //           <button className="customer-back-button">
// //             <ChevronLeft size={20} />
// //             <span>Back</span>
// //           </button>

// //           <form className="customer-form">
// //             {/* Full Name */}
// //             <div className="form-group">
// //               <label htmlFor="fullName" className="form-label">Full name</label>
// //               <input
// //                 type="text"
// //                 id="fullName"
// //                 className="form-input"
// //                 value={fullName}
// //                 onChange={(e) => setFullName(e.target.value)}
// //               />
// //             </div>

// //             {/* Gender */}
// //             <div className="form-group">
// //               <label className="form-label">Gender</label>
// //               <div className="radio-group">
// //                 {["Male", "Female", "Other"].map((g) => (
// //                   <label key={g} className="radio-label">
// //                     <input
// //                       type="radio"
// //                       name="gender"
// //                       className="radio-input"
// //                       checked={gender === g}
// //                       onChange={() => setGender(g)}
// //                     />
// //                     <span className="radio-text">{g}</span>
// //                   </label>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Email */}
// //             <div className="form-group">
// //               <label htmlFor="email" className="form-label">Email</label>
// //               <div className="input-icon-container">
              
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   className="form-input with-icon"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             {/* Phone */}
// //             <div className="form-group">
// //               <label htmlFor="phone" className="form-label">Phone number</label>
// //               <input
// //                 type="tel"
// //                 id="phone"
// //                 className="form-input"
// //                 value={phone}
// //                 onChange={(e) => setPhone(e.target.value)}
// //               />
// //             </div>

// //             {/* Check-Out Date */}
// //             <div className="form-group">
// //               <label htmlFor="checkOut" className="form-label">Check-Out</label>
// //               <div className="input-icon-container">
// //                 <input
// //                   type="text"
// //                   className="form-input with-icon no-calendar"
// //                   value={formatDateLong(checkOutDate)}
// //                   readOnly
// //                   onClick={() =>
// //                     document.getElementById("actualDate").showPicker?.()
// //                   }
// //                 />
// //                 <input
// //                   type="date"
// //                   id="actualDate"
// //                   value={checkOutDate}
// //                   onChange={(e) => setCheckOutDate(e.target.value)}
// //                   className="hidden-date-input"
// //                 />
// //                 <Calendar className="input-icon right calendar-blue" size={20} />
// //               </div>
// //             </div>

// //             {/* Country and Postal Code */}
// //             <div className="form-row">
// //               <div className="form-group half">
// //                 <label htmlFor="country" className="form-label">Country</label>
// //                 <div className="select-container">
// //                   <div className="country-select">
// //                     <img
// //                       src={flagUrl}
// //                       alt={`${countryCode} flag`}
// //                       className="flag"
// //                       onError={() => setFlagUrl("../../src/assets/images/default-flag.png")}
// //                     />
// //                     <select
// //                       value={countryCode}
// //                       onChange={handleCountryChange}
// //                       className="country-name"
// //                     >
// //                       {countries.map((c) => (
// //                         <option key={c.code} value={c.code}>{c.name}</option>
// //                       ))}
// //                     </select>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="form-group half">
// //                 <label htmlFor="postalCode" className="form-label">Postal code*</label>
// //                 <input
// //                   type="text"
// //                   id="postalCode"
// //                   className="form-input"
// //                   value={postalCode}
// //                   onChange={(e) => setPostalCode(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             {/* Payment Section */}
// //             <h2 className="section-title">Select a Payment Method</h2>
// //             <div
// //               className="payment-option"
// //               onClick={() => setSelectedPayment("Cash")}
// //               style={{ cursor: "pointer" }}
// //             >
// //               <div className="payment-option-left">
// //                 <input
// //                   type="checkbox"
// //                   id="cashPayment"
// //                   className="checkbox-input"
// //                   checked={selectedPayment === "Cash"}
// //                   readOnly
// //                 />
// //                 <img src="../../src/assets/images/cash-in.png" className="card-icon" alt="cash" />
// //                 <span className="payment-option-text">Insert Cash</span>
// //               </div>
// //               <div className={`radio-circle ${selectedPayment === "Cash" ? "selected" : ""}`}></div>
// //             </div>

// //             <div className="card-section">
// //               <h3 className="card-section-title">Debit/Credit Card</h3>
// //               <div className="card-options">
// //                 {["Visa", "Mastercard"].map((card) => (
// //                   <div
// //                     key={card}
// //                     className="card-option"
// //                     onClick={() => setSelectedPayment(card)}
// //                     style={{ cursor: "pointer" }}
// //                   >
// //                     <div className="card-option-left">
// //                       <img
// //                         src={`../../src/assets/images/${card.toLowerCase()}-fill.png`}
// //                         className="card-icon"
// //                         alt={card}
// //                       />
                    
// //                       <span className="card-name">{card}</span>
// //                     </div>
// //                     <div className={`radio-circle ${selectedPayment === card ? "selected" : ""}`}></div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </form>

// //           <div className="price-section">
// //             <div className="price-container">
// //               <span className="price-amount">$429.9</span>
// //               <span className="price-details">/ Night • Includes taxes and other fees.</span>
// //             </div>
// //           </div>

// //           <button className="proceed-button">
// //             <span>Proceed to Confirmation</span>
// //             <ChevronRight size={20} />
// //           </button>
// //         </div>

       
// //           <HelpFooter />
// //       </div>
// //     </div>
// //   );
// // }
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Toaster, toast } from "react-hot-toast";
// import {
//   Home,
//   HelpCircle,
//   ChevronLeft,
//   Calendar,
//   ChevronRight,
//   ChevronDown,
//   HandHelpingIcon as HelpIcon,
// } from "lucide-react";
// import "./CustomerDetails.css";
// import Header from "../../components/Header/header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";

// const countries = [
//   { code: "US", name: "United States" },
//   { code: "GB", name: "United Kingdom" },
//   { code: "CA", name: "Canada" },
//   { code: "AU", name: "Australia" },
// ];

// function formatDateLong(dateStr) {
//   const options = { weekday: "long", day: "numeric", month: "long" };
//   const date = new Date(dateStr);
//   return date.toLocaleDateString("en-US", options);
// }

// export default function CustomerDetails() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     postalCode: "",
//     countryCode: "US",
//     gender: "Male",
//     paymentMethod: "Cash",
//     checkOutDate: "2024-03-28",
//   });

//   useEffect(() => {
//   let grandTotal = sessionStorage.getItem("grandTotal");
//     // Initialize from sessionStorage
//     setFormData({
//       fullName: `${sessionStorage.getItem("guestFirstName") || ""} ${
//         sessionStorage.getItem("guestLastName") || ""
//       }`.trim(),
//       email: sessionStorage.getItem("guestEmail") || "",
//       phone: sessionStorage.getItem("guestPhone") || "",
//       postalCode: sessionStorage.getItem("guestZip") || "",
//       countryCode: sessionStorage.getItem("guestCountry") || "US",
//       gender:
//         sessionStorage.getItem("guestGender") === "M"
//           ? "Male"
//           : sessionStorage.getItem("guestGender") === "F"
//           ? "Female"
//           : "Other",
//       paymentMethod:
//         sessionStorage.getItem("paymentMethod") === "cash"
//           ? "Cash"
//           : "Visa",
//       checkOutDate: sessionStorage.getItem("checkOutDate") || "2024-03-28",
//     });
//   }, []);

//   const validateInput = () => {
//     // Validate name (should have at least first and last name)
//     const nameParts = formData.fullName.trim().split(" ");
//     if (nameParts.length < 2) {
//       toast.error("Please enter both first and last name");
//       return false;
//     }

//     // Validate email
//     if (
//       !formData.email.includes("@") ||
//       !formData.email.endsWith(".com")
//     ) {
//       toast.error("Email must contain '@' and end with '.com'");
//       return false;
//     }

//     // Validate phone (remove non-digit characters)
//     const phoneDigits = formData.phone.replace(/\D/g, "");
//     if (!phoneDigits) {
//       toast.error("Phone number is required");
//       return false;
//     }

//     // Validate postal code if provided
//     if (
//       formData.postalCode &&
//       !/^\d+$/.test(formData.postalCode)
//     ) {
//       toast.error("Postal code must be numeric");
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateInput()) return;

//     // Split full name into first and last
//     const [guestFirstName, ...lastNameParts] = formData.fullName.trim().split(" ");
//     const guestLastName = lastNameParts.join(" ");

//     // Save to sessionStorage
//     sessionStorage.setItem("guestFirstName", guestFirstName);
//     sessionStorage.setItem("guestLastName", guestLastName);
//     sessionStorage.setItem("guestEmail", formData.email);
//     sessionStorage.setItem("guestPhone", formData.phone);
//     sessionStorage.setItem("guestZip", formData.postalCode);
//     sessionStorage.setItem("guestCountry", formData.countryCode);
//     sessionStorage.setItem(
//       "guestGender",
//       formData.gender === "Male"
//         ? "M"
//         : formData.gender === "Female"
//         ? "F"
//         : "O"
//     );
//     sessionStorage.setItem(
//       "paymentMethod",
//       formData.paymentMethod === "Cash" ? "cash" : "credit_card"
//     );
//     sessionStorage.setItem("checkOutDate", formData.checkOutDate);

//     // Navigate to confirmation page
//     navigate("/confirm-reservation");
//   };

//   const handleBack = () => {
//     navigate(-1); // Go back to previous page
//   };

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const flagUrl = `https://flagcdn.com/24x18/${formData.countryCode.toLowerCase()}.png`;

//   return (
//     <div className="customer-page">
//       <div className="customer-container">
//         <Toaster position="top-center" />
//         <Header value="Reservation" />

//         <div className="customer-card">
//           <button className="customer-back-button" onClick={handleBack}>
//             <ChevronLeft size={20} />
//             <span>Back</span>
//           </button>

//           <form className="customer-form" onSubmit={handleSubmit}>
//             {/* Full Name */}
//             <div className="form-group">
//               <label htmlFor="fullName" className="form-label">
//                 Full name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 className="form-input"
//                 value={formData.fullName}
//                 onChange={(e) => handleInputChange("fullName", e.target.value)}
//                 required
//               />
//             </div>

//             {/* Gender */}
//             <div className="form-group">
//               <label className="form-label">Gender</label>
//               <div className="radio-group">
//                 {["Male", "Female", "Other"].map((g) => (
//                   <label key={g} className="radio-label">
//                     <input
//                       type="radio"
//                       name="gender"
//                       className="radio-input"
//                       checked={formData.gender === g}
//                       onChange={() => handleInputChange("gender", g)}
//                     />
//                     <span className="radio-text">{g}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Email */}
//             <div className="form-group">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <div className="input-icon-container">
//                 <input
//                   type="email"
//                   id="email"
//                   className="form-input with-icon"
//                   value={formData.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="form-group">
//               <label htmlFor="phone" className="form-label">
//                 Phone number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 className="form-input"
//                 value={formData.phone}
//                 onChange={(e) => handleInputChange("phone", e.target.value)}
//                 required
//               />
//             </div>

//             {/* Check-Out Date */}
//             <div className="form-group">
//               <label htmlFor="checkOut" className="form-label">
//                 Check-Out
//               </label>
//               <div className="input-icon-container">
//                 <input
//                   type="text"
//                   className="form-input with-icon no-calendar"
//                   value={formatDateLong(formData.checkOutDate)}
//                   readOnly
//                   onClick={() =>
//                     document.getElementById("actualDate").showPicker?.()
//                   }
//                 />
//                 <input
//                   type="date"
//                   id="actualDate"
//                   value={formData.checkOutDate}
//                   onChange={(e) =>
//                     handleInputChange("checkOutDate", e.target.value)
//                   }
//                   className="hidden-date-input"
//                 />
//                 <Calendar
//                   className="input-icon right calendar-blue"
//                   size={20}
//                 />
//               </div>
//             </div>

//             {/* Country and Postal Code */}
//             <div className="form-row">
//               <div className="form-group half">
//                 <label htmlFor="country" className="form-label">
//                   Country
//                 </label>
//                 <div className="select-container">
//                   <div className="country-select">
//                     <img 
//                       src={flagUrl}
//                       alt={`${formData.countryCode} flag`}
//                       className="flag"
//                       onError={(e) => {
//                         e.target.src = "/assets/images/default-flag.png";
//                       }}
//                     />
//                     <select
//                       value={formData.countryCode}
//                       onChange={(e) =>
//                         handleInputChange("countryCode", e.target.value)
//                       }
//                       className="country-name"
//                     >
//                       {countries.map((c) => (
//                         <option key={c.code} value={c.code}>
//                           {c.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               <div className="form-group half">
//                 <label htmlFor="postalCode" className="form-label">
//                   Postal code*
//                 </label>
//                 <input
//                   type="text"
//                   id="postalCode"
//                   className="form-input"
//                   value={formData.postalCode}
//                   onChange={(e) =>
//                     handleInputChange("postalCode", e.target.value)
//                   }
//                 />
//               </div>
//             </div>

//             {/* Payment Section */}
//             <h2 className="section-title">Select a Payment Method</h2>
//             <div
//               className="payment-option"
//               onClick={() => handleInputChange("paymentMethod", "Cash")}
//               style={{ cursor: "pointer" }}
//             >
//               <div className="payment-option-left">
//                 <input
//                   type="checkbox"
//                   id="cashPayment"
//                   className="checkbox-input"
//                   checked={formData.paymentMethod === "Cash"}
//                   readOnly
//                 />
//                 <img
//                   src="/assets/images/cash-in.png"
//                   className="card-icon"
//                   alt="cash"
//                 />
//                 <span className="payment-option-text">Insert Cash</span>
//               </div>
//               <div
//                 className={`radio-circle ${
//                   formData.paymentMethod === "Cash" ? "selected" : ""
//                 }`}
//               ></div>
//             </div>

//             <div className="card-section">
//               <h3 className="card-section-title">Debit/Credit Card</h3>
//               <div className="card-options">
//                 {["Visa", "Mastercard"].map((card) => (
//                   <div
//                     key={card}
//                     className="card-option"
//                     onClick={() => handleInputChange("paymentMethod", card)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <div className="card-option-left">
//                       <img
//                         src={`/assets/images/${card.toLowerCase()}-fill.png`}
//                         className="card-icon"
//                         alt={card}
//                       />
//                       <span className="card-name">{card}</span>
//                     </div>
//                     <div
//                       className={`radio-circle ${
//                         formData.paymentMethod === card ? "selected" : ""
//                       }`}
//                     ></div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="price-section">
//               <div className="price-container">
//                 <span className="price-amount">$175</span>
//                 <span className="price-details">
//                   / Night • Includes taxes and other fees.
//                 </span>
//               </div>
//             </div>

//             <button type="submit" className="proceed-button">
//               <span>Proceed to Confirmation</span>
//               <ChevronRight size={20} />
//             </button>
//           </form>
//         </div>

//         <HelpFooter />
//       </div>
//     </div>
//   );
// }




import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";
import "./CustomerDetails.css";
import Header from "../../components/Header/header";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import VirtualKeyboard from "../../components/KeyBoard/KeyBoard";

const countries = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
];

function formatDateLong(dateStr) {
  const options = { weekday: "long", day: "numeric", month: "long" };
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", options);
}

export default function CustomerDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    postalCode: "",
    countryCode: "US",
    gender: "Male",
    paymentMethod: "Cash",
    checkOutDate: "2024-03-28",
  });

  const [keyboardState, setKeyboardState] = useState({
    isVisible: false,
    activeField: null,
    inputType: "text",
  });

  const inputRefs = useRef({});

  useEffect(() => {
    setFormData({
      fullName: `${sessionStorage.getItem("guestFirstName") || ""} ${
        sessionStorage.getItem("guestLastName") || ""
      }`.trim(),
      email: sessionStorage.getItem("guestEmail") || "",
      phone: sessionStorage.getItem("guestPhone") || "",
      postalCode: sessionStorage.getItem("guestZip") || "",
      countryCode: sessionStorage.getItem("guestCountry") || "US",
      gender:
        sessionStorage.getItem("guestGender") === "M"
          ? "Male"
          : sessionStorage.getItem("guestGender") === "F"
          ? "Female"
          : "Other",
      paymentMethod:
        sessionStorage.getItem("paymentMethod") === "cash"
          ? "Cash"
          : "Visa",
      checkOutDate: sessionStorage.getItem("checkOutDate") || "2024-03-28",
    });
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInputFocus = (fieldName, inputType = "text") => {
    setKeyboardState({
      isVisible: true,
      activeField: fieldName,
      inputType,
    });
  };

  const handleKeyboardKeyPress = (key) => {
    if (keyboardState.activeField) {
      const currentValue = formData[keyboardState.activeField];
      handleInputChange(keyboardState.activeField, currentValue + key);
    }
  };

  const handleKeyboardBackspace = () => {
    if (keyboardState.activeField) {
      const currentValue = formData[keyboardState.activeField];
      handleInputChange(keyboardState.activeField, currentValue.slice(0, -1));
    }
  };

  const handleKeyboardEnter = () => {
    setKeyboardState(prev => ({ ...prev, isVisible: false, activeField: null }));
  };

  const handleKeyboardClose = () => {
    setKeyboardState(prev => ({ ...prev, isVisible: false, activeField: null }));
  };

  const validateInput = () => {
    const nameParts = formData.fullName.trim().split(" ");
    if (nameParts.length < 2) {
      toast.error("Please enter both first and last name");
      return false;
    }
    if (!formData.email.includes("@") || !formData.email.endsWith(".com")) {
      toast.error("Email must contain '@' and end with '.com'");
      return false;
    }
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!phoneDigits) {
      toast.error("Phone number is required");
      return false;
    }
    if (formData.postalCode && !/^\d+$/.test(formData.postalCode)) {
      toast.error("Postal code must be numeric");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    const [guestFirstName, ...lastNameParts] = formData.fullName.trim().split(" ");
    const guestLastName = lastNameParts.join(" ");

    sessionStorage.setItem("guestFirstName", guestFirstName);
    sessionStorage.setItem("guestLastName", guestLastName);
    sessionStorage.setItem("guestEmail", formData.email);
    sessionStorage.setItem("guestPhone", formData.phone);
    sessionStorage.setItem("guestZip", formData.postalCode);
    sessionStorage.setItem("guestCountry", formData.countryCode);
    sessionStorage.setItem("guestGender", formData.gender === "Male" ? "M" : formData.gender === "Female" ? "F" : "O");
    sessionStorage.setItem("paymentMethod", formData.paymentMethod === "Cash" ? "cash" : "credit_card");
    sessionStorage.setItem("checkOutDate", formData.checkOutDate);

    navigate("/confirm-reservation");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const flagUrl = `https://flagcdn.com/24x18/${formData.countryCode.toLowerCase()}.png`;

  return (
    <div className="customer-page">
      <div className="customer-container">
        <Toaster position="top-center" />
        <Header value="Reservation" />
        <div className="customer-card">
          <button className="customer-back-button" onClick={handleBack}>
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>

          <form className="customer-form" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="form-group">
              <label className="form-label">Full name</label>
              <input
                ref={el => inputRefs.current.fullName = el}
                type="text"
                className="form-input"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                onFocus={() => handleInputFocus("fullName", "text")}
                required
              />
            </div>

            {/* Gender */}
            <div className="form-group">
              <label className="form-label">Gender</label>
              <div className="radio-group">
                {["Male", "Female", "Other"].map(g => (
                  <label key={g} className="radio-label">
                    <input
                      type="radio"
                      name="gender"
                      className="radio-input"
                      checked={formData.gender === g}
                      onChange={() => handleInputChange("gender", g)}
                    />
                    <span className="radio-text">{g}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                ref={el => inputRefs.current.email = el}
                type="email"
                className="form-input"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onFocus={() => handleInputFocus("email", "email")}
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="form-label">Phone number</label>
              <input
                ref={el => inputRefs.current.phone = el}
                type="tel"
                className="form-input"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                onFocus={() => handleInputFocus("phone", "tel")}
                required
              />
            </div>

            {/* Check-Out */}
            <div className="form-group">
              <label className="form-label">Check-Out</label>
              <div className="input-icon-container">
                <input
                  type="text"
                  className="form-input with-icon no-calendar"
                  value={formatDateLong(formData.checkOutDate)}
                  readOnly
                  onClick={() => document.getElementById("actualDate")?.showPicker?.()}
                />
                <input
                  type="date"
                  id="actualDate"
                  value={formData.checkOutDate}
                  onChange={(e) => handleInputChange("checkOutDate", e.target.value)}
                  className="hidden-date-input"
                />
                <Calendar className="input-icon right calendar-blue" size={20} />
              </div>
            </div>

            {/* Country & Postal Code */}
            <div className="form-row">
              <div className="form-group half">
                <label className="form-label">Country</label>
                <div className="country-select">
                  <img
                    src={flagUrl}
                    alt={`${formData.countryCode} flag`}
                    className="flag"
                    onError={(e) => { e.target.src = "/assets/images/default-flag.png"; }}
                  />
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange("countryCode", e.target.value)}
                    className="country-name"
                  >
                    {countries.map(c => (
                      <option key={c.code} value={c.code}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group half">
                <label className="form-label">Postal code</label>
                <input
                  ref={el => inputRefs.current.postalCode = el}
                  type="text"
                  className="form-input"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange("postalCode", e.target.value)}
                  onFocus={() => handleInputFocus("postalCode", "number")}
                />
              </div>
            </div>

            {/* Payment Method */}
            <h2 className="section-title">Select a Payment Method</h2>
            <div className="payment-option" onClick={() => handleInputChange("paymentMethod", "Cash")}>
              <div className="payment-option-left">
                <input type="checkbox" checked={formData.paymentMethod === "Cash"} readOnly />
                <img src="/assets/images/cash-in.png" className="card-icon" alt="cash" />
                <span className="payment-option-text">Insert Cash</span>
              </div>
              <div className={`radio-circle ${formData.paymentMethod === "Cash" ? "selected" : ""}`}></div>
            </div>

            <div className="card-section">
              <h3 className="card-section-title">Debit/Credit Card</h3>
              <div className="card-options">
                {["Visa", "Mastercard"].map(card => (
                  <div
                    key={card}
                    className="card-option"
                    onClick={() => handleInputChange("paymentMethod", card)}
                  >
                    <div className="card-option-left">
                      <img src={`/assets/images/${card.toLowerCase()}-fill.png`} className="card-icon" alt={card} />
                      <span className="card-name">{card}</span>
                    </div>
                    <div className={`radio-circle ${formData.paymentMethod === card ? "selected" : ""}`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="price-section">
              <div className="price-container">
                <span className="price-amount">$175</span>
                <span className="price-details">/ Night • Includes taxes and other fees.</span>
              </div>
            </div>

            <button type="submit" className="proceed-button">
              <span>Proceed to Confirmation</span>
              <ChevronRight size={20} />
            </button>
          </form>
        </div>
        <HelpFooter />
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
