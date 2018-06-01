import { connect } from 'react-redux';
import Breadcrumb from '../components/Breadcrumb';

const mapStateToProps = (state) => {
	return {
		mappedSearchState: state.searchState
	}
}

export default connect(mapStateToProps)(Breadcrumb);