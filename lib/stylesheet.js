import forEach from 'lodash.foreach';

import RulesSet from './rules-set';

export default class Stylesheet {
  constructor () {
    this._rulesSets = [];
  }

  hasUpdated () {
    let hasUpdated = false;

    if (this.updated) {
      this.updated = false;
      hasUpdated = true;
    }

    return hasUpdated;
  }

  createRules (rules) {
    const rulesSet = this.createRulesGet(rules);
    return rulesSet.getRulesMap();
  }

  createRulesGet (rules) {
    const rulesSet = new RulesSet(rules);
    this._rulesSets.push(rulesSet);

    this.updated = true;

    return rulesSet;
  }

  onRemove (id) {
    forEach(this._rulesSets, (rulesSet, key) => {
      if (rulesSet.id === id) {
        this._rulesSets.splice(key, 1);
      }
    });
    this.updated = true;
  }

  update () {
    this.updated = true;
  }

  toString () {
    let css = '';

    forEach(this._rulesSets, (ruleSet) => {
      css += ruleSet.toString();
    });

    return css;
  }
}
