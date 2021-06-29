import { AsurRaaModal } from "@asurraa/sura-ui-modal";
import { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useGetAuthProvider } from "../context/AuthProvider";
import { postsService } from "../services/post.service";

const Children: FC<{
  name: string;
  cbData: (value: string) => void;
}> = (props) => {
  const haha = "hshsh";
  useEffect(() => {
    props.cbData(haha);
  }, [haha]);
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

const DashboardPage = () => {
  const [number, setNumber] = useState<number>(1);
  const [cb, setCb] = useState<string>();
  const global = useGetAuthProvider();
  const [data, setData] = useState<Array<any>>([]);
  useEffect(() => {
    postsService()
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      {/* <AsurRaaModal visible={true}>
        <h1>sdhfsdf</h1>
      </AsurRaaModal> */}
      {number}
      <Children
        name="mengleang"
        cbData={(value) => {
          setCb(value);
        }}
      />
      <h2>{cb}</h2>
      <h1>{global?.token}</h1>
      {data?.map((res) => {
        return (
          <div>
            <h1>{res.title}</h1>
            <p>{res.description}</p>
          </div>
        );
      })}
    </Fragment>
  );
};

export default DashboardPage;
