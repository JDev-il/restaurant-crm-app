var mysql = require('mysql');

var q = {
  items: require("./queries/items"),
  clients: require("./queries/clients"),
  misc: require("./queries/misc")
}

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restaurant-crm"
});

con.connect(function(err) {
  if (err){
    throw err.stack;
  }  
  con.query(q.items.c_table)
  con.query(q.clients.c_table)
  con.query(q.misc.c_table)
});