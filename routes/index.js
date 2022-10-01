const router = require("express").Router()
const post = require("./post")
const user = require("./user")

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Post 처리
 */
router.use("/post", post)

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User 처리
 */
 router.use("/user", user)

module.exports = router