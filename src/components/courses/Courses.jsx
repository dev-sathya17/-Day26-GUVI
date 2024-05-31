import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Courses = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Courses;
