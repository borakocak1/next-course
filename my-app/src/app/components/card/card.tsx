
import Image from "next/image";
import "./card.css";

type CardProps = {
  title: string;
  image: string;
};

export default function Card({ title, image }: CardProps) {
  //hooks

  //logic

  //render
  return (
    <div className="home-card">
      <Image
        src={image}
        className="card_image"
        width={150}
        height={30}
        alt="CardImage"
      />
      <h3 className="card_title">{title}</h3>
    </div>
  );
}
