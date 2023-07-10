type Props = {
  icon: string,
  text: string,
  url: string
};

const StaffDataButton = (props: Props) => {
  return (
    <div className="staff-data-button">
      <img className="staff-data-icon" src={props.icon} />
      <a href={props.url}><p className="staff-data-text">{props.text}</p></a>
    </div>
  );
};

export default StaffDataButton;
