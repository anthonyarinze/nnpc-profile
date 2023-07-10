type Props = {
  icon: string,
  url: string
};

const QuickActionButtons = (props: Props) => {
  return (
    <div className="quick-action-button">
      <a href={props.url}><img src={props.icon} className="action-button-image"/></a>
    </div>
  );
};

export default QuickActionButtons;
