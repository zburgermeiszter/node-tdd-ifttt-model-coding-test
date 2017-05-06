class Trigger {
  constructor(evaluator) {
    this._evaluator = evaluator;
  }

  setActionPerformer(actionPerformer) {
    this._actionPerformer = actionPerformer;
  }

  pull(payload) {
    const evaluation = this._evaluator(payload);
    evaluation && this._actionPerformer(payload);
  }
}

export default Trigger;