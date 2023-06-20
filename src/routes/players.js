import express from "express"

const playerRouter = express.Router()
const Players = require("../models/Players")

// Routes
/**
 * @swagger
 * /player:
 *  get:
 *    tags:
 *      - [player]
 *    summary: Get all the players
 *    description: Use this endpoint to request all players and return an array of JSON objects; No params required
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Request Failed
 * */
playerRouter.get("/", (request, response) => {
    Players.find()
        .then((resp) => response.status(200).json(resp))
        .catch((err) => response.status(400).json("Request Failed"))
})

/**
 * @swagger
 * /player:
 *  post:
 *    tags:
 *      - [player]
 *    summary: Add a player to the database
 *    description: Use this endpoint to create a new player; be sure to pass at minimum the name of the new player as JSON in the body of the request. You can also pass description, points, and createdby. All arguments should be strings. Don't forget to use double quotes when writing JSON.
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/PlayerItem'
 *    responses:
 *      '201':
 *        description: player successfully created
 *      '400':
 *        description: Missing required field
 * */
playerRouter.post("/", (request, response) => {
    const { username, level, all_time_score, group_id } = request.body
    const player = new Players({
        name,
        createdby,
        description,
        points,
    })
    player.save()
        .then((resp) => response.status(201).json(resp))
        .catch((err) => response.status(400).json("Request Failed"))
})

module.exports = playerRouter