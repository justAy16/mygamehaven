import React from "react";
import GamingLibrary from "../../components/GamingLibrary/GamingLibrary";
import "./Profile.scss";
import axios from "axios";
import { useState, useEffect } from "react";



const Profile = () => {
    // const [userDetails, setUserDetails] = useState(null);

    // useEffect(() => {
    //   const fetchUserDetails = async () => {
    //     try {
    //       const response = await axios.get(`http://localhost:7832/users`);
    //       setUserDetails(response.data[0]);
    //       console.log(userDetails)
    //     } catch (error) {
    //       console.error('Error fetching user details:', error);
    //     }
    //   };
  
    //   fetchUserDetails();

    //   console.log()
    // }, []);

  return (
    <div className="profile__wrapper container">
      <div className="profile__container">
        <img src="./images/profile.jpg" alt="profile image" />
        <div className="info">
          <span className="offline">Offline</span>
         {/* {userDetails && <h4>{userDetails.Fname} {userDetails.Lname}</h4>} */}
         <h4>Jona Elliot</h4>
          <p>
            You Haven't Gone Live yet. Go Live By Touching The Button Below.
          </p>

          <a href="#">Start Live Stream</a>
        </div>

        <div className="items">
          <ul>
            <li>
              Games Downloaded <span>3</span>
            </li>
            <hr />
            <li>
              Friends Online <span>16</span>
            </li>
            <hr />
            <li>
              Live Streams <span>None</span>
            </li>
            <hr />
            <li>
              Clips <span>29</span>
            </li>
          </ul>
        </div>
      </div>
      <GamingLibrary />
    </div>
  );
};

export default Profile;
