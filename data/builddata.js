'use strict';

const fs = require('fs');

['sa','nsw', 'act', 'vic','wa','qld','nt','tas'].forEach(writeFile);

function writeFile(state) {
  let primary = require('./' + state + '_primary.json');
  let secondary = require('./' + state + '_secondary.json');

  primary.items.forEach(injectRank('p_'));
  secondary.items.forEach(injectRank('s_'));

  merge(primary.items, secondary.items);

  fs.writeFile('./data/' + state + '_schools.json', JSON.stringify(primary.items, null, '    '), (err) => {
    if (err) throw err;
    console.log(state + '_schools.json updated!');
  });
}

function injectRank(prefix) {
  return function(item, index) {
    item[prefix + 'index'] = index + 1;
  }
}

function merge(p, s) {
  s.forEach(function(item) {
    let ps = p.find(it=>it.id === item.id);
    if (!ps) {
      item.p_index = -1;
      p.push(item);
    } else {
        ps.s_index = item.s_index;
    }
  })
}