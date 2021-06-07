import React, { Component } from 'react'
import './App.css';
import axios from 'axios'


export default class App extends Component {
  state = {
    advice: '',
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { advice } = this.state;

    return (
      <div className="App">
        <div className="row mx-0">
          <div className="col-lg-6 h-100 mx-auto my-auto">
            <div className="py-5 my-5"></div>
            <div className="card">
              <div className="card-body text-center">
                <p className="text-primary lead">{advice}</p>
              </div>
            </div>
          </div>
          <div className="col-12 text-center mt-3 ">
            <button onClick={this.fetchAdvice} className="btn btn-danger text-center text-outline-warning">Give Me Advice</button>
          </div>
        </div>
      </div>
    )
  }
}



