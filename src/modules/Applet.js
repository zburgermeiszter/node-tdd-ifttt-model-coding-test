class Applet {
  constructor(trigger, action) {
    trigger.getPromise()
      .then(payload => {
        action.perform(payload);
        this._onExecute && this._onExecute(payload);
      })
      .catch(() => {
        this._onSkip && this._onSkip();
      });
  }

  onExecute(callback) {
    this._onExecute = callback;
  }

  onSkip(callback) {
    this._onSkip = callback;
  }
}

export default Applet