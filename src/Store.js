import { EventEmitter } from 'events';
import Dispatcher from './Dispatcher';
import search_criteria from './config/search_criteria.json';

let _schoolList,
  _searchCriteria = new Map();

class Filter {
  constructor(criterion) {
    this.id = criterion.props.id;
    this.value = criterion.type === 'input' ? '' : getDropdownDefaultValue();
    this._criterion = criterion;

    function getDropdownDefaultValue() {
      if (criterion.props.addAll) {
        return criterion.props.addAllOption || 'All';
      }

      return criterion.props.options[0];
    }
  }
  validate(item) {
    if (this._criterion.type === 'input') {
      return this._validateInput(item);
    } else if (this._criterion.type === 'dropdown') {
      return this._validateDropdown(item);
    }
  }

  _validateInput(item) {
    let {isMatch, isCompare, rules, field} = this._criterion;

    if (this.value !=='' && isMatch) {
      for (let {position} of rules.filter(byRuletype('match'))) {
        if (position === 'any') {
          if (item[field].toLowerCase().indexOf(this.value.toLowerCase()) === -1) {
            return false;
          }
        }
      }
    }

    if (this.value !=='' && isCompare) {
      for (let {operator} of rules.filter(byRuletype('compare'))) {
        if (!eval('item[field]' + operator + 'this.value ')) {
          return false;
        }
      }
    }

    return true;
  }

  _validateDropdown(item) {
    let match = item[this._criterion.field].toLowerCase() === this.value.toLowerCase();

    if (match) return true;

    if (this.value === 'All' || this.value === this._criterion.props.addAllOption) return true;

    if (this._criterion.props.id === 'school-type' && item[this._criterion.field].toLowerCase() === 'combined') return true;

    if (this._criterion.props.id === 'school-location') return true;

    return false;
  }
}

updateFilter();

_schoolList = {
  SA_Schools: combine(require('../data/sa_primary.json').items, require('../data/sa_secondary.json').items)
};

let AppStore = Object.assign({}, EventEmitter.prototype, {
  getSchoolList: function() {
    return _schoolList.SA_Schools.filter(bySearchCriteria).sort(byAverageTtotal());
  },

  getSchoolTypeField: function() {
    return _searchCriteria.get('school-type').value.toLowerCase() === 'primary' ? 'average_total_primary' : 'average_total';
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

function byRuletype(type) {
  return function (rule) {
    return rule.type === type;
  }
}

function updateFilter(data) {
  if (!data) {
    //Init
    for (let criterion of search_criteria) {
      _searchCriteria.set(criterion.props.id, new Filter(criterion));
    }
  } else {
    _searchCriteria.get(data.id).value = data.value;
  }

  //console.log('_searchCriteria', _searchCriteria);
}

function bySearchCriteria(item) {
  for (let criterion of _searchCriteria.values()) {
    if (!criterion.validate.call(criterion, item)) return false
  }

  return true;
}

function byAverageTtotal() {
  let field = AppStore.getSchoolTypeField();

  return function(itemA, itemB) {
    if (itemA[field] > itemB[field]) {
      return -1;
    }
    if (itemA[field] < itemB[field]) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
}

function combine(list, ...lists) {
  if (lists.length > 0) lists.forEach(list=>list.forEach(insert));
  return list;
  function insert(item) {
    if (!list.find(it=>it.id === item.id)) {
      list.push(item);
    }
  }
}