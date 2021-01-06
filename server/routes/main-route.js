var express = require('express');
var router = express.Router();
var jwtFunctions = {
  sign: require("../authconfig/jwtConfig").sign,
  verify: require("../authconfig/jwtConfig").authenticateToken
} 


const ctrl = {
  clients: require("../controllers/clients.js"),
  items: require("../controllers/items.js"),
  misc: require("../controllers/misc.js"),
}


/*----------  GET  ----------*/

  /* Clients */
    router.get("/clients", ctrl.clients.getAllClients)
    router.get("/clients/:id", jwtFunctions.verify, ctrl.clients.getSingleClient)
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
    router.put("/clients/update/:id", jwtFunctions.verify, ctrl.clients.updateClient)
  /* Clients */

  /* Items */
    router.put("/items/update/:id", ctrl.items.updateAnItem)
  /* Items */

/*----------  PUT  ----------*/




module.exports = router;