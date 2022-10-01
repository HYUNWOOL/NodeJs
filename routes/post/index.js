const router = require("express").Router()
const postController = require("./post.controller")
/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: 게시글 처리
 * definitions:
 *   Post:
 *     type: "object"
 *     properties:
 *       title:
 *         type: "string"
 *       description:
 *         type: "string"
 *       writer:
 *         type: "string"
 *       category:
 *         type: "string"
 *       price:
 *         type: "integer"
 *         format: "int64"
 *       state:
 *         type: "integer"
 *         format: "int64"
 *       images:
 *         type: "array"
 *         items:
 *           type: "string"
*/

/**
 * @swagger
 * paths:
 *  /api/post/posts:
 *    get:
 *      summary: "데이터 전체조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [Posts]
 *      responses:
 *        "200":
 *          description: 전체 글 정보
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    ok:
 *                      type: boolean
 *                    posts:
 *                      type: object
 *                      example:
 *                          [
 *                            { "id": 1, "name": "글" },
 *                            { "id": 2, "name": "글" },
 *                            { "id": 3, "name": "글" },
 *                          ]
 */
 router.get("/posts", postController.getPosts)
/**
 * @swagger
 *
 * /api/post/add:
 *  post:
 *     description: 게시물 생성
 *     tags: [Posts]
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "body"
 *       in: "body"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/Post"
 *     responses:
 *       "200":
 *         description: "successful operation"
 */
 router.post("/add", postController.createPost)
 module.exports = router
