import { Shoe } from "./interfaceShoe";

type ShoeCardProps = {
  shoe: Shoe;
  key?: string | number;
  children?: React.ReactNode;
  favorite?: React.ReactNode;
};

const ShoeCard: React.FC<ShoeCardProps> = ({
  shoe,
  key,
  children,
  favorite,
}) => {
  return (
    <div key={key} className="mb-10 flex  flex-col">
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
        <div className="my-2 font-bold opacity-90">{shoe.name}</div>
        <div className="my-0 text-gray-500">{shoe.gender}</div>
        <div className="flex gap-2">
          <span className={"font-bold opacity-90 "}>${shoe.price}</span>
          <span className="font-bold text-gray-500 line-through opacity-90 ">
            {shoe.oldPrice ? `$${shoe.oldPrice}` : null}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ShoeCard;
