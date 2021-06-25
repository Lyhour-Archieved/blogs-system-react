import { FC, Fragment } from "react";

export interface CenterLayoutProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  moreStyle?: React.CSSProperties;
}

export const CenterLayout: FC<CenterLayoutProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        ...props.moreStyle,
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};
