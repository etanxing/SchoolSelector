import { EventEmitter } from 'events';
import Dispatcher from './Dispatcher';
import search_criteria from './config/search_criteria.json';

let _schoolList,
  _searchCriteria = [];

updateFilter();

_schoolList = {
  SA_Primary: require('../data/sa_primary.json')
};

let AppStore = Object.assign({}, EventEmitter.prototype, {
  getSchoolList: function() {
    return _schoolList;
  },
  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on('changed', callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener('changed', callback);
  }
});

// Register callback to handle all updates
Dispatcher.register(function(action) {
  switch(action.actionType) {
    case 'FILTER_UPDATED':
        if (action.data) {
          updateFilter(action.data);
          AppStore.emit('changed');
        }
      break;
    default:
      // no op
  }
});

export default AppStore;

function updateFilter(data) {
  if (!data) {
    //Init
    for (let {props: {id, options:[default_option] = []}, type} of search_criteria) {
      _searchCriteria.push({
        id,
        value: type === 'input' ? '' : default_option
      })
    }
  } else {
    _searchCriteria.find(item=>item.id === data.id).value = data.value;
  }

  console.log('_searchCriteria', _searchCriteria);
}