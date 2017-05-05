import Trigger from '../src/modules/Trigger';

describe('Trigger', function() {
  beforeEach(function() {
    const evaluator = input => 123 === input;
    this.trigger = new Trigger(evaluator);
  });

  it('Should return a resolved promise if the condition has been met', function(done) {
    this.trigger.getPromise().then(() => done());
    this.trigger.pull(123);
  });

  it('Should return a rejected promise if the condition has not been met', function(done) {
    this.trigger.getPromise().catch(() => done());
    this.trigger.pull(456);
  });
});