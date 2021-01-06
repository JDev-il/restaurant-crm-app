const jwt = require("jsonwebtoken");
const key = require("../authconfig/key").secret;
const key_gen = require("../authconfig/hash_key");

class clients {

    /* GET */
        static getAllClients(req, res){
            res.send("All Clients will be shown via this path")
        }

        static getSingleClient(req, res){
            // IF USER IS VERIFIED ---CONTINUE TO DB---> //
            res.send("Single client will be shown including relvat items")
        }
    /* GET */


    /* POST */
        static addClient(req, res){
            const token = {
                first_name: req.body.first,
                last_name: req.body.last,
                email: req.body.email,
                authorized: true
            }
            jwt.sign(token, key, {algorithm: "HS256"}, function(err, encoded){
                if(err) {
                    res.sendStatus(401)
                };
                res.send([key, encoded])                  
            })
        }
    /* POST */


    /* PUT */
        static updateClient(req, res){           
            // IF USER IS VERIFIED ---CONTINUE TO DB---> //
            //! ONLY ADMIN WILL BE ALLOWED TO UPDATE
            
            res.send("Update an existing client")
        }
    /* PUT */



}

module.exports = clients;