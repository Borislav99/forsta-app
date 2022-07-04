// react router
import { Link } from "react-router-dom";
// styles
import "../components/styles/Error.scss";
// component
const Error = () => {
  // jsx
  return (
    <main className="error">
      <div className="error__container">
        <h4 className="error__title">404</h4>
        <p className="error__text">page you entered, does not exist!</p>
        <Link to="/" className="btn">
          homepage
        </Link>
      </div>
    </main>
  );
};
// exports
export default Error;
