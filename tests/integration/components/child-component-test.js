import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('child-component', 'Integration | Component | child component', {
  integration: true
});

test('it renders', function(assert) {
  this.set('item', '1');
  this.set('add', () => {});
  this.render(hbs`{{child-component item=item click=add}}`);

  assert.equal(this.$().text().trim(), '1 add');
});
