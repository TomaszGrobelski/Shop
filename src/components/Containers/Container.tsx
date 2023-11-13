import { ReactNode } from "react";

function Container(props: { children: ReactNode }) {
  return (
    <div className="m-0 mx-auto max-w-[1300px] font-helvetica ">
      {props.children}
    </div>
  );
}

export default Container;
