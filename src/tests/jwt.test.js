const jwtService = require("../utils/jwtService");

const token = jwtService.sign({ email: "moonesmezher9@gmail.com" })
const decoded = jwtService.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vb25lc21lemhlcjlAZ21haWwuY29tIiwiaWF0IjoxNzk0NzYyNjk4fQ.0D-0tp89oN9C0fxo5y7RcZc4XVroKcec-yYuqrJNQAM")
console.log(decoded)