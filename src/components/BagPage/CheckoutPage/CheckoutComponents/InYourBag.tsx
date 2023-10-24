import { BiMinus } from "react-icons/bi";

function InYourBag() {
  return (
    <div>
      <button className="flex justify-between items-center w-full">
        <h2>In Your Bag</h2>
        <BiMinus className="sm:hidden" />
        <p className="hidden sm:block">Edit</p>
      </button>
      <p>Arrives by Mon,....????</p>
      <div>
        <img src="" alt="" />
        <div>
          <h3>name</h3>
          <p>size</p>
          <p>price</p>
        </div>
      </div>
      <div>Subtotal</div>
    </div>
  );
}

export default InYourBag;
