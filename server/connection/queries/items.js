module.exports = {

    // INITIALIZE TABLE //
        c_table: "CREATE TABLE IF NOT EXISTS items (item_id int PRIMARY KEY NOT NULL, name varchar(45) DEFAULT NULL, cat_num int DEFAULT NULL, price int, has_vat bool DEFAULT TRUE, enable bool DEFAULT FALSE, client_id int) ENGINE = InnoDB DEFAULT CHARSET = utf8;",
    // INITIALIZE TABLE //


    // GET //
        get_items: "SELECT * FROM items",
        get_items_with_clients: "SELECT * FROM items INNER JOIN items ON client_id = clients.client_id",
        get_single_item: "SELECT * FROM items INNER JOIN clients ON client.id = clienst.client_id?",
    // GET //


    // POST //
        add_item: "INSERT INTO items(name, cat_num, price, has_vat, enable) VALUES(?, ?, ?, ?, ?)"
    // POST //
}