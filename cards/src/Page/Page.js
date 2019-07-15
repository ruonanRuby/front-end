import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import CardList from "./eventCardList/CardList";
import CreateEvent from "./createEvent/CreateEvent";
import SingleCard from './eventCardList/SingleCard';
import { connect } from "./stores";
import "./Page.css";
import { getFlight } from './actionCreators/GetFlight';

export const Pages = {
    CardList: "/",
    SingleCard: "/details",
    CreateEvent: "/new-post"
};
class Page extends React.Component {
    
    componentDidMount() {
        getFlight(this.props.store.dispatch);
    }

    render() {
        const flightsStore = this.props.store.getState().flightsStore;
        if (flightsStore.flights) {
            return (
                <div>
                    <header>
                        <nav className="page">
                            <ul>
                                <li><NavLink to={Pages.CardList} exact
                                    activeClassName="my-active">Home</NavLink></li>
                                <li><NavLink to={{
                                    pathname: `${Pages.CreateEvent}`
                                }}>Create a Post</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <Route path={Pages.CardList} exact render={routeProps => <CardList {...routeProps} {...this.props.store.getState()} dispatch={this.props.store.dispatch} />} />
                    <Route path={Pages.CreateEvent} exact component={CreateEvent} />
                    <Route path={`${Pages.SingleCard}/:id`} exact render={routeProps => <SingleCard {...routeProps} {...this.props.store.getState()} dispatch={this.props.store.dispatch} />} />
                </div>
            );
        } else {
            return (
                <div> loading...</div>
            )
        }
    }
}

export default connect(Page);