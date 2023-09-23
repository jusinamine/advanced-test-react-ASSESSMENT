import React from "react";
import "./styles/itemCard.css";

interface ItemCardProps {
  name: string;
  description: string;
  image: string;
  id: number;
}

const ItemCard: React.FC<ItemCardProps> = ({
  name,
  description,
  image,
  id,
}) => {
  return (
    <div className="item-box">
      <img src={image} alt={name} />
      <div className="title">{"#" + id + " " + name}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default ItemCard;
