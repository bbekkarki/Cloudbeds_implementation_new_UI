// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './App.css'

// import KiotelScreen from './KiotelScreen.jsx'
// import CheckReservation from './CheckReservation.jsx'
// import BookingDetailsForm from './BookingDetailsForm.jsx'
// import Rooms from './rooms.jsx'
// import BookingDetails from './BookingDetails.jsx'
// import IdVerification from './IdVerification.jsx'
// import VerificationComplete from './VerificationComplete.jsx'
// import CustomerDetails from './CustomerDetails.jsx'
// import ConfirmReservation from './ConfirmReservation.jsx'
// import Payment from './Payment.jsx'
// import Paymentsuccess from './Paymentsuccess.jsx'
// import CheckInSuccess from './CheckInSucess.jsx'
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/1" element={<KiotelScreen />} />
//         <Route path="/2" element={<CheckReservation />} />
//         <Route path="/3" element={<BookingDetailsForm />} />
//         <Route path="/4" element={<Rooms />} />
//         <Route path="/5" element={<BookingDetails />} />
//         <Route path="/6" element={<IdVerification />} />
//         <Route path="/7" element={<VerificationComplete />} />
//         <Route path="/8" element={<CustomerDetails />} />
//         <Route path="/9" element={<ConfirmReservation />} />
//         <Route path="/10" element={<Payment />} />
//         <Route path="/11" element={<Paymentsuccess />} />
//         <Route path="/12" element={<CheckInSuccess />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import KiotelScreen from './pages/KiotelScreen/KiotelScreen.jsx'
import CheckReservation from './pages/CheckReservation/CheckReservation.jsx'
import BookingDetailsForm from './pages/BookingDetailsForm/BookingDetailsForm.jsx'
import Rooms from './pages/Rooms/rooms.jsx'
import BookingDetails from './pages/BookingDetails/BookingDetails.jsx'
import IdVerification from './pages/IdVerification/IdVerification.jsx'
import VerificationComplete from './pages/VerificationComplete/VerificationComplete.jsx'
import CustomerDetails from './pages/CustomerDetails/CustomerDetails.jsx'
import ConfirmReservation from './pages/ConfirmReservation/ConfirmReservation.jsx'
import Payment from './pages/Payment/Payment.jsx'
import Paymentsuccess from './pages/Paymentsuccess/Paymentsuccess.jsx'
import CheckInSuccess from './pages/CheckInSuccess/CheckInSucess.jsx'
import AssignRoom from './pages/AssignRooms/AssignRooms.jsx'
import CheckinPage from './pages/CheckinPage/CheckinPage.jsx'
import SelfieApp from './pages/SelfieApp/SelfieApp.jsx'
import SignUser from './pages/SignUser/SignUser.jsx'
import VerifyUser from './pages/VerifyUser/VerifyUser.jsx'
import SearchReservation from './pages/SearchReservation/SearchReservation.jsx'
import CheckOut from './pages/CheckOut/CheckOut.jsx'
import ReassignRoom from './pages/ReassignRooms/ReassignRoom.jsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KiotelScreen />} />
        <Route path="/check-reservation" element={<CheckReservation />} />
        <Route path="/booking-form" element={<BookingDetailsForm />} />
        <Route path="/select-room" element={<Rooms />} />
        <Route path="/booking-details" element={<BookingDetails />} />
        <Route path="/id-verification" element={<IdVerification />} />
        <Route path="/verification-complete" element={<VerificationComplete />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
        <Route path="/confirm-reservation" element={<ConfirmReservation />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<Paymentsuccess />} />
        <Route path="/check-in-success" element={<CheckInSuccess />} />
        <Route path="/assign-room" element={<AssignRoom />} />
         <Route path="/check-in" element={<CheckinPage />} />
         <Route path="/clickme" element={<SelfieApp/>} />
         <Route path="/sign-user" element={<SignUser />} />
         <Route path="/search-reservation" element={<SearchReservation />} />
          <Route path="/verify-user" element={<VerifyUser />} />
          <Route path="/check-out" element={<CheckOut />} />
          <Route path="/reassign-room" element={<ReassignRoom />} />
      </Routes>
    </Router>
  )
}

export default App
