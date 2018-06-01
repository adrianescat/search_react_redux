import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Item from './Item';
import Loading from './Loading';
import '../styles/SearchResults.css';
import BreadcrumbContainer from '../containers/BreadcrumbContainer';

export default class SearchResults extends Component {

    constructor(props) {
        super(props);

        this.createItemsComponents = this.createItemsComponents.bind(this);
    }

    createItemsComponents(items) {
        let array = [],
            count = items.length;

        for (let i = 0; i < count; i++) {
            array.push(<Item key={items[i].id} data={items[i]}/>);
        }

        return array;
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search).get('search');
        this.props.fetchItems(query);
    }

    render(){
        const query = new URLSearchParams(this.props.location.search).get('search');
        const searchState = this.props.mappedSearchState;
        const items = this.createItemsComponents(searchState.items);
        const categories = searchState.categories;
        return(
            <div>
                <SearchBar static={query}/>
                {!items && searchState.isFetching &&
                    <Loading />
                }

                {!items && items.length <= 0 && !searchState.isFetching &&
                    <p>Inténtelo de nuevo más tarde.</p>
                }

                {items && items.length > 0 && !searchState.isFetching &&
                
                    <div className="results">
                        <BreadcrumbContainer />
                        <div className="list">
                            {items}
                        </div>
                    </div>

                }
            </div>
        );
    }
}