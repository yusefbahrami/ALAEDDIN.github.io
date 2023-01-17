import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userProfile from "../../assets/DarkProfile.jpg";
import { UserTokenIdContext } from "../../Context/UserTokenIdContext";

const LinkToUser = () => {
  // const UserTokenId=localStorage.getItem("UserTokenId")
  const UserTokenId = useContext(UserTokenIdContext);

  return (
    <li className="nav-item">
      <Link
        to={
          UserTokenId.UserTokenId
            ? `/user/${UserTokenId.UserTokenId}`
            : "/login"
        }
      >
        {/* <i className="uil uil-user"></i> */}
        <img className="user-profile" src={userProfile} alt="Profile" />
        <span>USER</span>
      </Link>
    </li>
  );
};
export default LinkToUser;
