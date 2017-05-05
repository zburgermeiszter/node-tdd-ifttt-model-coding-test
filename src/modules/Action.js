class Action {
  constructor(task) {
    this._task = task;
  }

  perform(payload) {
    return this._task(payload);
  }
}

export default Action