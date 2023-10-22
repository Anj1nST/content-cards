import React from "react";

import Card from "./components/Card";
import "./styles.scss";

import veggies from "../../public/images/productImage.png";
import pepper from "../../public/images/pepper.jpg";
import sunflower from "../../public/images/sunflower.jpg";

const App = () => {
  const cards = [
    {
      id: 1,
      img: veggies,
      title: "Extra fresh fruits and vegetables",
      name: "Apples, bananas, berries, citrus fruits like oranges and lemons",
      price: "3.90",
      tags: ["Fresh", "Healthy food"],
      location: "Newport Beach, CA, USA",
    },
    {
      id: 2,
      img: pepper,
      title:
        "Extra fresh fruits and vegetables Extra fresh fruits and vegetables Extra fresh fruits and vegetables",
      name: "Apples, bananas, berries, citrus fruits like oranges and lemons Apples, bananas, berries, citrus fruits like oranges and lemons Apples, bananas, berries, citrus fruits like oranges and lemons Apples, bananas, berries, citrus fruits like oranges and lemons Apples, bananas, berries, citrus fruits like oranges and lemons Apples, bananas, berries, citrus fruits like oranges and lemons Apples, bananas, berries, citrus fruits like oranges and lemons Apples, bananas, berries, citrus fruits like oranges and lemons Apples, bananas, berries, citrus fruits like oranges and lemons",
      price: "99999.99",
      tags: [
        "Fresh",
        "Healthy food",
        "Healthy food",
        "Healthy food",
        "Healthy food",
        "Healthy food",
        "Healthy food",
        "Healthy food",
      ],
      location:
        "Newport Beach, CA, USA Newport Beach, CA, USA Newport Beach, CA, USA Newport Beach, CA, USA",
    },
    {
      id: 3,
      img: sunflower,
      title: "Extra fresh fruits and vegetables",
      name: "Apples, bananas, berries, citrus fruits like oranges and lemons",
      price: "3.90",
      tags: ["Fresh", "Healthy food"],
      location: "Newport Beach, CA, USA",
    },
  ];

  return (
    <div className="app-cardsContainer">
      {cards?.length &&
        cards.map((card) => {
          const { id, img, title, name, price, tags, location } = card;
          return (
            <Card
              key={id}
              img={img}
              title={title}
              name={name}
              price={price}
              tags={tags}
              location={location}
            />
          );
        })}
    </div>
  );
};

export default App;
