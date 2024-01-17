type LabelFormProps = {
  title: string;
  type: string;
  autoComplite: string;
  id: string;
};
<<<<<<< HEAD
const LabelForm: React.FC<LabelFormProps> = ({ title, type, autoComplite, id }: LabelFormProps) => {
  return (
    <div className="relative flex flex-col space-y-1 border-[2px] rounded-xl p-1 w-full">
      <label htmlFor={id} className=" absolute left-3 -top-3 z-40 text-sm font-medium text-gray-700 bg-white">
=======

const LabelForm: React.FC<LabelFormProps> = ({
  title,
  type,
  autoComplite,
  id,
}: LabelFormProps) => {
  return (
    <div className="relative flex w-full flex-col space-y-1 rounded-xl border-[2px] p-1">
      <label
        htmlFor={id}
        className=" absolute -top-3 left-3 z-40 bg-white text-sm font-medium text-gray-700">
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
        {title}
        <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="block w-full rounded-md p-1  pl-2 shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500"
        autoComplete={autoComplite}
        aria-required="true"
        aria-invalid="false"
      />
    </div>
  );
};

export default LabelForm;
