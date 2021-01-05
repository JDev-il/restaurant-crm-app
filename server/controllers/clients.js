var auth = require("../authconfig/middleWare")
const { sub } = require("../connection/sk")


class clients {

    /* GET */
        static getAllClients(req, res, next){
           if(req.jwtFromRequest("bearer")){
            res.send("All Clients will be shown via this path")
           }

        }

        static getSingleClient(req, res, next){
            res.send("Single client will be shown including relvat items")
        }
    /* GET */

    

    /* POST */
        static addClient(req, res, next){
            res.send("Add a new client")
        }
    /* POST */



    /* PUT */
        static updateClient(req, res, next){
            res.send("Update an existing client")
            // MAJOR AUTHENTICATION NEEDS TO BE PROVIDED PRIOR TO ACTION
        }
    /* PUT */



}

module.exports = clients;