import { ReactNode } from "react";

function Container(props: { children: ReactNode }) {
<<<<<<< HEAD
  return <div className="max-w-[1300px] m-0 mx-auto font-helvetica ">{props.children}</div>;
=======
  return (
    <div className="m-0 mx-auto max-w-[1300px] font-helvetica ">
      {props.children}
    </div>
  );
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
}

export default Container;
