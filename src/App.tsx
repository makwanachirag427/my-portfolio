import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer autoClose={2000} theme="dark" position="top-center"/>
    </>
  );
};
export default App;
