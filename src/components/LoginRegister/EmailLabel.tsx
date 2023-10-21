import { FaUser} from "react-icons/fa";

interface EmailLabelProps{
    children: React.ReactNode
}

function EmailLabel({children}:EmailLabelProps) {
  return (
    <div className="flex items-center w-full border-[1px] my-2 ">
      <div className="flex justify-center  items-center bg-gray-100 h-8 w-8">
        <FaUser />
      </div>
      {children}
    </div>
  );
}

export default EmailLabel;
