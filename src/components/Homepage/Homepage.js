import "./Homepage.css";
import FeelingSelection from "../FeelingSelection/FeelingSelection";
import Head from "next/head";

const Homepage = () => {
  return (
    <div className="homepage">
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <FeelingSelection />
    </div>
  );
};

export default Homepage;
