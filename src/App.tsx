import ProfilePicture from "./components/ProfilePicture";
import StaffDataButton from "./components/StaffDataButton";
import linkedin from "./assets/LinkedIn Icon NNPC.svg";
import staffbiodata from "./assets/Staff Bio Data NNPC.svg";
import QuickActionSection from "./components/QuickActionSection";
import phone from "./assets/Call Icon NNPC.svg";
import sms from "./assets/SMS Icon NNPC.svg";
import email from "./assets/Email Icon NNPC.svg";
import nnpc from "./assets/NNPC logo main.svg";

function App() {
  const handleClick = () => {
    const test = "https://vcard.link/card/DPSk.vcf";
    window.open(test);
  };

  return (
    <div className="app" onClick={handleClick}>
      <ProfilePicture />
      <h2 className="user-name">Chiatula Onyinye</h2>
      <p className="user-title">Research and Innovation</p>
      <StaffDataButton icon={linkedin} text="My LinkedIn Profile" />
      <StaffDataButton icon={staffbiodata} text="Staff Bio Data" />
      <div className="quick-action-section">
        <QuickActionSection icon={phone} text="Call" />
        <QuickActionSection icon={sms} text="SMS" />
        <QuickActionSection icon={email} text="Email" />
      </div>
      <img src={nnpc} />
      <p>Produced by Mercuoory Infinity</p>
    </div>
  );
}

export default App;
