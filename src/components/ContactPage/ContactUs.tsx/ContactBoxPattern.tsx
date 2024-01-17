interface ContactBoxPatternProps {
  image: string;
  title: string;
  description: string;
  times?: string;
  days?: string;
}

function ContactBoxPattern({
  image,
  title,
  description,
  times,
  days,
}: ContactBoxPatternProps) {
  return (
    <div className="m-4 mt-14 flex items-center md:flex-col">
      <div className="flex justify-center">
        <img
          className=" aspect-square w-28 object-fill  "
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-2  font-bold opacity-80 md:items-center">
        <h3 className=" md:whitespace-nowrap">{title}</h3>
        <span className=" md:whitespace-nowrap">{description}</span>
        <span>{times}</span>
        <span>{days}</span>
      </div>
    </div>
  );
}

export default ContactBoxPattern;
