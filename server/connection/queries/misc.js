module.exports = {
    
    // INITIALIZE TABLE //
        c_table: "CREATE TABLE IF NOT EXISTS misc (misc_id int, name varchar(45), enable bool DEFAULT FALSE, client_id int) ENGINE = InnoDB DEFAULT CHARSET = utf8;",
    // INITIALIZE TABLE //


    // GET //
        get_misc: "SELECT * FROM misc INNER JOIN clients ON clients.id = clients.client_id",
    // GET //


    // POST //
        add_misc: "INSERT INTO misc(name, enable) VALUES(?, true)"
    // POST //
    
}