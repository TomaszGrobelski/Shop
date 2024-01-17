import { ReactNode } from "react";

function Container(props: { children: ReactNode }) {
  return <div className="max-w-[1300px] m-0 mx-auto font-helvetica ">{props.children}</div>;
}

export default Container;
