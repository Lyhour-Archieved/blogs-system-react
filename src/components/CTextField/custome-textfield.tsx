import { FC, Fragment } from "react";
import { FilledTextFieldProps, TextField } from "@material-ui/core";

export interface CustomTextFieldProps extends FilledTextFieldProps {}

export const CustomTextField: FC<CustomTextFieldProps> = (props) => {
  return (
    <div style={{ padding: 3 }}>
      <TextField
        size="small"
        id="outlined-basic"
        style={{ width: "100%" }}
        {...props}
        label={props.label}
      />
    </div>
  );
};
