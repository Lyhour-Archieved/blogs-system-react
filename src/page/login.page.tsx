import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { CustomTextField } from "../components/CTextField/custome-textfield";
import { Formik } from "formik";
import { loginService } from "../services/login.service";
import { useHistory } from "react-router-dom";
import { PATH_ENUM } from "../router/path";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const route = useHistory();
  const LoginCard = (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Login
        </Typography>
      </CardContent>
      <CardContent>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("value", values);
            loginService(values)
              .then((res) => {
                console.log(res);
                route.push(PATH_ENUM.DASHBOARD);
              })
              .catch((err) => console.log(err))
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <CustomTextField
                label="Username"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                variant="filled"
              />
              <br />
              <CustomTextField
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                variant="filled"
              />
              {errors.password && touched.password && errors.password}

              <CardActions>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                  disabled={isSubmitting}
                >
                  Login
                </Button>
              </CardActions>
            </form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        {LoginCard}
      </div>
    </Fragment>
  );
};

export default LoginPage;
