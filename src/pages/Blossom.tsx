import ProfilePicture from "../components/ProfilePicture";
import StaffDataButton from "../components/StaffDataButton";
import call from "../assets/Call Icon NNPC.svg";
import sms from "../assets/SMS Icon NNPC.svg";
import email from "../assets/Email Icon NNPC.svg";
import nnpc from "../assets/NNPC logo main.svg";
import QuickActionSection from "../components/QuickActionSection";
import linkedin from "../assets/LinkedIn Icon NNPC.svg";
import staffbiodata from "../assets/Staff Bio Data NNPC.svg";

type Props = {
  name: string;
};

const Blossom = (props: Props) => {
  return (
    <div className="app">
      <ProfilePicture />
      <h2 className="user-name">{props.name}</h2>
      <p className="user-title">Research and Innovation</p>
      <StaffDataButton icon={linkedin} text="My LinkedIn Profile" />
      <StaffDataButton icon={staffbiodata} text="Staff Bio Data" />
      <div className="quick-action-section">
        <QuickActionSection icon={call} text="Call" />
        <QuickActionSection icon={sms} text="SMS" />
        <QuickActionSection icon={email} text="Email" />
      </div>
      <img src={nnpc} />
      <p>Produced by Mercuoory Infinity</p>
    </div>
  );
};

export default Blossom;
