const server = require("./src/app.js");
const { conn } = require("./src/db.js");

conn.sync({truncate : true}).then(() => {
    server.listen(3000, () => {
        console.log("%s listening at port 3000");
    });
});
