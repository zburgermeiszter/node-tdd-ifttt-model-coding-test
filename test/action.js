import Action from '../src/modules/Action';

describe('Action', function() {
  it('Should be performable', function() {
    const action = new Action();
    expect(action).respondTo('perform');
  });

  it('Should perform the given task', function(done) {
    const action = new Action(done);
    action.perform();
  });


});