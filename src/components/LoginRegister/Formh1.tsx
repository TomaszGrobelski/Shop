import { FormEvent } from "react";

interface Formh1Props {
  h1: string;
  children: React.ReactNode;
  onSubmit: (e: FormEvent) => void;
}

function Formh1({ onSubmit, h1, children }: Formh1Props) {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex justify-center backdrop-blur-sm ">
        <form onSubmit={onSubmit} className=" text-black flex flex-col items-center rounded-xl w-[300px] h-[400px] p-4  bg-white opacity-[80%] ">
          <h1 className="self-start text-[24px]">{h1}</h1>
          {children}
        </form>
      </div>
    </div>
  );
}

export default Formh1;
