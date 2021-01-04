module.exports = {

    // INITIALIZE TABLE /
        c_table: "CREATE TABLE IF NOT EXISTS clients (client_id int(9) PRIMARY KEY NOT NULL, name varchar(45) DEFAULT NULL, type int(9) DEFAULT NULL, enable bool DEFAULT FALSE, item_id int) ENGINE = InnoDB DEFAULT CHARSET = utf8;",
    // INITIALIZE TABLE //

    
    // GET //
        get_clients: "SELECT * FROM clients",
        get_clients_with_items: "SELECT * FROM clients INNER JOIN items ON item_id = items.item_id",
        get_single_client: "SELECT * FROM clients INNER JOIN items ON items.id = ?",
    // GET //


    // POST //
        add_client: "INSERT INTO clients(name, type, enable) VALUES(?, ?, ?)"
    // POST //
}