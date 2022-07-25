"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const config = () => ({
  port: process.env.APP_PORT || 8080,
  database: {
    uri: process.env.APP_DATABASE_URL,
    options: {}
  }
});

var _default = config;
exports.default = _default;