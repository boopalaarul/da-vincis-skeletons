//make a copy of this file and name it "db_login.js", then fill in the blanks
//on that file: it will both be accessible to rest of app, AND remain outside
//of version control(thanks to .gitignore)
const Pool = require('pg').Pool
const pool = new Pool({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 
})

module.exports = pool;
