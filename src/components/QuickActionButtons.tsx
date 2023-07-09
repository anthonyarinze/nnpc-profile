type Props = {
  icon: string;
};

const QuickActionButtons = (props: Props) => {
  return (
    <div className="quick-action-button">
      <img src={props.icon} className="action-button-image" />
    </div>
  );
};

export default QuickActionButtons;
