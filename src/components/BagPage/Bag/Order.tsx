import { useState, useEffect } from "react";
import { Shoe } from "../../ShoesPage/Products/interfaceShoe";
import { BsSuitHeart } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

interface OrderProps {
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

function Order({ setTotalPrice }: OrderProps) {
  const [itemsList, setItemsList] = useState<Shoe[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("bagItems");
    if (storedItems) {
      const itemsArray: Shoe[] = JSON.parse(storedItems);
      setItemsList(itemsArray);
      const sum = itemsArray.reduce((total, current) => total + current.price, 0);
      setTotalPrice(sum);
    }
  }, [setTotalPrice]);

  const displayOrder = itemsList.map((order, index) => (
    <li key={index} className="flex gap-10 w-full">
      <img src={order.img} alt={order.name} className="max-w-[100px]" />
      <div>
        <h2>{order.name}</h2>
        <p>{order.gender}</p>
        <div>Size+Quantity</div>
        <div className="flex gap-4">
          <button>
            <BsSuitHeart size={22} />
          </button>
          <button>
            <RiDeleteBin6Line size={22} />
          </button>
        </div>
      </div>
      <p className="flex flex-col ">{order.oldPrice ? `${order.oldPrice}  ${order.price }`   : order.price}</p>
    </li>
  ));

  return (
    <div className="flex">
      <ul className="flex flex-col gap-4">{displayOrder}</ul>
    </div>
  );
}

export default Order;
