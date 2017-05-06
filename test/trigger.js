import Trigger from '../src/modules/Trigger';

describe('Trigger', function() {
  beforeEach(function() {
    const evaluator = input => 555 > input;

    this.trigger = new Trigger(evaluator);
    this.trigger.setActionPerformer(() => this.executionCounter++);

    this.executionCounter = 0;
  });

  it('Should perform the action if the condition has been met', function() {
    this.trigger.pull(123);

    expect(this.executionCounter).to.equal(1);
  });

  it('Should perform the action every time the trigger pulled with a true condition', function() {
    this.trigger.pull(222);
    this.trigger.pull(333);
    this.trigger.pull(444);

    expect(this.executionCounter).to.equal(3);
  });

  it('Should not perform the if the condition has not been met', function() {
    this.trigger.pull(567);

    expect(this.executionCounter).to.equal(0);
  });
});