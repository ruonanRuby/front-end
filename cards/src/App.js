import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Page from "./Page/Page.js";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <BrowserRouter>
      <div className = "app">
        <Page />
      </div>
      </BrowserRouter>
    )
  }

  // _getPage(route) {
  //   switch(route.current) {
  //     case Pages.CardList: 
  //       return <CardList params = {route.params} goto = {this._goto.bind(this)} />;
  //     case Pages.SingleCard: 
  //       return <SingleCard params = {route.params} goto = {this._goto.bind(this)} />;
  //     case Pages.CreateEvent:
  //       return <CreateEvent params = {route.params} goto = {this._goto.bind(this)} />;
  //     default: 
  //       return <CardList params  = {route.params} />;
  //   }
  // }

  // _goto(page, params) {
  //   this.setState({
  //     route: {
  //       current: page,
  //       params
  //     }
  //   });
  // }


}

export default App;
