const {query} = require("../util/db");

const getAllUsers = ()=>{
    const sql = "select * from blog_users";
    return query(sql);
}

module.exports={
    getAllUsers
}
