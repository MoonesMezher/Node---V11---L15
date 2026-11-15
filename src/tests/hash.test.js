const hashService = require("../utils/hashService");

/* hashService.hash("abc123ABC@")
    .then(e => {
        console.log(e)
    }) */
// $2b$12$AAKAG4SbrSJxcBVA6aLqyO/YYBZYXxHdcTTdWlrkaAZrNJuV63anC

hashService.compare("abc123ABC@", "$2b$12$AAKAG4SbrSJxcBVA6aLqyO/YYBZYXxHdcTTdWlrkaAZrNJuV63anC")
    .then(e => {
        console.log(e)
    })