import React from "react";
import CardViewCustom from "../components/cart/CardView";

export const mapCardsView = (cards) => {
  let data = [];
  cards.map((card) => {
    data = [
      ...data,
      {
        view: <CardViewCustom card={card} />,
      },
    ];
  });
  return data;
};
