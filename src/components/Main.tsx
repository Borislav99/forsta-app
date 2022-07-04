// types
type Children = {
  children: React.ReactNode;
};
// styles
import "./styles/Main.scss";
// component
const Main = ({ children }: Children) => {
  // jsx
  return (
    <main className="main">
      <div className="main-container">{children}</div>
    </main>
  );
};
// exports
export default Main;
