import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Search from './components/Search';
import SearchResults from './containers/SearchResultsContainer';
import Vip from './components/Vip';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Search} />
        <Route path="/items" component={SearchResults} />
        <Route path="/items/:id" component={Vip} />
    </Route>
)