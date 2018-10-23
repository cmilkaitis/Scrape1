import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            items: [...new Set(result.map(x => x.timestamp))]
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
        <h2 className="center">History</h2>
        {this.state.items.map((item, i) => (
          <Link to={"/scrape/" + item} key={i}>
            <div className="card">
              <span className="card-title">{item}</span>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default History;
