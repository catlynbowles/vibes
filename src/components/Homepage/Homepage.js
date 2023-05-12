import "./Homepage.css";
import FeelingSelection from "../FeelingSelection/FeelingSelection";
import Head from "next/head";

const Homepage = () => {
  return (
    <div className="homepage">
      <FeelingSelection />
    </div>
  );
};

export default Homepage;
