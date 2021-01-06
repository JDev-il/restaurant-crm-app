class User 
{
    constructor(props){
        this._first_name = props.first_name;
        this._last_name = props.last_name;
        this._email = props.email,
        this._password = props.password
    }
}

module.exports = User