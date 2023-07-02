"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// const mongoose = require("mongoose")

const TaskSchema = _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    require: false
  },
  description: {
    type: String,
    required: false
  },
  points: {
    type: String,
    required: false
  }
}, {
  // options that apply to all records
  timestamps: true,
  versionKey: false
});

// module.exports = mongoose.model("Tasks", TaskSchema)
var _default = _mongoose.default.model("Tasks", TaskSchema);
exports.default = _default;