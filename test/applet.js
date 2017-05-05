import Action from '../src/modules/Action';
import Trigger from '../src/modules/Trigger';
import Applet from '../src/modules/Applet';
import deferred from 'deferred';

describe('Applet', function() {
  describe('Control flow', function() {
    beforeEach(function() {
      const evaluator = input => 123 === input;
      this.trigger = new Trigger(evaluator);
    });

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
      this.def = deferred();

      const trigger = {
        getPromise: () => this.def.promise
      };

      const action = {
        perform: () => {}
      };

      this.applet = new Applet(trigger, action);
    });

    it('Should call onExecute callback', function(done) {
      this.applet.onExecute(done);
      this.def.resolve();
    });

    it('Should call onSkip callback', function(done) {
      this.applet.onSkip(done);
      this.def.reject();
    });
  });
});