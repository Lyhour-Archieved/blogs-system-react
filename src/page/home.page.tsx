import { Fragment } from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { CenterLayout } from "../components/Center";
import { PATH_ENUM } from "../router/path";
import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
const animation = require("../assets/animations/system.json");

const HomePage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [xxx, setXXX] = useState(1);
  console.log("run x");
  useEffect(() => {
    console.log("run yy");
  }, [xxx]);
  return (
    <Fragment>
      <CenterLayout moreStyle={{ flexDirection: "column" }}>
        <h2>Welcome to my News System!</h2>
        <Lottie width={500} height={400} options={defaultOptions} />

        <Link to={PATH_ENUM.LOGIN}>
          <Button
            color="primary"
            variant="contained"
            // onClick={() => setXXX(xxx + 1)}
          >
            Login Now
          </Button>
        </Link>
      </CenterLayout>
    </Fragment>
  );
};

export default HomePage;
