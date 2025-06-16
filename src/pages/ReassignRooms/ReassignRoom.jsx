import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../CheckInSuccess/CheckInSuccess.css"; // Reusing AssignRooms styling
import Loading from "../../components/Loading/Loading";
import { Toaster, toast } from "react-hot-toast";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";

const ReassignRoom = () => {
  const [occupiedRooms, setOccupiedRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const reservationID = sessionStorage.getItem("reservationID");

  useEffect(() => {
    const storedRooms = JSON.parse(sessionStorage.getItem("occupiedRooms")) || [];
    if (storedRooms.length > 0) {
      setOccupiedRooms(storedRooms);
      processNextRoom(storedRooms);
    } else {
      setLoading(false);
    }
  }, []);

  const processNextRoom = async (rooms) => {
    if (rooms.length === 0) {
      toast.success("All rooms have been reassigned!");
      setAvailableRooms([]);
      setLoading(false);
      navigate("/check-in-success");
      return;
    }

    const roomID = rooms.shift();
    setOccupiedRooms([...rooms]);

    try {
      const res = await axios.get(
        `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
        {
          headers: {
            accept: "application/json",
            authorization: `Bearer ${API_KEY}`,
            "x-api-key": API_KEY,
          },
        }
      );

      const reservation = res.data.data;
      const roomDetails = reservation.assigned.find((room) => room.roomID === roomID);

      if (!roomDetails) throw new Error("Room details not found");

      setCurrentRoom(roomDetails);
      await fetchAvailableRooms(
        roomDetails.roomTypeID,
        roomDetails.roomTypeNameShort,
        roomDetails.startDate,
        roomDetails.endDate
      );
    } catch (error) {
      console.error("Error fetching reservation:", error);
      setError("Failed to fetch reservation details.");
      setLoading(false);
    }
  };

  const fetchAvailableRooms = async (roomTypeID, roomTypeNameShort, startDate, endDate) => {
    try {
      const res = await axios.get(
        `${BASE_API_URL}/getRooms?roomTypeID=${roomTypeID}&roomTypeNameShort=${roomTypeNameShort}&startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            accept: "application/json",
            authorization: `Bearer ${API_KEY}`,
            "x-api-key": API_KEY,
          },
        }
      );

      setAvailableRooms(res.data.data[0]?.rooms || []);
    } catch (error) {
      console.error("Error fetching available rooms:", error);
      setError("Failed to fetch available rooms.");
    } finally {
      setLoading(false);
    }
  };

  const handleRoomClick = async (room) => {
    if (!currentRoom) return;

    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(
        `${BASE_API_URL}/room/reassign`,
        new URLSearchParams({
          reservationID,
          propertyID,
          roomTypeID: room.roomTypeID,
          newRoomID: room.roomID,
          oldRoomID: currentRoom.roomID,
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

      if (res.data.success) {
        toast.success("Room reassigned successfully!");
        sessionStorage.setItem("roomID", room.roomID);
        sessionStorage.setItem("roomName", room.roomName);
        processNextRoom([...occupiedRooms]);
      } else {
        toast.error("Room reassignment failed!");
        setError(res.data.message || "Reassignment failed.");
      }
    } catch (error) {
      console.error("Error assigning room:", error);
      toast.error("Error assigning room!");
      setError("Error assigning room.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="assignRoom_container_container">
      <div className="assignRoom_container">
        <header className="assignRoom-header">
          <div className="logo-section">
            <div className="home-icon-id">
              <img
                src="/assets/images/bookingdetails/home.png"
                alt="home"
                onClick={() => navigate("/")}
              />
            </div>
            <h1 className="assignRoom-title">Reassign Room</h1>
          </div>
          <img src="/assets/images/bookingdetails/help.png" alt="help" />
        </header>

        <div className="assignRoom_videoGuide">
          <video autoPlay loop muted width="50%">
            <source src="/assets/videos/checkin.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {loading ? (
          <Loading />
        ) : error ? (
          <div className="assignRoom_error">
            <p>{error}</p>
            <button className="assignRoom_button" onClick={() => processNextRoom([currentRoom?.roomID, ...occupiedRooms])}>
              Retry
            </button>
          </div>
        ) : availableRooms.length > 0 ? (
          <>
            <p className="assignRoom_instruction">Select a room below to reassign.</p>
            <div className="assignRoom_roomList">
              {availableRooms.map((room) => (
                <div
                  key={room.roomID}
                  className="assignRoom_roomCard"
                  onClick={() => handleRoomClick(room)}
                >
                  <h3>{room.roomTypeName}</h3>
                  <p>{room.roomName}</p>
                  <p>Room Number: {room.roomID}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="assignRoom_error">
            <p>No available rooms found. Please try again.</p>
            <button
              className="assignRoom_button"
              onClick={() => processNextRoom([currentRoom?.roomID, ...occupiedRooms])}
            >
              Retry
            </button>
          </div>
        )}
      </div>

      <HelpFooter />
      <Toaster />
    </div>
  );
};

export default ReassignRoom;
