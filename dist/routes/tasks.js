"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _Tasks = _interopRequireDefault(require("../models/Tasks.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
// const Tasks = require("../models/Tasks.js")

// Routes
/**
 * @swagger
 * /tasks:
 *  get:
 *    tags:
 *      - [tasks]
 *    summary: Get all the tasks
 *    description: Use this endpoint to request all tasks and return an array of JSON objects; No params required
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Request Failed
 * */
router.get("/", (request, response) => {
  _Tasks.default.find().then(resp => response.status(200).json({
    data: resp,
    error: null
  })).catch(err => response.status(400).json("Request Failed"));
});

/**
 * @swagger
 * /tasks:
 *  post:
 *    tags:
 *      - [tasks]
 *    summary: Add a task to the database
 *    description: Use this endpoint to create a new task; be sure to pass at minimum the name of the new task as JSON in the body of the request. You can also pass description, points, and createdby. All arguments should be strings. Don't forget to use double quotes when writing JSON.
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/TaskItem'
 *    responses:
 *      '201':
 *        description: Task successfully created
 *      '400':
 *        description: Missing required field
 * */
router.post("/", (request, response) => {
  const {
    name,
    description,
    points,
    createdBy
  } = request.body;
  const task = new _Tasks.default({
    name,
    createdBy,
    description,
    points
  });
  task.save().then(resp => response.status(201).json(resp)).catch(err => response.status(400).json("Request Failed"));
});

/**
 * @swagger
 * /tasks/{taskId}:
 *  get:
 *    tags:
 *      - [tasks/:id]
 *    summary: request a single task
 *    description: If you have a task id,  add it to the endpoint by clicking `Try it out` and adding it in place of `taskId` below; If you don't have a taskId, try the `GET /tasks` endpoint above, and pull a taskId from one of the objects in the response
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *    - name: taskId
 *      in: path
 *      required: true
 *      schema:
 *        type: string
 * */
router.get("/:id", (request, response) => {
  _Tasks.default.findById(request.params.id).then(resp => response.status(200).json(resp)).catch(err => response.status(400).json("Request Failed"));
});

/**
 * @swagger
 * /tasks/{taskId}:
 *  patch:
 *    tags:
 *      - [tasks/:id]
 *    summary: Update one of the fields for a specific task
 *    description: If something isn't right in one of the fields of a task, click `Try it out` below and replace `taskId` with the actual id of a task; Be sure to pass in any information that needs to be updated as JSON in the body of the request; Don't forget to use double quotes when writing JSON
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/TaskItem'
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Request Failed
 *    parameters:
 *    - name: taskId
 *      in: path
 *      required: true
 *      schema:
 *        type: string
 * */
router.patch("/:id", (request, response) => {
  _Tasks.default.updateOne({
    _id: request.params.id
  }, {
    $set: request.body
  }).then(resp => response.status(200).json(resp)).catch(err => response.status(400).json("Request Failed"));
});

/**
 * @swagger
 * /tasks/{taskId}:
 *  delete:
 *    tags:
 *      - [tasks/:id]
 *    summary: Use this endpoint to delete a single task
 *    description: if you have a task id, then include it in the http request, and it will be removed from the database; no params required
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Request Failed
 *    parameters:
 *    - name: taskId
 *      in: path
 *      required: true
 *      schema:
 *        type: string
 * */
router.delete("/:id", (request, response) => {
  _Tasks.default.deleteOne({
    _id: request.params.id
  }).then(resp => response.status(200).json(resp)).catch(err => response.status(400).json("Request Failed"));
});

// module.exports = router
var _default = router;
exports.default = _default;