// types
interface LogoInterface {
  logo: string;
  text: string;
}
// styles
import "./styles/Header.scss";
// react router
import { Link } from "react-router-dom";
// component
const Header = ({ logo, text }: LogoInterface) => {
  // jsx
  return (
    <header className="header">
      <Link to="/">
        <img title="Logo" className="header__logo" src={logo} alt={text} />
      </Link>
    </header>
  );
};
// exports
export default Header;
