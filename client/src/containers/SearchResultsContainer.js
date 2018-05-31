import { connect } from 'react-redux';
import * as searchActions from '../actions/searchActions';
import SearchResults from '../components/SearchResults';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedSearchState: state.searchState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: (query) => dispatch(searchActions.fetchItems(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);