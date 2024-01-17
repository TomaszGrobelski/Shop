import { FormEvent } from 'react';

interface Formh1Props {
  h1: string;
  children: React.ReactNode;
  onSubmit: (e: FormEvent) => void;
}

function Formh1({ onSubmit, h1, children }: Formh1Props) {
  return (
    <div className='flex h-screen items-center justify-center '>
      <div className='flex justify-center backdrop-blur-sm '>
        <form
          onSubmit={onSubmit}
          className=' flex h-[400px] w-[300px] flex-col items-center rounded-xl bg-white p-4  text-black opacity-[80%] '>
          <h1 className='self-start text-[24px]'>{h1}</h1>
          {children}
        </form>
      </div>
    </div>
  );
}

export default Formh1;
