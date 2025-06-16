import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "./CheckinPage.css";
import Loading from "../../components/Loading/Loading";
import { Toaster, toast } from "react-hot-toast";
import Header from "../../components/Header/header";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";

const CheckinPage = () => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successfulCheckin, setSuccessfulCheckin] = useState(false);
  const [roomOccupied, setRoomOccupied] = useState([]);
  const [checkedInRooms, setCheckedInRooms] = useState([]);
  const [failedRooms, setFailedRooms] = useState([]);
  const [failedRoomNames, setFailedRoomNames] = useState([]);  // Stores failed room names
  const [successRoomNames, setSuccessRoomNames] = useState([]); // Stores successful room names

  const navigate = useNavigate();
  const reservationID = sessionStorage.getItem("reservationID");



  useEffect(() => {
    const occupiedRooms = [];
    let tempCheckedInRooms = [];
    let tempFailedRooms = [];
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
        } else {
          tempFailedRooms.push(roomID);
          tempFailedRoomNames.push(roomName);
        }
      } catch (error) {
        console.error("Check-in error:", error);
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
            setRoomOccupied([...occupiedRooms]);
            setCheckedInRooms([...tempCheckedInRooms]);
            setSuccessRoomNames([...tempSuccessRoomNames]);
          } else {
            sessionStorage.setItem("checkedInRooms", JSON.stringify(tempCheckedInRooms));
            sessionStorage.setItem("failedRooms", JSON.stringify(tempFailedRooms));
            sessionStorage.setItem("SuccessRoomNames", JSON.stringify(tempSuccessRoomNames));
            sessionStorage.setItem("FailedRoomNames", JSON.stringify(tempFailedRoomNames));
            setCheckedInRooms([...tempCheckedInRooms]);
            setFailedRooms([...tempFailedRooms]);
            setFailedRoomNames([...tempFailedRoomNames]);
            setSuccessRoomNames([...tempSuccessRoomNames]);

            if (tempCheckedInRooms.length > 0 && occupiedRooms.length === 0) {
              setSuccessfulCheckin(true);
            }
          }
        } else {
          setErrorMessage("No rooms assigned for check-in.");
        }
      } catch (error) {
        console.error("Error fetching reservation details:", error);
        setErrorMessage("Failed to fetch reservation details.");
      } finally {
        setLoading(false);
      }
    };

    fetchReservationDetails();
  }, [navigate, reservationID]);

  return (
    <>
        <Header/>
      <div className="checkinpg-container">
  <h2 className="checkinpg-heading">Check In</h2>
  <div className="checkinpg-video-guide">
    ...
  </div>

  {loading ? (
    <p className="checkinpg-loading-text">Processing check-in...</p>
  ) : successfulCheckin ? (
    <div className="checkinpg-success">
      <h3>Check-in Successful!</h3>
      ...
      <div className="checkinpg-error-options">
        <button className="checkinpg-btn checkinpg-reassign-btn" onClick={() => navigate("/change-room")}>Change Room</button>
        <button className="checkinpg-btn checkinpg-reassign-btn" onClick={() => navigate("/sign-user")}>Proceed</button>
      </div>
    </div>
  ) : (
    <>
      {roomOccupied.length > 0 && (
        <div className="checkinpg-failed">
          ...
        </div>
      )}

      <div className="checkinpg-error-options">
        <button className="checkinpg-btn checkinpg-wait-btn" onClick={() => navigate("/")}>Wait</button>
        <button className="checkinpg-btn checkinpg-reassign-btn" onClick={() => navigate("/reassign-room")}>Change Room</button>
        <button className="checkinpg-btn checkinpg-reassign-btn" onClick={() => navigate("/sign-user")}>Proceed</button>
      </div>
    </>
  )}
</div>

     <HelpFooter />
           <Toaster />
    </>
  );
};

export default CheckinPage;