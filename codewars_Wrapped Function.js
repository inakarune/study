Function.prototype.wrap = function (fn) {
  return fn.bind(this, this);
};
