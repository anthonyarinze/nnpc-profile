
type Props = {
  icon: string;
  text: string;
};

const StaffDataButton = (props: Props) => {
  return (
      <div className="staff-data-button">
        
        <img className="staff-data-icon" src={props.icon} />
        <p className="staff-data-text">{props.text}</p>
      </div>
  );
};

export default StaffDataButton;
