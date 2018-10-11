import React, { Component } from "react";
//import { Link } from "react-router-dom";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/stocks")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-align-centerg">History</h2>
        {this.state.items.map(item => (
          <div className="card" key={item.id}>
            <div className="card-content grey-text text-darken-3 m">
              <span className="card-title"> {item.ticker} </span>
              <ul>
                <li>Last Price: {item.last_price}</li>
                <li>Change: {item.change}</li>
                <li>Percent Change: {item.percent_change}</li>
                <li>Market Cap: {item.market_cap}</li>
                <li>Market Time: {item.market_time}</li>
                <li>Volume: {item.volume}</li>
                <li className="grey-text">{item.timestamp}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default History;

// {this.state.items.map(item => (
//   <div className="card" key={item.id}>
//     <div className="card-content grey-text text-darken-3 m">
//       <span className="card-title"> {item.ticker} </span>
//       <ul>
//         <li>Last Price: {item.last_price}</li>
//         <li>Change: {item.change}</li>
//         <li>Percent Change: {item.percent_change}</li>
//         <li>Market Cap: {item.market_cap}</li>
//         <li>Market Time: {item.market_time}</li>
//         <li>Volume: {item.volume}</li>
//         <li className="grey-text">{item.timestamp}</li>
//       </ul>
//     </div>
//   </div>
// ))}
