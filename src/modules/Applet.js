class Applet {
  constructor(trigger, action) {
    trigger.setActionPerformer(payload => {
        action.perform(payload);
        this._onExecute && this._onExecute(payload);
      });
  }

  onExecute(callback) {
    this._onExecute = callback;
  }

}

export default Applet