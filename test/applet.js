import Action from '../src/modules/Action';
import Trigger from '../src/modules/Trigger';
import Applet from '../src/modules/Applet';
import deferred from 'deferred';

describe('Applet', function() {
  beforeEach(function() {
    const evaluator = input => 123 === input;
    this.trigger = new Trigger(evaluator);
  });

  describe('Control flow', function() {
    it('Should perform action when trigger condition has been met', function(done) {
      const action = new Action(() => done());
      new Applet(this.trigger, action);
      this.trigger.pull(123);
    });

    it('Should pass the trigger payload to the action executor', function(done) {
      const initialPayload = 123;

      const task = payload => {
        if(initialPayload === payload) {
          return done();
        }
      };

      const action = new Action(task);
      new Applet(this.trigger, action);
      this.trigger.pull(initialPayload);
    });
  });

  describe('Callbacks', function() {
    beforeEach(function() {
      const action = {
        perform: () => {}
      };

      this.trigger.setActionPerformer(action.perform);
      this.applet = new Applet(this.trigger, action);
    });

    it('Should call onExecute callback', function(done) {
      this.applet.onExecute(() => done());
      this.trigger.pull(123);
    });
  });
});