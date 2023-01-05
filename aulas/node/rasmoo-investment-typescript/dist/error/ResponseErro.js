"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseErro = void 0;
class ResponseErro extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.ResponseErro = ResponseErro;
