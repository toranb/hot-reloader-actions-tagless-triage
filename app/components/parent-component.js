import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.count = 2;
    this.items = [1, 2];
  },
  state: computed('count', function() {
    return get(this, 'items');
  }),
  actions: {
    add() {
      const count = get(this, 'count');
      const items = get(this, 'items');
      items.push(count + 1);
      set(this, 'count', count + 1);
    }
  }
});
