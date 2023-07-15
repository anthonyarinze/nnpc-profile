// import QuickActionButtons from "./QuickActionButtons";
// import ellipsis from "../assets/ellipsis.png";
import profile from "../assets/Default profie Icon.svg";
// import defaultBackground from "../assets/background.png";

type Props = {
  image: string
};
const ProfilePicture = (props: Props) => {
  // var body = document.getElementById("root");

  // if (props.image !== "") {
  //   body!.style.backgroundImage = "url(" + props.image + ")";
  // } else {
  //   body!.style.backgroundImage = "url(" + defaultBackground + ")";
  // }
  return (
    <div className="header-div">
      <div className="profile-picture">
        <img src={(props.image !== "") ? props.image : profile} />
      </div>
      {/* <QuickActionButtons icon={ellipsis} /> */}
    </div>
  );
};

export default ProfilePicture;
