"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const validateMiddleware = schema => (req, res, next) => {
  const {
    body
  } = req;
  schema.validateAsync(body).then(() => next()).catch(err => {
    console.log(err);
    return res.status(400).json({
      errors: err?.details ?? []
    });
  });
};

var _default = validateMiddleware;
exports.default = _default;