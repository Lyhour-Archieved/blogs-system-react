import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useEffect } from "react";
import {
  createPostService,
  deletePostService,
  PostInterface,
  postsService,
} from "../services/post.service";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { Formik } from "formik";
import { CustomTextField } from "../components/CTextField/custome-textfield";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function PostPage() {
  const [data, setData] = useState<Array<PostInterface> | undefined>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const fetchData = () => {
    postsService().then((res) => {
      // @ts-ignore
      setData(res.data.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("data", data);
  const classes = useStyles();

  const ModalFormCreate = (
    <div>
      <Dialog
        open={openModal}
        // onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create POST</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ title: "", description: "", content: "" }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("submit value", values);
              createPostService(values).then((res) => {
                fetchData();
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
                  label="Title"
                  type="title"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  variant="filled"
                />
                <br />
                <CustomTextField
                  label="description"
                  type="description"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  variant="filled"
                />
                <CustomTextField
                  label="content"
                  type="content"
                  name="content"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.content}
                  variant="filled"
                />

                <DialogActions>
                  <Button onClick={() => setOpenModal(false)} color="primary">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Create
                  </Button>
                </DialogActions>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );

  return (
    <>
      {ModalFormCreate}
      <Button
        onClick={() => setOpenModal(true)}
        style={{ marginBottom: 20, color: "blue" }}
      >
        Create
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Content</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((data, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {data.title}
                </TableCell>
                <TableCell align="right">{data.content}</TableCell>
                <TableCell align="right">
                  <Button
                    style={{ color: "red" }}
                    onClick={() => {
                      console.log(data);
                      deletePostService(data.id).then((res) => {
                        fetchData();
                      });
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
