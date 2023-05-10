import "./Homepage.css";
import FeelingSelection from "../FeelingSelection/FeelingSelection";
import { useEffect } from "react";

const Homepage = () => {
  return (
    <div className="homepage">
      <FeelingSelection />
    </div>
  );
};

export default Homepage;
