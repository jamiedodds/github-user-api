import React, { Component } from "react";

const urlForUsername = username => `https://api.github.com/users/${username}`;

class GitHub extends Component {
  // as async stops errors at initial load
  constructor(props) {
    super(props);
    this.state = {
      // fails to find a user, false is default
      requestFailed: false
    };
  }
  // getting the json api
  componentDidMount() {
    fetch(urlForUsername(this.props.username))
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed");
        }

        return response;
      })
      .then(d => d.json())
      .then(
        d => {
          this.setState({
            githubData: d
          });
        },
        () => {
          this.setState({
            requestFailed: true
          });
        }
      );
  }
  render() {
    // if no data
    if (this.state.requestFailed) return <p>No user found</p>;
    if (!this.state.githubData) return <p>Loading...</p>;
    return (
      <div>
        <h2>{this.state.githubData.name}</h2>
        <p>{this.state.githubData.bio}</p>
      </div>
    );
  }
}

export default GitHub;
