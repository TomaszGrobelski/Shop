type LabelFormProps = {
  title: string;
  type: string;
  autoComplite: string;
  id: string;
};
const LabelForm: React.FC<LabelFormProps> = ({ title, type, autoComplite, id }: LabelFormProps) => {
  return (
    <div className="relative flex flex-col space-y-1 border-[2px] rounded-xl p-1 w-full">
      <label htmlFor={id} className=" absolute left-3 -top-3 z-40 text-sm font-medium text-gray-700 bg-white">
        {title}
        <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="block w-full pl-2 p-1  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
        autoComplete={autoComplite}
        aria-required="true"
        aria-invalid="false"
      />
    </div>
  );
};

export default LabelForm;
