import { GetStaticProps } from "next";
import path from "path";

// Execution on server - take the returned value and inject the prop into the page
export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require("fs");
  const txt = fs.readFileSync(
    path.join(process.cwd(), "public/music.txt"),
    "utf8"
  );
  return {
    props: {
      myMode: txt,
    },
  };
};
export default function Dynamic(props) {
  return <h1>Mode - {props.myMode}</h1>;
}
