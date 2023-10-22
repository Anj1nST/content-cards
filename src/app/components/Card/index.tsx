import Image, { StaticImageData } from "next/image";
import React from "react";

import "./styles.scss";

import LocationIcon from "../LocationIcon";

interface ICard {
  img: StaticImageData;
  title: string;
  name: string;
  price: string;
  tags: string[];
  location: string;
}

const Card: React.FC<ICard> = ({ img, title, name, price, tags, location }) => {
  return (
    <div className="card-container">
      <div className="card-imageContainer">
        <Image src={img} alt={`${title}-image`} />
      </div>
      <div className="card-contentContainer">
        <h3 className="card-title">{title}</h3>
        <div className="card-nameContainer">
          <h3 className="card-name">
            <b>{name}</b>
          </h3>
          <h3 className="card-price">
            <b>{price}</b>
          </h3>
        </div>
        <ul className="card-tags">
          {tags.map((tag: string) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
        <div className="card-location">
          <LocationIcon />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
