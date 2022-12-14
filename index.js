//express 모듈 불러오기
const express = require("express")
const api = require("./routes")
const swaggerUi = require('swagger-ui-express');
const port = 3000

//express 사용
const app = express()

//Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", api)

const specs = require("./config/swagger")

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))

/**
 * 파라미터 변수 뜻
 * req : request 요청
 * res : response 응답
 */

/**
 * @path {GET} http://localhost:3000/
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */
app.get("/", (req, res) => {
  //Hello World 데이터 반환
  res.send("Hello World")
})

// http listen port 생성 서버 실행
app.listen(port, () => console.log("nodeJs Succesful, port = "+port))