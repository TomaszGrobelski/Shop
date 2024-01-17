import { LabelFormProps } from '../../../../../types/BagPage/bagPage.types';

const LabelForm: React.FC<LabelFormProps> = ({
  title,
  type,
  autoComplite,
  id,
  onChange
}: LabelFormProps) => {
  return (
    <div className='relative flex w-full flex-col space-y-1 rounded-xl border-[2px] p-1'>
      <label
        htmlFor={id}
        className=' absolute -top-3 left-3 z-40 bg-white text-sm font-medium text-gray-700'>
        {title}
        <span className='text-red-500'>*</span>
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className='block w-full rounded-md p-1  pl-2 shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500'
        autoComplete={autoComplite}
        aria-required='true'
        aria-invalid='false'
        onChange={onChange}
      />
    </div>
  );
};

export default LabelForm;
