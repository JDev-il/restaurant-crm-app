var express = require('express');
const { verify } = require('jsonwebtoken');
var router = express.Router();

const ctrl = {
  clients: require("../controllers/clients.js"),
  items: require("../controllers/items.js"),
  misc: require("../controllers/misc.js"),
}



/*----------  GET  ----------*/

  /* Clients */
    router.get("/clients", verify, ctrl.clients.getAllClients)
    router.get("/clients/:id", ctrl.clients.getSingleClient)
  /* Clients */

  /* Items */
    router.get("/items", ctrl.items.getAllItems)
    router.get("/items/:id", ctrl.items.getSingleItem)
  /* Items */

/*----------  GET  ----------*/



/*----------  POST  ----------*/

  /* Clients */
    router.post("/clients/add", ctrl.clients.addClient)
  /* Clients */

  /* Items */
    router.post("/items/add", ctrl.items.addItem)
  /* Items */

/*----------  POST  ----------*/



/*---------- PUT  ----------*/

  /* Clients */
    router.put("/clients/update", ctrl.clients.updateClient)
  /* Clients */

  /* Items */
    router.put("/items/update", ctrl.items.updateAnItem)
  /* Items */

/*----------  PUT  ----------*/




module.exports = router;