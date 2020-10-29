import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={" "} />
      <p>
        <cite>{item.character}</cite>
      </p>
      <p>
        <quote>{item.quote}</quote>
      </p>
    </div>
  );
};

export default QuoteCard;
