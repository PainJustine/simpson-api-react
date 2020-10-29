import React from "react";
import QuoteCard from "./components/QuoteCard";
import Navbar from "./components/Navbar";
import axios from "axios";

const singleQuote = {
  quote:
    "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection: "Left",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: singleQuote,
    };
    this.newQuote = this.newQuote.bind(this);
  }
  newQuote() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes/")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ item: data[0] });
      });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="QuoteCard">
            <QuoteCard item={this.state.item} />
          </div>
          <button type="button" onClick={this.newQuote}>
            Click for a new quote !
          </button>
        </div>
      </div>
    );
  }
}

export default App;
