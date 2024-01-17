import { useEffect, useState } from 'react';
import { BsSuitHeart } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { OrderProps } from '../../../types/BagPage/bagPage.types';
import { Shoe } from '../../../types/ShoesPage/interfaceShoe';

function Order({ setTotalPrice }: OrderProps) {
  const [itemsList, setItemsList] = useState<Shoe[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('bagItems');
    if (storedItems) {
      const itemsArray: Shoe[] = JSON.parse(storedItems);
      setItemsList(itemsArray);
      const sum = itemsArray.reduce(
        (total, current) => total + current.price,
        0,
      );
      setTotalPrice(sum);
    }
  }, [setTotalPrice, setItemsList]);

  const deleteProductClick = (index: number) => {
    const updatedItems = [...itemsList];
    const deletedItem = updatedItems.splice(index, 1)[0];
    const storedItems = localStorage.getItem('bagItems');
    setItemsList(updatedItems);

    if (storedItems) {
      const itemsArray: Shoe[] = JSON.parse(storedItems);
      const updatedItemsArray = itemsArray.filter(
        (item) => item.id !== deletedItem.id,
      );
      localStorage.setItem('bagItems', JSON.stringify(updatedItemsArray));
    }

    const sum = updatedItems.reduce(
      (total, current) => total + current.price,
      0,
    );
    setTotalPrice(sum);
  };

  const displayOrder = itemsList.map((order, index) => (
    <li key={index} className='flex gap-10  '>
      <img src={order.img} alt={order.name} className='max-w-[120px]' />
      <div className='max-w-[160px]'>
        <h2>{order.name}</h2>
        <p className='text-[14px] text-gray-600'>{order.gender}</p>
        <div className='text-[14px] text-gray-600'>
          Size: {order.selectedSize}
        </div>
        <div className='my-4 flex gap-4  '>
          <button>
            <BsSuitHeart size={22} />
          </button>
          <button onClick={() => deleteProductClick(index)}>
            <RiDeleteBin6Line size={22} />
          </button>
        </div>
      </div>
      <div className='m-2 flex flex-col text-end'>
        <p className=' text-gray-600 line-through'>
          {order.oldPrice && order.oldPrice}
        </p>
        <p>${order.price}</p>
      </div>
    </li>
  ));

  return (
    <div className='flex'>
      <ul className='flex flex-col gap-4'>{displayOrder}</ul>
    </div>
  );
}

export default Order;
