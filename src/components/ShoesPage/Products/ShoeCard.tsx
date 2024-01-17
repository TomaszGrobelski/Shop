import { Shoe } from "./interfaceShoe";

type ShoeCardProps = {
  shoe: Shoe;
  key?: string | number;
  children?: React.ReactNode;
  favorite?: React.ReactNode;
};

const ShoeCard: React.FC<ShoeCardProps> = ({ shoe, key, children, favorite }) => {
  return (
    <div key={key} className="flex flex-col  mb-10">
      <div className="relative max-w-[400px]">
        <img
          loading="lazy"
          className="relative aspect-square object-fill"
          src={shoe.img}
          alt={shoe.name}
          width={400}
          height={400}
        />
        {favorite}
      </div>
      <div className="p-2">
        <div className="font-bold opacity-90 my-2">{shoe.name}</div>
        <div className="text-gray-500 my-0">{shoe.gender}</div>
        <div className="flex gap-2">
          <span className={"font-bold opacity-90 "}>${shoe.price}</span>
          <span className="font-bold opacity-90 line-through text-gray-500 ">
            {shoe.oldPrice ? `$${shoe.oldPrice}` : null}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ShoeCard;
