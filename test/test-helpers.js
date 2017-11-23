const shouldFulfilled = promise => {
  return {
    then: f => {
      return promise
        .then(value => {
          f.call(promise, value);
        })
        .catch(reason => {
          throw reason;
        });
    }
  };
};

const shouldRejected = promise => {
  return {
    catch: f => {
      return promise
        .then(() => {
          throw new Error(
            'Expected promise to be rejected but it was fulfilled'
          );
        })
        .catch(reason => {
          f.call(promise, reason);
        });
    }
  };
};

module.exports = { shouldFulfilled, shouldRejected };
