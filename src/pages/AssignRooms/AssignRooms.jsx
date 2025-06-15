// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import "./AssignRooms.css";
// // import Loading from "../../components/Loading/Loading";
// // import { Toaster, toast } from "react-hot-toast";
// // import Header from "../../components/Header/Header";
// // import HelpFooter from "../../components/HelpFooter/HelpFooter";
// // import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";

// // const AssignRoom = () => {
// //   const [isRoomAssigned, setIsRoomAssigned] = useState(false);
// //   const [unassignedRoom, setUnassignedRoom] = useState([]);
// //   const [roomsOptions, setroomsOptions] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [reload, setReload] = useState(false); // 🔄 New state to trigger re-fetching
// //   const navigate = useNavigate();

// //   // Get Reservation ID
// //   const reservationID = sessionStorage.getItem("reservationID");

// //   useEffect(() => {
// //     const checkRoomAssignment = async () => {
// //       setLoading(true);
// //       try {
// //         const response = await axios.get(
// //           `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
// //           {
// //             headers: {
// //               accept: "application/json",
// //               authorization: `Bearer ${API_KEY}`,
// //               "x-api-key": API_KEY,
// //             },
// //           }
// //         );

// //         const reservationData = response.data.data;
// //         if (reservationData.unassigned.length === 0) {
// //           setIsRoomAssigned(true);
// //           setLoading(false);
// //           //navigate("/check-in");
// //         } else {
// //           const unassignedData = reservationData.unassigned[0];
// //           setUnassignedRoom(unassignedData);

// //           fetchAvailableRooms(
// //             unassignedData.roomTypeID,
// //             unassignedData.roomTypeNameShort,
// //             unassignedData.startDate,
// //             unassignedData.endDate
// //           );
// //         }
// //       } catch (error) {
// //         console.error("Error fetching reservation details:", error);
// //       }
// //     };

// //     const fetchAvailableRooms = async (
// //       roomTypeID,
// //       roomTypeNameShort,
// //       startDate,
// //       endDate
// //     ) => {
// //       setLoading(true);
// //       try {
// //         const response = await axios.get(
// //           `${BASE_API_URL}/getRooms?roomTypeID=${roomTypeID}&roomTypeNameShort=${roomTypeNameShort}&startDate=${startDate}&endDate=${endDate}`,
// //           {
// //             headers: {
// //               accept: "application/json",
// //               authorization: `Bearer ${API_KEY}`,
// //               "x-api-key": API_KEY,
// //             },
// //           }
// //         );

// //         setroomsOptions(response.data.data[0]?.rooms || []);
// //       } catch (error) {
// //         console.error("Error fetching available rooms:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     checkRoomAssignment();
// //   }, [reload]); // 🔄 Runs again when `reload` changes

// //   // Handle Room Selection
// //   const handleRoomClick = async (room) => {
// //     setLoading(true);
// //     try {
// //       const response = await axios.post(
// //         `${BASE_API_URL}/room/assign`,
// //         new URLSearchParams({
// //           subReservationID: unassignedRoom.subReservationID,
// //           reservationID: reservationID,
// //           propertyID: propertyID,
// //           roomTypeID: room.roomTypeID,
// //           newRoomID: room.roomID,
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
// //         toast.success("Room assigned successfully!");

// //         // 🔄 Force `getReservation` to run again
// //         setReload((prev) => !prev);

// //         setLoading(false);
// //       } else {
// //         toast.error("Room assignment failed!");
// //         setLoading(false);
// //       }
// //     } catch (error) {
// //       console.error("Error assigning room:", error);
// //       toast.error("Error assigning room!");
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="assign-room-container">
// //          <Header/>
// //         <h2 className="checkIn">Check In</h2>

// //         <div className="video-guide">
// //           <video autoPlay loop muted width="50%">
// //             <source src="../../src/assets/videos/Checkin.mp4" type="video/mp4" />
// //             Your browser does not support the video tag.
// //           </video>
// //         </div>

       
// //         {loading ? (
// //           <Loading />
// //         ) : (
// //           <>
// //             {isRoomAssigned ? (
// //               <div className="assigned-room">
// //                 <button
// //                   className="assignbutton"
// //                  // onClick={() => navigate("/check-in")}
// //                 >
// //                   Check-In
// //                 </button>
// //               </div>
// //             ) : (
// //               roomsOptions.length > 0 && (
// //                 <>
// //                   <p className="room-p">Select a room number below to proceed with check-in.</p>
// //                   <div className="room-list">
// //                     {roomsOptions.map((room) => (
// //                       <div
// //                         key={room.roomID}
// //                         className="room-card"
// //                         onClick={() => handleRoomClick(room)}
// //                       >
// //                         <h3>{room.roomTypeName}</h3>
// //                         <p>{room.roomName}</p>
// //                         <p>Room Number: {room.roomID}</p>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </>
// //               )
// //             )}
// //           </>
// //         )}
// //       </div>

// //         <HelpFooter />
// //       <Toaster />
// //     </>
// //   );
// // };

// // export default AssignRoom;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./AssignRooms.css";
// import Loading from "../../components/Loading/Loading";
// import { Toaster, toast } from "react-hot-toast";
// import Header from "../../components/Header/Header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";

// const AssignRoom = () => {
//   const [isRoomAssigned, setIsRoomAssigned] = useState(false);
//   const [unassignedRoom, setUnassignedRoom] = useState([]);
//   const [roomsOptions, setroomsOptions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [reload, setReload] = useState(false);
//   const navigate = useNavigate();

//   const reservationID = sessionStorage.getItem("reservationID");

//   useEffect(() => {
//     const checkRoomAssignment = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
//           {
//             headers: {
//               accept: "application/json",
//               authorization: `Bearer ${API_KEY}`,
//               "x-api-key": API_KEY,
//             },
//           }
//         );

//         const reservationData = response.data.data;
//         if (reservationData.unassigned.length === 0) {
//           setIsRoomAssigned(true);
//           setLoading(false);
//           navigate("/sign-user"); // Redirect to sign user page if no unassigned rooms
//         } else {
//           const unassignedData = reservationData.unassigned[0];
//           setUnassignedRoom(unassignedData);

//           fetchAvailableRooms(
//             unassignedData.roomTypeID,
//             unassignedData.roomTypeNameShort,
//             unassignedData.startDate,
//             unassignedData.endDate
//           );
//         }
//       } catch (error) {
//         console.error("Error fetching reservation details:", error);
//       }
//     };

//     const fetchAvailableRooms = async (
//       roomTypeID,
//       roomTypeNameShort,
//       startDate,
//       endDate
//     ) => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           `${BASE_API_URL}/getRooms?roomTypeID=${roomTypeID}&roomTypeNameShort=${roomTypeNameShort}&startDate=${startDate}&endDate=${endDate}`,
//           {
//             headers: {
//               accept: "application/json",
//               authorization: `Bearer ${API_KEY}`,
//               "x-api-key": API_KEY,
//             },
//           }
//         );

//         setroomsOptions(response.data.data[0]?.rooms || []);
//       } catch (error) {
//         console.error("Error fetching available rooms:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkRoomAssignment();
//   }, [reload]);

//   const handleRoomClick = async (room) => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `${BASE_API_URL}/room/assign`,
//         new URLSearchParams({
//           subReservationID: unassignedRoom.subReservationID,
//           reservationID: reservationID,
//           propertyID: propertyID,
//           roomTypeID: room.roomTypeID,
//           newRoomID: room.roomID,
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
//         toast.success("Room assigned successfully!");
//         setReload((prev) => !prev);
//       } else {
//         toast.error("Room assignment failed!");
//       }
//     } catch (error) {
//       console.error("Error assigning room:", error);
//       toast.error("Error assigning room!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (

//    <>  
//     <div className="assignRoom_container_container">
//       <div className="assignRoom_container">     
//        <header className="assignRoom-header">
//           <div className="logo-section">
//             <div className="home-icon-id">
//               <img
//                 src="../src/assets/images/bookingdetails/home.png"
//                 alt="home"
//               />
//             </div>
//             <h1 className="assignRoom-title">Select Room</h1>
//           </div>
//           <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
//         </header>
//         <div className="assignRoom_videoGuide">
//           <video autoPlay loop muted width="50%">
//             <source src="../../src/assets/videos/Checkin.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {loading ? (
//           <Loading />
//         ) : (
//           <>
//             {isRoomAssigned ? (
//               <div className="assignRoom_assigned">
//                 <button className="assignRoom_button"
//                 onClick={() => navigate("/check-in-success")}>
//                   Check-In
//                 </button>
//               </div>
//             ) : (
//               roomsOptions.length > 0 && (
//                 <>
//                   <p className="assignRoom_instruction">Select a room number below to proceed with check-in.</p>
//                   <div className="assignRoom_roomList">
//                     {roomsOptions.map((room) => (
//                       <div
//                         key={room.roomID}
//                         className="assignRoom_roomCard"
//                         onClick={() => handleRoomClick(room)}
//                       >
//                         <h3>{room.roomTypeName}</h3>
//                         <p>{room.roomName}</p>
//                         <p>Room Number: {room.roomID}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )
//             )}
//           </>
//         )}
//       </div>

//       <HelpFooter />
//       <Toaster />
//       </div>
//     </>
//   );
// };

// export default AssignRoom;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AssignRooms.css";
import Loading from "../../components/Loading/Loading";
import { Toaster, toast } from "react-hot-toast";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";

const AssignRoom = () => {
  const [isRoomAssigned, setIsRoomAssigned] = useState(false);
  const [unassignedRoom, setUnassignedRoom] = useState([]);
  const [roomsOptions, setRoomsOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  const reservationID = sessionStorage.getItem("reservationID");

  useEffect(() => {
    // Check if reservationID exists
    if (!reservationID) {
      setError("No reservation ID found. Please try again.");
      setLoading(false);
      return;
    }

    const checkRoomAssignment = async () => {
      setLoading(true);
      setError(null); // Reset error state
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
        if (reservationData.unassigned.length === 0) {
          setIsRoomAssigned(true);
          navigate("/sign-user"); // Redirect to sign user page
        } else {
          const unassignedData = reservationData.unassigned[0];
          setUnassignedRoom(unassignedData);

          await fetchAvailableRooms(
            unassignedData.roomTypeID,
            unassignedData.roomTypeNameShort,
            unassignedData.startDate,
            unassignedData.endDate
          );
        }
      } catch (error) {
        console.error("Error fetching reservation details:", error);
        setError("Failed to fetch reservation details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    const fetchAvailableRooms = async (
      roomTypeID,
      roomTypeNameShort,
      startDate,
      endDate
    ) => {
      try {
        const response = await axios.get(
          `${BASE_API_URL}/getRooms?roomTypeID=${roomTypeID}&roomTypeNameShort=${roomTypeNameShort}&startDate=${startDate}&endDate=${endDate}`,
          {
            headers: {
              accept: "application/json",
              authorization: `Bearer ${API_KEY}`,
              "x-api-key": API_KEY,
            },
          }
        );

        setRoomsOptions(response.data.data[0]?.rooms || []);
      } catch (error) {
        console.error("Error fetching available rooms:", error);
        setError("Failed to fetch available rooms. Please try again.");
      }
    };

    checkRoomAssignment();
  }, [reservationID, reload]); // Add reservationID to dependency array

  const handleRoomClick = async (room) => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const response = await axios.post(
        `${BASE_API_URL}/room/assign`,
        new URLSearchParams({
          subReservationID: unassignedRoom.subReservationID,
          reservationID: reservationID,
          propertyID: propertyID,
          roomTypeID: room.roomTypeID,
          newRoomID: room.roomID,
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
        toast.success("Room assigned successfully!");
        // setReload((prev) => !prev); // Trigger reload
        navigate("/sign-user"); // Redirect to sign user page
      } else {
        toast.error("Room assignment failed!");
        setError("Room assignment failed. Please try again.");
      }
    } catch (error) {
      console.error("Error assigning room:", error);
      toast.error("Error assigning room!");
      setError("Error assigning room. Please try again.");
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
              <img src="/assets/images/bookingdetails/home.png" alt="home"  onClick={() => navigate("/")} />
            </div>
            <h1 className="assignRoom-title">Select Room</h1>
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
            <button
              className="assignRoom_button"
              onClick={() => setReload((prev) => !prev)}
            >
              Retry
            </button>
          </div>
        ) : isRoomAssigned ? (
          <div className="assignRoom_assigned">
            <button
              className="assignRoom_button"
              onClick={() => navigate("/check-in-success")}
            >
              Check-In
            </button>
          </div>
        ) : roomsOptions.length > 0 ? (
          <>
            <p className="assignRoom_instruction">
              Select a room number below to proceed with check-in.
            </p>
            <div className="assignRoom_roomList">
              {roomsOptions.map((room) => (
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
              onClick={() => setReload((prev) => !prev)}
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

export default AssignRoom;