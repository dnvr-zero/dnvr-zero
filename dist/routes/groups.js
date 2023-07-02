"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _Groups = _interopRequireDefault(require("../models/Groups.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const groupRouter = _express.default.Router();
// const Groups = require('../models/Groups.js')

// Routes
/**
 * @swagger
 * /groups:
 *  get:
 *    tags:
 *      - [groups]
 *    summary: Get all the groups
 *    description: Use this endpoint to request all groups and return an array of JSON objects; No params required
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Request Failed
 * */
groupRouter.get("/", (request, response) => {
  _Groups.default.find().then(resp => response.status(200).json(resp)).catch(err => response.status(400).json("Request Failed"));
});

/**
 * @swagger
 * /groups/{groupId}:
 *  get:
 *    tags:
 *      - [groups/:id]
 *    summary: request a single group
 *    description: If you have a group id,  add it to the endpoint by clicking `Try it out` and adding it in place of `groupId` field below; If you don't have a groupId, try the `GET /groups` endpoint above, and pull a groupId from one of the objects in the response
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *    - name: groupId
 *      in: path
 *      required: true
 *      schema:
 *        type: string
 * */
groupRouter.get("/:id", (request, response) => {
  _Groups.default.findById(request.params.id).then(resp => response.status(200).json(resp)).catch(err => response.status(400).json("Request Failed"));
});

// module.exports = groupRouter
var _default = groupRouter;
exports.default = _default;