const jwt = require("jsonwebtoken")

function decodeJWT(token){

    const decoded = jwt.verify(token , process.env.JWT_SECRET)
    console.log(decoded);
    return decoded


    // decodeJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhqaGpoamgiLCJlbWFpbCI6ImpoakBhYS5jb20iLCJpZCI6IjY2MjIzODNmY2Y4MTZiZTgxODNlYTdlOSIsImlhdCI6MTcxMzUxODY1NX0.cAQOktZFlG018oB1ug3yPW3jm8ccaZmTmatnxniIajw")


}


module.exports = decodeJWT