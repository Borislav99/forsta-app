// react router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import { SharedLayout, Homepage, Error } from "./pages";
// styles
import "./App.scss";
// component
function App() {
  return (
    // routes
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// exports
export default App;
