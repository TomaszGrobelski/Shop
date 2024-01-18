import { useEffect, useState } from 'react';
import { BsSuitHeart } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { OrderProps } from '../../../types/BagPage/bagPage.types';
import { Shoe } from '../../../types/ShoesPage/interfaceShoe';
import {
  OldPriceOrder,
  SelectedSizeOrder,
  GenderOrder,
  HeaderOrder,
  ItemPricingOrder,
  ItemActionsOrder,
  ItemDetailsOrder,
  ImageOrder,
  ItemOrder,
  ListOrder
} from '../../../styles/BagPage/Order.styles';

function Order({ setTotalPrice }: OrderProps) {
  const [itemsList, setItemsList] = useState<Shoe[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('bagItems');
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
    const storedItems = localStorage.getItem('bagItems');
    setItemsList(updatedItems);

    if (storedItems) {
      const itemsArray: Shoe[] = JSON.parse(storedItems);
      const updatedItemsArray = itemsArray.filter((item) => item.id !== deletedItem.id);
      localStorage.setItem('bagItems', JSON.stringify(updatedItemsArray));
    }

    const sum = updatedItems.reduce((total, current) => total + current.price, 0);
    setTotalPrice(sum);
  };

  return (
    <>
      <ListOrder>
        {itemsList.map((order, index) => (
          <ItemOrder key={index}>
            <ImageOrder src={order.img} alt={order.name} />
            <ItemDetailsOrder>
              <HeaderOrder>{order.name}</HeaderOrder>
              <GenderOrder>{order.gender}</GenderOrder>
              <SelectedSizeOrder>Size: {order.selectedSize}</SelectedSizeOrder>
              <ItemActionsOrder>
                <button>
                  <BsSuitHeart size={22} />
                </button>
                <button onClick={() => deleteProductClick(index)}>
                  <RiDeleteBin6Line size={22} />
                </button>
              </ItemActionsOrder>
            </ItemDetailsOrder>
            <ItemPricingOrder>
              <OldPriceOrder>{order.oldPrice && order.oldPrice}</OldPriceOrder>
              <p>${order.price}</p>
            </ItemPricingOrder>
          </ItemOrder>
        ))}
      </ListOrder>
    </>
  );
}

export default Order;
