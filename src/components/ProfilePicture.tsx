import QuickActionButtons from "./QuickActionButtons";
import ellipsis from "../assets/ellipsis.png";
import profile from "../assets/Default profie Icon.svg";

const ProfilePicture = () => {
  return (
    <div className="header-div">
      <div className="profile-picture">
        <img src={profile} />
      </div>
      <QuickActionButtons icon={ellipsis} />
    </div>
  );
};

export default ProfilePicture;
