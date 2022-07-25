"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv/config");

var _Routes = _interopRequireDefault(require("./Routes"));

var _Server = _interopRequireDefault(require("./Server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const startServer = (0, _Server.default)(_Routes.default);
var _default = startServer;
exports.default = _default;