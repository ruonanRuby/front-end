import React from 'react';
import './App.css';
import CardList from "./eventCardList/CardList";
import CreateEvent from "./createEvent/CreateEvent";
import SingleCard from './eventCardList/SingleCard';

export const Pages = {
  CardList: "list",
  SingleCard: "details",
  CreateEvent: "create"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: {
        current: Pages.CardList,
        params: {}
      }
    };
  }

  render() {
    return (
      <div className = "app">
        {this._getPage(this.state.route)}
      </div>
    )
  }

  _getPage(route) {
    switch(route.current) {
      case Pages.CardList: 
        return <CardList params = {route.params} goto = {this._goto.bind(this)} />;
      case Pages.SingleCard: 
        return <SingleCard params = {route.params} goto = {this._goto.bind(this)} />;
      case Pages.CreateEvent:
        return <CreateEvent params = {route.params} goto = {this._goto.bind(this)} />;
      default: 
        return <CardList params  = {route.params} />;
    }
  }

  _goto(page, params) {
    this.setState({
      route: {
        current: page,
        params
      }
    });
  }


}

export default App;
