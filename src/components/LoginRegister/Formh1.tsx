import { FormEvent } from "react";

interface Formh1Props {
  h1: string;
  children: React.ReactNode;
  onSubmit: (e: FormEvent) => void;
}

function Formh1({ onSubmit, h1, children }: Formh1Props) {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex justify-center p-10 py-40 border-[1px] ">
        <form onSubmit={onSubmit} className="text-black flex flex-col items-center">
          <h1 className="self-start text-[24px]">{h1}</h1>
          {children}
        </form>
      </div>
    </div>
  );
}

export default Formh1;
