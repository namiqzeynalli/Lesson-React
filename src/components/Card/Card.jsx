import React, { useRef, useState } from "react";
import Form from "./Form";
import "./Card.css";

const Card = () => {
  const [state, setState] = useState({
    cards: [
      { number: "7653 7553 5693 9862", balance: 100 },
      { number: "7453 9736 0763 3474", balance: 400 },
      { number: "9577 7543 9379 9784", balance: 800 },
    ],
  });

  // const [isEqualState, setIsEqualState] = useState(false);

  const handleCloseCard = (idx) => {
    const clone = state.cards.filter((card, index) => index !== idx);
    setState({ cards: clone });
    // console.log(state.cards);
  };

  const handleOpenCard = (card) => {
    let isEqual = false;
    const array = state.cards;
    const newCardArray = [...array.slice(0, card), card, ...array.slice(card)];
    state.cards.forEach((item) => {
      if (item.number == card.number) {
        isEqual = true;
      }
    });
    if (isEqual) {
      alert("elave olub");
    } else {
      // setState({cards: [card, ...state.cards]})
      setState({ cards: newCardArray });
    }
    // console.log(card);
  };
  console.log(state);

  return (
    <div className="app">
      <Form handleOpenCard={handleOpenCard} />
      {state.cards.map(({ number, balance }, idx) => (
        <div key={number} className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              Карта <br />
              {number}
            </h5>
            <div className="card-text">
              <ul className="list-group">
                <li className="list-group-item">Баланс: {balance}</li>
                <hr />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleCloseCard(idx)}
                >
                  Закрыть карту
                </button>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
