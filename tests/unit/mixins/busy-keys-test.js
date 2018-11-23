import EmberObject from '@ember/object';
import BusyKeysMixin from 'bitbird-core-ember-helpers/mixins/busy-keys';
import { module, test } from 'qunit';

module('Unit | Mixin | busy-keys', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let BusyKeysObject = EmberObject.extend(BusyKeysMixin);
    let subject = BusyKeysObject.create();
    assert.ok(subject);
  });
});
