import {connect} from 'react-redux';
import {addTd, deleteTd, updateTd, requestRss, submit} from '../actions';
import getRssColor from '../selectors/get-rss-color.js';
import App from '../components/app';

function makeMapStateToProps() {
  return state => {
    return {
      tds: state.tds.array,
      rssColor: getRssColor(state),
      isSubmitDisabled: state.tds.array.length === 0,
      isSubmitting: state.isSubmitting
    };
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => {
      dispatch(addTd({title: '', description: ''}));
    },
    onRss: url => {
      dispatch(requestRss(url));
    },
    onDelete: id => {
      dispatch(deleteTd(id));
    },
    onSubmit: id => {
      dispatch(submit());
    },
    onTextLoseFocus: td => {
      dispatch(updateTd(td));
    } 
  };
}

const AppContainer = connect(makeMapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
