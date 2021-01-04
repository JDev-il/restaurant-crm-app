

class items {

    /* GET */    
        static getAllItems(req, res, next){
            res.send("All items will be shown via this path")
        }

        static getSingleItem(req, res, next){
            res.send("Single item will be shown ***including all clients related to it (?)")
        }
    /* GET */



    /* POST */
        static addItem(req, res, next){
            res.send("Add a new item")
        }
    /* POST */



    /* PUT */
        static updateAnItem(req, res, next){
            res.send("Update an existing item")
        }
    /* PUT */


}

module.exports = items;