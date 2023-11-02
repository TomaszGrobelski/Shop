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
  }, [setTotalPrice, setItemsList]);

  const deleteProductClick = (index: number) => {
    const updatedItems = [...itemsList];
    const deletedItem = updatedItems.splice(index, 1)[0]; 
    setItemsList(updatedItems); 

    const storedItems = localStorage.getItem("bagItems");
    if (storedItems) {
      const itemsArray: Shoe[] = JSON.parse(storedItems);
      const updatedItemsArray = itemsArray.filter((item) => item.id !== deletedItem.id);
      localStorage.setItem("bagItems", JSON.stringify(updatedItemsArray));
    }

    const sum = updatedItems.reduce((total, current) => total + current.price, 0);
    setTotalPrice(sum);
  };

  const displayOrder = itemsList.map((order, index) => (
    <li key={index} className="flex gap-10  ">
      <img src={order.img} alt={order.name} className="max-w-[120px]" />
      <div className="max-w-[160px]" >
        <h2>{order.name}</h2>
        <p className="text-[14px] text-gray-600">{order.gender}</p>
        <div className="text-[14px] text-gray-600">Size: {order.selectedSize}</div>
        <div className="flex gap-4 my-4">
          <button>
            <BsSuitHeart size={22} />
          </button>
          <button onClick={() => deleteProductClick(index)}>
            <RiDeleteBin6Line size={22} />
          </button>
        </div>
      </div>
      <div className="flex flex-col text-end ">
        <p className=" line-through text-gray-600">{order.oldPrice && order.oldPrice}</p>
        <p>${order.price}</p>
      </div>
    </li>
  ));

  return (
    <div className="flex">
      <ul className="flex flex-col gap-4">{displayOrder}</ul>
    </div>
  );
}

export default Order;
