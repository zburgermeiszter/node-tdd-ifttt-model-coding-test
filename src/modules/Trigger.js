import deferred from 'deferred';

class Trigger {
  constructor(evaluator) {
    this._evaluator = evaluator;
    this._deferred = deferred();
  }

  getPromise() {
    return this._deferred.promise;
  }

  pull(payload) {
      const evaluation = this._evaluator(payload);

      if(evaluation) {
        return this._deferred.resolve(payload);
      }

      return this._deferred.reject();
  }
}

export default Trigger;