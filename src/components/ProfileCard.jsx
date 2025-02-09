import React from "react";
import "../styles/ProfileCard.css";

const ProfileCard = ({
  imageUrl,
  firstName,
  lastName,
  gender,
  phone,
  street,
  city,
  state,
  country,
  code,
  setDisplay,
}) => {
  return (
    <>
      <h2>Your Profile Card </h2>
      <div className="profile-container">
        <div className="profile-card">
          {/* Image Declaration */}
          <div className="profile-image">
            <img src={`${imageUrl}`} alt="Profile" />
          </div>
          {/* Profile Detials */}
          <div className="profile-details">
            {/* Profile Name */}
            <div className="profile-name">
              <strong>Name :</strong> <span>{firstName}</span>
              <span>{lastName}</span>
            </div>
            {/* Gender Box */}
            <div className="genderDetails">
              <p>
                <strong>Gender :</strong> {gender}
              </p>
            </div>
            {/* Phone Details  */}
            <div className="phoneDetails">
              <p>
                <strong>Phone No. :</strong> {phone}
              </p>
            </div>
            {/* Address Columns - 1 */}
            <div className="address">
              <span>
                {street} , {city}
              </span>
            </div>
            {/* Address Column - 2 */}
            <div className="address">
              <span>
                {state}-{code} , {country}
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-outline-warning return"
        onClick={() => setDisplay("main")}>
        Return Back
      </button>
    </>
  );
};

export default ProfileCard;
