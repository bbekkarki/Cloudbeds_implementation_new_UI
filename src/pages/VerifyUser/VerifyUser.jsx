import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/header";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";
import "./VerifyUser.css";
const VerifyUser = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const firstName = sessionStorage.getItem("guestFirstName") || "Jane";
        const lastName = sessionStorage.getItem("guestLastName") || "Smith";

        const headers = {
          accept: "application/json",
          authorization: `Bearer ${API_KEY}`,
          "x-api-key": `${API_KEY}`,
        };
        const today = new Date();
        const todayDate = today.toISOString().split("T")[0];
        const urls = [
          `${BASE_API_URL}/getGuestList?propertyIDs=${propertyID}&status=checked_in&includeGuestInfo=true`,
          `${BASE_API_URL}/getGuestList?propertyIDs=${propertyID}&checkInFrom=${todayDate}&checkInTo=${todayDate}&status=confirmed&includeGuestInfo=true`,
        ];

        // Fetch both API calls in parallel
        const responses = await Promise.all(
          urls.map((url) => fetch(url, { method: "GET", headers }))
        );
        const data = await Promise.all(responses.map((res) => res.json()));

        // Merge data
        const allReservations = [
          ...(data[0].data || []),
          ...(data[1].data || []),
        ];

        // Filter by first and last name
        const matchingReservations = allReservations.filter(
          (res) =>
            res.guestFirstName.toLowerCase() === firstName.toLowerCase() &&
            res.guestLastName.toLowerCase() === lastName.toLowerCase()
        );

        if (matchingReservations.length === 1) {
          // Auto-select if only one match
          sessionStorage.setItem(
            "reservationID",
            matchingReservations[0].reservationID
          );
          navigate("/search-reservation"); // Replace with your next step route
        } else if (matchingReservations.length > 1) {
          // Let user choose if multiple matches
          setReservations(matchingReservations);
        } else {
          throw new Error("No matching reservations found.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [navigate]);
const handleHomeClick = () => {
    navigate('/');
  };
  const maskEmail = (email) => {
    if (!email) return email;
    const [local, domain] = email.split("@");
    return `${local.substring(0, 2)}***${local.slice(-2)}@${domain}`;
  };
  const maskPhone = (phone) => {
    if (!phone) return phone;

    // Remove any non-numeric characters (optional, in case the phone number includes dashes or spaces)
    phone = phone.replace(/\D/g, "");

    // Mask based on length
    if (phone.length === 10) {
      // For 10-digit numbers: mask 4th to 6th digits
      return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1***-****$3");
    } else if (phone.length >= 6 && phone.length < 10) {
      // For 6-9 digit numbers: mask middle digits
      return phone.replace(/(\d{3})(\d+)(\d{3})/, "$1***$3");
    } else {
      // If the number has less than 6 digits, return as is (or apply other masking logic)
      return phone.replace(/(\d{3})(\d{0,3})/, "$1***");
    }
  };

  if (loading) return <Loading />;
  if (error) return <div className="error">{error}</div>;

  const handleClick = (reservationID) => {
    sessionStorage.setItem("reservationID", reservationID);
    navigate("/search-reservation");
  };

  if (loading)
    return (
      <p className="vr-loading-message">
        <Loading />
      </p>
    );
  if (error) return <p className="vr-error-message">{error}</p>;

  return (
    <>
 <div className="vr-verify-container-container">
    <header className="rooms-header" style={{ marginLeft: "90px"}}>
          <div className="icon-title">
            <img
              src="/assets/images/bookingdetails/home.png"
              alt="home"
              style={{ cursor: 'pointer' }}
              onClick={handleHomeClick}
            />
            <span style={{ color: "#fff"}}>User Verification</span>
          </div>
          <div>
            <img src="/assets/images/bookingdetails/help.png" alt="help" />
          </div>
        </header>
      <div className="vr-verify-container">
       
        <h2 className="vr-verify-heading">Multiple Users Found</h2>
        <p className="vr-verify-subtext">
          Please confirm your identity to proceed:
        </p>
        <div className="vr-reservation-list">
          {reservations.map((reservation) => (
            <div
              key={reservation.reservationID}
              className="vr-reservation-card"
              onClick={() => handleClick(reservation.reservationID)}
            >
              <h3 className="vr-reservation-name">{reservation.guestName}</h3>
              <img src="/assets/images/user.jpg" alt="User" className="vr-user-photo" />
              <p className="vr-reservation-detail">
                <strong>Phone:</strong>{" "}
                {maskPhone(reservation.guestPhone) || "N/A"}
              </p>
              <p className="vr-reservation-detail">
                <strong>Email:</strong> {maskEmail(reservation.guestEmail)}
              </p>
              <p className="vr-reservation-detail">
                <strong>Guest ID:</strong> {reservation.guestID}
              </p>
              <p className="vr-reservation-detail">
                <strong>Created On:</strong> {reservation.dateCreated}
              </p>
              <p className="vr-reservation-detail">
                <strong>Status:</strong> {reservation.status}
              </p>
            </div>
          ))}
        </div>
       <HelpFooter/>
      </div>
      </div>
    </>
  );
};

export default VerifyUser;
