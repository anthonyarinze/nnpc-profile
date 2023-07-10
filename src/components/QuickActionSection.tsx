import QuickActionButtons from "./QuickActionButtons";

type Props = {
  icon: string,
  text: string,
  url: string
};

const QuickActionSection = (props: Props) => {
  return (
    <div className="quick-action-column">
      <QuickActionButtons icon={props.icon} url={props.url}/>
      <p className="quick-action-column-text">{props.text}</p>
    </div>
  );
};

export default QuickActionSection;
