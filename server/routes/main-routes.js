var express = require('express');
var router = express.Router();

const ctrl = {
  clients: require("../controllers/clients.js"),
  items: require("../controllers/items.js"),
  misc: require("../controllers/misc.js"),
}



/*----------  GET  ----------*/

  /* CLIENTS */
    router.get("/clients", ctrl.clients.getAllClients)

/*----------  GET  ----------*/



module.exports = router;
