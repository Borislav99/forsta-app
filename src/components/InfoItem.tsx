// types
interface Info {
  infoClass: string;
  infoText: string;
  infoData: string;
}
// styles
import "./styles/Info.scss";
// component
const InfoItem = ({ infoClass, infoText, infoData }: Info) => {
  // jsx
  return (
    <p className={`footer-info__item ${infoClass}`}>
      {infoText}
      <span data-testid={infoText} className="footer-info__data fontawesome">
        {infoData}
      </span>
    </p>
  );
};
// exports
export default InfoItem;
