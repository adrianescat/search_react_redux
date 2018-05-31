import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
      mappedSearchState: state.searchState
    }
  }

export default connect(mapStateToProps)(App);