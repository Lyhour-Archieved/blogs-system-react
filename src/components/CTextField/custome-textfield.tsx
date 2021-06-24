import { FC, Fragment } from "react";
import { TextField } from "@material-ui/core";

export interface CustomTextFieldProps {
  label: string;
}

export const CustomTextField: FC<CustomTextFieldProps> = (props) => {
  return (
    <div style={{ padding: 3 }}>
      <TextField
        size="small"
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        style={{ width: "100%" }}
      />
    </div>
  );
};
