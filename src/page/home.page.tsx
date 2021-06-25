import { Fragment } from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import * as animation from "../assets/animations/system.json";
import { CenterLayout } from "../components/Center";
import { PATH_ENUM } from "../router/path";
import { Button } from "@material-ui/core";

const HomePage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Fragment>
      <CenterLayout moreStyle={{ flexDirection: "column" }}>
        <h2>Welcome to my News System!</h2>

        <Link to={PATH_ENUM.LOGIN}>
          <Button color="primary" variant="contained">
            Login Now
          </Button>
        </Link>
      </CenterLayout>
    </Fragment>
  );
};

export default HomePage;
